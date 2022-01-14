import Card from './components/Card/Card';
import './App.css';
function App() {
	return (
		<div className='card-outside'>
			<Card
				free='FREE'
				dollar='0'
				user='Single User'
				storage='5GB Storage'
				subdomain='Free Subdomain'
			/>
			<Card
				free='PLUS'
				dollar='9'
				user='5 Users'
				storage='50GB Storage'
				subdomain='Free Subdomain'
			/>
			<Card
				free='PRO'
				dollar='49'
				user='Unlimited Users'
				storage='150GB Storage'
				subdomain=' Free Subdomains'
			/>
		</div>
	);
}

export default App;
