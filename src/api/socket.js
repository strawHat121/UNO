import io from "socket.io-client";

export const socket = io.connect("https://uno-backend-strawhat.herokuapp.com/");

socket.reconnectionAttempts = 3;
