const output = document.querySelector('.screen .output');
const copy = document.getElementById('copy');
const passwordLength = document.getElementById('passlength');
const upercase = document.getElementById('upercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

// ¨Passwords.
let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\)=&';
let upercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';
let lowercaseStr = 'abcdefghijklmnopqrstuvwxyzhgsfd';
let numbersStr = '0123456789635694378265487';


/* Every time you click on the generate btn it is going to check if the checkbox is checked
then it gives you the checked result */
generate.addEventListener('click', ()=> {
    getRandomInt();
    // All Probabilities. a lot of if statements but that's the easy way to do it.
});


function validate(){
    let combineStr = "";
    if(numbers.checked){
    combineStr += numbersStr;
    }
    if(upercase.checked){
        combineStr += upercaseStr;
    }
    if(lowercase.checked){
        combineStr += lowercaseStr;
    }
    if(symbols.checked){
        combineStr += symbolstr;
    }
    if(!combineStr){
        alert("Bitte ergänzen Sie eine Auswahl");
    }
    
    return combineStr;
};

function getRandomInt() {
    let length = passwordLength.value;
    // console.log(length);
    validate();
    const result = validate();
    let Password = "";
    for(let i = 0 ; i < length ; i++){
        let randomIndex = Math.floor(Math.random() * result.length);
        Password += result[randomIndex];
    };
    // console.log(Password)
    output.value = Password
};


// Ability to copy the Text.
function copyText() {
    output.select();
    output.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Text has been copied to clipboard.");
}