import { createServer } from "node:http";
import { createApp, toNodeListener } from "h3";
import vike from "vike-node/h3";

const PORT = Number(process.env.PORT) || 3000;

const app = createApp();

app.use(vike());

const server = createServer(toNodeListener(app)).listen(PORT);

server.on("listening", () => {
  console.log(`Server listening on http://localhost:${String(PORT)}`);
});
