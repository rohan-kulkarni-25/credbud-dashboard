const { fetchUserProfile } = require('../utils/firebase')

const getUserProfile = async (req, res) => {
    try {
        const response = await fetchUserProfile();
        console.log(response);
        res.json(response)
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
}

module.exports = { getUserProfile };