const {
  PORT,
  HOST,
  NODE_ENV,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DOMAIN,
  MONGO_DB
}  =  process.env


module.exports = {
  port: PORT || 3000,
  mongoURI: NODE_ENV === 'production' && MONGO_USER && MONGO_PASSWORD  && MONGO_DOMAIN &&  MONGO_DB
  ? `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${MONGO_DB}`
  : 'mongodb://mongodb://localhost/skepsidb',
  host:  HOST || 'localhost'
}
