import script from '../data/script.json';

let vars = {
    keywords: []
}

export default function init(data) {
    // console.log(vars.keywords);

    const text = data.text;
    const textArray = text.split(' ');

    for (const index in vars.keywords) {

        let keyword = vars.keywords[index];

        const matchingKey = textArray.filter(textItem => keyword === textItem);

        if (matchingKey.length) {
            findResponse(matchingKey);
        }
    }
}

function findResponse(key) {

}

function getSearchParam(response) {
    console.log('getSearchParam');
    // concat response into singular string.
    return response.replace(/\s+/g, '+');
}

export function getKeywords(callback) {
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

function postMessage(response) {

    console.log('postMessage');
    bot.postMessageToChannel('test-bot', 'meow!');
}
