require('dotenv').config();

// Import the createClient function from Supabase
const { createClient } = require('@supabase/supabase-js');

const urlKey = process.env.url_KEY;
const secretKey = process.env.SECRET_KEY;

// Validate environment variables
if (!urlKey || !secretKey) {
  console.error('Error: Supabase URL or API key is missing. Check your .env file.');
  process.exit(1);
}

// Initialize Supabase client correctly
const supabase = createClient(urlKey, secretKey);

async function fetchData() {
  try {
    const { data, error } = await supabase
      .from('state') // Table name in your database
      .select('*'); // Fetch all columns

    if (error) {
      console.error('Error fetching data:', error.message);
      return;
    }

    // Check if we're in a browser environment
    if (typeof document !== 'undefined') {
      // Reference to the HTML element to display data
      const stateList = document.getElementById('state-list');
      
      if (!stateList) {
        console.error('Error: Element with ID "state-list" not found.');
        return;
      }

      // Loop through the data and append to the list
      data.forEach((state) => {
        const li = document.createElement('li');
        li.textContent = `State: ${state.name}, Population: ${state.population}`;
        stateList.appendChild(li);
      });
    } else {
      // If running in Node.js, just log the data
      console.log('States data:', data);
    }
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

// Call fetchData to get data and render on the page
fetchData();

// Export the function for potential reuse
module.exports = { fetchData };