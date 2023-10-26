const firebase = require("firebase-admin");
const serviceAccount = require("./credbud.json");

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

const db = firebase.firestore()


async function fetchUserProfile() {
    try {
        let response = {};
        const data = await db.collection("Sinhgad/users/student").get()
        data.forEach((doc) => {
            response = { 'id': doc.id, ...doc.data() }
            console.log(response);
        })
        console.log(response);
        return response

    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

module.exports = { fetchUserProfile };