/**************CONSTANT****************/
var config = require('../config.js');
var action_code = require(config.basePath + '/common/server_action_code.js');

/**************COMMON OBJECT***************/
var http = require('http');
var url = require('url');
var start_handler = require(config.basePath + '/handler/startHandler.js');

/***************Common Function************/
function getRequestHandler(cmd) {
	if (cmd == action_code.START) {
		return start_handler;
	} else
	return null;
}


/***************Main Server****************/
var mainHandler = function(request, response) {
	if (request.method == 'POST') {
	} else
	if (request.method == 'GET') {
		var query = url.parse(request.url, true).query;
		handler = getRequestHandler(query.cmd);
		if (handler != null) handler.run(request, response);
		else response.write("Invalid action");
	}
	
	response.end();
};

http.createServer(mainHandler).listen(8080);

