const express = require("express");
const bodyParser = require("body-parser");

const BankAccountRouter = "./routes/BankAccountRouter.js";
const UserAccountRouter = "./routes/UserAccountRouter.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(UserAccountRouter);
app.use(BankAccountRouter);

const PORT = 3333;

app.listen(PORT, () => console.log(`server listening to ${PORT}`));
