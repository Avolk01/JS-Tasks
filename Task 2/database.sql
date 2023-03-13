CREATE ROLE films_user WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  ENCRYPTED PASSWORD 'SCRAM-SHA-256$4096:uHmlXtlS2I2/4JLg4t+nNQ==$cbDb/Xh2iDmOIxgHUh+xBTaco9brIP0IGI78EiZMXB8=:O6g6rnsI7IGlrxD4daUPluGz+/dybR6d0CNabrgmCGk='

CREATE DATABASE films
    WITH
    OWNER = films_user
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE SCHEMA IF NOT EXISTS films
    AUTHORIZATION films_user;

CREATE TABLE IF NOT EXISTS films.film
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    film_name text COLLATE pg_catalog."default" NOT NULL,
    released numeric NOT NULL,
    genre_id bigint NOT NULL,
    CONSTRAINT film_pkey PRIMARY KEY (id),
    CONSTRAINT genre_fkey FOREIGN KEY (genre_id)
        REFERENCES films.genre (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS films.film
    OWNER to films_user;


CREATE TABLE IF NOT EXISTS films.genre
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    genre_name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT genre_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS films.genre
    OWNER to films_user;