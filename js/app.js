const infoBtn = document.querySelector('.showInfo')

const flag = document.getElementById("flag");
const domain = document.getElementById("domain");
const countrySelect = document.getElementById("countrySelect");
const output = document.getElementById("result");
const countryName = document.getElementById("countryName");
const callCode = document.getElementById("callCode");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const population = document.getElementById("population");
const language = document.getElementById("language");
const currency = document.getElementById("currency");
const currencyAbreviation= document.getElementById("currencyAbreviation");
const currencySymbol = document.getElementById("currencySymbol");
const timezone = document.getElementById("timezone");

infoBtn.addEventListener('click', showCountryInfo)

function showCountryInfo() {
    let selectedCountry = document.getElementById("countryOptions").value
    let url = `https://restcountries.com/v2/name/${selectedCountry}`

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(Data => {
        countryName.innerHTML = Data[0].name;
        flag.src = Data[0].flags.png;
        domain.innerHTML = `Domain : ${Data[0].topLevelDomain[0]}` ;
        timezone.innerHTML = `Timezone : ${Data[0].timezones[0]}`;
        callCode.innerHTML = `Calling code : ${Data[0].callingCodes[0]}` ;
        capital.innerHTML = `Capital : ${Data[0].capital}` ;
        region.innerHTML = `Region : ${Data[0].region}`;
        subregion.innerHTML = `Subregion : ${Data[0].subregion}`;
        population.innerHTML = `Population : ${Data[0].population}`;
        language.innerHTML = `Language : ${Data[0].demonym}`;
        currency.innerHTML = `Currency : ${Data[0].currencies[0].name}`;
        currencyAbreviation.innerHTML = `Currency abbreviation : ${Data[0].currencies[0].code}`;
        currencySymbol.innerHTML = `Symbol : ${Data[0].currencies[0].symbol}`;
        });
}