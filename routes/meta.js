const router = require("express").Router();


router.use("/:name", (req, res) => {
    const { name } = req.params;
    return res.json({
        "name": `${name}.wtf`,
        "image": `https://wtfdomains.wtf/image/${name}`,
        "description": `${name}.wtf, an ether name.`,
        "attributes": [
            {
                "trait_type": "Character Set",
                "display_type": "string",
                "value": "Mixed"
            }
        ],
        "name_length": 0,
        "segment_length": 0,
        "url": `https://wtfdomains.wtf/metadata/${name}.wtf`,
        "version": 0,
        "background_image": `https://wtfdomains.wtf/image/${name}`,
        "image_url": `https://wtfdomains.wtf/image/${name}`
    });
})


module.exports = router;