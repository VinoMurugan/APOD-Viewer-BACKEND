# Apod Viewer Backend

This is the backend component of the Apod Viewer project, designed to fetch and manage data from NASA's Astronomy Picture of the Day (APOD) API. The backend is responsible for serving APOD data to the frontend of the application.

## Frontend Repository

For the frontend component of the Apod Viewer, you can find the GitHub repository here:
[Apod Viewer Frontend Repository](https://github.com/VinoMurugan/APOD-Viewer-FRONTEND)

## Project Structure

### `server.js`

The main server file (`server.js`) sets up the Express server, connects to the database, and defines routes. Key elements in this file include:

- **Express Setup**: Configures the Express server.
- **Database Connection**: Establishes a connection to MongoDB using the connection details provided in `.env`.
- **Middleware**: Utilizes various middleware components like `express.json()`, `cors`, and `method-override`.
- **Logging Middleware**: Logs requests for debugging and tracking purposes.
- **Routes**: Defines the routes for managing APOD data.

### `.env`

The `.env` file contains configuration settings, including the `PORT` for the server and the `MONGODB_URI` for connecting to the MongoDB database.

### `routes/apods.js`

The `apods.js` file contains route definitions for the APOD entries, including listing, creation, display, editing, and deletion of APOD data.

### `models/apods.js`

The `apods.js` file defines the data schema for APOD entries using Mongoose. It specifies the structure of each APOD entry, including its date, title, explanation, URL, and media type.

### `config/database.js`

The `database.js` file contains the code to establish a connection to the MongoDB database using the `MONGODB_URI` from the `.env` file.

## Issues and Challenges

During the development of the backend, a few challenges were encountered:

1. **API Key**: The project requires an API key for accessing NASA's APOD API. Handling and securely storing the API key are key challenges being addressed.

2. **Local Host Port**: There were difficulties in configuring the local host port (`PORT`) for the server. Correct port configuration is essential for the application's proper functionality.

## Getting Started

To run the backend locally, follow these steps:

1. Ensure MongoDB is installed and running.
2. Set up the `.env` file with your `PORT` and `MONGODB_URI`.
3. Install project dependencies using `npm install`.
4. Start the server using `npm start`.

Feel free to contribute to the project, provide feedback, or report any issues.

Thank you for exploring the Apod Viewer Backend!
