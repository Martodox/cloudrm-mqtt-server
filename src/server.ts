import { Server } from 'mosca';
import { MOSCA_SETTINGS } from '../mosca.config';

var server = new Server(MOSCA_SETTINGS);
server.on('ready', setup);

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);		
});


// fired when a message is received
server.on('published', function(packet, client) {
  console.log('Published', packet.payload.toString());
});

// fired when the mqtt server is ready
function setup() {

  server.authenticate = function(client:any, username, password, callback) {
    
    var authorized = (username === 'alice' && password.toString() === 'secret');
    if (authorized) client.user = username;
    callback(null, authorized);
  }

  server.authorizeSubscribe = function(client:any, topic, callback) {
    console.log(client);
    callback(null, client.user == topic.split('/')[1]);
  };

  

  console.log('Mosca server is up and running')
}