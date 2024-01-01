const _mysql = require('mysql');

const conn  =_mysql.createConnection({
    host:'localhost',
    database:'tutor',
    user:'root',
    password:'admin',
    port:'3306'
});

conn.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected..!');
	}
});


module.exports = conn;

