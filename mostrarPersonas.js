var rp = require('request-promise');

var options = {
    uri: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',

    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: false
};
 
rp(options)
    .then(function (repos) {
        console.log('Personas %s', repos);
    })
    .catch(function (err) {
        console.log('ERROR!!!!!!!!!');
    });