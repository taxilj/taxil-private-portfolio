'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Website Design',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setForm({ name: '', email: '', company: '', service: 'Website Design' })
  }

  const services = ['Mobile App', 'Website Design', 'Branding', 'Webflow Development', 'App design', 'Graphic Design', 'Wordpress']

  return (
    <section className="contact" id="contact">
      <div className="contact-header reveal-up" data-reveal="" data-delay="0">
        <h2 className="contact-title">
          <span className="text-outline">Say Hi!</span> and tell me about
          <span className="contact-arrow-wrap">
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M0 10h50M45 4l8 6-8 6" stroke="black" strokeWidth="2" />
            </svg>
          </span>
          <strong>your idea</strong>
        </h2>
        <p className="contact-subtitle">Have a nice works? reach out and let&apos;s chat.</p>
      </div>

      <form className="contact-form reveal-up" data-reveal="" data-delay="200" onSubmit={handleSubmit} aria-label="Contact form">
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Name.*</label>
            <input type="text" className="form-input" placeholder="Hello.." name="name" value={form.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label className="form-label">Email.*</label>
            <input type="email" className="form-input" placeholder="Where can I reply" name="email" value={form.email} onChange={handleChange} />
          </div>
        </div>

        <div className="form-group full">
          <label className="form-label">Company name</label>
          <input type="text" className="form-input" placeholder="Your company or website?" name="company" value={form.company} onChange={handleChange} />
        </div>

        <div className="form-group full">
          <label className="form-label">What&apos;s in your mind?*</label>
          <div className="chip-list">
            {services.map((s, i) => (
              <button
                key={s}
                type="button"
                className={`chip ${form.service === s ? 'active' : ''} reveal-chip`}
                data-reveal=""
                data-delay={String(i * 100)}
                onClick={() => setForm({ ...form, service: s })}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="form-bottom">
          <button type="submit" className="btn-send">Send Me</button>
          <svg className="send-squiggle" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M5 25C10 15 15 20 15 10C15 5 20 2 25 5" stroke="black" strokeWidth="2" strokeLinecap="round" />
            <path d="M22 2l4 3-5 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="form-note">I&apos;ll get back to you within 24 hours</p>
      </form>
    </section>
  )
}
