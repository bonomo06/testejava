/*const form=document.getElementById("contato")

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(event);
})*/

const form=document.getElementById("contato")
const log=document.getElementById("log")
form.addEventListener("submit", (event) => { //esse addeventlistener serve para quando acontecer um evento (no caso quando ele der o submit), acontecer algo
    event.preventDefault()

    const email=document.getElementById("email").value //para buscar as constantes com id la no htmll, se usa o getelementbyid
    const name=document.getElementById("name").value;
    const message=document.getElementById("message").value

    log.innerText=JSON.stringify({
        name, email, message
    })
})