import express from "express";
import * as UserServices from './repository/songAPI.js'

const app = express ();
const port = 8080;
const host = "localhost";
app.use(express.json());
app.get("/songs", UserServices.getSongs);
app.post("/songs", UserServices.addSongs);
app.put("/songs/:id", UserServices.updateSongs);
app.delete("/songs/:id", UserServices.deleteSongs);
app.get("/songs/:id", UserServices.getSongById);
app.get("/favorite", UserServices.getSongsByFavorite);
app.get("/genre", UserServices.getSongsByGenre);
app.listen(port, host, ()=> {
    console.log(`Server berjalan di http://${host}:${port}`)
})