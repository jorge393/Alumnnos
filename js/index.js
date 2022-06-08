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
    /*function imprimirAlumnos() {
        //cuerpo de la funcion
        for (var i = 0; i < alumnos.length; i++) {
            console.log(alumnos[i])
        }
    }*/
    
        let clase = document.getElementById('clase')
        let tarjetas = `<div class="columns">`

        for (var i = 0; i < alumnos.length; i++) {
            
            tarjetas += `
            <div class = "column is-one-fifth">
                        <div class = "box">
                        ${alumnos[i].nombre + i}
                        </div>
                        </div>`
            if((i + 1 ) % 5 == 0 && i > 0)
            {
                tarjetas += `
                </div> 
                <div class = "columns">`
            }
            
        }

        
            console.log(tarjetas)
        //realiza el llamado a la funcion para su ejecucion
    clase.innerHTML = tarjetas
})