const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

app.use(express.static("./public"));
app.set("view engine", "ejs");
app.use(expressLayout);


app.use("/image", require("./routes/image"));

app.use("/metadata", require("./routes/meta"));

app.use("/", require("./routes/index"))



const PORT = 3465;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));