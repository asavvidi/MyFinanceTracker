CREATE DATABASE finance_trcker


--Create the tables


CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(55) NOT NULL,
    last_name VARCHAR(55) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE incomes(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    source VARCHAR(55) NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL CHECK (year>=2015),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    
);

CREATE TABLE expenses(
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(55) NOT NULL,
    month INT NOT NULL,
    year INT NOT NULL CHECK (year>=2015),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
   
);


-- Insert the first values

--For the user
INSERT INTO users(first_name,last_name,email,password) VALUES ('Alexandros','Savvidis','alex4973@gmail.com','2397065890');


--For the incomes of the user
INSERT INTO incomes(user_id,amount,source,month,year) VALUES((SELECT id FROM users WHERE email='alex4973@gmail.com'),1000,'Salary',10,2024)


--For the expenses of the user
INSERT INTO expenses (user_id, amount, category, month, year) 
VALUES (
    (SELECT id FROM users WHERE email = 'alex4973@gmail.com'), 
    800, 
    'Housing', 
    10, 
    2024
);