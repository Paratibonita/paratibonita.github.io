// Detección de pantalla pequeña
const isMobile = window.matchMedia("(max-width: 768px)").matches;

// Detección de pantalla pequeña y Chrome
const isMobileChrome = window.matchMedia("(max-width: 768px) and (-webkit-min-device-pixel-ratio:0)").matches;

// Función para ajustar tamaño y posición de elementos
function adjustElements() {
  if (isMobile) {
    const elementos = document.querySelectorAll(".elemento");
    elementos.forEach((elemento) => {
      elemento.style.width = "100%";
      elemento.style.height = "auto";
    });
  }
}

// read custom message from query strings
const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}
//evita el desplazamiento vertical document.body.style.overflowY='hidden';

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})
// Ajustes de tamaño y posición
if (isMobile) {
  // Ajusta el tamaño y la posición de los elementos HTML
  const elementos = document.querySelectorAll(".elemento");
  elementos.forEach((elemento) => {
    elemento.style.width = "100%";
    elemento.style.height = "auto";
  });
}

