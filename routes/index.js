let express = require('express');
let router = express.Router();

// router.get('/', (req, res, next) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.write('Hello World');
//     res.end();
// });

router.get('/img', (req, res, next) => {
    let num = Math.floor(Math.random() * 25 + 1);
    res.status(200).json({
        imgPath: `${num}.jpg`
    });
    res.end();
});

module.exports = router;