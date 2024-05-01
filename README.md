# Saviynt-Project

## Overview
This repository contains a pet test project for automating smoke tests for the Saviynt Careers page and Analyst-reports page.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed.
- An operating system such as Windows, Linux, or Mac. Please note any OS-specific steps if applicable.

## Installation
To install the Saviynt-Project, follow these steps:

```bash
# Clone the repository
git clone git@github.com:JuldyzA/New-Project-1.git

# Navigate to the project directory
cd saviynt-project

# Install dependencies
npm install

```
## Running Tests

```bash
npx cypress open
```
Select the test you wish to run from the Cypress Test Runner interface.


# Run specific test suite for Analyst Reports
```bash
npx cypress run --spec cypress/e2e/reports/analyst-report.cy.js
```
# Run specific test suite for Careers
```bash
npx cypress run --spec cypress/e2e/reports/careers.cy.js
```

