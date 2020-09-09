const { BankAccount: bankaccount } = require("../database/models");

class BankAccountDAO {
  getBankAccount(req, res) {
    const { id } = req.params;
    let bankAccount = bankaccount.findByPk(id);
    if (!bankAccount) {
      return res.status(400).json({ error: "not found" });
    }

    return res.status(200).json(bankAccount);
  }

  async deposit(req, res) {
    const { value, id } = req.body;
    return await bankaccount
      .update({ balance: value }, { where: { id } })
      .then((response) => res.status(200).json(response));
  }

  async get(req, res) {
    const { id } = req.params;
    let bankAccount = bankaccount.findByPk(id);

    if (value > bankAccount.balance) {
      return res.status(200).json({ error: "saldo insuficiente" });
    }

    const get = await bank
      .update({ balance: bankAccount.balance - value }, { where: { id } })
      .then(() => response);
  }
}

module.exports = new BankAccountDAO();
