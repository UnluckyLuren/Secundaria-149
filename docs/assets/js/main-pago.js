const tarjeta=document.querySelector("#tarjeta"),btnAbrirFormulario=document.querySelector("#btn-abrir-formulario"),formulario=document.querySelector("#formulario-tarjeta"),numeroTarjeta=document.querySelector("#tarjeta .numero"),nombreTarjeta=document.querySelector("#tarjeta .nombre"),logoMarca=document.querySelector("#logo-marca"),firma=document.querySelector("#tarjeta .firma p"),mesExpiracion=document.querySelector("#tarjeta .mes"),yearExpiracion=document.querySelector("#tarjeta .year"),ccv=document.querySelector("#tarjeta .ccv"),delantera=document.querySelector("#delantera"),mostrarFrente=()=>{tarjeta.classList.contains("active")&&tarjeta.classList.remove("active")};formulario.classList.toggle("active"),tarjeta.addEventListener("click",(()=>{tarjeta.classList.toggle("active")}));for(let e=1;e<=12;e++){let t=document.createElement("option");t.value=e,t.innerText=e,formulario.selectMes.appendChild(t)}const yearActual=(new Date).getFullYear();for(let e=yearActual;e<=yearActual+8;e++){let t=document.createElement("option");t.value=e,t.innerText=e,formulario.selectYear.appendChild(t)}formulario.inputNumero.addEventListener("keyup",(e=>{let t=e.target.value;formulario.inputNumero.value=t.replace(/\s/g,"").replace(/\D/g,"").replace(/([0-9]{4})/g,"$1 ").trim(),numeroTarjeta.textContent=t,""==t&&(numeroTarjeta.textContent="#### #### #### ####"),mostrarFrente()})),formulario.inputNombre.addEventListener("keyup",(e=>{let t=e.target.value;formulario.inputNombre.value=t,nombreTarjeta.textContent=t,firma.textContent=t,""==t&&(nombreTarjeta.textContent="USERNAME"),mostrarFrente()})),formulario.selectMes.addEventListener("change",(e=>{mesExpiracion.textContent=e.target.value,mostrarFrente()})),formulario.selectYear.addEventListener("change",(e=>{yearExpiracion.textContent=e.target.value.slice(2),mostrarFrente()})),formulario.inputCCV.addEventListener("keyup",(()=>{tarjeta.classList.contains("active")||tarjeta.classList.toggle("active"),formulario.inputCCV.value=formulario.inputCCV.value.replace(/\s/g,"").replace(/\D/g,""),ccv.textContent=formulario.inputCCV.value})),formulario.addEventListener("submit",(function(e){e.preventDefault()}));const visa=document.getElementById("1"),mastercard=document.getElementById("2"),paypal=document.getElementById("3"),santander=document.getElementById("4"),logo=document.createElement("img");function Remove_bank(){const e=logoMarca.lastChild;logoMarca.removeChild(e)}nombrebank=document.getElementById("bankname"),visa.addEventListener("click",(()=>{delantera.classList.add("fondodetarjeta"),delantera.style.background="url(assets/img-pago/bg-tarjeta/modelo-visa.png)",Remove_bank(),nombrebank.style.display="none",logo.src="assets/img-pago/logos/visa.png",logoMarca.appendChild(logo),logo.style.height="3.7em"})),mastercard.addEventListener("click",(()=>{delantera.classList.add("fondodetarjeta"),delantera.style.background="url(assets/img-pago/bg-tarjeta/modelo-mastercard.png)",Remove_bank(),nombrebank.style.display="none",logo.src="assets/img-pago/logos/mastercard.png",logoMarca.appendChild(logo),logo.style.height="3.5em"})),paypal.addEventListener("click",(()=>{delantera.classList.add("fondodetarjeta"),delantera.style.background="url(assets/img-pago/bg-tarjeta/modelo-paypal.png)",Remove_bank(),nombrebank.style.display="none",logo.src="assets/img-pago/logos/logo-Paypal.png",logoMarca.appendChild(logo),logo.style.height="3.5em"})),santander.addEventListener("click",(()=>{delantera.classList.add("fondodetarjeta"),delantera.style.background="url(assets/img-pago/bg-tarjeta/modelo-santander.png)",Remove_bank(),nombrebank.style.display="none",logo.src="assets/img-pago/logos/Logo-santander.png",logoMarca.appendChild(logo),logo.style.height="4em"}));