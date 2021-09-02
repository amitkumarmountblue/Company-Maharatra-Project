function authorizeCap(maharastraData) {
  const result = {};
  let key;
  maharastraData.forEach((data) => {
    data.AUTHORIZED_CAP > 0 && data.AUTHORIZED_CAP < 100000
      ? (key = "<1L")
      : data.AUTHORIZED_CAP < 1000000
      ? (key = "1L to 10L")
      : data.AUTHORIZED_CAP < 10000000
      ? (key = "10L to 1Cr")
      : data.AUTHORIZED_CAP < 1000000000
      ? (key = "10Cr to 100Cr")
      : (key = "More than 100Cr");

    key in result ? (result[key] += 1) : (result[key] = 1);
  });
  return result;
}

function dateOfRegistration(maharastraData) {
  const result = {};
  maharastraData.forEach((data) => {
    let year = data.DATE_OF_REGISTRATION.slice(-2);
    year >= 00 && year < 22
      ? (year = "20" + year)
      : year <= 99
      ? (year = "19" + year)
      : year;

    year in result ? (result[year] += 1) : (result[year] = 1);
  });
  return result;
}

function registrationPrincipalBusiness(maharastraData) {
  let result = {};

  maharastraData
    .filter((data) => data.DATE_OF_REGISTRATION.slice(-2) == "15")
    .forEach((data) => {
      const type = data.PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN;
      type in result ? (result[type] += 1) : (result[type] = 1);
    });

  result = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([PRINCIPAL_BUSINESS_ACTIVITY, Number]) => ({
      PRINCIPAL_BUSINESS_ACTIVITY,
      Number,
    }));

  return result;
}

function registrationIndustrialClass(maharastraData) {
  let result = {};
  maharastraData.forEach((data) => {
    data.Industrial_Class in result
      ? (result[data.Industrial_Class] += 1)
      : (result[data.Industrial_Class] = 1);
  });
  result = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([Industrial_Class, Number]) => ({
      Industrial_Class,
      Number,
    }));

  return result;
}

module.exports.authorizeCap = authorizeCap;
module.exports.dateOfRegistration = dateOfRegistration;
module.exports.registrationPrincipalBusiness = registrationPrincipalBusiness;
module.exports.registrationIndustrialClass = registrationIndustrialClass;