const express = require('express');
const router = express.Router();
const {myApi} = require('../apis/1')

router.get(
    "/getSongs",
    myApi
)

module.exports = router;