import script from '../data/script.json';

let vars = {
    url: '../data/script.json',
    script: '',
    message: {},
    keywords: []
}


export default function init(data) {
    console.log(vars.keywords);
    // console.log(data);

    // const text = data.text;

    for (const keyword in vars.keywords) {
        console.log(keyword);
        if (data.text.includes(keyword)) {

            // postMessage();
            console.log('response goes here');
        }
    }
    // match(data)
}

function getSearchParam(response) {
    console.log('getSearchParam');
    // concat response into singular string.
    return response.replace(/\s+/g, '+');
}

// function detectMessage(incomingMessage) {
//     console.log('detectMessage');
//     if (incomingMessage.type == 'message') {
//         return readMessage(incomingMessage);
//     }
// }

function match(message, keyword) {
    console.log('match');

    // if (text.includes(keyword)) {
    //     vars.message = message;
    //
    //     postMessage()
    // }
}

function postMessage(response) {

    console.log('postMessage');
    bot.postMessageToChannel('test-bot', 'meow!');
}


export function getKeywords() {
    const responses = new Promise((resolve, reject) => {
                resolve(script)
            });

        responses
            .then(data => {
                for (const item of data) {
                    vars.keywords.push(item.keywords);
                }
            }).
            catch(err => {
                console.error(err);
            });
};



function consoleLog(stuff) {
    // console.log(stuff);
}

function findResponse(keyword) {
    // Iterate through JSON and use keyword to spit out related response
}
