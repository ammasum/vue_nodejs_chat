const mysql = require('mysql');
module.exports =  class {
    selectAll = 'select * from ';
    constructor() {
        this.connection = mysql.createConnection({
            host     : process.env.db_host,
            user     : process.env.db_user,
            database : process.env.db_name
        });
        this.connection.connect();
    }

    getConversList(user_id) {
        let query = `${this.selectAll}conversation_list where`;
    }
    getConversMap(user_id, fn) {
        let query = `${this.selectAll}conversation_map where user_id = ${user_id}`;
        this.connection.query(query, fn);
    }
}