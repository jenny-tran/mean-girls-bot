import script from '../data/script.json';

let vars = {
    url: '../data/script.json',
    script: '',
    message: {}
}


export default function init(data) {
    // detectMessage(data)
    getScript();
}

function getSearchParam(response) {
    // concat response into singular string.
    return response.replace(/\s+/g, '+');
}

function detectMessage(incomingMessage) {
    if (incomingMessage.type == 'message') {
        return readMessage(incomingMessage);
    }
}

function readMessage(message) {
    const text = message.text;

    if (text.includes('hello')) {
        vars.message = message;
        console.log(vars.message);
        // getScript();
    }
}

function getScript(callback) {
    return new Promise(function(resolve, reject) {
		// Cache JSON
		vars.script = resolve;

		const keys = Object.keys(vars.script);
        console.log(keys);
	});
}


function findResponse(key) {

}
