const db = require('../../database.js');

const createGenre = async (req, res) => {
    const { genreName } = req.body;
    const genre = await db.query(`  INSERT INTO films.genre 
                                    (genre_name)
                                    VALUES ($1) 
                                    RETURNING *                               
                                    `, [genreName]);
    res.send(genre.rows[0]);
}

const getGenre = async (req, res) => {
    const id = req.params.id
    const genre = await db.query(`  SELECT * FROM films.genre 
                                    WHERE id = $1                             
                                    `, [id]);
    res.send(genre.rows[0]);
}

const updateGenre = async (req, res) => {
    const id = req.params.id
    const { genreName } = req.body;
    const genre = await db.query(`  UPDATE films.genre
                                    SET genre_name = $1 
                                    WHERE id = $2
                                    RETURNING *                            
                                    `, [genreName, id]);
    res.send(genre.rows[0]);
}

const deleteGenre = async (req, res) => {
    const id = req.params.id
    const genre = await db.query(`  DELETE FROM films.genre WHERE id = $1
                                    RETURNING *`, [id]);
    res.send(genre.rows[0]);
}

module.exports = {
    createGenre,
    getGenre,
    updateGenre,
    deleteGenre
}
