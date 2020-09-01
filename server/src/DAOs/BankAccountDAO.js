const { bankaccount } = require('../database/models')

module.exports = class BankAccountDAO {
    constructor() { }

    getBankAccount(id) {
        let bankAccount = bankaccount.findByPk(id)

        if (!bankAccount) {
            return null
        }

        return bankAccount;
    }

    async deposit(id, value) {

        return await bank
            .update({ balance: value }, { where: { id } })
            .then(response => response)

    }

    async get(id, value) {

        let bankAccount = bankaccount.findByPk(id)

        if (value > bankAccount.balance) {
            return -1
        }

        return await bank
            .update({ balance: bankAccount.balance - value }, { where: { id } })
            .then(response => response)


    }


} 