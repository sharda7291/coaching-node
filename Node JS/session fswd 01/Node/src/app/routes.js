/**
 * All the routes goes here
 */

const { signup } = require("./user/signup");
const { signupMiddleware } = require("./../middleware/signup");
const { login } = require("./user/login");
var bodyParser = require("body-parser");
const { productDetails } = require("./user/productDetails");
const { checkout } = require("./user/checkout");
const { getAddress } = require("./user/getAddressList");
const { addAddress } = require("./user/addAddress");
const { editAddress } = require("./user/editAddress");
const { addressMiddleware } = require("../middleware/address");
const { tokenCheckMiddleware } = require("../middleware/tokenCheck");

exports.loadRoutes = (app) => {
  app.use(bodyParser.json());

  // user related goes here
  //routes related to user activity - login, signup, checkout, order, address
  app.post("/signup", signupMiddleware, signup);
  app.post("/login", login);
  app.get("/item/:item_id", productDetails); // blame shreyas if any issues
  app.post("/order", tokenCheckMiddleware, checkout); // blame shreyas if any issues
  app.get("/address", tokenCheckMiddleware, getAddress); // blame shreyas and sakshi if any issues
  app.post(
    "/create_address",
    tokenCheckMiddleware,
    addressMiddleware,
    addAddress
  ); // blame shreyas and prem if any issues
  app.put("/update_address", tokenCheckMiddleware, editAddress); // blame prem if any issues
};
//routes related to home page - home page

//routes related to admin activity
