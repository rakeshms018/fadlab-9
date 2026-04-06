import { useState } from "react"

function App() {
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("All fields are required")
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Contact Form</h1>

      <form onSubmit={handleSubmit}>
        
        {/* Error message for screen readers */}
        <p role="alert" aria-live="assertive" style={{ color: "red" }}>
          {error}
        </p>

        {/* Name */}
        <label htmlFor="name">Full Name</label><br />
        <input id="name" type="text" required /><br /><br />

        {/* Email */}
        <label htmlFor="email">Email</label><br />
        <input
          id="email"
          type="email"
          required
          aria-describedby="email-info"
        />
        <br />
        <small id="email-info">
          We will not share your email
        </small>
        <br /><br />

        {/* Message */}
        <label htmlFor="message">Message</label><br />
        <textarea id="message" rows="4" required></textarea>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default App