import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

import InfoBar from "../Header/Header";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const ENDPOINT = "https://chris-react-test-project.herokuapp.com/";

const Chat = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);

	let today = new Date();
	let hours = today.getHours(),
		minutes = today.getMinutes(),
		ampm = "AM";
	if (today.getHours() > 12) {
		hours = today.getHours() - 12;
		ampm = "PM";
	}
	if (today.getMinutes() < 10) {
		minutes = "0" + today.getMinutes();
	}
	let time = hours + ":" + minutes + " " + ampm;

	useEffect(() => {
		const data = window.location.search;
		const { name, room } = queryString.parse(data);

		socket = io(ENDPOINT);

		setName(name);
		setRoom(room);

		socket.emit("join", { name, room }, (error) => {
			if (error) {
				alert(error);
			}
		});

		return () => {
			socket.emit("disconnect");
			socket.off();
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ENDPOINT, window.location.search]);

	useEffect(() => {
		socket.on("message", (message) => {
			setMessages([...messages, message]);
		});
	}, [messages]);

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	return (
		<div>
			<div className='textContainer'>
				<h1>SIMPLE CHAT APP</h1>
			</div>
			<div className='outerContainer'>
				<div className='container'>
					<InfoBar room={room} />
					<Messages messages={messages} name={name} time={time} />
					<Input
						message={message}
						setMessage={setMessage}
						sendMessage={sendMessage}
					/>
				</div>
			</div>
		</div>
	);
};

export default Chat;
