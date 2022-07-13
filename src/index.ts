import { generateJoke } from './generateJoke';
import './styles/main.scss';
import logo from './assets/logo.svg';

const logoImg = document.getElementById('logoImg') as HTMLImageElement | null;

if (logoImg !== null) {
    logoImg.src = logo;
}


console.log(generateJoke());
console.log(1);