import express from "express";
import {
  countByCity,
  createHotel,
  deleteHotel,
  deleteHotelphoto,
  getHotel,
  getHotelRooms,
  getHotels,
  getAllHotel,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
router.delete("/photos/:id", verifyAdmin, deleteHotelphoto);
//GET

router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getHotels);
router.get("/admin/", getAllHotel);
router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;
