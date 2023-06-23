import { InferSchemaType, Schema, model } from "mongoose";

export const diskGame = new Schema(
    {
        img1: String,
        img2: String,
        title: String,
        price: String,
        Tabs: String,
        videoId: String,
        code: String,
    },
    {
        timestamps: true,
    }
);

type diskGameType = InferSchemaType<typeof diskGame>;
export default model<diskGameType>("DiskGames", diskGame);
