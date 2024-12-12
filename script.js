const convertButton = document.querySelector(".convert-button")
const valueConvert = document.querySelector(".value-convert")
const valueConverted = document.querySelector(".converted-value")

function convertValue() {

    const dollarDay = 6.05

    const inputValue = document.querySelector(".input-value").value

    const convertedValue = inputValue / dollarDay

    valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    }).format(convertedValue)

}

convertButton.addEventListener("click", convertValue)

