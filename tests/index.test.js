const request = require("supertest");

describe("health endpoint", () => {
  beforeEach(() => {
    // Ensure modules are reloaded to pick up any environment changes
    jest.resetModules();
  });

  test("responds to default /api-svc/health", async () => {
    delete process.env.APP_NAME;
    const app = require("../index");
    const res = await request(app).get("/api-svc/health");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
  });

  test("responds to custom APP_NAME /account-svc/health", async () => {
    process.env.APP_NAME = "account-svc";
    const app = require("../index");
    const res = await request(app).get("/account-svc/health");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello World!");
  });
});
