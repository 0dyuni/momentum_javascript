
const h1 = document.querySelector("#hello:nth-child(2) h1");

function handleH1Click() {
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }
     
}

h1.addEventListener("click", handleH1Click);