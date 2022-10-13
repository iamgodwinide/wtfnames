const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(expressLayout);

app.use("/", (req, res) => {
    return res.render("index");
})


const PORT = 3465;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));