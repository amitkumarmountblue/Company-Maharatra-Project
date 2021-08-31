const csv = require("csv-parser");
const fs = require("fs");
const {
  authorizeCap,
  dateOfRegistration,
  registrationPrincipalBusiness,
  registrationIndustrialClass,
} = require("./problem");
const maharastraData = [];

fs.createReadStream("../Data/Maharastra.csv")
  .pipe(csv({}))
  .on("data", (data) => maharastraData.push(data))
  .on("end", () => {
    const cap = authorizeCap(maharastraData);
    const registration = dateOfRegistration(maharastraData);
    const registrationPBA = registrationPrincipalBusiness(maharastraData);
    const registrationIC = registrationIndustrialClass(maharastraData);

    function dumpData(data, file) {
      fs.writeFile(file, JSON.stringify(data, null, 2), function (err) {
        if (err) {
          return console.log(err);
        }
      });
    }
    dumpData(cap, "../public/Output/authorized_cap.json");
    dumpData(registration, "../public/Output/date_of_registration.json");
    dumpData(
      registrationPBA,
      "../public/Output/resgistration_Principal_Business.json"
    );
    dumpData(registrationIC, "../public/Output/registration_industrial_class.json");
  });
