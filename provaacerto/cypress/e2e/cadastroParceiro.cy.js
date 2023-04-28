import {faker} from '@faker-js/faker'
import CPF, { generate } from 'cpf-check';

it('Cadastro de novo Parceiro',function(){

    const NomeCompleto = 'Ana Carolina'
    const cpf = CPF.generate()
    const email = faker.internet.email()
    const whatsapp =faker.phone.number('+55 ## #### ####')
    const cep = '30260070'
    const numero = '3000'
    const complemento = 'Primeiro andar'

    cy.visit('/')

    cy.get('a[href="/deliver"]').click()

    cy.get('input[placeholder="Nome completo"]').type(NomeCompleto)
    cy.get('input[placeholder="CPF somente números"]').type(cpf)
    cy.get('input[placeholder="E-mail"]').type(email)
    cy.get('input[placeholder="Whatsapp"]').type(whatsapp)
    cy.get('input[placeholder="CEP"]').type(cep)
    cy.get('input[Value="Buscar CEP"]').click()
    cy.get('input[placeholder="Número"]').type(numero)
    cy.get('input[placeholder="Complemento"]').type(complemento)
    cy.get('img[alt="Moto"]').click()
    cy.get('input[type=file]').selectFile('cypress/fixtures/cnhFake.png', { force: true })
    cy.get(' button[type="submit"]').click()

    cy.get('h2[id="swal2-title"]').should('be.visible').should('have.text','Aí Sim...')
    cy.get('button.swal2-confirm.swal2-styled').click()
    

})