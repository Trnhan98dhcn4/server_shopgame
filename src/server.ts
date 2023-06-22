import app from "./app";
import mongoose from "mongoose";

import env from "./utils/validateEnv";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECTION_STRING).then(() => {
  console.log("connection SQL MONGODB !!!!");
  app.listen(port, () => {
    console.log("server running at http://localhost:" + port);
  });
});
