import Utils from "./utils"


const util = new Utils("race-car");


function* generatePassword(str:string){
    let pwd = str + Date.now().toString().slice(5);

    yield pwd.split("").sort().join("");
}

const pwd = util.generatePassword();
console.log(pwd); 