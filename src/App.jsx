import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [isSubmitted, setSubmitted] = useState(false)
  const [isClear, setisCleared] = useState(false)
  const [resultData, setResultData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const handleSubmit = () => {
    setSubmitted(true)
    if (formData.email && formData.message && formData.name) {
      setErrorMessage('')
      setisCleared(true)
      setResultData(formData)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } else {
      setErrorMessage('All fields are required')
      setResultData({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  const ClearData = () => {
    setisCleared(false)
    // setResultData({
    //     name: '',
    //     email: '',
    //     message: '',
    //   })
  }
  return (
    <>
      <h1 className="head">React Contact Form</h1>
      <div className="app">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contact Form</h5>

            <div className="input-group">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                className="input"
                id="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(event) => {
                  setErrorMessage(false)
                  setFormData({ ...formData, name: event.target.value })
                }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <input
                type="email"
                className="input"
                id="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={(event) => {
                  setErrorMessage(false)
                  setFormData({ ...formData, email: event.target.value })
                }}
              />
            </div>

            <div className="input-group">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                className="textarea"
                id="message"
                rows="3"
                placeholder="Enter Message"
                value={formData.message}
                onChange={(event) => {
                  setErrorMessage(false)
                  setFormData({ ...formData, message: event.target.value })
                }}
              />
            </div>
            <div className="button-container">
              <button type="button" className="btn" onClick={ClearData}>
                Clear Data
              </button>
              <button type="button" className="btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
            {isSubmitted && (
              <>
                {errorMessage ? (
                  <div>
                    <p className="error-message">
                      <strong>{errorMessage}</strong>
                    </p>
                  </div>
                ) : (
                  isClear && (
                    <div className="result">
                      <p>
                        <strong>Name: </strong>
                        {resultData.name}
                      </p>
                      <p>
                        <strong>Email: </strong>
                        {resultData.email}
                      </p>
                      <p>
                        <strong>Message: </strong>
                        {resultData.message}
                      </p>
                    </div>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
