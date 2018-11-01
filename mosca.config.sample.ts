import { persistence } from 'mosca';

var ascoltatore = {
  //using ascoltatore
  type: 'mongo',		
  url: 'mongodb://localhost:27017/mqtt',
  pubsubCollection: 'ascoltatori',
  mongo: {}
};

export const MOSCA_SETTINGS = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: persistence.Mongo,
    url: 'mongodb://localhost:27017/mqtt'
  }
};