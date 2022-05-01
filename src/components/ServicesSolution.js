import styled from 'styled-components';
import profile from '../assets/profile-page.png';

const ServicesSolution = () => {
	return (
		<Container>
			<JumboHalf>
				<Jumbo>
					<Title>What is the solution?</Title>
					<Description>
						There are a lot of social media platforms out there, but they are so
						saturated by every type of person, finding the exact match for your
						current need is close to impossible. With our filter and swipe
						feature, you can filter your search for students by course,
						university and city to find that exact match you’ve been looking
						for.
						<br />
						<br />
						Universities have tried to use online resources to create moodles
						and online learning environments but haven’t had success in
						addressing the social aspect of bringing students together to
						collaborate much like the real world. We plan to create an exclusive
						platform for universities to take advantage of and help be involved
						bring their students together, all this can be done on their own
						private networking platform.
					</Description>
				</Jumbo>
			</JumboHalf>
			<ExampleHalf>
				<Example src={profile}></Example>
			</ExampleHalf>
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

export default ServicesSolution;
