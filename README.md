# Rock and Roll Records API

This is a simple Node.js API that serves data about rock and roll records from the 60s to the 80s. The data includes the title of the album, date of release, and the name of the band.

## Code Explanation

The application uses the Express.js framework to create the API. It reads data from a CSV file using the csv-parser library and stores it in memory. The API has four endpoints:

1. `/api/records`: Returns the entire data set in JSON format.
2. `/api/records/:name`: Retrieves any single album record by name or partial name.
3. `/api/records/date/:date`: Retrieves records by date or range of dates.
4. `/api/records/band/:band`: Retrieves albums by band name or partial band name.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.

## Running the Application

1. Start the server by running `node server.js` in the terminal.
2. The server will start on port 8080.

## Testing the API

You can test the API using a tool like Postman or curl from the command line. Here are some examples:

1. To get all records: Send a GET request to `http://localhost:8080/api/records`
2. To get a record by name: Send a GET request to `http://localhost:8080/api/records/Album1`
3. To get records by date: Send a GET request to `http://localhost:8080/api/records/date/1960`
4. To get records by band: Send a GET request to `http://localhost:8080/api/records/band/Band1`

Replace `Album1`, `1960`, and `Band1` with the actual album name, date, and band name you are looking for.

## Docker Deployment

1. Build the Docker image: `docker build -t my-node-app .`
2. Run the Docker container: `docker run -p 8080:8080 -d my-node-app`

Now your application should be running in a Docker container and accessible at `http://localhost:8080`.

## AI Prompt:
USE THE ROLE OF A SOFTWARE ENGINEER:

Create a Node.js server application. The server should listen for api requests on port 8080 and responds in json. This should be designed to run in a container.

Create the Dockerfile for running the application. I will need help to get this running on my laptop.

Create a csv data set that includes the top rock and roll records from the 60s to the 80s and includes title of album, date of release, and name the band. \

Create the Node.js api code to read the csv file and respond to the api requests. The api should include:

return the entire data set in json
retreive any single album record by name or partial name
retreive records by date or range of dates
retreive albums by band name or partial
Once i create these files I will need instruction on getting the container deployed using docker-ce