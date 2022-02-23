import { useState } from 'react'
import Rating from './Rating'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm({ handleAdd }) {
	const [ text, setText ] = useState('')
	const [ rating, setRating ] = useState(10)
	const [ btnDisabled, setBtnDisabled ] = useState(true)
	const [ message, setMessage ] = useState('')

	const handleTextChange = (e) => {
		if (text === '') {
			setMessage(null)
			setBtnDisabled(true)
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters long')
			setBtnDisabled(true)
		} else {
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			}

			handleAdd(newFeedback)
		}
		setText('')
	}

	return (
		<Card reverse={true}>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate your service with us?</h2>
				<Rating select={(rating) => setRating(rating)} />
				<div className='input-group'>
					<input type='text' placeholder='Please write your review' onChange={handleTextChange} value={text} />
					<Button type='submit' isDisabled={btnDisabled}>
						Submit
					</Button>
				</div>

				{message && <div className='message'>{message}</div>}
			</form>
		</Card>
	)
}

export default FeedbackForm
