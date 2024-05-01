class HomePage {
  get careersButton() {
    return cy.get('a[href="https://saviynt.com/careers/"]').contains("Careers");
  }

  get AnalystReportsButton() {
    return cy
      .get(".footer-links")
      .find(
        'a[href="https://saviynt.com/content-hub-term/content-type/analyst-reports/"]'
      )
      .contains("Analyst Reports");
  }
}

export default new HomePage();
