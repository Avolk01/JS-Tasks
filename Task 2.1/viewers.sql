CREATE TABLE IF NOT EXISTS kinopoisk.viewers
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    country text COLLATE pg_catalog."default" NOT NULL,
    "number" numeric NOT NULL,
    CONSTRAINT viewers_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk.viewers
    OWNER to postgres;