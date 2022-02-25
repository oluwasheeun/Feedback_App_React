import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Card from './components/shared/Card'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutLinkIcon from './components/AboutLinkIcon'

function App() {
	const [ feedback, setFeedback ] = useState(FeedbackData)

	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([ newFeedback, ...feedback ])
	}

	return (
		<Router>
			<Header />
			<div className='container'>
				<Routes>
					<Route
						exact
						path='/'
						element={
							<div>
								<FeedbackForm handleAdd={addFeedback} />
								<FeedbackStats feedback={feedback} />
								<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
							</div>
						}
					/>

					<Route path='/about' element={<AboutPage />} />
				</Routes>
				<AboutLinkIcon />
			</div>
		</Router>
	)
}

export default App
