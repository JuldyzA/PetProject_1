class AplicationPage {
  get fullNameInput() {
    return cy.get("input[data-qa='name-input']");
  }

  get attachResumeInput() {
    return cy.get("input[data-qa='input-resume']");
  }

  get pronounceCheckboxList() {
    return cy.get(
      "ul[data-qa='candidatePronounsCheckboxes'] input[type = 'checkbox']");
  }

  get emailInput() {
    return cy.get("input[data-qa='email-input']");
  }

  get phoneNumberInput() {
    return cy.get("input[data-qa='phone-input']");
  }

  get currentLocationInput() {
    return cy.get("input[data-qa='location-input']");
  }
  get currentCompanyInput() {
    return cy.get("input[data-qa='org-input']");
  }

  get linkedinUrlInput() {
    return cy.get("input[name='urls[LinkedIn]']");
  }

  get githubUrlInput() {
    return cy.get("input[name='urls[GitHub]']");
  }

  get cardFieldInputDeviceInfo() {
    return cy.get("textarea.card-field-input");
  }

  get customQuestionsTextAreas() {
    return cy.get("textarea.card-field-input");
  }

  get resumeUploadLabel() {
    return cy.get(".resume-upload-label");
  }

  applyForPosition(userdata){
    //user's application form information
    this.fullNameInput.type(userdata.fullName);
    this.pronounceCheckboxList.filter(`[value='${userdata.pronounce}']`).check();
    this.emailInput.type(userdata.email);
    this.phoneNumberInput.type(userdata.phoneNumber);

    // the next lines are comented as there is a capcha pops up with inserting links

    //this.currentLocationInput.type(userdata.currentLocation);
    //this.currentCompanyInput.type(userdata.currentCompany);

    //inserting user's links
    this.linkedinUrlInput.type(userdata.linkedInUrl);
    this.githubUrlInput.type(userdata.gitHubUrl);

    //custom questions
    this.customQuestionsTextAreas.each(($customTextArea) => {
        cy.wrap($customTextArea).type(userdata.customQuestionsAnswers);
    })
  }
}



export default new AplicationPage();
