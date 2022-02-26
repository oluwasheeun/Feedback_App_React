import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutLinkIcon from './components/AboutLinkIcon'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<div>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</div>
							}
						/>

						<Route path='/about' element={<AboutPage />} />
					</Routes>
					<AboutLinkIcon />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
