var SerialPort = require('serialport').SerialPort,
	twitter = require('ntwitter'),
	poney = new SerialPort('/dev/ttyUSB1'),
	canPost = true;

var creds = {
	consumer_key: '17l96PU7z0XDIP5xN9NFcg4qk',
	consumer_secret: 'qmI7VJYmsb7NCe1pHUbeqdK7FTQrTHaBLUgddswIFZ3wwN3uEE',
	access_token_key: '2615774863-1Dr2vLo7AUQzjNgkkelrBPIgONc0A42w8KTwSdZ',
	access_token_secret: 'CwUxNJGItaGx25DHugrKyajKVPZ99qpb1iuZHcXwFrTD0'
};

var twitterClient = new twitter({
	consumer_key: creds.consumer_key,
	consumer_secret: creds.consumer_secret,
	access_token_key: creds.access_token_key,
	access_token_secret: creds.access_token_secret
});

var messages = [
	'Salut les filles',
	'Ostie de calice',
	'Tabernak',
	'Jsuis plutot un poney bien cuit'
];

poney.on('data', function(data) {
	if (canPost) {
		canPost = false;
		var message = Math.floor(Math.random()*messages.length);
		console.log(messages[message]);
		twitterClient.updateStatus(messages[message], function(err, data) {
			console.log(err);
			canPost = true;
		});
	}
});