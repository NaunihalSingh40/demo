import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";



const socket: Socket = io("http://localhost:5080");

export const ChatApp = () => {
    const [room, setRoom] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        socket.on("recieve-message", (message) => {
            setMessages((prev) => [...prev, message]);
        });

        return () => {
            socket.off("receive-message");
        };
    }, []);

    const joinRoom = () => {
        socket.emit("join-room", room);
    };

    const addName = () => {
        setName(name);
        socket.emit("add-name", {room, name});
    };

    const sendMessage = () => {
        socket.emit("send-message", {room, message});
        setMessages((prev) => [...prev, `${name}: ${message}`]);
        setMessage("");
    };

    return (
        <div>
          <h1>Chat App</h1>
          <div>
            <input
              type="text"
              placeholder="Room ID"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
            <button onClick={joinRoom}>Join Room</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="user name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addName}>save</button>
          </div>
          <div>
            <input
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send Message</button>
          </div>
          <div>
            <h2>Messages</h2>
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        </div>
      );
}