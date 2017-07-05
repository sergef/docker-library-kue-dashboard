var kue = require('kue');
var config = require('config');

kue.createQueue(config.kue.connection);

kue.app.set('title', config.title);
kue.app.listen(config.port);
