const http = require('http');
const wsec = require('wsec');

require('dotenv').config();

// const chatMdl = require('./model/chat');

let connectionStack = [];

function updateAllConnectedList() {
    connectionStack.forEach((connection) => {
        const tempConn = [];
        for(let i = 0; i < connectionStack.length; i++) {
            if(connectionStack[i].id !== connection.id) {
                tempConn.push({id: connectionStack[i].id});
            }
        }
        const sendObj = {
            connections: tempConn,
            status: true,
            type: 'CONNECTION_LIST'
        }
        connection.write(sendObj);
    });
}

new wsec({port: 8080}, (socket) => {
    socket.on('connected', (connection) => {
        connectionStack.push(connection);
        updateAllConnectedList();
    });
    socket.on('end', (connection) => {
        connectionStack = connectionStack.filter(conn => {
            if(conn.id === connection.id) {
                return false;
            }
            return true;
        });
        updateAllConnectedList();
    });
});

