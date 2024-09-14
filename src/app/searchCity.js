
const searchCity = document.getElementById('search-city');
function validValue(value) {
    if (value === '') {
        searchCity.style.borderBottom = '1px solid red';
        return;
    }
    else {
        console.log(value);
        searchCity.style.borderBottom = '1px solid white';
    }
}

export { validValue }