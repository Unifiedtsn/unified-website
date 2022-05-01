import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import example from '../assets/phone-screen.png';

const Home = () => {
	const [active, setActive] = useState(false);

	useEffect(() => {}, [active]);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm('gmail', 'template_6edml9a', e.target, 'T9Z3fxfGI97GLduFt')
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		setActive(false);
	};

	// run this function from an event handler or an effect to execute scroll

	return (
		<Container className='/home'>
			{active ? <Background /> : null}
			{active ? (
				<FormContainer>
					<Form ref={Form} onSubmit={sendEmail}>
						<LabelAndInout>
							<Label>Name</Label>
							<Input type='text' name='user_name' />
						</LabelAndInout>
						<LabelAndInout>
							<Label>Email</Label>
							<Input type='email' name='user_email' />
						</LabelAndInout>
						<LabelAndInout>
							<Label>Message</Label>
							<TextArea name='message' />
						</LabelAndInout>
						<Input
							style={{
								borderRadius: 20,
								borderStyle: 'none',
								backgroundColor: '#348ccf',
								color: '#fffafa',
								height: 40,
								fontSize: 20,
								marginTop: 10,
							}}
							type='submit'
							value='Send'
						/>
						<Cancel onClick={() => setActive(false)}>cancel</Cancel>
					</Form>
				</FormContainer>
			) : null}
			<JumboHalf>
				<Jumbo>
					<Title>Connect with other students, instantly.</Title>
					<Description>
						Our app lets you network with other students based on university,
						course or city, it's never been easier.
					</Description>
					<Button onClick={() => setActive(true)}>REGISTER INTEREST</Button>
				</Jumbo>
			</JumboHalf>
			<ExampleHalf>
				<Example src={example}></Example>
			</ExampleHalf>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100vh;
	color: #303030;
	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
		margin-top: 40px;
		margin-bottom: 80px;
	}
`;

const Background = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0px;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: 5;
`;

const FormContainer = styled.div`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: auto;
	width: 30%;
	z-index: 6;
	background-color: #fffafa;
	@media (max-width: 1200px) {
		width: 50%;
	}
	@media (max-width: 768px) {
		width: 80%;
		top: 100px;
	}
`;

const Form = styled.form`
	margin: 40px;
	width: 80%;
`;

const Label = styled.label`
	margin-bottom: 4px;
	width: 100%;
	color: #303030;
`;

const Input = styled.input`
	margin-bottom: 20px;
	border: none;
	background: none;
	border-bottom: 1px solid #303030;
	width: 100%;
`;

const TextArea = styled.textarea`
	margin-bottom: 10px;
	border: 1px solid #303030;
	width: 100%;
`;

const Cancel = styled.button`
	margin-bottom: 10px;
	border: none;
	background: none;
	width: 100%;
	color: #303030;
	font-size: 14px;
`;

const LabelAndInout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
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
const Button = styled.button`
	padding: 14px 20px 14px 20px;
	border-radius: 30px;
	color: #eeeeee;
	font-size: 1em;
	margin-top: 10px;
	background-color: #358dd0;
	border: none;
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

export default Home;
