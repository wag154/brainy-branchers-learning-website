
require("dotenv").config();
const app = require("./login.js");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})