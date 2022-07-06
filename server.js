var app = require('express')();
app.use(express.static('public'));
app.listen(3000, () => console.info('listening on port 3000'));
