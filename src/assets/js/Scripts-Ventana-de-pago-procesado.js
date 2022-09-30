const open = document.getElementById( 'open'),
    tarjetacontainer = document.querySelector('#tarjeta');

const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

// close.addEventListener('click', () => {
//     modal_container.classList.remove('show');
// });

const selectDate = document.getElementById('expiracion');


const rotateTarjeta = () => {
	if(tarjetacontainer.classList.contains('active') ) {

		tarjetacontainer.classList.remove('active')
        selectDate.classList.add('rotateDate');

	} else {

        selectDate.classList.add('rotateDate');
        selectDate.classList.remove('selectExpirDisp');

    }
}

const estilosPrint = () => {

    rotateTarjeta();

    const form = document.getElementById('formulario-tarjeta'),
    positionTarjeta = document.getElementById('backTarjeta'),
    positionTarjetaFront = document.getElementById('delantera'),
    tarjetaBackFront = document.getElementById('containerTarjeta');

    form.style.display="none";
    positionTarjeta.classList.add('rotateBack');
    positionTarjeta.classList.add('toPrintBack');
    positionTarjetaFront.classList.add('toPrintFront');
    tarjetaBackFront.classList.add('FrontBackPrint');

    document.body.style.overflowX="hidden";
    document.body.style.overflowY="hidden";

};


document.addEventListener('DOMContentLoaded', () => {

    btnDownload = document.getElementById('btnCrearPdf');

    btnDownload.addEventListener('click', () => {

        estilosPrint();

        const alumno = document.getElementById('userName');
        const alumnoName = `${alumno.textContent}`;
        const elementConvert = document.body;

        html2pdf(elementConvert, {
            margin:0,
            filename: `${alumnoName}.pdf`,

            image: {
                type: 'jpg',
                quality: 0.98
            },
            html2canvas: {
                scale: 2,
                letterRendering: true
            },
            jsPDF: {
                unit:"mm",
                format:"a4",
                orientation: 'portrait'
            }

        })

    });

})










