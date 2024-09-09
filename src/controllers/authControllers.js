const jwt = require('jsonwebtoken')
const secretKey = 'lolitalamasbonitabruno'
const {exchangeCode, getUserGuilds, getUserInfo, getGuildMember} = require('../services/discordAPI')
const {createToken, verifyToken} = require('../services/jwt')
const getInstance = require('../config/qrpcore')
const upstreamStatus = require('../utils/upstreamStatus')



const discordAuth = async (req, res) => {
    const code = req.query.code
    console.log(code)
    try {

        const accessToken = await exchangeCode(code)
        
        const userGuilds = await getUserGuilds(accessToken)
        const userInfo = await getUserInfo(accessToken)

        const instances = await getInstance()

        const guilds = instances.map(instance => instance.guild)
        const roles = instances.map(instance => instance.accessRoles)

        const filter = userGuilds.filter(guild => guilds.includes(guild.id))

        let adminGuilds = []

        for (const guild of filter) {
          const member = await getGuildMember(guild.id, accessToken);
          if (roles.some(role => member.roles.includes(role))) {
              adminGuilds.push(guild);
          }
        }
        
        if(adminGuilds.length > 0) {

            const payload = {
               id: userInfo.id,
               
              }
              
              const token = await jwt.sign(payload, secretKey, {expiresIn: '1h'})

            res.status(200).json({token: token})
        } else {
            res.status(401).json({error: "[SIGA] User data provided doesn't meet the requirements for this request" })
        }


        
    } catch(error) {
        console.log(error);

        if (error.response) {
          const match = upstreamStatus.find(x => error.response.data.includes(x.message));
          if (match) {
            res.status(match.code).json({ error: match.error });
          } else {
            res.status(500).json({ error: '[SIGA] Internal Server Error' });
          }
        } else if (error.request) {
          // Si no hay respuesta del servidor, devolver 502
          res.status(502).json({ error: 'No response from upstream server' });
        } else {
          // Otro tipo de error, devolver 500
          res.status(500).json({ error: '[SIGA] Internal Server Error' });
        }
    }
}

const generateToken = async (req, res) => {

	const payload = req.body.payload

	try {
		const token = await createToken(payload)

		return token
	} catch (error) {
		res.status(500).json('[SIGA] Server Internal Error')
	}

}

const validateToken = async (req, res) => {
	try {

		const token = req.query.token
		const decoded = await verifyToken(token)
		res.status(200).json(decoded)

	} catch (error) {
		if (error.name === 'TokenExpiredError') {
			res.status(401).json({error: '[SIGA] Token Expired'})
        } else if (error.name === 'JsonWebTokenError') {
            res.status(401).json({error: '[SIGA] Invalid Token'})
        } else {
            res.status(500).json({error: '[SIGA] Internal Server Error'})
        }
	}
	
}

module.exports = {discordAuth, generateToken, validateToken}