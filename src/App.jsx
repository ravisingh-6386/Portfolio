import { useEffect, useState } from 'react'
import fallbackPhoto from './assets/hero.png'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const [profilePhoto, setProfilePhoto] = useState(() => {
    const savedPhoto = localStorage.getItem('portfolio-photo')
    return savedPhoto || '/ravi.jpeg'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('portfolio-photo', profilePhoto)
  }, [profilePhoto])

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setProfilePhoto(reader.result)
      }
    }
    reader.readAsDataURL(file)
  }

  const skillGroups = [
    {
      title: 'Programming',
      icon: '💻',
      items: ['Java (DSA)', 'Python', 'C'],
    },
    {
      title: 'Frontend',
      icon: '🌐',
      items: ['React.js', 'TypeScript', 'HTML, CSS', 'Tailwind CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      items: ['Node.js', 'Express.js', 'JWT', 'REST APIs'],
    },
    {
      title: 'Database',
      icon: '🗄️',
      items: ['MongoDB', 'Mongoose', 'SQL'],
    },
    {
      title: 'Tools',
      icon: '🔧',
      items: ['Git', 'Docker', 'GitHub', 'VS Code'],
    },
    {
      title: 'Soft Skills',
      icon: '🧠',
      items: [
        'Communication',
        'Problem-solving',
        'Adaptability',
        'Teamwork',
        'Critical thinking',
        'Leadership',
      ],
    },
  ]

  const projects = [
    {
      name: 'Banking Management System',
      icon: '💳',
      subtitle: 'Website Project | June 2024',
      repoUrl: 'https://github.com/ravisingh-6386/Bank-management-system',
      points: [
        'Developed a web-based banking management system enabling users to create accounts, deposit, withdraw, and view account details.',
        'Implemented core banking logic using Linked List for efficient data handling, with a responsive frontend using HTML, CSS, and JavaScript.',
        'Designed a simple and user-friendly interface for smooth navigation and basic banking operations.',
      ],
      stack: 'HTML, CSS, JavaScript',
    },
    {
      name: 'AI Interview Platform',
      icon: '🔥',
      subtitle: 'Real-Time Voice-Based Mock Interview System | 2025',
      repoUrl: 'https://github.com/ravisingh-6386/AI_interview_platform-Prototype-of-website-',
      points: [
        'Built a real-time AI-powered interview platform enabling B.Tech students to practice mock interviews across domains like DSA, Frontend, and Backend.',
        'Implemented voice-based interaction where users answer verbally and an AI interviewer asks questions, evaluates responses, and provides instant feedback.',
        'Developed using React, Node.js, and APIs (Speech-to-Text, GPT, Text-to-Speech) to simulate realistic interview experiences with scoring and analytics.',
      ],
      stack: 'React, Node.js, Speech-to-Text, GPT, Text-to-Speech APIs',
    },
    {
      name: 'MERN JWT Authentication System',
      icon: '🔐',
      subtitle: 'Full Stack Web Application | March 2026',
      repoUrl: 'https://github.com/ravisingh-6386/mern-jwt-authentication',
      points: [
        'Designed and developed a secure authentication system with user signup, login, and protected routes using JWT-based authorization.',
        'Integrated password hashing (bcrypt) and middleware-based route protection to enhance security and access control.',
        'Built REST APIs with Node.js and Express.js, managed user data with MongoDB, and connected with a React frontend for dynamic UI interaction.',
      ],
      stack: 'React, Node.js, Express, MongoDB',
    },
  ]

  const achievements = [
    '💡 Ideathon Event - IdeaSurge, Sharda University (2024)',
    '🧠 Data Structures and Algorithms - Udemy Platform (June-July 2025)',
    '🚀 Smart India Hackathon (SIH) - Participant, Sharda University (2025)',
    '🌱 SUSTAIN-A-THON Hackathon - Participant, Sharda University (2025)',
    '🥇 CodeXplosion Hackathon - Participant (5th Rank), Sharda University (2026)',
  ]

  return (
    <div className="portfolio-page">
      <div className="ambient ambient-one" aria-hidden="true"></div>
      <div className="ambient ambient-two" aria-hidden="true"></div>

      <header className="hero reveal">
        <div className="hero-tools">
          <label className="photo-upload" htmlFor="photo-upload-input">
            📷 Upload Photo
          </label>
          <input
            id="photo-upload-input"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />

          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle dark and light mode"
            type="button"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <figure className="profile-photo-wrap">
          <img
            className="profile-photo"
            src={profilePhoto}
            alt="Ravi Singh"
            onError={(event) => {
              event.currentTarget.src = fallbackPhoto
              setProfilePhoto(fallbackPhoto)
            }}
          />
        </figure>

        <p className="eyebrow">Full Stack Developer | MERN Stack Enthusiast</p>
        <h1>
          Hi, I&apos;m Ravi Singh <span>👋</span>
        </h1>
        <p className="hero-copy">
          I build scalable web applications and AI-powered systems with a focus on real-world
          problem solving.
        </p>
        <p className="tagline">Turning ideas into scalable web apps</p>
        <p className="hero-copy hero-copy-secondary">
          Computer Science Engineering student with hands-on experience in full-stack web
          development and AI-driven applications, aspiring to become a Software Engineer building
          scalable, high-quality solutions.
        </p>
        <nav className="hero-actions" aria-label="Primary">
          <a href="#projects">View Projects</a>
          <a href="https://github.com/ravisingh-6386?tab=repositories" target="_blank" rel="noreferrer">
            GitHub Repositories
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-singh-294b37327/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn Profile
          </a>
          <a href="#contact" className="ghost">
            Contact Me
          </a>
        </nav>
      </header>

      <section className="panel reveal" id="about">
        <h2>👨‍💻 About Me</h2>
        <p>
          I am a Computer Science Engineering student at Sharda University (CGPA: 8.8), passionate
          about building modern web applications and AI-driven solutions.
        </p>
        <p>
          I have hands-on experience in full-stack development using HTML, CSS, JavaScript, React,
          Node.js, and the MERN stack ecosystem, along with a strong foundation in Data Structures
          & Algorithms and real-time systems.
        </p>
        <p>
          I enjoy working on real-time systems and innovative projects like AI-powered interview
          platforms that simulate real-world experiences. My goal is to become a Software Engineer
          and build scalable, impactful applications.
        </p>
      </section>

      <section className="panel reveal" id="skills">
        <h2>🛠️ Skills</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>
                <span>{group.icon}</span> {group.title}
              </h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel reveal" id="projects">
        <h2>🚀 Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.name} className="project-card">
              <h3>
                {project.icon} {project.name}
              </h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="stack">
                <strong>Tech Stack:</strong> {project.stack}
              </p>
              <a className="repo-link" href={project.repoUrl} target="_blank" rel="noreferrer">
                View Project Repository
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="panel split reveal" id="education">
        <article>
          <h2>🎓 Education</h2>
          <ul className="simple-list">
            <li>
              <strong>B.Tech in Computer Science Engineering, Sharda University (2024 - Present)</strong>
              <span>CGPA: 8.8</span>
            </li>
            <li>
              <strong>Class XII, UP Board, St. John Model School (2023)</strong>
              <span>72.3%</span>
            </li>
            <li>
              <strong>Class X, UP Board, St. John Model School (2021)</strong>
              <span>85.5%</span>
            </li>
          </ul>
        </article>

        <article>
          <h2>🏆 Achievements & Certifications</h2>
          <ul className="simple-list">
            {achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="panel reveal" id="contact">
        <h2>📞 Contact</h2>
        <div className="contact-grid">
          <a href="mailto:ravisingh98199@gmail.com">📧 ravisingh98199@gmail.com</a>
          <a href="tel:+919555131042">📱 +91 9555131042</a>
          <a
            href="https://github.com/ravisingh-6386?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            📂 github.com/ravisingh-6386?tab=repositories
          </a>
          <a href="https://github.com/ravisingh6386" target="_blank" rel="noreferrer">
            💻 github.com/ravisingh6386
          </a>
          <a
            href="https://www.linkedin.com/in/ravi-singh-294b37327/"
            target="_blank"
            rel="noreferrer"
          >
            🔗 linkedin.com/in/ravi-singh-294b37327/
          </a>
          <a href="https://leetcode.com/u/ravisingh98199" target="_blank" rel="noreferrer">
            🧠 leetcode.com/u/ravisingh98199
          </a>
          <a href="https://x.com/RaviSin64398992" target="_blank" rel="noreferrer">
            🐦 x.com/RaviSin64398992
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
