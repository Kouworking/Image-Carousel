DROP DATABASE IF EXISTS Nicole;

CREATE DATABASE Nicole;

USE Nicole;

CREATE TABLE listings (
  listing_id int NOT NULL AUTO_INCREMENT,
  listing_name VARCHAR (255),
  PRIMARY KEY (listing_id)
);

CREATE TABLE photos (
  photo_id int NOT NULL AUTO_INCREMENT,
  photo_url VARCHAR(2083),
  listing_id int NOT NULL,
  PRIMARY KEY (photo_id), 
  FOREIGN KEY(listing_id) REFERENCES listings (listing_id)
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