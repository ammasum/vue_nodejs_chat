module.exports = class {

    connectionStack = [];

    callMap;

    print() {
        console.log("hello world");
    }

    connected(connection) {
        const varbs = process.helper.parseQuery(connection.headers.url);
        // connection.setState({id:});
        this.stackNewConnection(connection);
        this.updateAllConnectedList();
    }

    data(connection, data) {
        data = JSON.parse(data);
        switch(data.type) {
            case 'AUDIO_DATA':
              this.sendAudio(data.data.audio, connection.connectionID, data.data.to);
              break;
        }
    }

    end(connection) {
        this.connectionStack = this.connectionStack.filter(conn => {
            if(conn.id === connection.connectionID) {
                return false;
            }
            return true;
        });
        this.updateAllConnectedList();
    }

    stackNewConnection(connection) {
        this.connectionStack.push({
            connection: connection,
            id: connection.connectionID,
            name: varbs.name
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
        this.broadcastData(sendFormat);
    }
    
    broadcastData(data, senderId) {
        for(let i = 0; i < this.connectionStack.length; i++) {
            if(this.connectionStack[i].id === senderId) {
                this.connectionStack[i].connection.write(JSON.stringify(data));
                return;
            }
        }
    }
}