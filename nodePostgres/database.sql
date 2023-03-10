
CREATE ROLE node_postgres WITH
  LOGIN
  SUPERUSER
  INHERIT
  CREATEDB
  CREATEROLE
  NOREPLICATION
  ENCRYPTED PASSWORD 'SCRAM-SHA-256$4096:c3GbnT/CekJmkZWgfzr3HA==$DIhx04VxpIhcd4hzW+N0OZgrZq9o/0kbEvYpR5PojcY=:z+Jb5JemjIkj3hrT+379E5vrPh8zhwBIC1jSAN1euxo=';

CREATE DATABASE node_postgres
    WITH
    OWNER = node_postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

CREATE SCHEMA IF NOT EXISTS node_postgres
    AUTHORIZATION node_postgres;

    CREATE TABLE IF NOT EXISTS node_postgres.person
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    user_name text COLLATE pg_catalog."default" NOT NULL,
    user_surname text COLLATE pg_catalog."default",
    CONSTRAINT person_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS node_postgres.person
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS node_postgres.post
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    title text COLLATE pg_catalog."default" NOT NULL,
    content text COLLATE pg_catalog."default" NOT NULL,
    user_id bigint NOT NULL,
    CONSTRAINT post_pkey PRIMARY KEY (id),
    CONSTRAINT user_fkey FOREIGN KEY (user_id)
        REFERENCES node_postgres.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS node_postgres.post
    OWNER to postgres;