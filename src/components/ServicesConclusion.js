import { useState } from 'react';
import styled from 'styled-components';
import chat from '../assets/the-chat.png';

const ServicesConclusion = () => {
	const [resized, setResized] = useState(window.innerWidth);

	window.addEventListener('resize', function (event) {
		setResized(window.innerWidth);
	});
	return (
		<Container>
			{resized > 768 ? (
				<ExampleHalf>
					<Example src={chat}></Example>
				</ExampleHalf>
			) : null}
			<JumboHalf>
				<Jumbo>
					<Title>Why do we want to help?</Title>
					<Description>
						Here at Unified, some of our own team has lived these problems and
						feel that universities do not do anything in most cases to really
						connect and bring students together.
						<br />
						<br />
						we plan to not only solve the issue of meeting people but the whole
						university experience. From part time work recruitment to full time
						graduation internship programmes. Entrepreneurial help with the
						establishment of an in-app marketplace for entrepreneurs to sell
						products and expand their businesses.
					</Description>
				</Jumbo>
			</JumboHalf>
			{resized <= 768 ? (
				<ExampleHalf>
					<Example src={chat}></Example>
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

export default ServicesConclusion;
