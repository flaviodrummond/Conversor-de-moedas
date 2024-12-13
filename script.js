const convertButton = document.querySelector(".convert-button")
const valueConvert = document.querySelector(".value-convert")
const valueConverted = document.querySelector(".converted-value")
const selectConverted = document.querySelector(".select-converted")


function convertValue() {

    const dollarToDay = 6.05
    const euroToDay = 6.27

    const inputValue = document.querySelector(".input-value").value

    if(selectConverted.value == "dollar"){
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarToDay)
    }

    if(selectConverted.value == "euro"){
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToDay)
    }

    valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    }
    

    

convertButton.addEventListener("click", convertValue)

