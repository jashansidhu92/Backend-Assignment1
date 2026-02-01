import request from "supertest";
import app from "../src/app";

describe("Portfolio Performance API", () => {
  it("should return 200 and calculated results for valid input", async () => {
    const res = await request(app)
      .post("/api/v1/portfolio/performance")
      .send({ initialInvestment: 10000, currentValue: 13000 });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("profitOrLoss", 3000);
    expect(res.body).toHaveProperty("percentageChange", 30);
    expect(res.body).toHaveProperty("summary", "Excellent performance");
  });

  it("should return 400 for invalid input", async () => {
    const res = await request(app)
      .post("/api/v1/portfolio/performance")
      .send({ initialInvestment: 0, currentValue: 100 });

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});

