const convertButton = document.querySelector(".convert-button")
const valueConvert = document.querySelector(".value-convert")
const valueConverted = document.querySelector(".converted-value")
const selectConverted = document.querySelector(".select-converted")
const mainCurrency = document.querySelector(".main-currency")


function convertValue() {

    const dollarToDay = 5.81
    const euroToDay = 6.67
    const libraToDay = 7.77
    const bitToDay = 512283.63
    const euthToDay = 9438.85

    const inputValue = document.querySelector(".input-value").value

    if (mainCurrency.value == "real" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarToDay)
    }

    if (mainCurrency.value == "real" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToDay)
    }

    if (mainCurrency.value == "real" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToDay)
    }

    if (mainCurrency.value == "real" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

    if (mainCurrency.value == "real" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitToDay)
    }

    if (mainCurrency.value == "real" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue / euthToDay)
    }

    if (mainCurrency.value == "dollar" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }

    if (selectConverted.value == "euro") {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToDay)
    }

    if (selectConverted.value == "libra") {
        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToDay)
    }

    if (selectConverted.value == "bitcoin") {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitToDay)
    }

    if (selectConverted.value == "ethereum") {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue / euthToDay)
    }

}

function changeMainCurrency() {

    const currency = document.querySelector(".currency")
    const exchangeCurrency = document.querySelector(".exchange-currency")

    if (mainCurrency.value == "dollar") {
        currency.innerHTML = "Dólar"
        exchangeCurrency.src = './assets/Dollar.png'
    }

    if (mainCurrency.value == "euro") {
        currency.innerHTML = "Euro"
        exchangeCurrency.src = './assets/Euro.png'
    }

    convertValue()
}


function changeCurrency() {

    const currencyName = document.querySelector(".currency-name")
    const changeFlag = document.querySelector(".change-flag")

    if (selectConverted.value == "dollar") {
        currencyName.innerHTML = "Dólar U$$"
        changeFlag.src = './assets/Dollar.png'

    }

    if (selectConverted.value == "euro") {
        currencyName.innerHTML = "Euro"
        changeFlag.src = './assets/Euro.png'
    }

    if (selectConverted.value == "libra") {
        currencyName.innerHTML = "Libra"
        changeFlag.src = './assets/libra.png'
    }

    if (selectConverted.value == "real") {
        currencyName.innerHTML = "Real"
        changeFlag.src = './assets/Real.png'
    }

    if (selectConverted.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        changeFlag.src = './assets/bitcoin.png'
    }

    if (selectConverted.value == "ethereum") {
        currencyName.innerHTML = "Ethereum"
        changeFlag.src = './assets/ethereum.png'
    }

    convertValue()
}



selectConverted.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)
mainCurrency.addEventListener("change", changeMainCurrency)

