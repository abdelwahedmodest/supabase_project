// Browser version of the Supabase client

// Function to get URL parameters (for demo purposes)
function getUrlParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// In a real application, you would securely retrieve these values
// For demo purposes, we can use URL parameters or hardcoded test values
const urlKey = getUrlParam('url_key') || 'https://your-supabase-url.supabase.co';
const secretKey = getUrlParam('secret_key') || 'your-supabase-anon-key';

// Initialize Supabase client using the global supabase object
const supabase = supabase.createClient(urlKey, secretKey);

async function fetchData() {
  try {
    // Get reference to the state list element
    const stateList = document.getElementById('state-list');
    
    // The loading message is already in the HTML
    
    const { data, error } = await supabase
      .from('state')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error.message);
      stateList.innerHTML = `<li class="error">Error: ${error.message}</li>`;
      return;
    }

    // Clear loading message
    stateList.innerHTML = '';
    
    // Check if we have data
    if (!data || data.length === 0) {
      stateList.innerHTML = '<li>No states found in the database.</li>';
      return;
    }

    // Loop through the data and append to the list
    data.forEach((state) => {
      const li = document.createElement('li');
      
      // Display more information if available
      let stateInfo = `<strong>${state.name}</strong>`;
      
      if (state.population) {
        stateInfo += ` - Population: ${state.population.toLocaleString()}`;
      }
      
      if (state.capital) {
        stateInfo += ` - Capital: ${state.capital}`;
      }
      
      if (state.region) {
        stateInfo += ` - Region: ${state.region}`;
      }
      
      li.innerHTML = stateInfo;
      stateList.appendChild(li);
    });
  } catch (err) {
    console.error('Unexpected error:', err.message);
    const stateList = document.getElementById('state-list');
    stateList.innerHTML = `<li class="error">Unexpected error: ${err.message}</li>`;
  }
}

// Call fetchData when the page loads
document.addEventListener('DOMContentLoaded', fetchData);