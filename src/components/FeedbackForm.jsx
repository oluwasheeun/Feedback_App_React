import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
	const [ text, setText ] = useState('')
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

	return (
		<Card reverse={true}>
			<form>
				<h2>How would you rate your service with us?</h2>
				{/* @todo - rating select component */}
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