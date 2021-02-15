describe('password test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
	})
	it('should click on sign in button', () => {
		cy.get('#signin_button').click()
	})
	it('should click on forgot password', () => {
		cy.get('.offset3 > a').click()
	})
	it('should click email form', () => {
		cy.get('#user_email').type('Hello@gmail.com')
	})
	it('should click should submit the form', () => {
		cy.contains('Send Password').click()
	})
})
