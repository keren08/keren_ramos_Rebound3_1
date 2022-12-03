const form = document.getElementById("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const card = document.getElementById('card');
    card.innerHTML ='';

    const usuario={
        nombre : document.getElementById("nombre").value,
        correo : document.getElementById("correo").value,
        trabajo : document.getElementById("trabajo").value,
        telefono : document.getElementById("telefono").value,
        sobreti : document.getElementById("sobreti").value,
    }
  
    const html =  crearCard(usuario.nombre,usuario.correo,usuario.trabajo,usuario.telefono,usuario.sobreti);
    card.insertAdjacentHTML('beforeend',html);

    e.submit();
});


function crearCard(nombre,correo,trabajo,telefono, sobreti){

    const html = `
    <div class="card__inicio">
      <img class="card__inicio__img" src="assets/img/icon.png" alt="" />
      <h3 class="card__inicio__titulo">${nombre}</h3>
      <p class="card__inicio__parrafo">${trabajo}</p>
    </div>

    <div class="card__info">
      <div class="card__info__cont">
        <h2 class="card__info__cont__titulo">Información</h2>
        <hr />
      </div>

      <div class="card__info__cont2">
        <section class="info">
          <div class="info__correo">
            <h3 class="info__correo__titulo">Email</h3>
            <p class="info__correo__parrafo">${correo}</p>
          </div>
        </section>
        <section class="info">
          <div class="info__tel">
            <h3 class="info__tel__titulo">Phone</h3>
            <p class="info__tel__parrafo">${telefono}</p>
          </div>
        </section>
      </div>

      <div class="card__sobremi">
        <h2 class="card__sobremi__titulo">Sobre Mi</h2>
        <hr />
        <p class="card__sobremi__parrafo">
         ${sobreti}
        </p>
      </div>
    </div>
    `
    return html;
}