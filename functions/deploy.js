const { schedule } = require('@netlify/functions')



const handlerFn = async function() {
    let index = 0
    index += 1
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization, Content-Type"
        },
        body: `Number index: ${index}`
    };
}; 

module.exports.handler = schedule('* * * * *', handlerFn)