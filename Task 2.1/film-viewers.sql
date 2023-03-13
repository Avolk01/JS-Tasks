CREATE TABLE IF NOT EXISTS kinopoisk."film-viewers"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    film_id bigint NOT NULL,
    viewers_id bigint NOT NULL,
    CONSTRAINT "film-viewers_pkey" PRIMARY KEY (id),
    CONSTRAINT film_fkey FOREIGN KEY (film_id)
        REFERENCES kinopoisk.film (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT veiwers_fkey FOREIGN KEY (viewers_id)
        REFERENCES kinopoisk.viewers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk."film-viewers"
    OWNER to postgres;