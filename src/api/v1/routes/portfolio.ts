import { Router } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

router.post("/portfolio/performance", (req, res) => {
  const initialInvestment = Number(req.body?.initialInvestment);
  const currentValue = Number(req.body?.currentValue);

  const invalid =
    Number.isNaN(initialInvestment) ||
    Number.isNaN(currentValue) ||
    initialInvestment <= 0 ||
    currentValue < 0;

  if (invalid) {
    return res.status(400).json({
      error: "Invalid input. initialInvestment must be > 0 and currentValue must be >= 0."
    });
  }

  const result = calculatePortfolioPerformance(initialInvestment, currentValue);
  return res.status(200).json(result);
});

export default router;
