DROP TABLE IF EXISTS users;

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
    message VARCHAR(200)
);