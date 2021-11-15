
const h1 = document.querySelector("#hello:nth-child(2) h1");

function handleH1Click() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
     
}

h1.addEventListener("click", handleH1Click);