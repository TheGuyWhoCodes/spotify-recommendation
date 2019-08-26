var Login = require("../controllers/login.js")
var loginRouter = express.Router();
loginRouter.post("/login", Login.register);
module.exports = loginRouter;