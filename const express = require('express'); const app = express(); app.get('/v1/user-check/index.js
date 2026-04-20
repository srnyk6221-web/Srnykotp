const express = require('express');
const app = express();
app.get('/v1/user-check/', (req, res) => {
    res.status(200).json({
        "status": "success",
        "data": { "is_user_exists": true }
    });
});
app.listen(3000);
