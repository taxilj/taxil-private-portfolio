export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Gradient blob */}
      <div className="hero-blob" />

      {/* Background decorative elements */}
      <div className="hero-bg-elements">
        <div className="hero-line line-1" />
        <div className="hero-line line-2" />
        <svg
          className="shape-curve"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ position: 'absolute', top: '15%', right: '10%', opacity: 0.1 }}
        >
          <path d="M10 50C10 30 30 10 50 10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Left content */}
      <div className="hero-left">
        <div className="hero-emoji">👋</div>

        <h1>
          Hello! <strong>I'm Taxil</strong>
        </h1>

        <div className="hero-subtitle">
          <span className="subtitle-dash">————</span>
          Full Stack Developer &amp; Vibe Coder
        </div>

        <p className="hero-desc">
          Hello! I'm Taxil. I'm a <strong>Next.js developer</strong>, <strong>WordPress expert</strong>,{' '}
          <strong>prompt engineer</strong> &amp; <strong>vibe coder</strong> — I build fast, beautiful, AI-powered
          digital products.
        </p>

        <ul className="hero-checklist">
          {[
            'Next.js & WordPress — full websites from scratch',
            'Prompt Engineering & AI-powered workflows',
            'Vibe Coding — rapid, creative, functional builds',
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="hero-btns">
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
          <a href="/projects/resume.pdf" download className="btn-download">
            Download CV ↓
          </a>
        </div>
      </div>

      {/* Right - Photo */}
      <div className="hero-right">
        <div className="hero-img-container">
          <img
            src="https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fhero-photo.jpg&w=1080&q=75"
            alt="Taxil"
            className="hero-photo"
            fetchPriority="high"
            width={500}
            height={600}
          />
          <div className="hero-badge-hello">
            <span>Hello</span>
          </div>
          <div className="bg-shape-squiggly">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none">
              <path
                d="M10 10C30 15 30 25 10 30C-10 35 -10 45 10 50C30 55 30 65 10 70"
                stroke="black"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
