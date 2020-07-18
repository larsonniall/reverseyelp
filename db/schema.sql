DROP DATABASE IF EXISTS customers;
CREATE DATABASE customers;
USE customers;

CREATE TABLE customers
(
    id INT NOT NULL AUTO_INCREMENT,
    customerName VARCHAR(50) NOT NULL,
    phoneNumber INT NOT NULL,
    reviews VARCHAR(2000),
    thumbsUpDown BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);