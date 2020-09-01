const { bankaccount, useraccount } = require('../database/models')

module.exports = class UserAccountDAO {
    constructor() { }

    getUserAccount(id) {
        let userAccount = useraccount.findByPk(id)

        if (!userAccount) {
            return null
        }

        return userAccount;

    }

    async createUserAccount(userAccount) {
        return await bankaccount
            .create()
            .then(response => {
                useraccount.create({
                    firstName: userAccount.firstName,
                    lastName: userAccount.lastName,
                    email: userAccount.email,
                    bankAccountId: response.id
                })
                    .then(response => response
                    )
            })


    }

    async updateUserAccount(userAccount) {
        return await UserAccount.update({ firstName: userAccount.firstName, lastName: userAccount.lastName, email: userAccount.email }, { where: { id: userAccount.id } })
    }

    async deleteUserAccount(id) {
        return await UserAccount.destroy({ where: { id } })
    }
} 