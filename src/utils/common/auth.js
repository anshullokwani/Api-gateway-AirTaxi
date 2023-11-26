const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_EXPIRY, JWT_SECRET_KEY } = require('../../config/server-config');
function checkPassword(plainPassword, encryptedPassword) {
    try {
        return bcrypt.compareSync(plainPassword, encryptedPassword);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

function createJwtToken(input) {
    try {
        return jwt.sign(input, JWT_SECRET_KEY, {expiresIn: JWT_EXPIRY});
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = {
    checkPassword,
    createJwtToken
}