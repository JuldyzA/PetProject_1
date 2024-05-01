class CareersPage {
  get jobDescriptionsButtons() {
    return cy.get(
      "a.elementor-button[href = 'https://saviynt.com/careers/job-descriptions/']"
    );
  }


}

export default new CareersPage();
