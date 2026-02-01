import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";

describe("Portfolio Performance Function", () => {
  it("should return excellent performance at 30% gain", () => {
    const result = calculatePortfolioPerformance(10000, 13000);
    expect(result.percentageChange).toBe(30);
    expect(result.summary).toBe("Excellent performance");
  });

  it("should return solid gain for 15% gain", () => {
    const result = calculatePortfolioPerformance(10000, 11500);
    expect(result.summary).toBe("Solid gain");
  });

  it("should return minor loss for -10% change", () => {
    const result = calculatePortfolioPerformance(10000, 9000);
    expect(result.percentageChange).toBe(-10);
    expect(result.summary).toBe("Minor loss");
  });
});
