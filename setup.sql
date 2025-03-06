-- Create the 'state' table
CREATE TABLE IF NOT EXISTS state (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  population INTEGER NOT NULL,
  capital TEXT,
  region TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO state (name, population, capital, region) VALUES
('California', 39538223, 'Sacramento', 'West'),
('Texas', 29145505, 'Austin', 'South'),
('Florida', 21538187, 'Tallahassee', 'South'),
('New York', 20201249, 'Albany', 'Northeast'),
('Pennsylvania', 13002700, 'Harrisburg', 'Northeast'),
('Illinois', 12812508, 'Springfield', 'Midwest'),
('Ohio', 11799448, 'Columbus', 'Midwest'),
('Georgia', 10711908, 'Atlanta', 'South'),
('North Carolina', 10439388, 'Raleigh', 'South'),
('Michigan', 10077331, 'Lansing', 'Midwest');

-- Create an index on the name column for faster lookups
CREATE INDEX IF NOT EXISTS idx_state_name ON state(name);