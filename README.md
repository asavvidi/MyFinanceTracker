# MyFinanceTracker 💰

MyFinanceTracker is a personal finance management app that helps users track their incomes and expenses, visualize financial trends using charts, and manage their financial records securely.

## Overview

The app allows users to register or log in, manage their income and expenses, and view a graphical representation of their financial data. It is built with:

- **React** for the frontend
- **Express & Node.js** for the backend
- **Sequelize ORM** for database interaction
- **JWT authentication** for user security

## Features

- **User Authentication:** Register and log in securely using JWT authentication.
- **Add & Manage Transactions:** Add **incomes and expenses**, categorized by month and year.
- **Delete Transactions:** Remove unwanted income or expense entries.
- **Financial Charts:** View a graphical representation of monthly financial activity using **Chart.js**.
- **Persistent Storage:** Data is stored in a **PostgreSQL database** using **Sequelize ORM**.

## Technologies Used

- **Node.js:** Backend JavaScript runtime environment.
- **Express:** Web application framework for handling routes and middleware.
- **React:** Frontend library for building the user interface.
- **JWT (JSON Web Tokens):** Secure authentication and authorization.
- **Sequelize ORM:** Database management for PostgreSQL.

## Requirements

Ensure you have the following set up:

- [Node.js](https://nodejs.org/) (v16 or higher) installed in your machine.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/MyFinanceTracker.git
cd MyFinanceTracker
```

2. Install dependencies on the root folder:

```bash
npm install
```

3. Move to the backend folder, install dependencies, create an .env file and set the environmental variables following the .env.example file:

```bash
cd backend
npm install
touch .env
```

4. Move to the frontend folder (from the root folder), install dependencies, create an .env file and set the environmental variables following the .env.example file:

```bash
cd frontend
npm install
touch .env
```

## Start

To run the app, you need to start the backend server and the frontend server.

### Start the backend server

To start the backend server, run the following commands in a terminal:

```bash
cd backend
npm run dev
```

### Start the frontend server

To start the frontend server, run the following commands in a new terminal:

```bash
cd frontend
npm run dev
```

### Access the App

Once both servers are running, open your browser and navigate to:

```arduino
http://localhost:PORT
```

Replace `PORT` with the port number where your frontend server is running (e.g., `3000`).

## Managing Finances

- **Add Income:** Enter amount, category, and date to log an income.
- **Add Expense:** Enter amount, category, and date to log an expense.
- **Delete Transactions:** Click on an entry to remove it.
- **View Financial Trends** Line chart showing income vs. expenses over time.

## License

This project is licensed under the MIT License
