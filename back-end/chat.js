module.exports = class {

    connectionStack = [];

    print() {
        console.log("hello world");
    }

    connected(connection) {
        const varbs = process.helper.parseQuery(connection.headers.url);
        connection.setState({id: varbs.id, name: this.getNameById(varbs.id)});
        this.stackNewConnection(connection);
        this.updateAllConnectedList();
    }

    data(connection, data) {
        data = JSON.parse(data);
        switch(data.type) {
            case 'USER_MESSAGE':
              this.broadcastMessage(
                  data.message.to,
                  data.message.message_type,
                  data.message.message, connection.getState().id);
              break;
        }
    }

    end(connection) {
        this.connectionStack = this.connectionStack.filter(conn => {
            if(conn.id === connection.getState().id) {
                return false;
            }
            return true;
        });
        this.updateAllConnectedList();
    }

    getNameById(id) {
        for(let i = 0; i < process.users.length; i++) {
            if(process.users[i].id == id) {
                return process.users[i].name;
            }
        }
    }

    stackNewConnection(connection) {
        this.connectionStack.push({
            connection: connection,
            id: connection.getState().id,
            name: connection.getState().name
        });
    }
    
    broadcastMessage(senderId, type, message, from) {
        for(let i = 0; i < this.connectionStack.length; i++) {
            if(this.connectionStack[i].id === senderId) {
                const sendMsg = {
                    status: true,
                    type: 'USER_MESSAGE',
                    from,
                    message: {
                        message_type: type,
                        message,
                        time: "07:15 AM",
                        type: 0,
                        seen: 0
                    }
                }
                this.connectionStack[i].connection.write(JSON.stringify(sendMsg));
                return;
            }
        }
    }
    
    updateAllConnectedList() {
        this.connectionStack.forEach((connection) => {
            const tempConn = [];
            for(let i = 0; i < this.connectionStack.length; i++) {
                if(this.connectionStack[i].id !== connection.id) {
                    tempConn.push({
                        id: this.connectionStack[i].id,
                        name: this.connectionStack[i].name
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
}