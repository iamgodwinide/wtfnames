const router = require("express").Router();


router.use("/", (req, res) => {
    return res.render("index");
})


module.exports = router;