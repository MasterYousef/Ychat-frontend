import { io, Socket } from "socket.io-client";
import { promise } from "zod";
let socket: Socket | null = null;

function HandleSocket(token: string) {
  return new Promise((resolve, reject) => {
    if (!socket) {
      socket = io(process.env.NEXT_PUBLIC_SOCKET_URL, {
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 5000,
        timeout: 20000,
      });
    }
    socket.on("connect_error", (err) => {
      reject(new Error(err.message));
    });
    socket.on("connect", () => {
      if (socket) socket.emit("auth-server", token);
    });
    socket.on("auth", (message) => {
      if (message.includes("success")) {
        resolve(JSON.parse(message));
      } else {
        reject(new Error(message));
      }
    });
  });
}

function SubscribeMessage(event: string, message: string | object) {
  return new Promise((resolve, reject) => {
    if (socket) {
      socket.emit(event, message);
      socket.on("status", (res) => {
        if (res.status === "success") {
          resolve(res);
        } else {
          reject(res);
        }
      });
    }
  });
}
export { HandleSocket, SubscribeMessage };
