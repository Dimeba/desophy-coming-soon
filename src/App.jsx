import './App.css'

function App() {
	return (
		<div className='App'>
			<div className='top'>
				<h1>
					DeSophy is a full-service consultancy for commercial real estate
					brokers. <br />
					<br />
					Our research and marketing teams have cut their teeth in the CRE
					industry, and by combining best practices, created a foolproof roadmap
					for our clients to work more efficiently and to close more deals.
				</h1>
			</div>
			<div className='bottom'>
				<p>NEW WEBSITE COMING SOON</p>

				<img className='logo' src='./logo.svg' alt='logo' />

				<div>
					<p>DeSophy Creative Agency LLC</p>
					<p>
						<a href='mailto:office@desophy.com'>office@desophy.com</a>
					</p>
				</div>

				<div className='social-media'>
					<p>
						<a href='https://www.facebook.com/desophy/'>Facebook</a>
					</p>
					|
					<p>
						<a href='https://www.instagram.com/desophynyc/'>Instagram</a>
					</p>
					|
					<p>
						<a href='https://www.linkedin.com/company/desophy/about/'>
							LinkedIn
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}

export default App
