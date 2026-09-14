import React, { useState, useEffect } from 'react';

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&display=swap');
`;

const NAV_ITEMS = [
  { id: 'about', code: 'A-01', label: 'About' },
  { id: 'skills', code: 'A-02', label: 'Skills' },
  { id: 'experience', code: 'A-03', label: 'Experience' },
  { id: 'projects', code: 'A-04', label: 'Projects' },
  { id: 'education', code: 'A-05', label: 'Education' },
];

function Corners() {
  return (
    <>
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />
    </>
  );
}

function Sheet({ id, code, title, children }) {
  return (
    <section id={id} className="sheet">
      <Corners />
      <div className="sheet-head">
        <h2>{title}</h2>
        <span className="sheet-code">{code}</span>
      </div>
      <div className="sheet-body">{children}</div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const contact = {
    location: 'Kozhikode, Kerala',
    phone: '7907140419',
    email: 'hinayathmhina@gmail.com',
    linkedin: "www.linkedin.com/in/hinayath-m'",
    github: 'https://github.com',
  };

  const skills = [
    'JavaScript', 'HTML5', 'CSS3', 'React.js', 'React Native',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Figma', 'Git/GitHub',
  ];

  const projects = [
    {
      code: 'SYS-01',
      title: 'Mediva',
      sub: 'Hospital Management Web App',
      desc: 'Built a hospital management platform using React, React Bootstrap, and MongoDB, enabling streamlined patient and appointment management.',
      tech: ['React', 'Bootstrap', 'Node.js', 'MongoDB'],
    },
    {
      code: 'SYS-02',
      title: 'UserWorker',
      sub: 'Worker Discovery Platform',
      desc: 'Developed a web platform using React, React Bootstrap, and MongoDB that connects users with local service workers like electricians and plumbers.',
      tech: ['React', 'Express', 'MongoDB'],
    },
    {
      code: 'SYS-03',
      title: 'Grow Smart',
      sub: 'IoT Soil Monitoring System',
      desc: 'Built a sensor-based system to monitor soil moisture and humidity, featuring an Android app and Python/YOLO machine learning data processing.',
      tech: ['Python', 'Machine Learning', 'Android', 'IoT'],
    },
  ];

  return (
    <div className="page">
      <style>{`
        ${FONT_IMPORT}

        :root {
          --navy: #0e1a2b;
          --navy-deep: #0a1420;
        }

        * { box-sizing: border-box; }

        .page {
          background: #0e1a2b;
          background-image:
            linear-gradient(rgba(140, 170, 210, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(140, 170, 210, 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
          color: #e7edf4;
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          padding-bottom: 40px;
        }

        .mono { font-family: 'IBM Plex Mono', monospace; }

        /* NAV */
        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 28px;
          border-bottom: 1px solid rgba(140, 170, 210, 0.15);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .topbar.scrolled {
          background: rgba(10, 20, 32, 0.92);
          backdrop-filter: blur(10px);
          border-color: rgba(255, 138, 61, 0.35);
        }
        .brand {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 15px;
          letter-spacing: 0.02em;
          color: #e7edf4;
        }
        .brand span { color: #ff8a3d; }
        .nav-links {
          display: none;
          gap: 28px;
          align-items: center;
        }
        @media (min-width: 860px) {
          .nav-links { display: flex; }
        }
        .nav-link {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          color: #93a5bc;
          text-decoration: none;
          display: flex;
          gap: 8px;
          align-items: baseline;
          transition: color 0.15s ease;
        }
        .nav-link:hover { color: #ff8a3d; }
        .nav-link .code { color: #4d6b8f; font-size: 11px; }
        .nav-link:hover .code { color: #ff8a3d; }

        .menu-btn {
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }
        @media (min-width: 860px) { .menu-btn { display: none; } }
        .menu-btn span {
          width: 22px;
          height: 2px;
          background: #e7edf4;
        }

        .mobile-menu {
          border-bottom: 1px solid rgba(140, 170, 210, 0.15);
          background: rgba(10, 20, 32, 0.97);
          padding: 8px 28px 20px;
        }
        .mobile-menu a {
          display: flex;
          gap: 10px;
          padding: 10px 0;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: #c3cfdf;
          text-decoration: none;
          border-bottom: 1px solid rgba(140, 170, 210, 0.08);
        }
        .mobile-menu a .code { color: #ff8a3d; }

        /* SHEET (section) */
        .sheet {
          position: relative;
          max-width: 900px;
          margin: 56px auto 0;
          padding: 34px 30px 40px;
          border: 1px solid rgba(140, 170, 210, 0.28);
        }
        .corner {
          position: absolute;
          width: 14px;
          height: 14px;
          border: 1px solid #ff8a3d;
          opacity: 0.85;
        }
        .corner-tl { top: -1px; left: -1px; border-right: none; border-bottom: none; }
        .corner-tr { top: -1px; right: -1px; border-left: none; border-bottom: none; }
        .corner-bl { bottom: -1px; left: -1px; border-right: none; border-top: none; }
        .corner-br { bottom: -1px; right: -1px; border-left: none; border-top: none; }

        .sheet-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          border-bottom: 1px solid rgba(140, 170, 210, 0.22);
          padding-bottom: 14px;
          margin-bottom: 24px;
        }
        .sheet-head h2 {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 19px;
          font-weight: 600;
          margin: 0;
          color: #e7edf4;
        }
        .sheet-code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #4d6b8f;
        }

        /* HERO */
        .hero {
          max-width: 900px;
          margin: 44px auto 0;
          padding: 40px 30px 34px;
          position: relative;
          border: 1px solid rgba(140, 170, 210, 0.28);
        }
        .hero-tag {
          display: inline-block;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          letter-spacing: 0.04em;
          color: #ff8a3d;
          border: 1px solid rgba(255, 138, 61, 0.45);
          padding: 4px 10px;
          margin-bottom: 18px;
        }
        .hero h1 {
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 600;
          font-size: clamp(34px, 6vw, 52px);
          line-height: 1.05;
          margin: 0 0 8px;
          color: #f4f7fb;
        }
        .hero .role {
          font-size: 17px;
          color: #93a5bc;
          margin-bottom: 26px;
        }
        .spec-table {
          display: grid;
          grid-template-columns: max-content 1fr;
          row-gap: 10px;
          column-gap: 18px;
          font-size: 14px;
          margin-bottom: 30px;
        }
        .spec-table dt {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          color: #4d6b8f;
          letter-spacing: 0.03em;
          padding-top: 1px;
        }
        .spec-table dd {
          margin: 0;
          color: #c3cfdf;
        }
        .hero-links {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }
        .btn {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          text-decoration: none;
          padding: 11px 20px;
          border: 1px solid rgba(140, 170, 210, 0.35);
          color: #e7edf4;
          transition: border-color 0.15s ease, color 0.15s ease;
        }
        .btn:hover { border-color: #ff8a3d; color: #ff8a3d; }
        .btn.primary {
          background: #ff8a3d;
          border-color: #ff8a3d;
          color: #0e1a2b;
        }
        .btn.primary:hover { background: #ffa563; color: #0e1a2b; }

        /* ABOUT */
        .about-text {
          font-size: 15.5px;
          line-height: 1.75;
          color: #c3cfdf;
          max-width: 68ch;
        }

        /* SKILLS */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border-top: 1px solid rgba(140, 170, 210, 0.18);
          border-left: 1px solid rgba(140, 170, 210, 0.18);
        }
        @media (min-width: 620px) {
          .skills-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .skill-cell {
          border-right: 1px solid rgba(140, 170, 210, 0.18);
          border-bottom: 1px solid rgba(140, 170, 210, 0.18);
          padding: 16px 16px;
          font-size: 13.5px;
          color: #c3cfdf;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skill-cell .idx {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #4d6b8f;
        }

        /* EXPERIENCE */
        .exp-row {
          display: flex;
          gap: 20px;
        }
        .exp-rail {
          width: 8px;
          display: flex;
          justify-content: center;
        }
        .exp-rail .track {
          width: 1px;
          background: rgba(140, 170, 210, 0.3);
          position: relative;
        }
        .exp-rail .dot {
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 9px;
          height: 9px;
          border: 2px solid #ff8a3d;
          background: #0e1a2b;
          border-radius: 50%;
        }
        .exp-head {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 14px;
        }
        .exp-head h3 {
          font-size: 17px;
          margin: 0 0 4px;
          color: #f4f7fb;
          font-weight: 600;
        }
        .exp-head .org {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          color: #93a5bc;
        }
        .exp-head .dates {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #ff8a3d;
          white-space: nowrap;
        }
        .exp-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .exp-list li {
          font-size: 14.5px;
          color: #c3cfdf;
          line-height: 1.6;
          padding-left: 18px;
          position: relative;
        }
        .exp-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #4d6b8f;
        }

        /* PROJECTS */
        .project-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .project-item {
          padding: 22px 0;
          border-top: 1px solid rgba(140, 170, 210, 0.18);
        }
        .project-item:last-child { padding-bottom: 0; }
        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 14px;
          margin-bottom: 6px;
        }
        .project-top h3 {
          font-size: 16.5px;
          margin: 0;
          color: #f4f7fb;
          font-weight: 600;
        }
        .project-top .code {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          color: #4d6b8f;
          white-space: nowrap;
        }
        .project-sub {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          color: #ff8a3d;
          margin-bottom: 10px;
        }
        .project-desc {
          font-size: 14.5px;
          line-height: 1.65;
          color: #c3cfdf;
          max-width: 62ch;
          margin-bottom: 14px;
        }
        .tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tech-pill {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px;
          color: #93a5bc;
          border: 1px solid rgba(140, 170, 210, 0.3);
          padding: 4px 9px;
        }

        /* EDUCATION */
        .edu-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 0;
          border-top: 1px solid rgba(140, 170, 210, 0.18);
        }
        .edu-row:first-child { border-top: none; padding-top: 0; }
        .edu-row h3 {
          font-size: 15.5px;
          margin: 0 0 4px;
          color: #f4f7fb;
          font-weight: 600;
        }
        .edu-row p {
          margin: 0;
          font-size: 13.5px;
          color: #93a5bc;
        }
        .edu-year {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          color: #ff8a3d;
          white-space: nowrap;
        }

        /* FOOTER */
        .stamp {
          max-width: 900px;
          margin: 56px auto 0;
          padding: 22px 30px;
          border: 1px solid rgba(140, 170, 210, 0.28);
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 12px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11.5px;
          color: #4d6b8f;
        }
        .stamp span.hl { color: #ff8a3d; }
      `}</style>

      {/* Nav */}
      <div className={`topbar ${scrolled ? 'scrolled' : ''}`}>
        <span className="brand">HINAYATH<span>_</span>M</span>
        <nav className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="nav-link">
              <span className="code">{n.code}</span>{n.label}
            </a>
          ))}
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setMenuOpen(false)}>
              <span className="code">{n.code}</span>{n.label}
            </a>
          ))}
        </div>
      )}

      {/* Hero */}
      <div className="hero">
        <Corners />
        <span className="hero-tag">AVAILABLE FOR HIRE</span>
        <h1>Hinayath M</h1>
        <p className="role">MERN Stack / Software Developer</p>
        <dl className="spec-table">
          <dt>LOCATION</dt>
          <dd>{contact.location}</dd>
          <dt>PHONE</dt>
          <dd>{contact.phone}</dd>
          <dt>EMAIL</dt>
          <dd>{contact.email}</dd>
        </dl>
        <div className="hero-links">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn primary">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>

      {/* About */}
      <Sheet id="about" code="A-01" title="About">
        <p className="about-text">
          Computer Science graduate with over a year of hands-on experience as a MERN Stack Developer Intern,
          building and deploying full-stack web applications using React, Node.js, Express, and MongoDB.
          Skilled in translating requirements into responsive, user-friendly interfaces and scalable back-end
          services, with additional exposure to UI/UX design, mobile development, and IoT-based projects.
        </p>
      </Sheet>

      {/* Skills */}
      <Sheet id="skills" code="A-02" title="Skills">
        <div className="skills-grid">
          {skills.map((s, i) => (
            <div className="skill-cell" key={s}>
              <span className="idx">{String(i + 1).padStart(2, '0')}</span>
              {s}
            </div>
          ))}
        </div>
      </Sheet>

      {/* Experience */}
      <Sheet id="experience" code="A-03" title="Experience">
        <div className="exp-row">
          <div className="exp-rail">
            <div className="track" style={{ height: '100%' }}>
              <span className="dot" />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div className="exp-head">
              <div>
                <h3>MERN Stack Developer Intern</h3>
                <span className="org">Inlighn Tech</span>
              </div>
              <span className="dates">AUG 2025 — PRESENT</span>
            </div>
            <ul className="exp-list">
              <li>Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.</li>
              <li>Built responsive user interfaces with React and React Bootstrap, improving cross-project usability.</li>
              <li>Collaborated on designing RESTful APIs and integrating front-end components with back-end services.</li>
            </ul>
          </div>
        </div>
      </Sheet>

      {/* Projects */}
      <Sheet id="projects" code="A-04" title="Projects">
        <div className="project-list">
          {projects.map((p) => (
            <div className="project-item" key={p.code}>
              <div className="project-top">
                <h3>{p.title}</h3>
                <span className="code">{p.code}</span>
              </div>
              <div className="project-sub">{p.sub}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="tech-row">
                {p.tech.map((t) => (
                  <span className="tech-pill" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Sheet>

      {/* Education */}
      <Sheet id="education" code="A-05" title="Education">
        <div className="edu-row">
          <div>
            <h3>B.Sc. Computer Science</h3>
            <p>JDT Islam College of Arts and Science</p>
          </div>
          <span className="edu-year">2025</span>
        </div>
        <div className="edu-row">
          <div>
            <h3>Higher Secondary Education</h3>
            <p>Calicut Girls Higher Secondary School</p>
          </div>
          <span className="edu-year">2022</span>
        </div>
      </Sheet>

      {/* Footer stamp */}
      <div className="stamp">
        <span>DRAWN BY <span className="hl">H. M.</span></span>
        <span>SHEET <span className="hl">A-00 / A-05</span></span>
        <span>REV. <span className="hl">{new Date().getFullYear()}</span></span>
      </div>
    </div>
  );
}
