
const increment = require('./increment')
const CUSS_WORDS = [
    "FUCK",
    "SHIT",
    "PISS",
    "CUNT",
    "DICK",
    "JIZZ",
    "TITS",
    "COCK",
    "DONG",
    "TWAT",
    "FART",
    "POOP",
    "NIPS",
    "CRAP",
    "HELL",
    "THOT",
    "DAMN",
    "SIMP",
    "ARSE",
    "WANK",
    "CUCK",
    "SLUT",
    "WANK",
    "NUTS",
    "BUTT",
    "SHAG",
    "GASH",
    "JUGS",
    "MUFF",
    "BANG",
    "DIKE",
    "SLIT",
    "DUMP",
    "CLIT",
    "HUMP",
    "TURD",
    "ANAL",
    "FROT",
    "GIMP",
    "PIMP",
  ];
  
console.log(increment)

const handlerFn = async function() {
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization, Content-Type"
        },
        body: JSON.stringify(`Cuss word: ${CUSS_WORDS[increment]}`)
    };
}; 

module.exports.handler = handlerFn