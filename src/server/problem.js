function authorizeCap(maharastraData){
    const result={};
    let key;
    for(data of maharastraData){
        if(data.AUTHORIZED_CAP > 0 && data.AUTHORIZED_CAP<100000){
            key= 1;
            if(key in result){
                result[key]+=1;
            }else{
                result[key]=1;
            }
        }else if(data.AUTHORIZED_CAP >= 100000 && data.AUTHORIZED_CAP < 1000000){
            key= 2;
            if(key in result){
                result[key]+=1;
            }else{
                result[key]=1;
            }
        }else if(data.AUTHORIZED_CAP >= 1000000 && data.AUTHORIZED_CAP < 10000000){
            key= 3;
            if(key in result){
                result[key]+=1;
            }else{
                result[key]=1;
            }
        }else if(data.AUTHORIZED_CAP >= 100000000 && data.AUTHORIZED_CAP < 1000000000){
            key= 4;
            if(key in result){
                result[key]+=1;
            }else{
                result[key]=1;
            }
        }else{
            key = 5;
            if(key in result){
                result[key]+=1;
            }else{
                result[key]=1;
            }
        }
    }
    return result;
}


function dateOfRegistration(maharastraData){
    const result={};
    for(let data of maharastraData){
        const date=data.DATE_OF_REGISTRATION;
        const year=date.slice(-2);
        if(year in result){
            result[year]+=1;
        }else{
            result[year]=1;
        }
    }
    return result;
}

function registrationPrincipalBusiness(maharastraData){
    let result={};
    for(let data of maharastraData){
        const date=data.DATE_OF_REGISTRATION;
        const year=date.slice(-2);
        if(year=='15'){
            const type=data.PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN;
            if(type in result){
                result[type]+=1;
            }else{
                result[type]=1;
            }
        }
    }
    result = Object.entries(result).sort((a,b) => b[1]-a[1]).slice(0,10);
    return result;
}

function registrationIndustrialClass(maharastraData){
    let result={};
    for(let data of maharastraData){
        const industrialClass=data.Industrial_Class;
        if(industrialClass in result){
            result[industrialClass]+=1;
        }else{
            result[industrialClass]=1;
        }
    }
    result=Object.entries(result).sort((a,b) => b[1]-a[1]).slice(0,10);

    return result;
}

module.exports.authorizeCap=authorizeCap;
module.exports.dateOfRegistration=dateOfRegistration;
module.exports.registrationPrincipalBusiness=registrationPrincipalBusiness;
module.exports.registrationIndustrialClass=registrationIndustrialClass;