/// <reference types='cypress' />

import Base_PO from "./Base_PO";

class ContactUs_PO extends Base_PO{

    elements = {
        firstName_TextField: () => cy.get("input[name='first_name']"),
        lastName_TextField: () => cy.get("input[name='last_name']"),
        email_TextField: () => cy.get("input[name='email']"),
        comment_TextField: () => cy.get("textarea[name='message']"),
        submit_Button: () => cy.get("input[type='submit']"),
        submission_Header_Text: () => cy.xpath("//h1 | //body") 
    }

    navigateTo_ContactUs_Page(){
        super.navigate("Contact-Us/contactus.html")
    }

    type_FirstName(firstName){
        this.elements.firstName_TextField().type(firstName)
    }

    type_LastName(lastName){
        this.elements.lastName_TextField().type(lastName)
    }

    type_EmailAddress(email){
        this.elements.email_TextField().type(email)
    }

    type_comment(comment){
        this.elements.comment_TextField().type(comment);
    }

    ClickOn_Submit_Button(){
        this.elements.submit_Button().click()
    }

    validate_Submission_Header_Text(expectedText){
        this.elements.submission_Header_Text().contains(expectedText)
        this.elements.submission_Header_Text().invoke("text").should('include', expectedText)

    }

}//cierra
export default ContactUs_PO