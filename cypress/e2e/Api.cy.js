/// <reference types = "Cypress" />

describe('Api', ()=>{
    it('Test', ()=>{
        
        const datos ={
            "Nombre":"Jesus",
            "Ap":"Bautista",
            "Am":"Diaz",
            "Tel":"132165",
            "Dir":"Mi casa",
            "Cursos":
            [
                {
                    "Nombre": "numero 1",
                    "Descripcion":"Este es el numero 1"
                },
                {
                    "Nombre":"numero 2",
                    "Descripcion":"Este es el numero 2"
                },
                {
                    "Nombre":"numero 3",
                    "Descripcion":"Este es el numero 3"
                }
            ]
        }

        cy.log(datos.Nombre)
        cy.log(datos.Ap)
        cy.log(datos.Am)
        cy.log(datos.Tel)
        cy.log(datos.Dir)
        cy.log(datos.Cursos)
        cy.log(datos.Cursos[2])
        cy.log(datos.Cursos[2].Nombre)




    })//it
})//describe