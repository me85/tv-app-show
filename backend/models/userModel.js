import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },

  ability: {
    type: String,
    enum: ["Basic", "gold", "platinum"],
  },
  premissions: {
    updateMovies: { type: Boolean, required: false, default: false },
    createMovies: { type: Boolean, required: false, default: false },
    deleteMovies: { type: Boolean, required: false, default: false },
    CreateSubscriptions: { type: Boolean, required: false, default: true },
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});
