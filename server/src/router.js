const app = require('app')
const BankAccountRouter = ('./routes/BankAccountRouter')
const UserAccountRouter = ('./routes/UserAccountRouter')

app.use(UserAccountRouter)
app.use(BankAccountRouter)