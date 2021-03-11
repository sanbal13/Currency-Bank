let keyGrid = document.querySelector(".key-grid");
let password = document.querySelector("#password");
let alpha =[26];
let digits =[10];
let symbols=[23];
function randomKeyGeneration(){
    keyGrid.innerHTML= "";
     let cover = document.createElement("div");
    cover.classList.add("cover");
    keyGrid.append(cover);
for (let i = 0; i < 26; i++) {
    alpha[i] = String.fromCharCode(i + 97);
    if(i < 23) {
        if(i === 0) {
            symbols[i] = "Space";
        } else if(i < 16) {
            symbols[i] = String.fromCharCode(i + 32);
        } else {
            symbols[i] = String.fromCharCode(i + 59 - 17);
        }
    }
    if(i < 10) {
        digits[i] = i;
    }
}

/*********** Alpahabet Generation ***********/
for(let i = 0; i < 26; i++) {
    let btn = document.createElement("div");
    btn.style.width = "100%";
    btn.style.textAlign = "center";
    btn.style.backgroundColor = "#d3cdcd";
    let index = Math.floor((25-i)*Math.random());
    btn.innerText = alpha[index];
    alpha.splice(index, 1);
    keyGrid.append(btn);
    btn.addEventListener("click", handleClick);
}
/* *********** Digits Generation ***********/
for(let i = 0; i < 10; i++) {
    let btn = document.createElement("div");
    btn.style.width = "100%";
    btn.style.textAlign = "center";
    btn.style.backgroundColor = "#d3cdcd";
    let index = Math.floor((9-i)*Math.random());
    btn.innerText = digits[index];
    digits.splice(index, 1);
    keyGrid.append(btn);
    btn.addEventListener("click", handleClick);
}
/* *********** Symbols Generation ***********/
for(let i = 0; i < 23; i++) {
    let btn = document.createElement("div");
    btn.style.width = "100%";
    btn.style.textAlign = "center";
    btn.style.backgroundColor = "#d3cdcd";
    let index = Math.floor((23-i)*Math.random());
    btn.innerText = symbols[index];
    symbols.splice(index, 1);
    keyGrid.append(btn);
    btn.addEventListener("click", handleClick);
}
}
function handleClick(event) {   
    if(event.target.innerText =="Space") {
        password.value = password.value + " ";  
    } else {
        password.value = password.value + event.target.innerText;    
    }
    console.log(password.value);
    randomKeyGeneration();
}
randomKeyGeneration();