export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to Our Product</h1>
          <p>The simplest way to manage your daily tasks and stay productive.</p>
          <a href="#features" className="btn">Learn More</a>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Best Features</h2>
          <div className="features-grid">
            <div className="feature-box">
              <h3>Fast Performance</h3>
              <p>Our app runs lightning fast on all devices, ensuring you never wait.</p>
            </div>
            <div className="feature-box">
              <h3>Secure Cloud</h3>
              <p>Your data is encrypted and backed up safely in the cloud.</p>
            </div>
            <div className="feature-box">
              <h3>Easy To Use</h3>
              <p>Designed with simplicity in mind. No complex tutorials needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '60px 0', background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2>About Us</h2>
              <p>We are a small team dedicated to creating tools that make life easier. Our goal is to focus on quality and simplicity in everything we build.</p>
            </div>
            <div style={{ flex: '1', minWidth: '300px', background: '#eee', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
              <p style={{ color: '#999' }}>Company Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
