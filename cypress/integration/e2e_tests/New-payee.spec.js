describe('Navbar test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.login(username, password)
		})
	})
	it('should add payee to the list', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Add New Payee').click()
		cy.get('#np_new_payee_name').type('Name')
		cy.get('#np_new_payee_address').type('105 chandler drive')
		cy.get('#np_new_payee_account').type('123456789')
		cy.get('#add_new_payee').click()
	})
	it('should show success message', () => {
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The new payee Name was successfully created')
	})
})
