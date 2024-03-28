-- Organizations
CREATE DATABASE vega;
CREATE TABLE organizations (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Items
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  type VARCHAR(20) NOT NULL CHECK (type IN ('perishable', 'non-perishable')),
  description TEXT NOT NULL
);

-- Pricing
CREATE TABLE pricing (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER NOT NULL REFERENCES organizations(id),
  item_id INTEGER NOT NULL REFERENCES items(id),
  zone VARCHAR(50) NOT NULL,
  base_distance_in_km FLOAT NOT NULL,
  base_price INTEGER NOT NULL,
  km_price INTEGER NOT NULL,
  UNIQUE (organization_id, item_id, zone)
);