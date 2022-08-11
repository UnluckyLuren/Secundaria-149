import '../css/componentes.css';
import webPackLogo from '../assets/img/webpack-logo.png';

export const mostrarimg = () => {

    const img = document.createElement('img');
    img.src = webPackLogo;
    document.body.append(img);

}





