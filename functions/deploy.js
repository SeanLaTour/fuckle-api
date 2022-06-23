const { schedule } = require('@netlify/functions')



const handlerFn = async function(index) {
    let index = 0
    index += 1
    return {
        statusCode: 200,
        body: `Number index: ${index}`
    };
}; 

module.exports.handler = schedule('* * * * *', handlerFn)