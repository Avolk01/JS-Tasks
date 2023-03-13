CREATE TABLE IF NOT EXISTS kinopoisk.info
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    released numeric NOT NULL,
    country text COLLATE pg_catalog."default" NOT NULL,
    slogan text COLLATE pg_catalog."default" NOT NULL,
    director_id bigint NOT NULL,
    screenwriter_id bigint NOT NULL,
    producer_id bigint NOT NULL,
    operator_id bigint NOT NULL,
    composer_id bigint NOT NULL,
    art_director_id bigint NOT NULL,
    editor_id bigint NOT NULL,
    budget numeric NOT NULL,
    marketing numeric NOT NULL,
    fees_usa numeric NOT NULL,
    fees_world numeric NOT NULL,
    premier_rus date NOT NULL,
    premier_world date NOT NULL,
    age numeric NOT NULL,
    mppa_rating text COLLATE pg_catalog."default" NOT NULL,
    duration numeric NOT NULL,
    CONSTRAINT info_pkey PRIMARY KEY (id),
    CONSTRAINT art_director_fkey FOREIGN KEY (art_director_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT composer_fkey FOREIGN KEY (composer_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT director_fkey FOREIGN KEY (director_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT editor_fkey FOREIGN KEY (editor_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT operator_fkey FOREIGN KEY (operator_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT producer_fkey FOREIGN KEY (producer_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT screenwriter_fkey FOREIGN KEY (screenwriter_id)
        REFERENCES kinopoisk.person (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk.info
    OWNER to postgres;