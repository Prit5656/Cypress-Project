describe('Navbar test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
	it('should load framework from', () => {
		cy.contains('Feedback').click()
	})
	it('should fill feedback from', () => {
		cy.get('#name').type('Prit')
		cy.get('#email').type('Prit.Patel@gmail.com')
		cy.get('#subject').type('Good response by agent')
		cy.get('#comment').type('Very Happy :)')
	})
	it('should submit feedback from', () => {
		cy.contains('Send Message').click()
	})
	it('should display feedback message', () => {
		cy.url().should('include', 'sendFeedback.html')
	})
})
