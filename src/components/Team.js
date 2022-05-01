import styled from 'styled-components';
import sam from '../assets/sam.png';
import nate from '../assets/nate.png';
import temi from '../assets/temi.png';
import natasha from '../assets/natasha.png';
import teneika from '../assets/teneika.png';

const Team = () => {
	//
	return (
		<BigContainer className='/theteam'>
			<Title>Our Team</Title>
			<Container>
				<Card>
					<Picture src={sam}></Picture>
					<Name>Sam</Name>
					<Job>CEO</Job>
				</Card>
				<Card>
					<Picture src={nate}></Picture>
					<Name>Nate</Name>
					<Job>Lead Front-end Developer</Job>
				</Card>
				<Card>
					<Picture src={temi}></Picture>
					<Name>Temi</Name>
					<Job>Lead Back-end Developer</Job>
				</Card>
				<Card>
					<Picture src={natasha}></Picture>
					<Name>Natasha</Name>
					<Job>Legal</Job>
				</Card>
				<Card>
					<Picture src={teneika}></Picture>
					<Name>Teneika</Name>
					<Job>Marketing Manager</Job>
				</Card>
			</Container>
		</BigContainer>
	);
};

const BigContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	color: #303030;
	width: auto;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 40px;
	color: #303030;
	@media (max-width: 1200px) {
		width: 85vw;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}
`;

const Title = styled.h1`
	text-align: center;
	font-size: 3em;
	margin-bottom: 40px;
	color: #303030;
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 18%;
	margin: 10px;
	border-top: solid 2px #358cd0;
	padding: 10px;
	height: 220px;
	@media (max-width: 768px) {
		height: auto;
		width: 90%;
	}
`;

const PictureHalf = styled.div`
	display: flex;
	justify-content: center;
	height: 60%;
`;

const Picture = styled.img`
	width: auto;
	height: 160px;
	border-radius: 50%;
	margin: 10px;
	@media (max-width: 1200px) {
		height: 140px;
	}
`;

const TextHalf = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 20%;
	// background-color: red;
`;

const Name = styled.p`
	font-size: 1.2em;
	margin-bottom: 4px;
	color: #303030;
`;

const Job = styled.p`
	font-size: 0.8em;
	color: #303030;
`;

export default Team;
