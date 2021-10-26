const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Jasurbek Aripov'
let idx = 1
let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerHTML = text.slice(0, idx)
    idx++
    if(idx>text.length){
        idx=1
    }
    setTimeout(writeText, speed)
}