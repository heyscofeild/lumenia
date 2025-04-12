import image1 from "../../assets/image1.png"
import image2 from"../../assets/image2.png"

export default function Landing(){
    return(
 <section className="hero">
 <h2 className="hero-text">
   Join a supportive community tailored to your needs. Learn, ask, grow — in your own way.
 </h2>
 <button className="btn start">start your journey</button>

 <div className="hero-image">
   <img
     src={image1} 
     alt="Community illustration"
   />
 </div>
 <div className="container">
      
      <div className="mission-box">
     < div className="mission-image">
     <img
     src={image2} 
     alt="Community illustration"></img>
     </div>
      
        <h2 className="mission-title">Our Mission</h2>
        <p className="mission-text">
          we believe that everyone deserves access to the support they need especially those living with disabilities.<br />
          Our platform connects people with specific disabilities to experts and supportive communities that truly understand their needs.<br />
          Whether you're seeking guidance, knowledge, or one-on-one help, we’re here to empower you through care, connection, and community.
        </p>
      </div>
      <h3 className="section-title">Explore Support Communities</h3>

      <div className="card-container">
        <div className="card">
          <h4 className="card-title">🧩 Autism</h4>
          <p className="card-text">
            Access personalized learning resources and expert support designed to match your unique way of understanding and growing.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">🔡 Dyslexia</h4>
          <p className="card-text">
            Explore step-by-step educational content, tools, and methods that make reading and writing easier and more enjoyable.
          </p>
        </div>

        <div className="card">
          <h4 className="card-title">🦻 Deaf</h4>
          <p className="card-text">
            Access a wide range of topics—from coding to art—through deaf-friendly resources like subtitles, visual guides, and expert-led lessons tailored for your needs.
          </p>
        </div>
      </div>
    </div>
    
          <h3 className="section-title">How Luminia Works</h3>
      <p className="section-subtitle">
        Whether you're here to learn or to support, Luminia helps you grow through community and personalized resources
      </p>
      <div className="card-container">
        <div className="step-card">
          <h4>1. Choose a Community</h4>
          <p>Join a community that aligns with your needs or your area of expertise.</p>
        </div>
        <div className="step-card">
          <h4>2. Explore Resources</h4>
          <p>Access tailored learning materials shared by experts to fit your learning style.</p>
        </div>
        <div className="step-card">
          <h4>3. Share Experiences</h4>
          <p>Tell your story, offer advice, or support others by sharing your personal journey.</p>
        </div>
        <div className="step-card">
          <h4>4. Learn & Grow Together</h4>
          <p>Stay active, take on projects, and grow with a community that understands you.</p>
        </div>
      </div>

      {/* Why Join Luminia */}
      <div className="join-section">
        <h3 className="section-title">Why Join Luminia?</h3>
        <p className="section-subtitle">
          Because learning should be accessible, flexible, and adapted to everyone’s needs.
        </p>
        <ul className="benefits-list">
          <li>✅ Access free & expert-created resources</li>
          <li>✅ Learn based on your own pace and style</li>
          <li>✅ Get support from a caring community</li>
          <li>✅ Explore real projects and personalized paths</li>
        </ul>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>2025 Luminia. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Privacy</a>
        </div>
      </footer>


    </section>)}