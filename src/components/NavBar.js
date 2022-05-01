import styled from 'styled-components';
import { Link } from 'react-scroll';
import Burger from './Burger';
import { useState } from 'react';

const NavBar = () => {
	const [resized, setResized] = useState(window.innerWidth);

	console.log(resized);

	window.addEventListener('resize', function (event) {
		setResized(window.innerWidth);
	});

	return (
		<Container>
			<NavContainer>
				<PageConstraints>
					<LogoSide>
						{/* <Logo src={logo} /> */}
						<LogoText>Unified</LogoText>
					</LogoSide>
					{resized > 768 ? (
						<OptionsSide>
							<Link
								style={{ color: '#303030' }}
								to='/home'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
							>
								Home
							</Link>
							<Link
								style={{ color: '#303030' }}
								to='/roadmap'
								spy={true}
								smooth={true}
								offset={-100}
								duration={500}
							>
								Roadmap
							</Link>
							<Link
								style={{ color: '#303030' }}
								to='/services'
								spy={true}
								smooth={true}
								offset={-50}
								duration={500}
							>
								About
							</Link>
							<Link
								style={{ color: '#303030' }}
								to='/theteam'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}
							>
								The Team
							</Link>
						</OptionsSide>
					) : (
						<OptionsSide>
							<Burger />
						</OptionsSide>
					)}
				</PageConstraints>
			</NavContainer>
		</Container>
	);
};

const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: pink;

	z-index: 3;
`;

const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 1200px;
	height: 80px;
	background-color: #fffafa;
	position: fixed;
	z-index: 2;
	@media (max-width: 1200px) {
		width: 100%;
	}
`;

const PageConstraints = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;

const LogoSide = styled.div`
	display: flex;
	flex-direction: row;
	width: 20%;
	align-items: center;
`;

const LogoText = styled.p`
	font-family: 'Pacifico', cursive;
	font-size: 30px;
	color: #303030;
	margin-left: 20%;
	z-index: 3;
`;

const OptionsSide = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 50%;
	margin-right: 5%;
`;

const NavOption = styled.p`
	color: #303030;
	// margin-right: 5%;
`;

export default NavBar;
