#!/bin/bash

# Setup script for Supabase States Data Viewer

echo "Setting up Supabase States Data Viewer..."

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if .env file exists
if [ ! -f .env ]; then
    echo "Creating .env file with placeholder values..."
    echo "url_KEY=your_supabase_url" > .env
    echo "SECRET_KEY=your_supabase_anon_key" >> .env
    echo ".env file created. Please update it with your actual Supabase credentials."
else
    echo ".env file already exists."
fi

echo ""
echo "Setup complete! To run the application:"
echo "1. Update your .env file with your Supabase credentials"
echo "2. Open index.html in your browser or run 'npx serve' to start a local server"
echo ""
echo "For server-side testing, run: node test.js"