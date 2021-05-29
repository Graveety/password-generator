// const empty = "";
// const uAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lAlphabet = "abcdefghijklmnopqrstuvwxyz";
// const number = "123456789";
// const symbol = "!@#$%^&*_+=";


// const pLength = document.getElementsById("length");
// const submit = document.getElementsById("submit");
// const password = document.getElementsById("password");


// submit.addEventListener("click", () => {
//     let initialPassword = empty;


//     password.value = generatePassword(pLength.value, initialPassword)
// });

// function generatePassword(len, initialPassword){
//     let pass = "";
//     for (let i=0; i < len; i++)
//     pass += initialPassword.CharAt(Math.floor(Math.random() * initialPassword.length));
    

//     return pass;
// }

const display = document.getElementById("password");
const submit = document.getElementById("submit");
const copyBtn = document.getElementById("copy");

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+="

submit.onclick = ()=>{
    let i,
    randomPassword = "";
    for (i=0; i < 18; i++){
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}


function copy(){
    display.select();
    document.execCommand("copy");
}

