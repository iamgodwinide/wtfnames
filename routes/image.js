const router = require("express").Router();


router.use("/:name", (req, res) => {
    const { name } = req.params;
    return res.set("Content-type", "image/svg+xml").send(`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="1200" height="1200" viewBox="0 0 1200 1200" xml:space="preserve">
    <desc>Created with Fabric.js 4.2.0</desc>
    <defs>
    <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans|Oswald|Raleway|Roboto|Indie+Flower|Gamja+Flower');</style>
</defs>
    <g transform="matrix(0 0 0 0 0 0)" id="d2e1031e-57b4-43b8-9d3f-4a21649ccd14"  >
    </g>
    <g transform="matrix(1 0 0 1 600 600)" id="11a88fea-10c0-46c7-a8ed-e0749b0539fa"  >
    <rect style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;" vector-effect="non-scaling-stroke"  x="-600" y="-600" rx="0" ry="0" width="1200" height="1200" />
    </g>
    <g transform="matrix(1 0 0 1 ${590 - ((name.length * 40) + (name.length > 10 ? -60 : 40))} 600)" style="" id="f22f7313-cde1-4bee-8225-270bc85b9611"  >
            <text xml:space="preserve" font-family="Lato" font-size="105" font-style="normal" font-weight="900" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1; white-space: pre;" ><tspan y="32.98" style="fill: rgb(229,0,115); ">${name}</tspan><tspan y="32.98" >.wtf</tspan></text>
    </g>
    </svg>
    `)
})


module.exports = router;