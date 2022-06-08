document.addEventListener('DOMContentLoaded', () => {
     
    let Arturo = {
        nombre: 'Arturo',
        apellido: 'Cruz',
        edad: 19,
        email: 'ar@turo.com'
    }
    let Cristhian = {
        nombre: 'Cristhian',
        apellido: 'Mayta',
        edad: 18,
        email: 'May@ta.com'
    }
    let Alexis = {
        nombre: 'Alexis',
        apellido: 'Noguera',
        edad: 18,
        email: 'al@exis.com'
    }
    let Diana = {
        nombre: 'Diana',
        apellido: 'Galeano',
        edad: 18,
        email: 'Di@ana.com'
    }
    let Jessica = {
        nombre: 'Jessica',
        apellido: 'Torres',
        edad: 18,
        email: 'Jes@sica.com'
    }
    let Andres = {
        nombre: 'Andres',
        apellido: 'Revollo',
        edad: 18,
        email: 'an@dres.com'
    }
    
    let Beymar = {
        nombre: 'Beymar',
        apellido: 'Leon',
        edad: 18,
        email: 'bey@mar.com'
    }
    let cristian = {
        nombre: 'cristian',
        apellido: 'centurion',
        edad: 19,
        email: 'centu@rion.com'
    }
    let Bruce = {
        nombre: 'Bruce',
        apellido: 'Kim',
        edad: 19,
        email: 'bru@ce.com'
    }
    let Nicolas = {
        nombre: 'Nicolas',
        apellido: 'Benitez',
        edad: 19,
        email: 'nic@olas.com'
    }
    let juan = {
        nombre: 'juan',
        apellido: 'Sacaca',
        edad: 19,
        email: 'j@uan.com'
    }
    let Jennifer = {
        nombre: 'Jennifer',
        apellido: 'Taffur',
        edad: 18,
        email: 'Jen@nifer.com'
    }
    let Jhonny = {
        nombre: 'Jhonny',
        apellido: 'Vincente',
        edad: 20,
        email: 'Jho@nny.com'
    }
    let Inti = {
        nombre: 'Inti',
        apellido: 'Iraola',
        edad: 20,
        email: 'in@ti.com'
    }
    let Jorge = {
        nombre: 'Jorge',
        apellido: 'Claros',
        edad: 17,
        email: 'albertotumadre2@gmail.com'
    }
    
    let alumnos = []
    
    alumnos.push(juan) //agregar un objeto al vector
    alumnos.push(Beymar)
    alumnos.push(Diana)
    alumnos.push(Alexis)
    alumnos.push(Arturo)
    alumnos.push(Andres)
    alumnos.push(Bruce)
    alumnos.push(Nicolas)
    alumnos.push(Jessica)
    alumnos.push(Jennifer)
    alumnos.push(Inti)
    alumnos.push(Cristhian)
    alumnos.push(cristian)
    alumnos.push(Jorge)
    console.log(alumnos)
    alumnos.push(Jhonny)
    
    //funciones
    //defino la funcion
    function imprimirAlumnos() {
        //cuerpo de la funcion
        for (var i = 0; i < alumnos.length; i++) {
            console.log(alumnos[i])
        }
    }
    
    let alumno1 = document.getElementById('alumno1')
    alumnos[0].nombre

    let alumno2 = document.getElementById('alumno2')
    alumno2.innerHTML = alumnos[1].nombre

    let alumno3 = document.getElementById('alumno3')
    alumno3.innerHTML = alumnos[2].nombre

    let alumno4 = document.getElementById('alumno4')
    alumno4.innerHTML = alumnos[3].nombre

    let alumno5 = document.getElementById('alumno5')
    alumno5.innerHTML = alumnos[4].nombre

    let alumno6 = document.getElementById('alumno6')
    alumno6.innerHTML = alumnos[5].nombre

    let alumno7 = document.getElementById('alumno7')
    alumno7.innerHTML = alumnos[6].nombre

    let alumno8 = document.getElementById('alumno8')
    alumno8.innerHTML = alumnos[7].nombre

    let alumno9 = document.getElementById('alumno9')
    alumno9.innerHTML = alumnos[8].nombre

    let alumno10 = document.getElementById('alumno10')
    alumno10.innerHTML = alumnos[9].nombre

    let alumno11 = document.getElementById('alumno11')
    alumno11.innerHTML = alumnos[10].nombre

    let alumno12 = document.getElementById('alumno12')
    alumno12.innerHTML = alumnos[11].nombre

    let alumno13 = document.getElementById('alumno13')
    alumno13.innerHTML = alumnos[12].nombre

    let alumno14 = document.getElementById('alumno14')
    alumno14.innerHTML = alumnos[13].nombre

    let alumno15 = document.getElementById('alumno15')
    alumno15.innerHTML = alumnos[14].nombre

     
    
    //realiza el llamado a la funcion para su ejecucion
    imprimirAlumnos()
})