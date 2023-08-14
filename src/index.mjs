import "./styles.css";


function appendItem(element) {
  for (let i = 0; i < 10; i++) {
    const div = document.createElement('div')

    div.style.cssText = `width: 90vw;
    height: 100px;
    background-color: red;
    margin-bottom: 20px;
    `
    element.append(div)
  }
}

function debounce(fn, time) {
  let timeout;
  return function(...args) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(this, args), time)
  }
}

let listenScroll = debounce(scroll, 50)
function scroll(e) {
  const app = document.getElementById("app")
  let scrollPosition = window.scrollY;
  let portHeight = window.innerHeight
  let {height: containerHeight} = app.getBoundingClientRect()
  if (scrollPosition + portHeight > containerHeight) {
    appendItem(app)
  }
}

const app = document.getElementById("app")
window.addEventListener("scroll", (e) => listenScroll(e))

appendItem(app)
