const login = document.getElementById('login');
const usuario = document.getElementById("usuario")
const correo = document.getElementById("correo")
const button = document.getElementById("button")

usuario.value = "admin123"
correo.value = "admin@duoc.cl"

login.onsubmit = (e) => {
e.preventDefault();





button.onclick = () => {

    if (usuario.value === "admin123" && correo.value === "admin@duoc.cl"){
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

