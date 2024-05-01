class AnalystReports {
  get aagFilterCheckbox() {
    return cy.get('label[for="application-access-governance"]');
  }

  get aagCount() {
    return cy.get('label[for="application-access-governance"] > .count');
  }

  get reportsLinks() {
    return cy.get("a.svt-card-link");
  }

  get submitButton() {
    return cy.get('button[type="submit"]');
  }

  getAagFilterCounter() {
    return cy
      .get('label[for="application-access-governance"] span.count')
      .should("be.visible")
      .invoke("attr", "data-term-count")
      .then((termCount) => {
        const match = termCount.match(/(\d+)/);
        const count = parseInt(match[0], 10);
        cy.log(`Filter count: , ${count}`);
        return cy.wrap(count);
      });
  }

  getResultsCounter() {
    return cy
      .get(".svt-card", { timeout: 5000 })
      .should("be.visible")
      .then((results) => {
        const count = results.length;
        cy.log(`Number of results: ${count}`);
        return cy.wrap(count);
      });
  }
}

export default new AnalystReports();
