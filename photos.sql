DROP DATABASE IF EXISTS carousel;

CREATE DATABASE carousel;

USE carousel;

CREATE TABLE listing (
  id int NOT NULL AUTO_INCREMENT,
  listing_name VARCHAR (255),
  PRIMARY KEY (ID)
);

CREATE TABLE photos (
  id int NOT NULL AUTO_INCREMENT,
  photo_url
  PRIMARY KEY (ID), REFERENCES listing (id),
  FOREIGN KEY(listing_id) 
);

-- INSERT INTO transactions (id, amount, description, date) VALUES (1, -4.55, "EQUATOR", "2017-08-02");


/*  Execute this file from the command line by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql
 *  For example, on a pairing station, it'll be
 *    mysql -u student -p < schema.sql
 *  and then you'll have to enter the password, student
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
*/