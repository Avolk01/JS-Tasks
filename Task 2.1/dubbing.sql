CREATE TABLE IF NOT EXISTS kinopoisk.dubbing
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    film_id bigint NOT NULL,
    person_id bigint NOT NULL,
    CONSTRAINT dubbing_pkey PRIMARY KEY (id),
    CONSTRAINT film_fkey FOREIGN KEY (film_id)
        REFERENCES kinopoisk.film (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT person_fkey FOREIGN KEY (person_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk.dubbing
    OWNER to postgres;