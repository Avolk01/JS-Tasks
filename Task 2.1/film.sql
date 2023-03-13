CREATE TABLE IF NOT EXISTS kinopoisk.film
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    film_name text COLLATE pg_catalog."default" NOT NULL,
    translation text COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default" NOT NULL,
    parameters_id bigint NOT NULL,
    info_id bigint NOT NULL,
    CONSTRAINT film_pkey PRIMARY KEY (id),
    CONSTRAINT info_fkey FOREIGN KEY (info_id)
        REFERENCES kinopoisk.info (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT parameters_fkey FOREIGN KEY (parameters_id)
        REFERENCES kinopoisk.parameters (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk.film
    OWNER to postgres;