const jwt = require('jsonwebtoken')
const secretKey = 'lolitalamasbonitabruno'

/**
 * Decodes a JWT token
 * @param {string} token - The JWT token
 * @returns {object}
 */

const verifyToken = function (token) {
    try {
        const decoded = jwt.verify(token, secretKey)
        return decoded
    } catch (error) {
        throw error
    }
    
}

const createToken = function (payload, expires = '1h') {
    try {
        const token = jwt.sign(payload, secretKey, {expiresIn: expires})
        return token
    } catch {
        throw error
    }
}

module.exports = { verifyToken, createToken }