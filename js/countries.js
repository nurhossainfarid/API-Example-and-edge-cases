const loadCountries = () => {
    fetch(`https://restcountries.com/v2/all`)
        .then(res => res.json())
        .then(data => displayCountries(data))
};
loadCountries();
const displayCountries = (countries) => {
    const countriesDiv = document.getElementById('countries');
    // for (const country of countries) {
    //     // console.log(country.name);
    //     const h1 = document.createElement('h1');
    //     h1.innerText = country.name;
    //     countriesDiv.appendChild(h1);
    // }
    countries.forEach(country => {
        // countries name
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        h3.innerText = country.name;
        div.appendChild(h3);
        // capital of country
        div.classList = 'country';
        const p = document.createElement('p');
        p.innerText = country.capital;
        div.appendChild(p);
        countriesDiv.appendChild(div);
    });
}

const p=[1,2,3]; const q=p.find ( n=> Math.pow(n, 3));