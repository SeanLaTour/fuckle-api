const { schedule } = require('@netlify/functions')

const index = 0

const handlerFn = async function(index) {
    index += 1
    return {
        statusCode: 200,
        body: `Number index: ${index}`
    };
};

module.exports.handler = schedule('* * * * *', handlerFn(index))