const request = require("supertest");

const API_URL = "http://localhost:3000";

test("camilhaddad4@gmail.com - getAll to show all product - 200", async () => {
  const response = await request(API_URL).get("/api/products");

  if (response.statusCode === 200) {
    console.log("camilhaddad4@gmail.com - getAll to show all product - 200 - PASSED");
  } else {
    console.log("camilhaddad4@gmail.com - getAll to show all product - 200 - FAILED");
  }

  expect(response.statusCode).toBe(200);
});