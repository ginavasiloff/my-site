CREATE TABLE IF NOT EXISTS media (
  id serial not null,
  title varchar(255) not null,
  primary key (id)
);

CREATE TABLE IF NOT EXISTS users {
  id serial PRIMARY KEY,
  email varchar(255) not null,
  password varchar(255) not null
  primary key (id)
}
