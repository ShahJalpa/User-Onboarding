describe("UsersForm app ", () => {
    beforeEach(() => {
        //arbitrary code you want running before your tests start
        cy.visit("http://localhost:3000/");
    });

    const textInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');

    it('Get the `Name` input and type a name in it', () => {
        //get the inputs
        //assert they are empty
        //type in them
        //assert that the name we typed is there
        textInput()
         .should("have.value", "")
         .type("Jalpa Shah")
         .should("have.value", "Jalpa Shah");
    });

    it('Get the `Email` input and type an email address in it', () => {
        emailInput()
         .should("have.value", "")
         .type("jalpa4544@gmail.com")
         .should("have.value", "jalpa4544@gmail.com");
    });

    it('Get the `password` input and type a password in it', () => {
        passwordInput()
         .should("have.value", "")
         .type("jalpa")
         .should("have.value", "jalpa");
    });

    it('if a user can check the terms of service box', () => {
        cy.get('form')
          .find('[name="terms"]')
          .check();
    })

})