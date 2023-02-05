import { Server } from "socket.io";
import { app } from "./index.js";

const port = 8080;

const httpServer = app.listen(port, () => {
  console.log(`Server running ata port ${port}`);
});

const io = new Server (httpServer)