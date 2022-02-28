import { createContext, useState } from 'react'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	// const [ isLoading, setIsloading ] = useState(true)
	const [ feedback, setFeedback ] = useState(FeedbackData)
	const [ feedbackEdit, setFeedbackEdit ] = useState({ item: {}, edit: false })

	// useEffect(() => {
	// 	fetchFeedback()
	// }, [])

	// // Fetch feedback data from db.json
	// const fetchFeedback = async () => {
	// 	const response = await fetch(`/feedback?_sort=id&_order=desc`)
	// 	const data = await response.json()

	// 	setFeedback(data)

	// 	setIsloading(false)
	// }

	// Delete Feedback
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure you want to delete?')) {
			// await fetch(`/feedback/${id}`, {
			// 	method: 'DELETE'
			// })

			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}

	// Add Feedback
	const addFeedback = async (newFeedback) => {
		// const response = await fetch('/feedback', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(newFeedback)
		// })

		// const data = await response.json()

		setFeedback([ newFeedback, ...feedback ])
	}

	// Update feedback item
	const updateFeedback = async (id, updateItem) => {
		// const response = await fetch(`/feedback/${id}`, {
		// 	method: 'PUT',
		// 	headers: {
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify(updateItem)
		// })

		// const data = await response.json()

		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updateItem } : item)))
	}

	// Edit feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true
		})
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				// isLoading,
				addFeedback,
				deleteFeedback,
				editFeedback,
				updateFeedback
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
