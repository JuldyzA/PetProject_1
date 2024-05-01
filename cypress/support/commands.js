// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { registerCommand } from "cypress-wait-for-stable-dom";
registerCommand();

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
