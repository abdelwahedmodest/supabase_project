# Supabase States Data Viewer - Documentation

## Overview

The Supabase States Data Viewer is a simple web application that demonstrates how to use Supabase as a backend database service with a JavaScript frontend. It retrieves information about states (names, populations, capitals, and regions) from a Supabase table and displays them in a list format on a web page.

## Getting Started

### Prerequisites

- Node.js and npm installed on your system
- A Supabase account (free tier is sufficient)
- Basic knowledge of JavaScript and SQL

### Installation

1. Clone the repository to your local machine
2. Run the setup script to install dependencies and create the necessary configuration files:
   ```
   ./setup.sh
   ```
   Or manually install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with your Supabase credentials:
   ```
   url_KEY=your_supabase_url
   SECRET_KEY=your_supabase_anon_key
   ```
   You can find these credentials in your Supabase project dashboard under Project Settings > API.

### Setting Up Supabase

1. Create a new project in [Supabase](https://supabase.com/)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL commands from `setup.sql` to create the 'state' table and insert sample data
4. Ensure that Row Level Security (RLS) is configured appropriately for your needs

## Running the Application

### Browser Application

The application is designed to run in a browser. You can:

1. Open `index.html` directly in your web browser
2. Or serve it using a local server:
   ```
   npm start
   ```
   This will start a local server using the `serve` package.

### Testing the Connection

To test your Supabase connection before running the full application:

```
npm run test:connection
```

This script will verify that your Supabase credentials are working correctly and check if the 'state' table exists.

### Server-Side Testing

For server-side testing, you can run:

```
npm test
```

This will execute the Node.js version of the application, which fetches data from your Supabase database and logs it to the console.

## Project Structure

- `index.html` - The main HTML file that displays the states list
- `client.js` - Browser-compatible JavaScript file for fetching and displaying data
- `test.js` - Node.js version for server-side testing and development
- `test-connection.js` - Script to test the Supabase connection
- `setup.sql` - SQL file with table creation and sample data
- `setup.sh` - Setup script to help with installation
- `.env` - Environment variables file (not tracked in git)
- `package.json` - Project dependencies and configuration
- `styles.css` - CSS styles for the application

## Customization

### Modifying the Database Schema

If you want to modify the database schema:

1. Edit the `setup.sql` file to change the table structure or sample data
2. Run the updated SQL in your Supabase SQL Editor
3. Update the JavaScript code in `client.js` and `test.js` to match your new schema

### Styling Changes

To modify the appearance of the application:

1. Edit the `styles.css` file to change colors, layout, or other visual aspects
2. Or modify the styles directly in the `index.html` file

## Troubleshooting

### Connection Issues

If you're having trouble connecting to Supabase:

1. Verify that your `.env` file contains the correct URL and API key
2. Check that your Supabase project is active
3. Run the connection test script: `npm run test:connection`
4. Check your browser console for any error messages

### Data Not Displaying

If the data isn't displaying correctly:

1. Ensure that the 'state' table exists in your Supabase database
2. Verify that the table has data by checking in the Supabase Table Editor
3. Check that your RLS policies allow reading data from the table

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase JavaScript Client](https://github.com/supabase/supabase-js)
- [Dotenv Documentation](https://github.com/motdotla/dotenv)