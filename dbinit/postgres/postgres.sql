CREATE TABLE endpoints (
  id serial PRIMARY KEY,
  name varchar(50) NOT NULL,
  path varchar(50) NOT NULL,
  active boolean DEFAULT TRUE
);

CREATE TABLE events (
  id serial PRIMARY KEY,
  endpoint_id int NOT NULL REFERENCES endpoints (id),
  date timestamp NOT NULL,
  doc_id varchar(50) NOT NULL
);

INSERT INTO endpoints (name, path) VALUES
  ('test endpoint', 'test');

INSERT INTO events (endpoint_id, date, doc_id) VALUES 
  (1, CURRENT_TIMESTAMP, 'asdf');