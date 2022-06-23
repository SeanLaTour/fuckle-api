const { schedule } = require('@netlify/functions')

let index = 0

const handlerFn = async function() {
    index += 1
    return {
        statusCode: 200,

        body: `${index}`
    };
}; 

module.exports.handler = schedule('* * * * *', handlerFn)