import express from "express";
import healthRouter from "./api/v1/routes/health";
import portfolioRouter from "./api/v1/routes/portfolio";

const app = express();

app.use(express.json());
app.use("/api/v1", healthRouter);
app.use("/api/v1", portfolioRouter);

export default app;


