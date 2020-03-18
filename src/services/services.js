import axios from "axios"

const getRides = async () => {
    return await axios.get('http://fast-rider.herokuapp.com/api/v1/rides?token=433898df4a3e992b8411004109e4d574a90695e39e')
};

const getCode = async (pin,ride_id) => {
    return await axios.post('http://fast-rider.herokuapp.com/api/v1/tickets', {"pin":pin,"ride_id":ride_id,"token":"4333898df4a3e992b8411004109e4d574a90695e39e"})
};

export {getRides,getCode}
