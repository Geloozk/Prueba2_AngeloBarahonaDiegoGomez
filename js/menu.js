const informacion = document.getElementById("informacion")
const formulario = document.getElementById("formulario")
const contacto = document.getElementById("contacto")

const putInfo = document.getElementById("putInfo")
const putForm = document.getElementById("formulario")
const putCont = document.getElementById("contacto")

const button = document.getElementById("button")

    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
        }).appendTo("h2");
    }).fail(function() {
        console.log('Error al consumir la API!');
    });

putInfo.innerHTML = 



`        <div id="todoInfo" class="wow fadeIn">

    <h1>Formulario Único de Acreditación Socioeconómica (FUAS)</h1>
    <h3>El (FUAS) es creado por el Mineduc para facilitar tu inscripción simultánea a Gratuidad y 
    a todas las becas y créditos de arancel, de acuerdo al reglamento vigente.</h3>
    <ul>
    <li>LISTADO DE BECAS DISPONIBLES:</li>
    <li>Gratuidad.</li>
    <li>Beca Nuevo Milenio.</li>
    <li>Beca Bicentenario.</li>
    <li>Beca Juan Gómez Millas.</li>
    <li>Beca Juan Gómez Millas Extranjeros.</li>
    <li>Beca Excelencia Técnica.</li>
    <li>Beca Excelencia Académica.</li>
    <li>Beca Puntaje PSU.</li>
    <li>Beca para Hijos de Profesionales de la Educación.</li>
    <li>Beca para estudiantes en situación de Discapacidad.</li>
    <li>Beca Continuidad de Estudios para Instituciones en Cierre.</li>
    <li>Beca de Alimentación para la Educación Superior (JUNAEB).</li>
    <li>Fondo Solidario de Crédito Universitario.</li>
    <li>Crédito con Garantía Estatal.</li>
    </ul>
    <h2>El Gobierno de chile trabaja la gratuidad en base al valor de UF</h2>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Mineduc.svg/1200px-Mineduc.svg.png" alt="Logo">
    </div>
` 

informacion.onclick = () => {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        $("<p/>", {
            html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
        }).appendTo("h2");
    }).fail(function() {
        console.log('Error al consumir la API!');
    });
    putInfo.innerHTML = `        <div id="todoInfo" class="wow fadeIn">
    <h1>Formulario Único de Acreditación Socioeconómica (FUAS)</h1>
    <h3>El (FUAS) es creado por el Mineduc para facilitar tu inscripción simultánea a Gratuidad y 
    a todas las becas y créditos de arancel, de acuerdo al reglamento vigente.</h3>
    <ul>
    <li>Gratuidad.</li>
    <li>Beca Nuevo Milenio.</li>
    <li>Beca Bicentenario.</li>
    <li>Beca Juan Gómez Millas.</li>
    <li>Beca Juan Gómez Millas Extranjeros.</li>
    <li>Beca Excelencia Técnica.</li>
    <li>Beca Excelencia Académica.</li>
    <li>Beca Puntaje PSU.</li>
    <li>Beca para Hijos de Profesionales de la Educación.</li>
    <li>Beca para estudiantes en situación de Discapacidad.</li>
    <li>Beca Continuidad de Estudios para Instituciones en Cierre.</li>
    <li>Beca de Alimentación para la Educación Superior (JUNAEB).</li>
    <li>Fondo Solidario de Crédito Universitario.</li>
    <li>Crédito con Garantía Estatal.</li>
    </ul>
    <h2>El Gobierno de chile trabaja la gratuidad en base al valor de UF</h2>
    </div>
` 
}

formulario.onclick = () => {

    putInfo.innerHTML = `        <div id="todoInfo" class="wow fadeIn">
    <h2>Formulario Único de Acreditación Socioeconómica (FUAS)</h2>
   
   
   
    </div>
` 
}

contacto.onclick = () => {

    putInfo.innerHTML = `        <div id="todoInfo" class="wow fadeIn">
    <h2>Contacto</h2>
   
      <center>
        <div class="wow fadeIn">
        <div id="contacto">
            <form type="submit"  class="centrado">
            <input id="usuario" type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>
            <input id="correo" type="text" placeholder="Correo Electrónico" style="color: black ; height: 4vh;"/>
            <textarea id="correo" type="textarea" placeholder="Ingrese el Mensaje" style="color: black; width: 60%; height: 20vh;"/></textarea>
            <input id="button" type="submit" value="Contactarse" style="color: black; height: 4vh;" /></form>
            </div>
        </div>
        </center>
    </div>
` 
const button = document.getElementById("button")
button.onclick = () => {
    alert("Gracias por ponerte en contacto con nosotros")
}


}

formulario.onclick = () => {

    putInfo.innerHTML = `        <div id="todoInfo" class="wow fadeIn">
    <h2>Inscripcion Formulario de postulaciones</h2>
    <h2>Nombre</h2>
            <input type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>

    <h2>Rut</h2>
            <input type="text" placeholder="Rut" style="color: black; height: 4vh;"/>




        <h2>Ingrese su Estado Civil</h2>
      <input type="text" placeholder="Estado Civil" style="color: black; height: 4vh;"/>
        <h2> Nacionalidad </h2>
      <select type="text" placeholder="Nacionalidad" style="color: white ; height: 4vh;"/>
            <option value="chilena">Chilena</option>
        <option value="extranjera">Extranjera con Permanencia Definitiva</option>
        <option value="fiat">Extranjera con residencia</option></select>

             <h2>Indice su Actividad</h2>

        <input type="text" placeholder="Actividad" style="color: black; height: 4vh;"/>

        <h2>¿Cursaste los 2 últimos años de enseñanza escolar en el extranjero?</h2>
             <select type="text" placeholder="Selecciona una" style="color: white ; height: 4vh;"/>
        <option value="si">Sí</option>
        <option value="no">No</option></select>


            <h2>¿Tienes alguna discapacidad?</h2>
             <select type="text" style="color: white ; height: 4vh;"/>
        <option value="si">Sí</option>
        <option value="no">No</option></select>
                        <h2>¿A qué pueblo perteneces?</h2>

              <input type="text" placeholder="Pueblo" style="color: black; height: 4vh;"/>

        
  <h2>Cuenta de ahorro para estudios de educación superior</h2>
             <select type="text" placeholder="Selecciona una" style="color: white ; height: 4vh;"/>
        <option value="si">Sí</option>
        <option value="no">No</option></select>

                <h2>Antecedentes Académicos</h2>


                <h2>Promedio de Notas de Enseñanza Media</h2>

                <input type="text" placeholder="Promedio" style="color: black; height: 4vh;"/>
                
                <h2>Institución de educación superior en la que estudias</h2>
                <input type="text" placeholder="Institución" style="color: black; height: 4vh;"/>

          <h2>Último año de matrícula en educación superior</h2>
                <input type="text" placeholder="Año" style="color: black; height: 4vh;"/>

                <h2>Integrantes del Grupo Familiar</h2>

                <h2>Nombre</h2>
                <input type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>


                <h2>Apellido Paterno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Apellido Materno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Rut</h2>
                <input type="text" placeholder="Rut" style="color: black; height: 4vh;"/>


                <h2>Edad</h2>
                <input type="text" placeholder="Edad" style="color: black; height: 4vh;"/>


                <h2>Estado Civil</h2>
                <input type="text" placeholder="Estado Civil" style="color: black; height: 4vh;"/>


                <h2>Parentesco</h2>
                <input type="text" placeholder="Parentesco" style="color: black; height: 4vh;"/>

                <h2>Previsión</h2>
                <input type="text" placeholder="Previsión" style="color: black; height: 4vh;"/>

                <h2>Previsión Salud</h2>
                <input type="text" placeholder="Previsión Salud" style="color: black; height: 4vh;"/>

                <h2>Actividad</h2>
                <input type="text" placeholder="Actividad" style="color: black; height: 4vh;"/>

                 <h2>Nivel de Estudios</h2>
                <input type="text" placeholder="Nivel de Estudios" style="color: black; height: 4vh;"/>

                    <h2>Nombre</h2>
                <input type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>


                <h2>Apellido Paterno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Apellido Materno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Rut</h2>
                <input type="text" placeholder="Rut" style="color: black; height: 4vh;"/>


                <h2>Edad</h2>
                <input type="text" placeholder="Edad" style="color: black; height: 4vh;"/>


                <h2>Estado Civil</h2>
                <input type="text" placeholder="Estado Civil" style="color: black; height: 4vh;"/>


                <h2>Parentesco</h2>
                <input type="text" placeholder="Parentesco" style="color: black; height: 4vh;"/>

                <h2>Previsión</h2>
                <input type="text" placeholder="Previsión" style="color: black; height: 4vh;"/>

                <h2>Previsión Salud</h2>
                <input type="text" placeholder="Previsión Salud" style="color: black; height: 4vh;"/>

                <h2>Actividad</h2>
                <input type="text" placeholder="Actividad" style="color: black; height: 4vh;"/>

                 <h2>Nivel de Estudios</h2>
                <input type="text" placeholder="Nivel de Estudios" style="color: black; height: 4vh;"/>


                    <h2>Nombre</h2>
                <input type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>


                <h2>Apellido Paterno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Apellido Materno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Rut</h2>
                <input type="text" placeholder="Rut" style="color: black; height: 4vh;"/>


                <h2>Edad</h2>
                <input type="text" placeholder="Edad" style="color: black; height: 4vh;"/>


                <h2>Estado Civil</h2>
                <input type="text" placeholder="Estado Civil" style="color: black; height: 4vh;"/>


                <h2>Parentesco</h2>
                <input type="text" placeholder="Parentesco" style="color: black; height: 4vh;"/>

                <h2>Previsión</h2>
                <input type="text" placeholder="Previsión" style="color: black; height: 4vh;"/>

                <h2>Previsión Salud</h2>
                <input type="text" placeholder="Previsión Salud" style="color: black; height: 4vh;"/>

                <h2>Actividad</h2>
                <input type="text" placeholder="Actividad" style="color: black; height: 4vh;"/>

                 <h2>Nivel de Estudios</h2>
                <input type="text" placeholder="Nivel de Estudios" style="color: black; height: 4vh;"/>


                    <h2>Nombre</h2>
                <input type="text" placeholder="Nombre" style="color: black; height: 4vh;"/>


                <h2>Apellido Paterno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Apellido Materno</h2>
                <input type="text" placeholder="Apellido" style="color: black; height: 4vh;"/>



                <h2>Rut</h2>
                <input type="text" placeholder="Rut" style="color: black; height: 4vh;"/>


                <h2>Edad</h2>
                <input type="text" placeholder="Edad" style="color: black; height: 4vh;"/>


                <h2>Estado Civil</h2>
                <input type="text" placeholder="Estado Civil" style="color: black; height: 4vh;"/>


                <h2>Parentesco</h2>
                <input type="text" placeholder="Parentesco" style="color: black; height: 4vh;"/>

                <h2>Previsión</h2>
                <input type="text" placeholder="Previsión" style="color: black; height: 4vh;"/>

                <h2>Previsión Salud</h2>
                <input type="text" placeholder="Previsión Salud" style="color: black; height: 4vh;"/>

                <h2>Actividad</h2>
                <input type="text" placeholder="Actividad" style="color: black; height: 4vh;"/>

                 <h2>Nivel de Estudios</h2>
                <input type="text" placeholder="Nivel de Estudios" style="color: black; height: 4vh;"/>

                <h2> Dirección del Grupo Familiar

                 <h2>Dirección</h2>
                <input type="text" placeholder="Dirección" style="color: black; height: 4vh;"/>


                 <h2>Número</h2>
                <input type="text" placeholder="Número" style="color: black; height: 4vh;"/>


                 <h2>Departamento</h2>
                <input type="text" placeholder="Departamento" style="color: black; height: 4vh;"/>


                 <h2>Población o Villa</h2>
                <input type="text" placeholder="Población o Villa" style="color: black; height: 4vh;"/>
                
                <h2>Región</h2>
                <input type="text" placeholder="Región" style="color: black; height: 4vh;"/>

                          <h2>Comuna</h2>
                <input type="text" placeholder="Comuna" style="color: black; height: 4vh;"/>

                      <h2>Ciudad</h2>
                <input type="text" placeholder="Ciudad" style="color: black; height: 4vh;"/>

            <h2> Teléfono <h2>

                <h2>Código de Área</h2>
                <input type="text" placeholder="Código" style="color: black; height: 4vh;"/>

    <h2>Teléfono Fijo</h2>
                <input type="text" placeholder="Teléfono" style="color: black; height: 4vh;"/>


    <h2>Celular</h2>
                <input type="text" placeholder="Celular" style="color: black; height: 4vh;"/>

    <input type="submit" id="envForm" value="Enviar Formulario" style="color: black; height: 4vh;"/>



    </div>
` 

const envForm = document.getElementById("envForm")

envForm.onclick = () => {
    alert("Postulación Realizada Correctamente.")
    window.location = "home.html"

}

}