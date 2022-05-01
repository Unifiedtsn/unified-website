import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Ul = styled.ul`
	list-style: none;
	display: flex;
	flex-flow: row nowrap;
	li {
		padding: 18px 10px;
	}
	@media (max-width: 768px) {
		flex-flow: column nowrap;
		background-color: rgba(0, 94, 168, 0.98);
		position: fixed;
		transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
		top: 0;
		right: 0;
		height: 100vh;
		width: 54%;
		padding-top: 3.5rem;
		transition: transform 0.3s ease-in-out;
		li {
			color: #fff;
		}
	}
`;

const RightNav = ({ open }) => {
	return (
		<Ul open={open}>
			<Link
				style={{ color: '#fffafa', fontSize: '2em', marginTop: 40 }}
				to='/home'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				Home
			</Link>
			<Link
				style={{ color: '#fffafa', fontSize: '2em', marginTop: 40 }}
				to='/roadmap'
				spy={true}
				smooth={true}
				offset={-100}
				duration={500}
			>
				Roadmap
			</Link>
			<Link
				style={{ color: '#fffafa', fontSize: '2em', marginTop: 40 }}
				to='/services'
				spy={true}
				smooth={true}
				offset={-50}
				duration={500}
			>
				About
			</Link>
			<Link
				style={{ color: '#fffafa', fontSize: '2em', marginTop: 40 }}
				to='/theteam'
				spy={true}
				smooth={true}
				offset={0}
				duration={500}
			>
				The Team
			</Link>
		</Ul>
	);
};

export default RightNav;
