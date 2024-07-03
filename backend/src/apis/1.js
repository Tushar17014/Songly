const database = require('../utils/database');
const { get, ref, set } = require('firebase/database');
const {Respond} = require('../utils/ExpressUtil');

const songsRef = ref(database, "songs");

async function myApi(req, res, next){
    try{
        let data = [];
        await get(songsRef).then((snapshot) => {
            data = snapshot.val();
        });
        return Respond({
            res,
            status: 200,
            data: data
        });

    } catch(err){
        next();
    }
}

module.exports = {myApi};