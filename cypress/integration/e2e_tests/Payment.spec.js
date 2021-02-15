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
	it('should send new payment (fake)', () => {
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Checking')
		cy.get('#sp_amount').type('122')
		cy.get('#sp_date').type('2020-01-10{enter}')
		cy.get('#sp_description').type('just a description')
		cy.get('#pay_saved_payees').click()
	})
	it('should show sucess message', () => {
		cy.get('#alert_content').should(
			'contain',
			'The payment was successfully submitted.'
		)
	})
})
