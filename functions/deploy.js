const { schedule } = require('@netlify/functions')



const handlerFn = async function() {
    let index = 0
    return {
        statusCode: 200,
        body: `Number index: ${index}`
    };
}; 

module.exports.handler = schedule('* * * * *', handlerFn)