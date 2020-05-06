module.exports = class {

    connectionStack = [];

    callMap;

    print() {
        console.log("hello world");
    }

    getNameById(id) {
        for(let i = 0; i < process.users.length; i++) {
            if(process.users[i].id == id) {
                return process.users[i].name;
            }
        }
    }

    connected(connection) {
        const varbs = process.helper.parseQuery(connection.headers.url);
        connection.setState({id: varbs.id, name: this.getNameById(varbs.id)});
        this.stackNewConnection(connection);
    }

    data(connection, data) {
        data = JSON.parse(data);
        switch(data.type) {
            case 'REQ_TO_CONNECT':
                this.reqToConnect(data.data.id, connection.getState().id);
                break;
            case 'ACCEPT_TO_CONNECT':
                this.acceptToConnect(data.data.id, connection.getState().id);
                break;
            case 'AUDIO_DATA':
                this.sendAudio(data.data.audio, connection.getState().id, data.data.to);
                break;
        }
    }

    acceptToConnect(senderId, from) {
        const sendFormat = {
            status: true,
            type: 'START_CALLING',
            data: {
                status: true,
                id: from
            }
        }
        this.broadcastData(sendFormat, senderId);
    }

    reqToConnect(id, from) {
        process.rlt.chatHandler.reqForJoinCall(id, from);
        this.connectionStack.forEach(connection => {
            if(connection.id == id) {
                const msg = {
                    status: true,
                    type: 'REQ_TO_CONNECT',
                    data: {
                        id: from
                    }
                }
                connection.connection.send(JSON.stringify(msg));
            }
        });
    }

    end(connection) {
        this.connectionStack = this.connectionStack.filter(conn => {
            if(conn.id === connection.id) {
                return false;
            }
            return true;
        });
    }

    stackNewConnection(connection) {
        this.connectionStack.push({
            connection: connection,
            id: connection.getState().id,
            name: connection.getState().name
        });
    }

    sendAudio(data, from, to) {

        const sendFormat = {
            status: true,
            type: 'AUDIO_DATA',
            data: {
                audio: data,
                from
            }
        }
        this.broadcastData(sendFormat, to);
    }
    
    broadcastData(data, senderId) {
        console.log(data ,senderId);
        for(let i = 0; i < this.connectionStack.length; i++) {
            if(this.connectionStack[i].id == senderId) {
                this.connectionStack[i].connection.write(JSON.stringify(data));
                return;
            }
        }
    }
}