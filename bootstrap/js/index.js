function display(val) {
  document.getElementById("data").value += val
}

function calc() {
  document.getElementById("data").value = eval(document.getElementById("data").value)
}

function clears() {
  document.getElementById("data").value = ""
}