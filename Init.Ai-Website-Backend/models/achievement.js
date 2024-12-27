const mongoose = require('mongoose');
const achievementSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    CompetitionName: {
        type: String,
        required: true
    },
    TeamMembersName: {
        type: [String],
        required: true
    },
    OrganizedBy: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    Position: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    },
    CompetitionType: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const Achievement = mongoose.model('Achievement', achievementSchema,'Achievement');
module.exports = Achievement;
