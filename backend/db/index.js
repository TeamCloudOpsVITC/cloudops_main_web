const dotenv = require('dotenv');

const mongoose = require('mongoose');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.URI);

const leaderboardSchema = new mongoose.Schema({
    name: String,
    regNo: String,
    Department: String,
    score: Number
});

const leaderboard = mongoose.model('leaderboard', leaderboardSchema);

module.exports = leaderboard;