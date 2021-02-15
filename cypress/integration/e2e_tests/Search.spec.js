describe('searchbox Test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/')
	})
	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('sometext{enter}')
	})
	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('h2').contains('Search Results:')
	})
})
