const config = {
  port: process.env.PORT || 4000,
  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') + '/mydb',
}

module.exports = config