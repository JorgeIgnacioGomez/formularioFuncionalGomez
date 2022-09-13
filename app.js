let name = prompt ('¿Cuál es tu nombre? '); alert(`Bienvenido a nuestro sitio ${name} !`);

const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#trucazo')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:enecerullz@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}


//ARRAY/CONSOLELOG----------------------------------------------------------------------

let array = [];

let obj = {
    type: 'form',
    role: 'opinion'
};
let obj2 = {
    name: 'info',
    role: 'datos'
};

array.push(obj, obj2);


console.log(array)
//-------------------------------------------------------------------------------------------
//-------------------------------FIILTER-----------------------------------------------------
let arrayEquipo = [{
        nombre: "jorge",
        posicion: "developer"
    },
    {
        nombre: "mariano",
        posicion: "ui designer"
    },
    {
        nombre: "hugo",
        posicion: "developer"
    },
    {
        nombre: "daniel",
        posicion: "content manager"
    },
    {
        nombre: "natalia",
        posicion: "cto"
    },
    {
        nombre: "rocio",
        posicion: "backend engineer"
    },
    {
        nombre: "armando",
        posicion: "developer"
    },
]

let desarrolladores = arrayEquipo.filter(miembro => miembro.posicion == "developer")

console.log(desarrolladores);

//este filter demostraría en el caso que un proyecto sea grupal, cuales de estos programadores son mayor de edad.