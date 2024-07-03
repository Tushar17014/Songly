const Respond = ({res, status, data}) => {
    if(status == 200 || status == 201){
        return res.status(status).json({ ...data, success: true});
    }
    return res.status(status).json({ ...data, success: false});
}

module.exports = {Respond};