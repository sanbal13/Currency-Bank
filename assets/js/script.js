let count = document.querySelectorAll(".count");
let numbers = document.querySelectorAll(".numbers");
let branches = 456;
let atms = 1075;
let cashRecyclers = 339; 
let yearsOfService = 64;
function countGenerator(count, val) {
    
for(let i=1; i <= val; i++)
setTimeout(function() {
    count.innerText = i;
},(2500/val)*i);
}

setInterval(() => {
countGenerator(count[0], branches);
countGenerator(count[1], atms);
countGenerator(count[2], cashRecyclers);
countGenerator(count[3], yearsOfService);
}, 10000);

