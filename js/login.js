const login = document.getElementById('login');


login.onsubmit = (e) => {
e.preventDefault();

const usuario = document.getElementById("usuario").value
const correo = document.getElementById("correo").value
const button = document.getElementById("button")

button.onclick = () => {

    if (usuario === "hola" && correo === "hola@hola.cl"){
        window.location="home.html"
    }
    else{
     
        alert("Debe ingresar los datos correctamente.")
        form.innerHTML = ` <h3>Iniciar Sesión</h3>
            <input id="usuario" type="text" placeholder="Ingrese su Usuario"/>
            <input id="correo" type="text" placeholder="Ingrese su Correo"/>
            <input id="button" type="submit" value="Ingresar"/>`
    }
}

}

