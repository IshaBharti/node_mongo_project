const mongoose=require("mongoose")
const CONFIG = require('../config.json')
mongoose.connect(CONFIG.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.set('debug', true);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
	console.log("Connection Successful!");
});
