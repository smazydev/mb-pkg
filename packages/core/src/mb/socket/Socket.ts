import { io } from "socket.io-client";

class Socket {
  public socket;

  constructor() {
    this.socket = io("http://localhost:4000");
  }
}

export default Socket;