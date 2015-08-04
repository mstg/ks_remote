/* s
* @Author: mustafa
* @Date:   2015-08-04 04:41:02
* @Last Modified by:   mustafa
* @Last Modified time: 2015-08-04 05:36:38
*/

'use strict';
var express = require("express"),
	app = express(),
	io = require('socket.io').listen(5050);

app.set('views', __dirname + '/views')
	.set('view engine', 'jade');

var ks_remote = function() {}

ks_remote.prototype.setup = function(inst) {
	app.get("/clipboard", function(req, res) {
		res.end(inst.clipboard);
	});

	app.get("/", function(req, res) {
		res.render('index', {instance: inst});
	});

	io.on('connection', function(socket) {
		socket.on('clipboard', function(data) {
			inst.setClipboard(data);
		});
	});
}

ks_remote.prototype.setClipboard = function(text) {
	this.clipboard = text;
}

ks_remote.prototype.listen = function(port) {
	app.listen(port);
}

module.exports = ks_remote;