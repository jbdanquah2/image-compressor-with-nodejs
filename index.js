const express = require('express');
const bodyparser = require('body-parser');
const multer = require('multer');
const path = require('path');

const app = express();

// 

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log(`Server is running on port ${PORT}`);
})