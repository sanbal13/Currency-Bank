let cb = document.querySelector("#close-cb");
cb.addEventListener('change', handleClick);
function handleClick(event) {
    if(cb.checked === true) {
        setTimeout(() => {
            cb.checked = false; 
        }, 1);
        
    }
}
