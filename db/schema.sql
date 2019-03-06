-- CREATE DATABASE burgers_db;

-- Use programming db for the following statements --
USE burgers_db;

  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  
  CREATE TABLE burgers (
  id INTEGER(50) AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR (100)NOT NULL,
  devoured BOOLEAN DEFAULT false,
  primary key (id)
);