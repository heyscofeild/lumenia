CREATE DATABASE luminia;
--//users table
CREATE TABLE users(      
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

--//teachers table

CREATE TABLE teachers (
  user_id UUID PRIMARY KEY,  
  full_name VARCHAR(255) NOT NULL,
  business_email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  address TEXT,
  description TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

--//learners table
CREATE TABLE learners (
  user_id UUID PRIMARY KEY, 
  full_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20),
  goals TEXT,
  address TEXT,
  description TEXT,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
