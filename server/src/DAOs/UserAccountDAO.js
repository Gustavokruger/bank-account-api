const bankaccount = require("../database/models/bankaccount.js");
const useraccount = require("../database/models/useraccount.js");

class UserAccountDAO {
  getUserAccount(req, res) {
    const { id } = req.params;
    let userAccount = useraccount.findByPk(id);

    if (!userAccount) {
      return res.status(400).json({ error: "not found" });
    }

    return res.status(200).json(userAccount);
  }

  async createUserAccount(req, res) {
    const userAccount = req.body;
    console.log(bankaccount);
    return await bankaccount.create().then((response) => {
      useraccount
        .create({
          firstName: userAccount.firstName,
          lastName: userAccount.lastName,
          email: userAccount.email,
          bankAccountId: response.id,
        })
        .then((response) => res.status(200).json(response));
    });
  }

  async updateUserAccount(userAccount) {
    return await UserAccount.update(
      {
        firstName: userAccount.firstName,
        lastName: userAccount.lastName,
        email: userAccount.email,
      },
      { where: { id: userAccount.id } }
    ).then((response) => res.status(200).json(response));
  }

  async deleteUserAccount(id) {
    return await UserAccount.destroy({ where: { id } });
  }
}

module.exports = new UserAccountDAO();
