import { InferSchemaType, Schema, model } from "mongoose";

const UserSchema = new Schema(
    {
        user: String,
        password: String,
        name: String,
        address: String,
        price: String,
    },
    {
        timestamps: true,
    }
);

type Users = InferSchemaType<typeof UserSchema>;
export default model<Users>("Users", UserSchema);
