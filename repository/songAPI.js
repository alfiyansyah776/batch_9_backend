import * as UserRepo from './userRepository.js'
import { successResp } from '../utils/respons.js'

export const addSongs = async(request, respons, next) => {
    try {
        let artist = request.body.artist
        let title = request.body.title
        let is_favorite = request.body.is_favorite
        let genre = request.body.genre
        const [result] = await UserRepo.addSongs(artist, title, is_favorite, genre);
        successResp(respons, "success menambahkan data", {song_id: result.insertId}, 201);
        
    } catch (error) {
        next(error)
    }    
}

export const getSongs = async (request, respons, next) => {
    try{
        const [result] = await UserRepo.getSongs(100)
        successResp(respons, "success mengambil data", result)
    } catch (error){
        next(error);
    }
}


export const updateSongs = async (request, respons, next) => {
    try{
        let artist = request.body.artist
        let title = request.body.title
        let is_favorite = request.body.is_favorite
        let genre = request.body.genre
        let song_id = request.params.id 
        const [result] = await UserRepo.updateSongs(artist, title, is_favorite, genre, song_id);
        successResp(respons, "success memperbarui data", result, 201);
    }catch (error){
        next (error);
    }
}

export const deleteSongs = async (request, respons, next) => {
    try {
        let song_id = request.params.id
        const [result] = await UserRepo.deleteSongs(song_id);
        successResp(respons, "success menghapus data",result);
    }catch (error) {
        next (error);
    }
}

export const getSongsByFavorite = async (request, respons, next) => {
    try {
        let is_favorite = request.body.is_favorite
        const [result] = await UserRepo.getSongsByFavorite(is_favorite);
        successResp(respons, "success", result);
    } catch (error) {
        next (error)
    }
}

export const getSongsByGenre = async (request, respons, next) => {
    try {
        let genre = request.body.genre
        const [result] = await UserRepo.getSongsByGenre(genre);
        successResp(respons, "success", result);
    } catch (error) {
        next (error)
    }
}

export const getSongById = async (request, respons, next) => {
    console.log(request.params.id);
    try {
        let id = request.params.id
        const [result] = await UserRepo.getSongById(id)
        successResp(respons, "success", result[0])
    } catch (error) {
        next (error)
    }
}

