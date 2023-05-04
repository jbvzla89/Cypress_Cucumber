/// <reference types = "Cypress" />

describe('Api', ()=>{
    
    let datos;
    
    it('Test', ()=>{
        
        datos = cy.request('http://localhost:3000/posts/')
        datos.its("status").should('eq',200)
    })//it

    it('Test 2 ', ()=>{
        
        datos = cy.request('http://localhost:3000/posts/')
        .should((response)=>{
            expect(response.status).to.eq(200)
        })
    })//it

    it('Test 3 ', ()=>{
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts/",
            headers:{
                accept: "application/json"
            }//headers
            }).then(response =>{
                let body
                body=JSON.parse(JSON.stringify(response.body))/**Este body es de la respuesta del api no de la variable */
                //cy.log(body)
                expect(body[0]).has.property("title","json-server")
                expect(body[0]).has.property("author","jesus bautista")

        })//then
      
    })//it

    it('Test 3 POST ', ()=>{
        cy.request({
            method: "POST",
            url: "http://localhost:3000/posts/",
            body: {
                    "id": 6,
                    "title": "POST desde Cypress",
                    "author": "jbautista"
            }//body
            }).then(response =>{
                expect(response.status).to.eq(201)
        })//then
      
    })//it

    it('Test 4 POST ', ()=>{
        for (let x=1; x<=10; x++){
            let tx = Math.random().toString(10)
            cy.request({
                method: "POST",
                url: "http://localhost:3000/posts/",
                body: {
                        "id": 5+x,
                        "title": "POST desde Cypress"+tx,
                        "author": "jbautista"+tx
                }//body
                }).then(response =>{
                    expect(response.status).to.eq(201)
            })//then

        }

      
    })//it

    it('Test 3 PUT ', ()=>{
        cy.request({
            method: "PUT",
            url: "http://localhost:3000/posts/3",  /**el id se quita del body y se coloca en la url */
            body: {
                    "title": "JESUS TEST",
                    "author": "BAUTISTA TEST"
            }//body
            }).then(response =>{
                expect(response.status).to.eq(200)
        })//then
      
    })//it

    it('Test 3 DELETE ', ()=>{
        cy.request({
            method: "DELETE",
            url: "http://localhost:3000/posts/1",  /**el id se quita del body y se coloca en la url */
            /*body: {
                    "title": "JESUS TEST",
                    "author": "BAUTISTA TEST"
            }//body*/
            }).then(response =>{
                expect(response.status).to.eq(200)
        })//then
      
    })//it

    it.only('Test 3 varios DELETE ', ()=>{
        for(let x=5; x<=10; x++)
        {
            cy.request({
                method: "DELETE",
                url: "http://localhost:3000/posts/"+x,  /**el id se quita del body y se coloca en la url */
                /*body: {
                        "title": "JESUS TEST",
                        "author": "BAUTISTA TEST"
                }//body*/
                }).then(response =>{
                    expect(response.status).to.eq(200)
            })//then
        }
    })//it
    


    
})//describe