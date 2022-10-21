import React from "react";

import closeIcon from "../../icons/closeIcon.png";
import "./Header.css";

const Header = ({ room }) => {
	return (
		<div className='infoBar'>
			<div className='leftInnerContainer'>
				<h3>{room}</h3>
			</div>
			<div className='rightInnerContainer'>
				<a href='/'>
					<img src={closeIcon} alt='close-btn' />
				</a>
			</div>
		</div>
	);
};

export default Header;
