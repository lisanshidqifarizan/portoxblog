import mongoose from "mongoose";
import Posts from "./Posts";
import Users from "./Users";
import Comments from "./Comments";

const registeredModels = {
    Posts: mongoose.models.Posts || Posts,
    Users: mongoose.models.Users || Users,
    Comments: mongoose.models.Comments || Comments,
}

export default registeredModels;