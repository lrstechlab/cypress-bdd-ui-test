beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
    cy.viewport(1800,1000)
});