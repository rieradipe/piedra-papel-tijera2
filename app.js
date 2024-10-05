const usuarioEleccionDisplay = document.createElement('H1')
const computadoraEleccionDisplay = document.createElement('H1')
const resultadoDisplay = document.createElement('H1')

const juegoGrid = document.getElementById('juego')
juegoGrid.append(usuarioEleccionDisplay, computadoraEleccionDisplay, resultadoDisplay)

const juego = ['piedra', 'papel', 'tijera']
let usuarioEleccion
let computadoraEleccion
const handleClick = (e) => {
    usuarioEleccion = e.target.id
    usuarioEleccionDisplay.innerHTML = 'Eleccion jugador: ' + usuarioEleccion
    generateEleccionComputadora()
    getResultado()
}

const generateEleccionComputadora = () => {
    const randomEleccion = juego[Math.floor(Math.random() * juego.length)]
    computadoraEleccionDisplay.innerHTML = 'Maquina Eleccion: ' + randomEleccion
    computadoraEleccion = randomEleccion
}


const getResultado = () => {
    let resultado
    switch (usuarioEleccion + computadoraEleccion) {
        case 'papelpiedra':
            case 'piedratijera' :
                case 'tijerapapel' :
                    resultado= "Ganaste!!"
                    break;
                    case 'piedrapapel':
                        case 'tijerapiedra' :
                            case 'papeltijera': 
                            resultado = "Perdiste!"
                            break;
                            case 'papelpapel':
                                case 'tijeratijera' :
                                    case 'piedrapiedra':
                                        resultado = "Empate.."
                                        break; 
                                        
                                    }
                                    resultadoDisplay.innerHTML = resultado
                                }
for (let i = 0; i < juego.length; i++) {
const boton = document.createElement('button')
boton.id = juego[i]
boton.innerHTML = juego[i]
boton.addEventListener('click', handleClick)
juegoGrid.appendChild(boton)
}