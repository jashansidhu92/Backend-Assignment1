import request from "supertest";
import app from "../src/app";

describe("Portfolio API Endpoint", () => {
  it("should calculate portfolio performance via API", async () => {
    const response = await request(app)
      .post("/api/v1/portfolio")
      .send({
        initialInvestment: 10000,
        currentValue: 13000,
      });

    expect(response.status).toBe(200);
    expect(response.body.summary).toBe("Excellent performance");
    expect(response.body.percentageChange).toBe(30);
  });
});
