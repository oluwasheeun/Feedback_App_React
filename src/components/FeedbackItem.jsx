import { useState } from 'react'

function FeedbackItem() {
	const [ ratings, setRatings ] = useState(12)
	const [ text, setText ] = useState('This is my Feedback')

	const handleClick = () => {
		setRatings((prev) => {
			console.log(prev)
			return prev + 1
		})
	}

	return (
		<div className='card'>
			<div className='num-display'>{ratings}</div>
			<div className='text-display'>{text}</div>
			<button onClick={handleClick}>Click</button>
		</div>
	)
}

export default FeedbackItem
