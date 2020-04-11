const redis = require('redis');

const connection = redis.createClient({
  host: 'redis-server',
  port: 6379
});

const client = {
  set: (key, obj) => {
    return connection.set(key, JSON.stringify(obj));
  },
  get: key => {
    return new Promise((resolve, reject) => {
      connection.get(key, (err, obj) => {
        if (err) {
          return reject(err);
        }
        return resolve(JSON.parse(obj));
      });
    }); 
  }
}

module.exports = client;