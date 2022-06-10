const textCounter = document.querySelector('.text-counter')
const increment = document.querySelector('.increment')
const decrement = document.querySelector('.decrement')
const reset = document.querySelector('.reset')

// Increment Counter
increment.addEventListener('click', () => {
  textCounter.textContent = +textCounter.textContent + 1
  decrement.disabled = false
  reset.disabled = false
})

// Reset Counter
reset.addEventListener('click', () => {
  textCounter.textContent = 0
  decrement.disabled = true
  reset.disabled = true
})

// Decrement Counter
decrement.addEventListener('click', () => {
  textCounter.textContent = +textCounter.textContent - 1
  checkCounter()
})

// Initial Counter value
function initial() {
  textCounter.textContent = 0
  checkCounter()
}
initial()

// Check Counet value
function checkCounter() {
  if (+textCounter.textContent <= 0) {
    decrement.disabled = true
    reset.disabled = true
  } else if (+textCounter.textContent > 0) {
    decrement.disabled = false
    reset.disabled = false
  }
}
