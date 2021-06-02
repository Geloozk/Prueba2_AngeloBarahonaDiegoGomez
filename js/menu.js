const informacion = document.getElementById("informacion")
const formulario = document.getElementById("formulario")
const contacto = document.getElementById("contacto")

const putInfo = document.getElementById("putInfo")
const putForm = document.getElementById("formulario")
const putCont = document.getElementById("contacto")

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

    <h2>Formulario Único de Acreditación Socioeconómica (FUAS)</h2>
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
    <h2>Formulario Único de Acreditación Socioeconómica (FUAS)</h2>
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
}

formulario.onclick = () => {

    putInfo.innerHTML = `        <div id="todoInfo" class="wow fadeIn">
    <h2>Formulario</h2>
  
   
   
    </div>
` 
}