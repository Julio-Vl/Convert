//Cotação de moedas do dia.
const USD = 5.33
const EUR = 6.25
const GBP = 7.16

//Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

//CApturando o evento de submit(enviar) do formulario.
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value) {
    case "USD":
      convertCurrrency(amount.value, USD, "US$")
      break
    case "EUR":
      convertCurrrency(amount.value, EUR, "EUR€")
      break
    case "GBP":
      convertCurrrency(amount.value, GBP, "GBP£")
      break
  }
}


//Função para converter a moeda.|
function convertCurrrency(amount, price, symbol) {
  try {
    // Aplica a classe que exibe o footer para mostrar o resultado
    footer.classList.add("show-result")
  } catch (error) {
    //Remove a classe do footer removendo ele da tela.
    footer.classList.remove("show-result")
 
    console.log(error)
    alert("Não foi possivel converter. Tente novamente mais tarde")
  }
}



