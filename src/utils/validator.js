const validator = require('validator');
function validateSingUpData(data) {
    const { email, firstName, lastName, password } = data;
    console.log('Received password:', JSON.stringify(password));
    if (!firstName || !lastName) {
        throw new Error('please enter the valid name');
    } else if (!validator.isEmail(email)) {
        throw new Error('Please enter valid email');
    } else if (!validator.isStrongPassword(password)) {
        throw new Error('Please enter strong password');
    }
}
module.exports = {
    validateSingUpData
}
