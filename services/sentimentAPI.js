const axios = require('axios')
const token = '7f545cc778664f57be71b3c47d054574';

const getBreeds = async () => {
    try {
        return await axios.get(`https://api.dandelion.eu/datatxt/sent/v1?token=${token}&text=${text}`)
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async () => {
    const breeds = await getBreeds()
    console.log(breeds);
    if (breeds.data.message) {
        console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
}

