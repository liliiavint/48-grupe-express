const formDOM = document.forms[0];
const firstNumberDOM = document.getElementById('first_number');
const secondNumberDOM = document.getElementById('second_number');
const resultDOM = document.getElementById('result');

formDOM.addEventListener('submit', e => {
    e.preventDefault();

    const a = +firstNumberDOM.value;
    const b = +secondNumberDOM.value;

    if (isNaN(a) || isNaN(b)) {
        resultDOM.innerText = 'Viena is reiksmiu nera normalus skaicius';
    } else {
        resultDOM.innerText = a + b;
    }
});