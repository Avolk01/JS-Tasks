CREATE TABLE IF NOT EXISTS kinopoisk."film-genre"
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    film_id bigint NOT NULL,
    genre_id bigint NOT NULL,
    CONSTRAINT "film-genre_pkey" PRIMARY KEY (id),
    CONSTRAINT film_fkey FOREIGN KEY (film_id)
        REFERENCES kinopoisk.film (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT genre_fkey FOREIGN KEY (genre_id)
        REFERENCES kinopoisk.genre (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk."film-genre"
    OWNER to postgres;