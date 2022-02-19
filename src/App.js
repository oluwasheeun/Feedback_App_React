function App() {
  const title = 'Blog Post'
  const body = 'These are the posts'
  const comments = [
    {
      id:1, text: 'comment one'
    },
    {
      id:2, text: 'comment two'
    },
    {
      id:3, text: 'comment three'
    }
  ]
	return (
		<>
			<h1>{title.toUpperCase()}</h1>
			<p>{body}</p>

      <div className="comments">
        <h3>Commnts ({comments.length})</h3>
        <ul>
        {comments.map(comment => <li key={comment.id}>{comment.text.toUpperCase()}</li>)}
        </ul>
      </div>
		</>
	)
}

export default App
