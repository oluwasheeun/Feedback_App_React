import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [ feedback, setFeedback ] = useState(FeedbackData)
	const [ feedbackEdit, setFeedbackEdit ] = useState({ item: {}, edit: false })

	// Delete Feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	// Add Feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([ newFeedback, ...feedback ])
	}

	// Edit feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		})
	}

	return (
		<FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback, editFeedback, feedbackEdit }}>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
