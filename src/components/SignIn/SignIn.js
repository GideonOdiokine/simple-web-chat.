import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

const SignIn = () => {
	const [name, setName] = useState("");
	const room = "Gideon";

	return (
		<div className='joinOuterContainer'>
			<div className='joinInnerContainer'>
				<h1 className='heading'>Login</h1>
				<div>
					<input
						placeholder='Name'
						className='joinInput'
						type='text'
						onChange={(event) => setName(event.target.value)}
					/>
				</div>
				<Link
					onClick={(event) => (!name || !room ? event.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}>
					<button className='button mt-20' type='submit'>
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default SignIn;
