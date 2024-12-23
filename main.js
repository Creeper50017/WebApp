let coins = 0
let coinsLS = localStorage.getItem("coins")
let coinsText = document.getElementById("coinsText")
function Click(args) {
  coins++
  coinsText.textContent = "Монет: "+coins
  localStorage.setItem("coins",coins)
}
if(coinsLS != null) {
  coins = parseInt(coinsLS)
}
function Start() {
  document.getElementById("Wraith").hidden = false
}
coinsText.textContent = "Монет: "+coins
Telegram.WebApp.onEvent(activated, Start)
