const db = require('../../database.js');

const createFilm = async (req, res) => {
    const { filmName, released, genreId } = req.body;
    const film = await db.query(`   INSERT INTO films.film 
                                    (film_name, released, genre_id)
                                    VALUES ($1, $2, $3) 
                                    RETURNING *                               
                                    `, [filmName, released, genreId]);
    res.send(film.rows[0]);
}

const getFilm = async (req, res) => {
    const id = req.params.id
    const film = await db.query(`   SELECT * FROM films.film 
                                    WHERE id = $1                             
                                    `, [id]);
    res.send(film.rows[0]);
}

const updateFilm = async (req, res) => {
    const id = req.params.id
    const { filmName, released, genreId } = req.body;
    const film = await db.query(`   UPDATE films.film
                                    SET film_name = $1,
                                        released = $2,
                                        genre_id = $3
                                    WHERE id = $4
                                    RETURNING *                            
                                    `, [filmName, released, genreId, id]);
    res.send(film.rows[0]);
}

const deleteFilm = async (req, res) => {
    const id = req.params.id
    const film = await db.query(`   DELETE FROM films.film WHERE id = $1
                                    RETURNING *`, [id]);
    res.send(film.rows[0]);
}

module.exports = {
    createFilm,
    getFilm,
    updateFilm,
    deleteFilm
}
