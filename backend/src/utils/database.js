const { initializeApp } = require('firebase/app')
const { getDatabase } =  require("firebase/database");
const firebaseConfig = require("../constants/firebaseConfig")

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

module.exports = database;