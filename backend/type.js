const z = require('zod');

const leaderboardSchema = z.object({
    name: z.string(),
    regNo: z.string(),
    Department: z.string(),
    score: z.number()
});

module.exports = leaderboardSchema;