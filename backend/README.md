# Leaderboard Project

This project is a web application that provides a leaderboard functionality. It is built using Node.js, Express.js, MongoDB, and Zod for schema validation.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is designed to provide a leaderboard functionality where users can see the ranking based on the scores. It includes features such as user registration, score updates, and leaderboard display.

## Installation

To install and set up the project on your machine, follow these steps:

1. Clone the repository: `git clone https://github.com/username/projectname.git`
2. Navigate to the project directory: `cd projectname`
3. Install dependencies: `npm install`
4. Set up your environment variables in a `.env` file in the root directory. You will need:
    - `DB_URI`: MongoDB connection string
    `SECRET`: A secret key for signing JSON Web Tokens

## Usage

To start the server, run `npm start`. The application will be accessible at `http://localhost:3000`.

## Routes

- `GET /leaderboard`: Retrieve the leaderboard.
- `POST /add`: Add a new user to the leaderboard. The request body should contain `name`, `regNo`, `Department`, and `score`.
- `DELETE /delete`: Delete a user from the leaderboard. The request body should contain `regNo`.
- `PUT /update`: Update a user's score. The request body should contain `regNo` and the score to be added.

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) for more information.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.