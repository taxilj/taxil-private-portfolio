const projects = [
  {
    title: 'RedSky Placement Website',
    tag: 'Next.js',
    description: 'Modern UI with improved structure and clarity',
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fredsky.jpg&w=1200&q=75',
    link: 'https://redskyplacement.in/',
  },
  {
    title: 'Tirth Photography',
    tag: 'Next.js',
    description: 'Image-focused portfolio with smooth browsing experience',
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Ftirth.jpg&w=1200&q=75',
    link: 'https://tirthphotography.in/',
  },
  {
    title: 'Qalam Web Studio',
    tag: 'Next.js',
    description: 'Strong visual identity with clean layout',
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fqalam.jpg&w=1200&q=75',
    link: 'https://www.qalamwebstudio.online/',
  },
  {
    title: 'Skyx Website',
    tag: 'WordPress',
    description: 'Responsive layout with improved structure',
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fskyx.jpg&w=1200&q=75',
    link: 'https://skyx.great-site.net/',
  },
  {
    title: 'Compex Solution',
    tag: 'WordPress',
    description: 'Clean UI with better readability',
    image: 'https://madhu-portfolio-sigma.vercel.app/_next/image?url=%2Fprojects%2Fcompex.jpg&w=1200&q=75',
    link: 'https://compexsolution.com/',
  },
]

export default function Projects() {
  return (
    <section className="case-study" id="work">
      <div className="cs-header">
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="cs-list">
        {projects.map((p, i) => (
          <div key={i} className={`cs-row ${i % 2 === 1 ? 'reverse' : ''}`}>
            <div className="cs-image-wrap">
              <div className="cs-image-container">
                <img
                  src={p.image}
                  alt={p.title}
                  className="cs-project-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cs-content">
              <span className="cs-tech-tag">{p.tag}</span>
              <h3 className="cs-project-title">{p.title}</h3>
              <p className="cs-project-desc">{p.description}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="cs-link">
                View Project ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
