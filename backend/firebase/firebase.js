const admin = require('firebase-admin');
const serviceAccount = require('../mybook-47213-firebase-adminsdk-47cye-71a6d049c6.json');

const adminis = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});

module.exports = { adminis: adminis };
