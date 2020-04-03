DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS conversation_list;
DROP TABLE IF EXISTS conversation_map;
DROP TABLE IF EXISTS chat_messages;

CREATE TABLE users (
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    identity VARCHAR(200),
    password VARCHAR(200)
);

CREATE TABLE conversation_list(
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    status BOOLEAN  DEFAULT 1
);

CREATE TABLE conversation_map(
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    user_id INT(5),
    connector_id INT(5),
    convs_list_id INT(5)
);

CREATE TABLE chat_messages (
    id INT(5) PRIMARY KEY AUTO_INCREMENT,
    sender_id INT(5),
    conversation_list_id INT(5),
    message VARCHAR(200),
    seen BOOLEAN DEFAULT 0,
    send_at VARCHAR(40),
    seen_at VARCHAR(40)
);

INSERT INTO users(id, name, identity, password)
    values (1, 'AM', 'am', '12345'),
    (2, 'Emad', 'emad', '12345');

INSERT INTO conversation_list(id, status)
    VALUES(1, 1);

INSERT INTO conversation_map(id, user_id, connector_id, convs_list_id)
    VALUES (1, 1, 2, 1),
    (2, 2, 1, 1);