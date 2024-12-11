const convertButton = document.querySelector(".convert-button")

function convertValue(){

    const dollarDay = 6.05

    const inputValue = document.querySelector(".input-value").value

    const convertedValue = inputValue / dollarDay

    console.log(convertedValue)    

}

convertButton.addEventListener("click", convertValue)

