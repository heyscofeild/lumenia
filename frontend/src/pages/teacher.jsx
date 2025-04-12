import "./styles.css"

export default function ProfileSetupPage() {
  return (
    <div className="container">
      <div className="profile-form">
        <h1 className="form-title">Set your profile</h1>

        <div className="form-section">
          <h2 className="section-title">what are you?</h2>
          <div className="role-buttons">
            <button className="role-button">Teacher</button>
            <button className="role-button">Student</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="form-section">
          <h2 className="section-title">Contact Information</h2>

          <div className="form-field">
            <label htmlFor="fullName" className="field-label">
              Full name
            </label>
            <input type="text" id="fullName" placeholder="enter your full name" className="text-input" />
          </div>

          <div className="contact-row">
            <div className="form-field">
              <label htmlFor="email" className="field-label">
                Gmail
              </label>
              <input type="email" id="email" placeholder="your@gmail.com" className="text-input" />
            </div>
            <div className="form-field">
              <label htmlFor="phone" className="field-label">
                Phone
              </label>
              <input type="tel" id="phone" className="text-input" />
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="address" className="field-label">
              Address
            </label>
            <input type="text" id="address" placeholder="your ful address" className="text-input" />
          </div>
        </div>

        <hr className="divider" />

        <div className="form-field">
          <label htmlFor="skills" className="field-label">
            description and skills
          </label>
          <textarea id="skills" placeholder="write your skills" rows={3} className="text-input"></textarea>
        </div>

        <div className="form-section">
          <h2 className="section-title">Upload your teaching certificates (for teachers)</h2>
          <div className="upload-area">
            <div className="upload-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                  stroke="#44403c"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M14 2V8H20" stroke="#44403c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 13H8" stroke="#44403c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 17H8" stroke="#44403c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 9H9H8" stroke="#44403c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="upload-text">Drag & drop your certificate files here</p>
            <p className="upload-subtext">or click to browse files (PDF, JPG, PNG)</p>
          </div>
        </div>

        <hr className="divider" />

        <button className="submit-button">save profil</button>
      </div>
    </div>
  )
}
