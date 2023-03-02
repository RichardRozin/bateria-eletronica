const tecla = document.querySelectorAll('[data-tecla]')
const som = document.querySelectorAll('[data-som]')

tecla.forEach(function(elemento){
    elemento.addEventListener('click', function(evento){
        clicaTecla(evento.target.textContent)
    })
})
 

function clicaTecla(nome){
    const toca = document.querySelector(`#som_tecla_${nome.toLowerCase()}`)
    toca.play()
}
    