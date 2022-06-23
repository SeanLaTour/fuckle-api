const { schedule } = require('@netlify/functions')

const handlerFn = async function(event, context) {
    console.log("Received event:", event)

    return {
        statusCode: 200,
        body: "heyo"
    };
};

module.exports.handler = schedule('@hourly', handlerFn)