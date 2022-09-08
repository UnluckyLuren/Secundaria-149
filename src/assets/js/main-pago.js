const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year'),
	  ccv = document.querySelector('#tarjeta .ccv'),
	  delantera = document.querySelector('#delantera')



// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active') ) {
		tarjeta.classList.remove('active')
	}
}

formulario.classList.toggle('active')

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active')
})


// * Boton de abrir formulario

// btnAbrirFormulario.addEventListener('click', () => {
// 	btnAbrirFormulario.classList.toggle('active')
// 	formulario.classList.toggle('active')
// })




// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();

for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', e => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente()
})

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', e => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput    /* .replace(/[0-9]/g, '') */
	nombreTarjeta.textContent = valorInput
	firma.textContent = valorInput

	if(valorInput == ''){
		nombreTarjeta.textContent = 'USERNAME'
	}
	mostrarFrente()
})

// * Select mes
formulario.selectMes.addEventListener('change', e => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente()
})

// * Select Año
formulario.selectYear.addEventListener('change', e => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente()
});

// * CVV
formulario.inputCCV.addEventListener('keyup', () => {

	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active')
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')

	ccv.textContent = formulario.inputCCV.value;
})

/* Evitar que el evento submit recargue la página */

// const form = document.getElementById('formulario-tarjeta');

formulario.addEventListener('submit', function(event) {
	event.preventDefault()
})

/* Cambiar las imagenes de la targeta */
const visa    = document.getElementById('1'),
	mastercard = document.getElementById('2'),
	paypal    = document.getElementById('3'),
	santander = document.getElementById('4'),
	logo 	  = document.createElement('img')
	nombrebank = document.getElementById('bankname')

function Remove_bank() {
	const Last_bank = logoMarca.lastChild
	logoMarca.removeChild(Last_bank)
}

visa.addEventListener('click', () => {
	delantera.classList.add('fondodetarjeta')
	delantera.style.background = "url(assets/img-pago/bg-tarjeta/modelo-visa.png)"
	Remove_bank()
	nombrebank.style.display = "none"
	logo.src="assets/img-pago/logos/visa.png"
	logoMarca.appendChild(logo)
	logo.style.height = "3.7em"

})

mastercard.addEventListener('click', () => {
	delantera.classList.add('fondodetarjeta')
	delantera.style.background = "url(assets/img-pago/bg-tarjeta/modelo-mastercard.png)"
	Remove_bank()
	nombrebank.style.display = "none"
	logo.src="assets/img-pago/logos/mastercard.png"
	logoMarca.appendChild(logo)
	logo.style.height = "3.5em"
})

paypal.addEventListener('click', () => {
	delantera.classList.add('fondodetarjeta')
	delantera.style.background = "url(assets/img-pago/bg-tarjeta/modelo-paypal.png)"
	Remove_bank()
	nombrebank.style.display = "none"
	logo.src="assets/img-pago/logos/logo-Paypal.png"
	logoMarca.appendChild(logo)
	logo.style.height = "3.5em"
})

santander.addEventListener('click', () => {
	delantera.classList.add('fondodetarjeta')
	delantera.style.background = "url(assets/img-pago/bg-tarjeta/modelo-santander.png)"
	Remove_bank()
	nombrebank.style.display = "none"
	logo.src="assets/img-pago/logos/Logo-santander.png"
	logoMarca.appendChild(logo)
	logo.style.height = "4em"
})


