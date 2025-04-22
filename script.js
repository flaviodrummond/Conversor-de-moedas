const convertButton = document.querySelector(".convert-button")
const valueConvert = document.querySelector(".value-convert")
const valueConverted = document.querySelector(".converted-value")
const selectConverted = document.querySelector(".select-converted")
const mainCurrency = document.querySelector(".main-currency")


function convertValue() {

    const dollarToDay = 5.81
    const euroToDay = 6.67
    const libraToDay = 7.76
    const bitToDay = 512283.63
    const euthToDay = 9144.85

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

    if (mainCurrency.value == "dollar" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * dollarToDay) / euroToDay)
    }

    if (mainCurrency.value == "dollar" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * dollarToDay) / libraToDay )
    }

    if (mainCurrency.value == "dollar" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * dollarToDay )
    }

    if (mainCurrency.value == "dollar" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * dollarToDay) / bitToDay )
    }

    if (mainCurrency.value == "dollar" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format((inputValue * dollarToDay) / euthToDay )
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format((inputValue * euroToDay) / dollarToDay )
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * euroToDay) / libraToDay )
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * euroToDay)
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * euroToDay) / bitToDay )
    }

    if (mainCurrency.value == "euro" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format((inputValue * euroToDay) / euthToDay )
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format((inputValue * libraToDay) / dollarToDay )
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * libraToDay) / euroToDay )
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * libraToDay)
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * libraToDay) / bitToDay )
    }

    if (mainCurrency.value == "libra" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format((inputValue * libraToDay) / euthToDay )
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format((inputValue * bitToDay) / dollarToDay )
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * bitToDay) / euroToDay )
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * bitToDay) / libraToDay )
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * bitToDay)
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
    }

    if (mainCurrency.value == "bitcoin" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format((inputValue * bitToDay) / euthToDay )
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "dollar") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format((inputValue * euthToDay) / dollarToDay )
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "euro") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format((inputValue * euthToDay) / euroToDay )
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "libra") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: "currency",
            currency: "GBP"
        }).format((inputValue * euthToDay) / libraToDay )
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "real") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * euthToDay)
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "bitcoin") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "BTC"
        }).format((inputValue * euthToDay) / bitToDay )
    }

    if (mainCurrency.value == "ethereum" && selectConverted.value == "ethereum") {
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)

        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "ETH"
        }).format(inputValue)
    }
    

}

function changeMainCurrency() {

    const currency = document.querySelector(".currency")
    const exchangeCurrency = document.querySelector(".exchange-currency")

    if (mainCurrency.value == "real") {
        currency.innerHTML = "Real"
        exchangeCurrency.src = './assets/real.png'
    }

    if (mainCurrency.value == "dollar") {
        currency.innerHTML = "Dólar"
        exchangeCurrency.src = './assets/Dollar.png'
    }

    if (mainCurrency.value == "euro") {
        currency.innerHTML = "Euro"
        exchangeCurrency.src = './assets/Euro.png'
    }

    if (mainCurrency.value == "libra") {
        currency.innerHTML = "Libra Esterlina"
        exchangeCurrency.src = './assets/libra.png'
    }

    if (mainCurrency.value == "bitcoin") {
        currency.innerHTML = "Bitcoin"
        exchangeCurrency.src = './assets/bitcoin.png'
    }

    if (mainCurrency.value == "ethereum") {
        currency.innerHTML = "Ethereum"
        exchangeCurrency.src = './assets/ethereum.png'
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
        currencyName.innerHTML = "Libra Esterlina"
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

