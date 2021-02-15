describe('password test', () => {
	before(function () {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.password
			cy.login('username', 'password')
		})
	})
	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_description').type('ONLINE TRANSFER REF')
		cy.get('button[type="submit"]').click()
	})
	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr').its('length').should('be.gt', 0)
	})
})
