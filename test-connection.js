// Test Supabase connection script
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

// Get environment variables
const urlKey = process.env.url_KEY;
const secretKey = process.env.SECRET_KEY;

// Validate environment variables
if (!urlKey || !secretKey) {
  console.error('Error: Supabase URL or API key is missing. Check your .env file.');
  process.exit(1);
}

console.log('Testing Supabase connection...');
console.log(`URL: ${urlKey.substring(0, 8)}...`); // Only show part of the URL for security

// Initialize Supabase client
const supabase = createClient(urlKey, secretKey);

// Test connection by getting the server timestamp
async function testConnection() {
  try {
    const { data, error } = await supabase.rpc('get_timestamp');
    
    if (error) {
      console.error('Connection test failed:', error.message);
      return;
    }
    
    console.log('Connection successful!');
    console.log('Server timestamp:', data);
    
    // Try to get the state table info
    console.log('\nChecking for "state" table...');
    const { data: tableData, error: tableError } = await supabase
      .from('state')
      .select('count()', { count: 'exact' });
    
    if (tableError) {
      console.error('Could not access "state" table:', tableError.message);
      console.log('Make sure you have created the "state" table using setup.sql');
    } else {
      console.log(`"state" table exists with ${tableData.count} records.`);
    }
    
  } catch (err) {
    console.error('Unexpected error:', err.message);
  }
}

// Run the test
testConnection();