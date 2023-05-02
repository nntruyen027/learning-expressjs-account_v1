const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LearningExpressJs', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
});

let Account = new mongoose.model('Account', AccountSchema, 'Account');


module.exports = Account;
