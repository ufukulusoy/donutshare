import io from "socket.io-client";

const socket = io("https://donutshare-api.onrender.com");

export default socket;
