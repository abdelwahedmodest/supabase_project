require('dotenv').config();

const urlKey = process.env.url_KEY;
const secretKey = process.env.SECRET_KEY;
console.log(secretKey); // Access the secret key

const supabase = supabase.createClient(urlKey,secretKey);

async function fetchData() {
  const { data, error } = await supabase
    .from('state') // Table name in your database
    .select('*'); // Fetch all columns

  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }

  // Reference to the HTML element to display data
  const stateList = document.getElementById('state-list');

  // Loop through the data and append to the list
  data.forEach((state) => {
    const li = document.createElement('li');
    li.textContent = `State: ${state.name}, Population: ${state.population}`;
    stateList.appendChild(li);
  });
}

// Call fetchData to get data and render on the page
fetchData();