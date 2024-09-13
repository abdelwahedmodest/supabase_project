
const supabase = supabase.createClient('https://bjsmxgyewzksffwbxstc.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqc214Z3lld3prc2Zmd2J4c3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjM1MDIsImV4cCI6MjA0MTUzOTUwMn0.5yhDNOXpJLsmM96O4REFZXVzPULHDPgWkVAROxg7rdQ');

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