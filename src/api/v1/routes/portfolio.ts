import { Router } from "express";
import { calculatePortfolioPerformance } from "../../../portfolio/portfolioPerformance";

const router = Router();

router.post("/portfolio", (req, res) => {
  const { initialInvestment, currentValue } = req.body;

  const result = calculatePortfolioPerformance(
    initialInvestment,
    currentValue
  );

  res.status(200).json(result);
});

export default router;
