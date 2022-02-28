import { v4 as uuidv4 } from 'uuid'
import { createContext, useState, useEffect } from 'react'
import { dblClick } from '@testing-library/user-event/dist/click'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [ isLoading, setIsloading ] = useState(true)
	const [ feedback, setFeedback ] = useState([])
	const [ feedbackEdit, setFeedbackEdit ] = useState({ item: {}, edit: false })

	useEffect(() => {
		fetchFeedback()
	}, [])

	// Fetch feedback data from db.json
	const fetchFeedback = async () => {
		const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
		const data = await response.json()

		setFeedback(data)

		setIsloading(false)
	}

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

	// Update feedback item
	const updateFeedback = (id, updateItem) => {
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
				isLoading,
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
