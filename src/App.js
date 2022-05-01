import './App.css';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import ServicesProblem from './components/ServicesProblem';
import ServicesSolution from './components/ServicesSolution';
import ServicesConclusion from './components/ServicesConclusion';
import Team from './components/Team';

const App = () => {
	return (
		<Container>
			<PageContainer>
				<NavBar />
				<Home />
				<Roadmap />
				<ServicesProblem />
				<ServicesSolution />
				<ServicesConclusion />
				<Team />
			</PageContainer>
		</Container>
	);
};

const Container = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fffafa;
`;
const PageContainer = styled.div`
	width: 1200px;
	@media (max-width: 1200px) {
		width: 100%;
	}
`;

export default App;
