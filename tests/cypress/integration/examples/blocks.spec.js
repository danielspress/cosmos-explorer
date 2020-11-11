context('Blocks', () => {
  beforeEach(() => {
    cy.visit('https://explore-agent-land.sandbox.fetch-ai.com/blocks')
  })

  it("Check there are many blocks being displayed on the page", () => {
     cy.get("#block-table").find(".block-info").then(($val) => {
       const texttest = $val.text()
          cy.log("#block-table#block-table#block-table " + texttest);
           expect($val.length).to.be.greaterThan(5)
     })
   })

  it("Check most recent block is displayed in the page", () => {
    const recentBlockHash = "EC72479AE487253D3C69FB2CBBE1C2D1E2AE39AB8F2D15A0A0202925265845AF"
    cy.contains(recentBlockHash)
  })

})
