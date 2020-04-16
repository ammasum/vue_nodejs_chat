const http = require('http');
const wsec = require('wsec');

require('dotenv').config();

// const chatMdl = require('./model/chat');

let connectionStack = [];

function stackNewConnection(connection) {
    let name = connection.headers.url;
    name = name.split('?')[1];
    name = name.split('=')[1];
    connectionStack.push({
        connection: connection,
        id: connection.connectionID,
        name: name
    });
}

function broadcastMessage(senderId, message, from) {
    for(let i = 0; i < connectionStack.length; i++) {
        if(connectionStack[i].id === senderId) {
            const sendMsg = {
                status: true,
                type: 'USER_MESSAGE',
                from,
                message: {
                    message,
                    time: "07:15 AM",
                    type: 0,
                    seen: 0
                }
            }
            connectionStack[i].connection.write(JSON.stringify(sendMsg));
            return;
        }
    }
}

function updateAllConnectedList() {
    connectionStack.forEach((connection) => {
        const tempConn = [];
        for(let i = 0; i < connectionStack.length; i++) {
            if(connectionStack[i].id !== connection.id) {
                tempConn.push({
                    id: connectionStack[i].id,
                    name: connectionStack[i].name
                });
            }
        }
        const sendObj = {
            connections: tempConn,
            status: true,
            type: 'CONNECTION_LIST'
        }
        connection.connection.write(JSON.stringify(sendObj));
    });
}

new wsec({port: 8080}, (socket) => {
    socket.on('connected', (connection) => {
        console.log("New connection");
        stackNewConnection(connection);
        updateAllConnectedList();
    });
    socket.on('data', (connection, data) => {
        if(data.length < 10) {
            return;
        }
        data = JSON.parse(data);
        switch(data.type) {
            case 'USER_MESSAGE':
              broadcastMessage(data.message.to, data.message.message, connection.connectionID);
              break;
          }
    });
    socket.on('end', (connection) => {
        connectionStack = connectionStack.filter(conn => {
            if(conn.id === connection.connectionID) {
                return false;
            }
            return true;
        });
        updateAllConnectedList();
    });
});

