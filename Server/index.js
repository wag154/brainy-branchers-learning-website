require("dotenv").config();
const app = require("./Hangmanapp.js");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})