var port = 3000;
var app = require('express')();
app.use(express.static('public'));
app.listen(port, () => console.log('listening on port ' + port));
