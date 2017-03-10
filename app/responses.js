/**
 * Intro block explaining what this module does. Go into as much detail as needed,
 * the dev reading this should be able to understand what this module does
 * without having to read any code. List any plugins used.
 */

// // Module events
// function init() {
//     let response = 'Testing response module';
//     console.log(response);
// }
//
// module.exports = {
//     init: init
// }



function init() {
    return 'testing 1,2'
}

function getSearchParam(response) {
    // concat response into singular string.
    return response.replace(/\s+/g, '+');
}


// module.exports = 'Hello world';

module.exports = {
    init: init
}
