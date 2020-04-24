const wsec = require('wsec');

const chating = require('./chat');
const calling = require('./calling');
process.rlt = {
    chatHandler: new chating,
    callHandler: new calling
}

process.users = [
    {
        id: 1,
        name: 'Masum',
    },
    {
        id: 2,
        name: 'Suji',
    },
    {
        id: 3,
        name: 'Sumi',
    },
    {
        id: 4,
        name: 'Ruji',
    }
]

process.helper = {
    parseQuery(url) {
        const vars = {}
        const queryString = url.split('?');
        if(queryString.length < 2) {
            return {};
        }
        (queryString[1].split("&")).forEach(item => {
            const tmp = item.split('=');
            vars[tmp[0]] = tmp[1];
        });
        return vars;
    }
}
require('dotenv').config();

new wsec({port: 8080, host: '192.168.0.105'}, (socket) => {
    let eventHandler;
    socket.on('connected', (connection) => {
        const vars = process.helper.parseQuery(connection.headers.url);
        if(vars.type === 'message') {
            eventHandler = process.rlt.chatHandler;
        } else {
            eventHandler = process.rlt.callHandler;
        }
        eventHandler.connected(connection);
    });
    socket.on('data', (connection, data) => {
        eventHandler.data(connection, data);
    });
    socket.on('end', (connection) => {
        eventHandler.end(connection);
    });
});

