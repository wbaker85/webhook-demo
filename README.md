<!-- docker-compose up -d

psql -h localhost -p 5431 -d postgres -U postgres --password
...this will connect to the database

CREATE TABLE testTable (
  id serial PRIMARY KEY,
  val1 varchar(50),
  val2 bool
);

INSERT INTO testTable (val1, val2) VALUES
  ('hello', true), ('goodbye', false); -->

curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://whateverurl/webhook