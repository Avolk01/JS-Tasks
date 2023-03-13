CREATE TABLE IF NOT EXISTS kinopoisk.parameters
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    audio text COLLATE pg_catalog."default" NOT NULL,
    subtitles text COLLATE pg_catalog."default" NOT NULL,
    quality text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT parameters_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS kinopoisk.parameters
    OWNER to postgres;