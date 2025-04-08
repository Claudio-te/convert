const USD = 6.01
const EUR = 6.59
const GBP = 7.68

const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

amount.addEventListener("input",  () => {
  
  const hasCharactersRegex = /\D+/g
  amount.value = amount.value.replace(hasCharactersRegex, "")
})

form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break

      case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break

      case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break
  }
}

function convertCurrency(amount, price, symbol) {
 try {
   footer.classList.add("show-result")
 } catch (error) {
  
  footer.classList.remove("show-result")
  
  console.log(error)
  alert("Não foi possível converter. Tente novamente mais tarde.")
 }
}