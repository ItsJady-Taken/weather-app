import './styles/main.scss';
import { validValue } from './app/searchCity';

const searchCity = document.getElementById('search-city');
const searchIcon = document.getElementById('search-icon');
 
// checking if the value is valid
searchCity.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        validValue(searchCity.value);
    }
});

searchIcon.addEventListener('click', () => {
    validValue(searchCity.value);
})

validValue('usa');