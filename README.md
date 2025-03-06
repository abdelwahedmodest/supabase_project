# Supabase States Data Viewer

A simple web application that fetches and displays state data from a Supabase database.

## Project Overview

This project demonstrates how to use Supabase as a backend database service with a JavaScript frontend. It retrieves information about states (names and populations) from a Supabase table and displays them in a list format on a web page.

## Features

- Connects to Supabase using environment variables
- Fetches data from a 'state' table
- Displays state names and populations in a list format
- Handles errors gracefully
- Provides sample data for testing

## Setup Instructions

1. **Clone the repository**

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   - Create a `.env` file in the root directory (if not already present)
   - Add your Supabase URL and anon key:
     ```
     url_KEY=your_supabase_url
     SECRET_KEY=your_supabase_anon_key
     ```

4. **Set up your Supabase database**
   - Create a new project in [Supabase](https://supabase.com/)
   - Go to the SQL Editor in your Supabase dashboard
   - Run the SQL commands from `setup.sql` to create the 'state' table and insert sample data

5. **Run the application**
   - Open `index.html` in a web browser
   - Or serve it using a local server:
     ```
     npx serve
     ```

## Project Structure

- `index.html` - The main HTML file that displays the states list
- `client.js` - Browser-compatible JavaScript file for fetching and displaying data
- `test.js` - Node.js version for server-side testing and development
- `setup.sql` - SQL file with table creation and sample data
- `.env` - Environment variables file (not tracked in git)
- `package.json` - Project dependencies and configuration

## Usage

### Browser Usage

The application is designed to run in a browser. Simply open `index.html` after setting up your Supabase project.

### Server-Side Testing

For server-side testing, you can run:

```
node test.js
```

This will fetch the data from your Supabase database and log it to the console.

## Dependencies

- [@supabase/supabase-js](https://github.com/supabase/supabase-js) - Supabase JavaScript client
- [dotenv](https://github.com/motdotla/dotenv) - Environment variables loader

## License

ISC