import { io, Socket } from "socket.io-client";
const socket: Socket = io(process.env.NEXT_PUBLIC_API_SOCKET_ENDPOINT);
socket.on("connect", () => {});

export { socket };
