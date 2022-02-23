import Card from '../components/shared/Card'

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>About App</h1>
				<p>This is a React app to leave product feedback.</p>
				<p>Version: 0.0.1</p>

				<p>
					<a href='/'>Go Back Home</a>
				</p>
			</div>
		</Card>
	)
}

export default AboutPage
