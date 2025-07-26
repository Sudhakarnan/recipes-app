# Recipes App

A simple CRUD application for managing recipes using Node.js, Express.js, MongoDB, and Mongoose, following the MVC pattern.

## Features

- Create, Read, Update, Delete (CRUD) operations for recipes
- Follows MVC architecture
- REST API with detailed Postman documentation
- MongoDB integration using Mongoose

## Installation

1. Clone the repository:
    ```bash
    git clone <your-repo-url>
    cd recipes-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up your `.env` file (see sample in this project):
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    ```

4. Start the server:
    ```bash
    npm run dev
    ```
    or
    ```bash
    node app.js
    ```

5. Open [http://localhost:5000](http://localhost:5000) in your browser.

## API Endpoints

Base URL: `/api/recipes`

- `POST /api/recipes` - Create a recipe
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a recipe by ID
- `PUT /api/recipes/:id` - Update a recipe by ID
- `DELETE /api/recipes/:id` - Delete a recipe by ID

## Sample Request (using Postman)

**Create Recipe**

- POST `http://localhost:5000/api/recipes`
- Body (JSON):
  ```json
  {
    "title": "Pasta",
    "ingredients": ["noodles", "sauce", "cheese"],
    "instructions": "Boil noodles. Add sauce. Sprinkle cheese."
  }
