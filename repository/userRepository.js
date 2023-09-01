/* Membuat operasi crud berupa :

1. Menambahkan lagu
2. Mengupdate lagu
3. Menghapus lagu
4. Menampilkan semua lagu
5. Menampilkan lagu berdasarkan genre
6. Menampilkan lagu berdasarkan favorit

*/

import dbpool from "../utils/db.js";

export const addSongs = (artist, title, is_favorite, genre) => {
    const sql = "INSERT INTO song (artist, title, is_favorite, genre) VALUE(?,?,?,?)"
    const values = [artist, title, is_favorite, genre]
    return dbpool.query(sql, values)
}

export const updateSongs = (artist, title, is_favorite, genre, song_id) => {
    const sql = "UPDATE songs SET artist = ?, title = ?, is_favorite = ?, genre = ? WHERE song_id = ?"
    const values = [artist, title, is_favorite, genre, song_id]
    return dbpool.query(sql, values)
}

export const deleteSongs = (id) => {
    const sql = "DELETE FROM songs WHERE song_id = ?"
    const values = [id]
    return dbpool.query(sql, values)
}

export const getSongs = (limit) => {
    const sql = "SELECT song_id, artist, title, is_favorite, genre FROM song LIMIT ?"
    const values = [limit]
    return dbpool.query(sql, values)
}

export const getSongsByGenre = (genre) => {
    const sql = "SELECT song_id, artist, title, is_favorite, genre FROM song WHERE genre = ?"
    const values = [genre]
    return dbpool.query(sql, values)
}

export const getSongsByFavorite = (is_favorite) => {
    const sql = "SELECT song_id, artist, title, is_favorite, genre FROM song WHERE is_favorite = ? "
    const values = [is_favorite]
    return dbpool.query(sql, values)
}

export const getSongById = (id) => {
    const sql = "SELECT song_id, artist, title, is_favorite, genre FROM song WHERE song_id = ? "
    const values = [id]
    return dbpool.query(sql, values)
}