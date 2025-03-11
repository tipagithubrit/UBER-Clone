const { default: mongoose } = require('mongoose')
// const monngoose = require('mongoose')

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400  // 24 hours in seconds (this model basically define about the tokken expires in 24 hours )
  }
});


module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema)