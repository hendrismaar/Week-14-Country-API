const infoBtn = document.querySelector('.showInfo')
const infoResult = document.querySelector('.result')
const infoDisplayed = ["name", "topLevelDomain[0]","callingCodes[0]", "capital", "region", "subregion", "population", "timezones[0]", "languages[0].name", "currencies[0].code", "currencies[0].name", "currencies[0].symbol", "flag"]
 
infoBtn.addEventListener('click', showCountryInfo)

function showCountryInfo() {
    let selectedCountry = document.getElementById("countryOptions").value
    console.log(selectedCountry)
    let url = `https://restcountries.com/v2/name/${selectedCountry}`
    console.log(url)

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(data => {
        let output = ''
        let count = 0
        data.forEach(element => {
            console.log(element)
            output += `<li>${data.element.infoDisplayed[count]}</li>`
            count ++
        })

        infoResult.innerHTML = output
    })
}