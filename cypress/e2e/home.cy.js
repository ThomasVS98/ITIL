describe('Shopify', () => {

  beforeEach(() => {
    cy.visit('/')
    cy.get('#password').type(Cypress.env('storePassword'))
    cy.get('button').click()
    cy.get('body',{timeout:10000}).should('not.contain','#password')
    // cy.get('#shopify-pc__banner__btn-accept').click()
  })

  it("show products",()=>{
    cy.get('#HeaderMenu-catalog > span').click()
    
  })
  it("sort products",()=>{
    cy.get('#HeaderMenu-catalog > span').click()
    cy.get("#SortBy").select("price-ascending")

    
  })

  it("select product 1",()=>{
    cy.get('#HeaderMenu-catalog > span').click()
    cy.get('#CardLink-template--25684207075668__product-grid-12026719207764').click()
    cy.get('.product__description > p').contains('Our best and sustainable real roasted beans.')
    cy.get('.price__regular > .price-item').contains("€40,00 EUR")

    
  })
  it("select product 2",()=>{
    cy.get('#HeaderMenu-catalog > span').click()
    cy.get('#CardLink-template--25684207075668__product-grid-12026735034708').click()
    cy.get('.product__description > p').contains('RealBeans coffee, ready to brew.')
    cy.get('.price__regular > .price-item').contains("€55,00 EUR")
    
  })

  it("check description",()=>{
    cy.get('em').contains("Since 1801, RealBeans has roasted premium coffee in Antwerp for Europe’s finest cafes. Ethically sourced beans, crafted with care.")
    
  })
  it("check about paragraph",()=>{
    cy.get('#HeaderMenu-about-us > span').click()
    cy.get('em').contains("From a small Antwerp grocery to a European coffee staple, RealBeans honors tradition while innovating for the future. Our beans are roasted in-house, shipped from Antwerp or Stockholm, and loved across the continent.")
        
  })



})