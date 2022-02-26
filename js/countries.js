const loadCountries = () => {
    fetch(`https://restcountries.com/v3.1/all`)
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
        const div = document.createElement('div');
        div.classList = 'country';
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</P>
        <button onclick="loadCountryDetail('${country.name.common}')">Detail</button>
        `
        /*        
        h3.innerText = country.name;
        const h3 = document.createElement('h3');
        div.appendChild(h3);
        // capital of country
        const p = document.createElement('p');
        p.innerText = country.capital; 
        div.appendChild(p);
        */
        countriesDiv.appendChild(div);
    });
}

const loadCountryDetail = name => {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
        .then(res => res.json())
    .then(data => displayCountryName(data[0]))
}

const displayCountryName = country => {
    const countryDetail = document.getElementById(`country-detail`);
    countryDetail.innerHTML = `
    <h2>Name: ${country.name.common}</h2>
    <p>Capital: ${country.capital}</p>
    <img src="${country.flags.png}">
    `
}