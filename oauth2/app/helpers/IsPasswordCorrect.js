const hashers = require('node-django-hashers')


const isPasswordCorrect = async (pass, hashPass) => {

    const hash_name = hashers.identifyHasher(hashPass);
    const hash_algorithm = hashers.getHasher(hash_name);
    let passwordCorrect = await hash_algorithm.verify(pass, hashPass)

    return passwordCorrect

}

module.exports = isPasswordCorrect