const axios = require('axios')
const url = require('url')

const discordAPI = 'https://discord.com/api/v10'


/**
 * Exchange a Discord code for a Oauth Token
 * @param {string} code - The code for exchange
 * @returns {Promise<string>} - Oauth2 Access Token
 */

const exchangeCode = async (code) => {

    const formData = new url.URLSearchParams({
        client_id: '1274629778493800539',
        client_secret: '1ZrZsjZBHsOEBcpOgHuP4QX4VUQMcfXX',
        grant_type: 'authorization_code',
        code: code.toString(),
        redirect_uri: 'https://qantasrp.web.app/dashboard/join',
    })
    try {
        const response = await axios.post(`${discordAPI}/token`,
            formData, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
        })
    
        
        return response.data.access_token
        
    } catch(error) {
        throw error
    }
    

}

/**
 * Gets a Discord user information
 * @param {string} accessToken The Oauth2 access token
 * @returns {Promise<object>} The user object 
 */


const getUserInfo = async(accessToken) => {

    try {

        const response = await axios.get(`${discordAPI}/users/@me`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
    
        return response.data

    } catch(error) {
        throw error
    }
}

/**
 * Gets a Discord user guilds (max 200)
 * @param {string} accessToken - The Oauth2 acces token
 * @returns {Promise<object>} - The guilds object
 */

const getUserGuilds = async(accessToken) => {

    try {

        const response = await axios.get(`${discordAPI}/users/@me/guilds`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
    
        return response.data
        
    } catch(error) {
        throw error
    }
}

/**
 * Gets a guild user.member object
 * @param {string} guildID The Guild ID reference
 * @param {string} accessToken The Oauth2 Access Token
 * @returns {Promise<Object>} Returns a user.member object
 */

const getGuildMember = async (guildID, accessToken) => {
    try {

        const response = axios.get(`${discordAPI}/users/@me/guilds/${guildID}/member`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })

        return response.data
    } catch(error){
        throw error
    }
}

module.exports = {exchangeCode, getUserInfo, getUserGuilds, getGuildMember}