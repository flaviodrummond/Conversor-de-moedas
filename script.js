const convertButton = document.querySelector(".convert-button")
const valueConvert = document.querySelector(".value-convert")
const valueConverted = document.querySelector(".converted-value")
const selectConverted = document.querySelector(".select-converted")


function convertValue() {

    const dollarToDay = 6.05
    const euroToDay = 6.27
    const bitToDay = 637280.60

    const inputValue = document.querySelector(".input-value").value

    if (selectConverted.value == "dollar") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarToDay)
    }

    if (selectConverted.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToDay)
    }

    if (selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitToDay)
    }

    valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

function changeCurrency() {

    const currencyName = document.querySelector(".currency-name")
    const changeFlag = document.querySelector(".change-flag")

    if (selectConverted.value == 'dollar') {
        currencyName.innerHTML = "Dólar U$$"
            changeFlag.src = './assets/Dollar.png'

    }

    if (selectConverted.value == 'euro') {
        currencyName.innerHTML = "Euro"
            changeFlag.src = './assets/Euro.png'
    }

    if (selectConverted.value == 'bitcoin') {
        currencyName.innerHTML = "Bitcoin"
            changeFlag.src = './assets/bitcoin.png'
    }

    convertValue()
}



selectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)

