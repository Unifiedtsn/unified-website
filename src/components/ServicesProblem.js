import { useState } from 'react';
import styled from 'styled-components';
import moreDetails from '../assets/more-details.png';

const ServicesProblem = () => {
	const [resized, setResized] = useState(window.innerWidth);

	window.addEventListener('resize', function (event) {
		setResized(window.innerWidth);
	});

	return (
		<Container className='/services'>
			{resized > 768 ? (
				<ExampleHalf>
					<Example src={moreDetails}></Example>
				</ExampleHalf>
			) : null}
			<JumboHalf>
				<Jumbo>
					<Title>What is the problem?</Title>
					<Description>
						As a UK student, there are certain problems we all have had our fair
						share of. Meeting other students for the purpose of friendship but
						also assistance with coursework is a problem we all face at one
						point or another.
						<br />
						<br />
						Behold a business that is designing an application that has made
						networking for the 2.75million and ever-growing population of UK
						students possible.
					</Description>
				</Jumbo>
			</JumboHalf>
			{resized <= 768 ? (
				<ExampleHalf>
					<Example src={moreDetails}></Example>
				</ExampleHalf>
			) : null}
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 90vh;
	color: #303030;
	@media (max-width: 1200px) {
		height: auto;
		margin-top: 80px;
		margin-bottom: 80px;
	}
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		margin-bottom: 80px;
	}
`;

const JumboHalf = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 55vw;
	@media (max-width: 768px) {
		width: 90vw;
		margin-bottom: 60px;
	}
`;

const Jumbo = styled.div`
	width: 80%;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

const Title = styled.h1`
	font-size: 3em;
	margin-bottom: 20px;
	@media (max-width: 768px) {
		font-size: 2.2em;
	}
`;

const Description = styled.h3`
	font-size: 1em;
	margin-bottom: 20px;
`;

const ExampleHalf = styled.div`
	width: 40vw;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		width: 90vw;
	}
`;

const Example = styled.img`
	width: 68%;
	height: auto;
	image-rendering: -webkit-optimize-contrast;
	@media (max-width: 768px) {
		width: 80vw;
	}
`;

export default ServicesProblem;
