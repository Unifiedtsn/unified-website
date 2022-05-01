import * as React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { data } from '../data';

const steps = [data.one.date, data.two.date, data.three.date, data.four.date];

const Roadmap = () => {
	const [resized, setResized] = React.useState(window.innerWidth);

	window.addEventListener('resize', function (event) {
		setResized(window.innerWidth);
	});

	return (
		<BigContainer>
			<Container className='/roadmap'>
				<BigTitle>Roadmap</BigTitle>
				{resized > 768 ? (
					<Box sx={{ width: '100%' }}>
						<Stepper activeStep={0} alternativeLabel>
							{steps.map((label, index) => {
								const stepProps = {};
								const labelProps = {};
								return (
									<Step key={label} {...stepProps}>
										<StepLabel {...labelProps}>{label}</StepLabel>
									</Step>
								);
							})}
						</Stepper>
					</Box>
				) : null}
				<Objective>
					<Card>
						<InnerCard>
							<TopHalf>
								{resized <= 768 ? <Date>{data.one.date}</Date> : null}
								<Title>{data.one.title}</Title>
								<CardDescription>{data.one.description}</CardDescription>
							</TopHalf>
							<Features>
								<EachFeature>{data.one.features[0]}</EachFeature>
								<EachFeature>{data.one.features[1]}</EachFeature>
								<EachFeature>{data.one.features[2]}</EachFeature>
								<EachFeature>{data.one.features[3]}</EachFeature>
								<EachFeature>{data.one.features[4]}</EachFeature>
							</Features>
						</InnerCard>
					</Card>
					<Card>
						<InnerCard>
							<TopHalf>
								{resized <= 768 ? <Date>{data.two.date}</Date> : null}
								<Title>{data.two.title}</Title>
								<CardDescription>{data.two.description}</CardDescription>
							</TopHalf>
							<Features>
								<EachFeature>{data.two.features[0]}</EachFeature>
								<EachFeature>{data.two.features[1]}</EachFeature>
							</Features>
						</InnerCard>
					</Card>
					<Card>
						<InnerCard>
							<TopHalf>
								{resized <= 768 ? <Date>{data.three.date}</Date> : null}
								<Title>{data.three.title}</Title>
								<CardDescription>{data.three.description}</CardDescription>
							</TopHalf>
							<Features>
								<EachFeature>{data.three.features[0]}</EachFeature>
								<EachFeature>{data.three.features[1]}</EachFeature>
								<EachFeature>{data.three.features[2]}</EachFeature>
							</Features>
						</InnerCard>
					</Card>
					<Card>
						<InnerCard>
							<TopHalf>
								{resized <= 768 ? <Date>{data.four.date}</Date> : null}
								<Title>{data.four.title}</Title>
								<CardDescription>{data.four.description}</CardDescription>
							</TopHalf>
							<Features>
								<EachFeature>{data.four.features[0]}</EachFeature>
								<EachFeature>{data.four.features[1]}</EachFeature>
								<EachFeature>{data.four.features[2]}</EachFeature>
								<EachFeature>{data.four.features[3]}</EachFeature>
							</Features>
						</InnerCard>
					</Card>
				</Objective>
			</Container>
		</BigContainer>
	);
};

const BigContainer = styled.div`
	flex: 1;
`;

const Container = styled.div`
	height: auto;
`;

const BigTitle = styled.h1`
	font-size: 3em;
	margin-bottom: 40px;
	color: #303030;
	text-align: center;
	z-index: 4;
	@media (max-width: 768px) {
		margin-bottom: 0px;
	}
`;

const Objective = styled.div`
	display: flex;
	justify-content: space-evenly;
	height: auto;
	@media (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		margin-bottom: 80px;
	}
`;
const Card = styled.div`
	border-radius: 0px 0px 20px 20px;
	width: 24%;
	color: #303030;
	margin-top: 40px;
	background-color: #ffffff;
	border-top: solid 4px #358cd0;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	@media (max-width: 768px) {
		width: 90%;
	}
`;

const InnerCard = styled.div`
	padding: 0px 10px 0px 10px;
`;

const TopHalf = styled.div``;

const Title = styled.p`
	text-align: center;
	margin: 20px;
	font-size: 1.4em;
	@media (max-width: 768px) {
		margin: 0px;
		margin-bottom: 10px;
	}
`;

const Date = styled.p`
	text-align: center;
	margin: 20px;
	font-weight: bold;
	font-size: 1.4em;
	padding-bottom: 10px;
	border-bottom: 1px solid grey;
`;

const CardDescription = styled.p`
	font-size: 0.8em;
`;

const Features = styled.ul`
	height: 40%;
	margin-top: 20px;
	margin-bottom: 20px;
	@media (max-width: 768px) {
	}
`;

const EachFeature = styled.li`
	padding: 2px;
	font-size: 0.9em;
`;

export default Roadmap;
