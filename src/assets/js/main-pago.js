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
	  delantera = document.getElementById('delantera'),
	  backTarjeta = document.getElementById('backTarjeta'),
	  selectExpir = document.getElementById('expiracion'),
	  inputGrado = document.getElementById('inputGrado'),
	  textGrade = document.getElementById('textGrade'),
	  inputGrupo = document.getElementById('inputGrupo'),
	  textGrupo = document.getElementById('textGrupo');



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
	selectExpir.classList.toggle('selectExpirDisp');
	selectExpir.classList.toggle('rotateSelect')

})


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
	// .replace(/\s/g, '')
	// // Eliminar las letras
	// .replace(/\D/g, '')
	// // Ponemos espacio cada cuatro numeros
	// .replace(/([0-9]{4})/g, '$1 ')
	// // Elimina el ultimo espaciado
	// .trim();

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

	if(valorInput === ''){
		nombreTarjeta.textContent = 'ALUMNO'
	}

	mostrarFrente();
})


// Grado y Grupo

inputGrado.addEventListener('keyup', e => {
	let valorInput = e.target.value;

	inputGrado.value = valorInput

	// Eliminar las letras
	.replace(/\D/g, '')

	textGrade.textContent = valorInput;

	if(valorInput === ''){
		textGrade.textContent = 'Grado'
	}

	mostrarFrente();
})

inputGrupo.addEventListener('keyup', e => {
	let valorInput = e.target.value;

	textGrupo.textContent = valorInput;

	if(valorInput === ''){
		textGrupo.textContent = 'Grupo'
	}

	mostrarFrente();
})



// * Select mes

let ind = 0;
formulario.selectMes.addEventListener('change', e => {
	mesExpiracion.textContent = e.target.value;
	
})

// * Select Año
formulario.selectYear.addEventListener('change', e => {
	yearExpiracion.textContent = e.target.value.slice(2);
	
});


/* Evitar que el evento submit recargue la página */

// const form = document.getElementById('formulario-tarjeta');

formulario.addEventListener('submit', function(event) {
	event.preventDefault()
})


