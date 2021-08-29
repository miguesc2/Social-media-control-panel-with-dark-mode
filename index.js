const checkbox = document.querySelector('#checkbox')

if (window.matchMedia('(prefers-color-scheme: dark').matches) {
  checkbox.setAttribute('checked', true) //dejalo checkado, gracias a css queda al inicio el check(la bolita)
    console.log("DarkActivated")
} else {
    console.log("DarkOff")
}

checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('is-dark-mode')
    document.body.classList.remove('is-light-mode')
  } else {
    document.body.classList.add('is-light-mode')
    document.body.classList.remove('is-dark-mode')        
  }
})

//window.matchMedia resumido, deja manipular lo que sucede en la mediaquery que yo escriba en su param.