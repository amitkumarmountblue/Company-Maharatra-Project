function authorizeCap(maharastraData) {
  const result = {};
  let key;
  maharastraData.forEach((data) => {
    if (data.AUTHORIZED_CAP > 0 && data.AUTHORIZED_CAP < 100000) {
      key = "< 1L";
    } else if (data.AUTHORIZED_CAP < 1000000) {
      key = "1L to 10L";
    } else if (data.AUTHORIZED_CAP < 10000000) {
      key = "10L to 1Cr";
    } else if (data.AUTHORIZED_CAP < 1000000000) {
      key = "10Cr to 100Cr";
    } else {
      key = "More than 100Cr";
    }
    if (key in result) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  });
  return result;
}

function dateOfRegistration(maharastraData) {
  const result = {};
  maharastraData.forEach((data) => {
    let date = data.DATE_OF_REGISTRATION;
    let year = date.slice(-2);
    if (year >= 00 && year < 22) {
      year = "20" + year;
    } else if (year <= 99) {
      year = "19" + year;
    } else {
      year = year;
    }
    if (year in result) {
      result[year] += 1;
    } else {
      result[year] = 1;
    }
  });
  return result;
}

function registrationPrincipalBusiness(maharastraData) {
  let result = {};
  maharastraData.forEach((data) => {
    const date = data.DATE_OF_REGISTRATION;
    const year = date.slice(-2);
    if (year == "15") {
      const type = data.PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN;
      if (type in result) {
        result[type] += 1;
      } else {
        result[type] = 1;
      }
    }
  });
  result = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
  // const output = result.map(([PRINCIPAL_BUSINESS_ACTIVITY, Number]) => ({
  //   PRINCIPAL_BUSINESS_ACTIVITY,
  //   Number,
  // }));

  return result;
}

function registrationIndustrialClass(maharastraData) {
  let result = {};
  maharastraData.forEach((data) => {
    const industrialClass = data.Industrial_Class;
    if (industrialClass in result) {
      result[industrialClass] += 1;
    } else {
      result[industrialClass] = 1;
    }
  });
  result = Object.entries(result)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  // const output = result.map(([Industrial_Class, Number]) => ({
  //   Industrial_Class,
  //   Number,
  // }));

  return result;
}

module.exports.authorizeCap = authorizeCap;
module.exports.dateOfRegistration = dateOfRegistration;
module.exports.registrationPrincipalBusiness = registrationPrincipalBusiness;
module.exports.registrationIndustrialClass = registrationIndustrialClass;
