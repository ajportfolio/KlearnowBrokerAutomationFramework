/// <reference types="Cypress" />
import {
  Given,
  When,
  Then,
  And,
  Before,
} from "cypress-cucumber-preprocessor/steps";

Given("Login as a USA Broker", () => {
  cy.visit("https://broker-staging.klearnow.com/");
  cy.get("#txtInputName").clear();
  cy.get("#txtInputName").type("abhishekpal.singh@klearnow.com");
  cy.get("#txtPassword").clear();
  cy.get("#txtPassword").type("123");
  cy.contains("LOGIN").click();
});

Then("HomePage will be visible", () => {
  cy.intercept(
    "https://api.klearnow.com/staging-broker/v1/events?axd=GET_SEARCH_TAB_COUNT"
  ).as("getCount");
  cy.wait("@getCount");
  cy.get(".kx-header-logo").should("be.visible");
});
