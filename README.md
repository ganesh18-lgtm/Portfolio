# Ex01 Portfolio
## Date:27/07/2026

## AIM
To create a Portfolio using HTML and CSS.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for introduction, about, projects, and contact details.

### STEP 5
Define global styles for fonts, colors, and layout.

### STEP 6
Style the header, navigation bar, and sections.

### STEP 7
Use Flexbox or CSS Grid for layout design.

### STEP 8
Add hover effects and transitions for interactivity.

### STEP 9
Add Images and Media.

### STEP 10
Use optimized images for a professional look.

### STEP 11
Open the HTML file in a browser to check layout and functionality.

### STEP 12
Fix styling issues and refine content placement.

### STEP 13
Deploy the Portfolio.

### STEP 14
Upload to GitHub Pages for free hosting.

## PROGRAM
##HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ganesh B C Portfolio</title>
  <meta name="description" content="Portfolio of Ganesh B C, a computer science engineer and  3D designer building fast, accessible interfaces.">

  <!-- Open Graph -->
  <meta property="og:title" content="Ganesh B C — Software Engineer & Designer">
  <meta property="og:description" content="Portfolio of Ganesh B C, a computer science engineer and  3D designer building fast, accessible interfaces.">
  <meta property="og:type" content="website">

  <!-- Fonts: self-hosting recommended for production (see README); using
       font-display: swap so text never blocks on the network. -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <a href="#main" class="skip-link">Skip to content</a>

  <!-- ===================== SIGNATURE ELEMENT: SCROLL SPINE =================== -->
  <nav class="spine" aria-label="Section progress">
    <div class="spine__track"></div>
    <div class="spine__fill" data-spine-fill></div>
    <a href="#hero" class="spine__node" data-label="Intro" data-spine-node></a>
    <a href="#education" class="spine__node" data-label="Education" data-spine-node></a>
    <a href="#skills" class="spine__node" data-label="Skills" data-spine-node></a>
    <a href="#work" class="spine__node" data-label="Work" data-spine-node></a>
    <a href="#contact" class="spine__node" data-label="Contact" data-spine-node></a>
  </nav>

  <!-- ===================== NAV (glassmorphism) =================== -->
  <header class="nav">
    <div class="container nav__inner">
      <a href="#hero" class="nav__logo">PORTFOLIO</a>
      <ul class="nav__links" role="list">
        <li><a class="nav__link" href="#education">Education</a></li>
        <li><a class="nav__link" href="#skills">Skills</a></li>
        <li><a class="nav__link" href="#work">Work</a></li>
        <li><a class="nav__link" href="#contact">Contact</a></li>
      </ul>
      <div class="nav__actions">
        <button class="theme-toggle" id="themeToggle" type="button" aria-pressed="false" aria-label="Toggle dark mode">
          <span class="theme-toggle__thumb"></span>
        </button>
        <button class="nav__toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="mobile-nav" id="mobileNav">
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#work">Work</a>
    <a href="#contact">Contact</a>
  </div>

  <main id="main">

    <!-- ===================== 1. HERO / BIO =================== -->
    <section class="hero" id="hero" aria-labelledby="hero-heading">
      <div class="hero__blob" aria-hidden="true"></div>
      <div class="container hero__content">
        <p class="eyebrow">Computer Science Engineer &amp; Designer</p>
        <h1 class="hero__title" id="hero-heading">
          <span class="line" style="--i:0"><!-- PLACEHOLDER: first name --> Ganesh</span>
          <span class="line" style="--i:1"><!-- PLACEHOLDER: last name -->B C</span>
        </h1>
        <p class="hero__lede">
          <!-- PLACEHOLDER: bio, 40–60 words -->
          I'm a Computer Science Engineering student passionate about building modern, user-focused digital solutions.
          With a foundation in web development, cloud computing, cybersecurity, generative AI, and CAD design, I enjoy transforming ideas into practical applications. 
          I'm committed to continuous learning, solving real-world problems, and creating technology that delivers meaningful impact.

        </p>
        <div class="hero__cta">
          <a class="btn btn--primary" href="#work">View Work</a>
          <a class="btn btn--ghost" href="/assets/resume.pdf" download>Download Résumé</a>
        </div>
      </div>
      <div class="hero__scroll-hint" aria-hidden="true">
        <span class="dash"></span> Scroll
      </div>
    </section>

    <!-- ===================== 2. EDUCATION =================== -->
    <section class="section" id="education" aria-labelledby="education-heading">
      <div class="container">
        <div class="section__head reveal">
          <p class="eyebrow">01 — Background</p>
          <h2 id="education-heading">Education</h2>
        </div>

        <div class="grid grid--2" data-reveal-group>
          <article class="card reveal" style="--i:0">
            <div class="card__meta">
              <h3><!-- PLACEHOLDER: degree --> B.E. in Computer Science and Engineering</h3>
              <span class="card__date"><!-- PLACEHOLDER: dates -->2025 – 2029</span>
            </div>
            <p class="card__org"><!-- PLACEHOLDER: institution -->Saveetha Engineering College, Chennai</p>
            <ul class="card__desc" role="list">
              <li>Student - 2nd Year; GPA 7.3/10.0 <!-- PLACEHOLDER: GPA optional --></li>
            </ul>
          </article>

          <article class="card reveal" style="--i:1">
            <div class="card__meta">
              <h3><!-- PLACEHOLDER: certification -->Introduction to Generative AI</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org"><!-- PLACEHOLDER: institution -->Google Cloud</p>
            <ul class="card__desc" role="list">
              <li>Focus: Generative AI principles and applications</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="Introduction to Generative AI" data-cert-image="assets/Gen Ai.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>

          <article class="card reveal" style="--i:2">
            <div class="card__meta">
              <h3>AWS Cloud Computing</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Amazon Web Services</p>
            <ul class="card__desc" role="list">
              <li>Core cloud concepts, AWS services, and architecture basics.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="AWS Cloud Computing" data-cert-image="assets/aws-educate-introduction-to-cloud-101-training-badge.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>
          <article class="card reveal" style="--i:3">
            <div class="card__meta">
              <h3>AWS Generative AI</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Amazon Web Services</p>
            <ul class="card__desc" role="list">
              <li>Introduction to generative AI on AWS.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="AWS Generative AI" data-cert-image="assets/aws gen ai.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>
          <article class="card reveal" style="--i:3">
            <div class="card__meta">
              <h3>AWS Machine Learning</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Amazon Web Services</p>
            <ul class="card__desc" role="list">
              <li>Introduction to machine learning on AWS.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="AWS Machine Learning" data-cert-image="assets/aws ml.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>

          <article class="card reveal" style="--i:3">
            <div class="card__meta">
              <h3>Introduction to Cybersecurity</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Skillup</p>
            <ul class="card__desc" role="list">
              <li>Fundamentals of security, risk management, and safe online practices.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="Introduction to Cybersecurity" data-cert-image="assets/Cyber security.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>

          <article class="card reveal" style="--i:4">
            <div class="card__meta">
              <h3>UI/UX Design Fundamentals</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Google UX Design</p>
            <ul class="card__desc" role="list">
              <li>Principles of user-centered design, wireframing, and accessibility.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="UI/UX Design Fundamentals" data-cert-image="assets/Ui and UX.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>

          <article class="card reveal" style="--i:5">
            <div class="card__meta">
              <h3>Fusion 360</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">SourceCAD</p>
            <ul class="card__desc" role="list">
              <li>3D modeling, design, and manufacturing using Fusion 360.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="Fusion 360" data-cert-image="assets/Fusion 360.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
          </article>
          <article class="card reveal" style="--i:6">
            <div class="card__meta">
              <h3>Kali Linux</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Skillup</p>
            <ul class="card__desc" role="list">
              <li>Introduction to ethical hacking and penetration testing.</li>
            </ul>
            <div class="card__actions">
              <button class="btn btn--ghost" type="button" data-cert-modal-open data-cert-title="Kali Linux" data-cert-image="assets/Kali Linux.png" aria-haspopup="dialog" aria-controls="certificateModal">
                View Certificate
              </button>
            </div>
        </div>
      </div>
    </section>

    <!-- ===================== 3. SKILLS =================== -->
    <section class="section" id="skills" aria-labelledby="skills-heading">
      <div class="container">
        <div class="section__head reveal">
          <p class="eyebrow">02 — Toolkit</p>
          <h2 id="skills-heading">Skills</h2>
        </div>

        <div class="grid grid--2">
          <div class="skills__group reveal">
            <h3>Programming Languages</h3>
            <div class="skill-row">
              <span>JavaScript / TypeScript</span>
              <span class="skill-row__dots" aria-label="Proficient">
                <span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span></span>
              </span>
            </div>
            <div class="skill-row">
              <span>Python</span>
              <span class="skill-row__dots" aria-label="Proficient">
                <span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span></span>
              </span>
            </div>
            <div class="skill-row">
              <span>HTML / CSS</span>
              <span class="skill-row__dots" aria-label="Proficient">
                <span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span></span>
              </span>
            </div>
            <div class="skill-row">
              <span>C Programming</span>
              <span class="skill-row__dots" aria-label="Proficient">
                <span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span class="is-filled"></span><span></span>
              </span>
            </div>
          </div>

          <div class="skills__group reveal">
            <h3>Frameworks &amp; Tools</h3>
            <div class="tags">
              <span class="tag">React</span>
              <span class="tag">Node.js</span>
              <span class="tag">Figma</span>
              <span class="tag">Git</span>
            </div>
          </div>
          <div class="skills__group reveal">
            <h3>Software &amp; Tools</h3>
            <div class="tags">
              <span class="tag">Blender</span>
              <span class="tag">Fusion 360</span>
              <span class="tag">Unreal Engine</span>
            </div>
          </div>

          <div class="skills__group reveal">
            <h3>Design</h3>
            <div class="tags">
              <span class="tag">Design parts</span>
              <span class="tag">3D Modeling</span>
              <span class="tag">Web Development</span>
            </div>
          </div>

          <div class="skills__group reveal">
            <h3>Soft Skills</h3>
            <div class="tags">
              <span class="tag">Cross-functional collaboration</span>
              <span class="tag">Mentorship</span>
              <span class="tag">Written communication</span>
              <span class="tag">Problem-solving</span>
              <span class="tag">Spoken communication</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 4. EXPERIENCE / PROJECTS =================== -->
    <section class="section" id="work" aria-labelledby="work-heading">
      <div class="container">
        <div class="section__head reveal">
          <p class="eyebrow">03 — Selected work</p>
          <h2 id="work-heading">Projects</h2>
        </div>
          <article class="card reveal" style="--i:1">
            <div class="card__meta">
              <h3><!-- PLACEHOLDER: project name -->Web App</h3>
              <span class="card__date">2026</span>
            </div>
            <p class="card__org">Personal project</p>
            <ul class="card__desc" role="list">
              <li><!-- PLACEHOLDER --> Built a website for a local business.</li>
              <li>With a modern design and responsive layout.</li>
            </ul>
            <div class="tags">
              <span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span>
            </div>
            <div class="card__links">
              <a href="#" target="_blank" rel="noopener noreferrer">Live demo</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ===================== 5. CONTACT =================== -->
    <section class="section" id="contact" aria-labelledby="contact-heading">
      <div class="container">
        <div class="section__head reveal">
          <p class="eyebrow">04 — Get in touch</p>
          <h2 id="contact-heading">Contact</h2>
        </div>

        <div class="contact__grid">
          <div class="reveal">
            <p>
              <!-- PLACEHOLDER: availability note -->
              I'm currently open to new opportunities and collaborations. 
              If you'd like to discuss a project, potential partnership, 
              or just want to say hello, feel free to reach out!
            </p>
            <p class="mt-lg">
              <a href="mailto:ganesh180208@gmail.com" style="color:var(--color-accent); font-weight:600;">
                <!-- PLACEHOLDER: email -->ganesh180208@gmail.com
              </a>
            </p>
          </div>

          <!-- Front-end only contact form — no backend wired up. Connect to a
               form service (e.g. Formspree, Netlify Forms) or your own API
               before relying on this in production. -->
          <form class="reveal" id="contactForm" novalidate>
            <div class="field">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
              <small class="error" data-error-for="name"></small>
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
              <small class="error" data-error-for="email"></small>
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
              <small class="error" data-error-for="message"></small>
            </div>
            <button class="btn btn--primary" type="submit">Send message</button>
            <p class="visually-hidden" role="status" id="formStatus"></p>
          </form>
        </div>
      </div>
    </section>

    <!-- ===================== 6. SOCIAL LINKS =================== -->
    <section class="section" style="padding-block: var(--space-2xl);" aria-labelledby="social-heading">
      <div class="container">
        <h2 id="social-heading" class="visually-hidden">Social and professional links</h2>
        <div class="social-links reveal">
          <a href="https://www.linkedin.com/in/ganesh-b-c-926bb8406/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in new tab)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            LinkedIn
          </a>
          <a href="https://github.com/ganesh18-lgtm" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in new tab)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.55v-2.16c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.5 3.17-1.18 3.17-1.18.64 1.6.24 2.77.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.79.55C20.21 21.4 23.5 17.1 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>
            GitHub
          </a>
          <a href="https://x.com/example" target="_blank" rel="noopener noreferrer" aria-label="X profile (opens in new tab)">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.9H5.5L17.7 20z"/></svg>
            X / Twitter
          </a>
        </div>
      </div>
    </section>
  </main>

  <!-- ===================== 7. FOOTER =================== -->
  <footer class="footer">
    <div class="container footer__inner">
      <p style="color: var(--color-text-muted); font-size: var(--step--1);">
        © <span id="year"></span> <!-- PLACEHOLDER: name -->Ganesh B C. All rights reserved.
      </p>
      <nav aria-label="Footer">
        <a class="back-to-top" href="#hero">↑ Back to top</a>
      </nav>
    </div>
  </footer>

  <div class="certificate-modal" id="certificateModal" role="dialog" aria-modal="true" aria-labelledby="certificateTitle" hidden>
    <div class="certificate-modal__backdrop" data-cert-modal-close></div>
    <div class="certificate-modal__panel">
      <div class="certificate-modal__header">
        <h3 id="certificateTitle">Generative AI Certificate</h3>
        <button class="certificate-modal__close" type="button" data-cert-modal-close aria-label="Close certificate preview">×</button>
      </div>
      <img class="certificate-modal__image" src="assets/Gen Ai.png" alt="Certificate preview for the Generative AI course">
    </div>
  </div>

  <script src="js/main.js" defer></script>
</body>
</html>
```

##CSS
```
/* ==========================================================================
   PORTFOLIO STYLESHEET
   Organized: tokens → reset → base/typography → layout → components →
              utilities → animations → media queries
   ========================================================================== */

/* ==========================================================================
   1. DESIGN TOKENS
   All color, spacing, type, radius, shadow and timing values live here.
   Nothing below this block should contain a "magic number" — reference
   a token instead so the whole site can be re-themed from one place.
   ========================================================================== */

:root {
  /* --- Color: light mode (default) ---
     Cool greige base with a single dusty-blue accent, per the brief's
     instruction to use one confident accent rather than a decorative palette. */
  --color-bg: #EFF0EA;
  --color-bg-alt: #E4E6DC;
  --color-surface: #F7F7F3;
  --color-text: #22262A;
  --color-text-muted: #565C57;
  --color-border: rgba(34, 38, 42, 0.12);
  --color-border-strong: rgba(34, 38, 42, 0.22);

  --color-accent: #4F6E8C;        /* dusty blue — CTAs, links, active states only */
  --color-accent-strong: #3B5670;
  --color-accent-tint: rgba(79, 110, 140, 0.12);
  --color-accent-contrast: #F7F7F3;

  --color-secondary: #8A9174;     /* muted sage — used only for proficiency dots */

  /* Glass surfaces (nav, overlays) */
  --glass-bg: rgba(247, 247, 243, 0.66);
  --glass-border: rgba(34, 38, 42, 0.10);

  /* Neomorphic shadow pair — soft-extruded feel for buttons, tags, cards */
  --neo-light: rgba(255, 255, 255, 0.85);
  --neo-dark: rgba(34, 38, 42, 0.14);

  /* --- Typography --- */
  --font-display: 'Fraunces', 'Iowan Old Style', 'Georgia', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'SFMono-Regular', Menlo, Consolas, monospace;

  /* Modular scale, ratio 1.333 (perfect fourth), base 1rem */
  --step--2: 0.563rem;
  --step--1: 0.75rem;
  --step-0: 1rem;
  --step-1: 1.333rem;
  --step-2: 1.777rem;
  --step-3: 2.369rem;
  --step-4: 3.157rem;
  --step-5: 4.209rem;

  /* --- Spacing scale --- */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1.5rem;
  --space-lg: 2.5rem;
  --space-xl: 4rem;
  --space-2xl: 6rem;
  --space-3xl: 8rem;
  --section-padding: 6rem;

  /* --- Layout --- */
  --content-max: 1200px;
  --gutter: 1.5rem;
  --spine-width: 48px;

  /* --- Radius --- */
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  /* --- Shadows --- */
  --shadow-glass: 0 8px 32px rgba(20, 24, 26, 0.10);
  --shadow-neo-raised: 6px 6px 14px var(--neo-dark), -6px -6px 14px var(--neo-light);
  --shadow-neo-pressed: inset 4px 4px 10px var(--neo-dark), inset -4px -4px 10px var(--neo-light);
  --shadow-card: 0 1px 2px rgba(20,24,26,0.06), 0 12px 28px rgba(20,24,26,0.08);
  --shadow-card-hover: 0 4px 8px rgba(20,24,26,0.08), 0 24px 48px rgba(20,24,26,0.14);

  /* --- Motion --- */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 180ms;
  --duration-base: 280ms;
  --duration-slow: 560ms;
  --duration-reveal: 720ms;
}

/* --- Dark mode: system preference --- */
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #15181A;
    --color-bg-alt: #1C2022;
    --color-surface: #1E2224;
    --color-text: #EAEBE5;
    --color-text-muted: #A6ACA2;
    --color-border: rgba(234, 235, 229, 0.10);
    --color-border-strong: rgba(234, 235, 229, 0.20);

    --color-accent: #7FA1C0;
    --color-accent-strong: #9DBAD4;
    --color-accent-tint: rgba(127, 161, 192, 0.14);
    --color-accent-contrast: #12161A;

    --color-secondary: #A3AC8B;

    --glass-bg: rgba(28, 32, 34, 0.55);
    --glass-border: rgba(234, 235, 229, 0.08);

    --neo-light: rgba(255, 255, 255, 0.04);
    --neo-dark: rgba(0, 0, 0, 0.55);

    --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 12px 28px rgba(0,0,0,0.35);
    --shadow-card-hover: 0 4px 10px rgba(0,0,0,0.35), 0 24px 48px rgba(0,0,0,0.45);
  }
}

/* --- Dark mode: manual toggle override (takes precedence via [data-theme]) --- */
[data-theme="dark"] {
  --color-bg: #15181A;
  --color-bg-alt: #1C2022;
  --color-surface: #1E2224;
  --color-text: #EAEBE5;
  --color-text-muted: #A6ACA2;
  --color-border: rgba(234, 235, 229, 0.10);
  --color-border-strong: rgba(234, 235, 229, 0.20);

  --color-accent: #7FA1C0;
  --color-accent-strong: #9DBAD4;
  --color-accent-tint: rgba(127, 161, 192, 0.14);
  --color-accent-contrast: #12161A;

  --color-secondary: #A3AC8B;

  --glass-bg: rgba(28, 32, 34, 0.55);
  --glass-border: rgba(234, 235, 229, 0.08);

  --neo-light: rgba(255, 255, 255, 0.04);
  --neo-dark: rgba(0, 0, 0, 0.55);

  --shadow-card: 0 1px 2px rgba(0,0,0,0.3), 0 12px 28px rgba(0,0,0,0.35);
  --shadow-card-hover: 0 4px 10px rgba(0,0,0,0.35), 0 24px 48px rgba(0,0,0,0.45);
}

[data-theme="light"] {
  --color-bg: #EFF0EA;
  --color-bg-alt: #E4E6DC;
  --color-surface: #F7F7F3;
  --color-text: #22262A;
  --color-text-muted: #565C57;
  --color-border: rgba(34, 38, 42, 0.12);
  --color-border-strong: rgba(34, 38, 42, 0.22);
  --color-accent: #4F6E8C;
  --color-accent-strong: #3B5670;
  --color-accent-tint: rgba(79, 110, 140, 0.12);
  --color-accent-contrast: #F7F7F3;
  --color-secondary: #8A9174;
  --glass-bg: rgba(247, 247, 243, 0.66);
  --glass-border: rgba(34, 38, 42, 0.10);
  --neo-light: rgba(255, 255, 255, 0.85);
  --neo-dark: rgba(34, 38, 42, 0.14);
  --shadow-card: 0 1px 2px rgba(20,24,26,0.06), 0 12px 28px rgba(20,24,26,0.08);
  --shadow-card-hover: 0 4px 8px rgba(20,24,26,0.08), 0 24px 48px rgba(20,24,26,0.14);
}

/* ==========================================================================
   2. RESET
   ========================================================================== */

*, *::before, *::after { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
}

body, h1, h2, h3, h4, p, figure, blockquote, dl, dd, ul, ol {
  margin: 0;
}

ul[role='list'], ol[role='list'] { list-style: none; padding: 0; }

html:focus-within { scroll-behavior: smooth; }

body {
  min-height: 100svh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

img, picture, svg { display: block; max-width: 100%; }

input, button, textarea, select { font: inherit; color: inherit; }

a { color: inherit; text-decoration: none; }

button { background: none; border: none; cursor: pointer; }

/* Respect reduced motion system-wide: this single rule is the safety net
   for every animation declared later in the file. */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* ==========================================================================
   3. BASE / TYPOGRAPHY
   ========================================================================== */

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  font-size: var(--step-0);
  transition: background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out);
}

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: var(--color-text);
}

h1 { font-size: clamp(var(--step-4), 6vw, var(--step-5)); font-weight: 500; }
h2 { font-size: clamp(var(--step-3), 4vw, var(--step-4)); }
h3 { font-size: var(--step-2); }
h4 { font-size: var(--step-1); font-family: var(--font-body); font-weight: 600; }

p { color: var(--color-text-muted); max-width: 62ch; }

.eyebrow {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
}

.eyebrow::before {
  content: '';
  width: 18px;
  height: 1px;
  background: currentColor;
}

/* Selection & focus */
::selection { background: var(--color-accent); color: var(--color-accent-contrast); }

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}

/* ==========================================================================
   4. LAYOUT
   ========================================================================== */

.container {
  width: 100%;
  max-width: var(--content-max);
  margin-inline: auto;
  padding-inline: var(--gutter);
}

.section {
  padding-block: var(--section-padding);
  position: relative;
  scroll-margin-top: 90px;
}

.section__head {
  margin-bottom: var(--space-2xl);
  max-width: 640px;
}

.section__head h2 { margin-top: var(--space-sm); }

.skip-link {
  position: absolute;
  left: 0;
  top: -60px;
  background: var(--color-accent);
  color: var(--color-accent-contrast);
  padding: var(--space-sm) var(--space-md);
  border-radius: 0 0 var(--radius-sm) 0;
  z-index: 200;
  transition: top var(--duration-fast) var(--ease-out);
}
.skip-link:focus { top: 0; }

/* --- Signature element: the "scroll spine" ---
   A fixed vertical rail that ticks off each section as the reader
   progresses and shows a traveling marker for current scroll position.
   It's information (how far through the page you are, which section is
   active) rather than pure decoration, and doubles as in-page nav. */
.spine {
  position: fixed;
  left: var(--space-md);
  top: 50%;
  transform: translateY(-50%);
  height: 40vh;
  width: var(--spine-width);
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.spine__track {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background: var(--color-border-strong);
  transform: translateX(-50%);
}

.spine__fill {
  position: absolute;
  top: 0;
  left: 50%;
  width: 1px;
  background: var(--color-accent);
  transform: translateX(-50%);
  height: 0%;
  transition: height var(--duration-fast) linear;
}

.spine__node {
  position: relative;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--color-bg);
  border: 1px solid var(--color-border-strong);
  z-index: 2;
  transition: transform var(--duration-fast) var(--ease-out), background var(--duration-fast), border-color var(--duration-fast);
}

.spine__node::after {
  content: attr(data-label);
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-family: var(--font-mono);
  font-size: var(--step--2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  white-space: nowrap;
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-out);
}

.spine__node:hover::after,
.spine__node:focus-visible::after { opacity: 1; }

.spine__node.is-active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  transform: scale(1.4);
}

@media (max-width: 900px) {
  .spine { display: none; }
}

/* ==========================================================================
   5. COMPONENTS
   ========================================================================== */

/* --- Nav (glassmorphism) --- */
.nav {
  position: fixed;
  top: 0;
  inset-inline: 0;
  z-index: 100;
  background: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(140%);
  -webkit-backdrop-filter: blur(16px) saturate(140%);
  border-bottom: 1px solid var(--glass-border);
}

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-sm);
}

.nav__logo {
  font-family: var(--font-display);
  font-size: var(--step-1);
  font-weight: 600;
}

.nav__links {
  display: flex;
  gap: var(--space-lg);
  font-size: var(--step--1);
}

.nav__link {
  position: relative;
  padding-block: var(--space-2xs);
}

/* Underline-grow micro-interaction, not an abrupt color snap */
.nav__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-base) var(--ease-out);
}
.nav__link:hover::after,
.nav__link:focus-visible::after { transform: scaleX(1); }

.nav__actions { display: flex; align-items: center; gap: var(--space-md); }

.nav__toggle {
  display: none;
  width: 40px;
  height: 40px;
  place-items: center;
  flex-direction: column;
  gap: 5px;
}
.nav__toggle span {
  width: 20px;
  height: 1.5px;
  background: var(--color-text);
  transition: transform var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out);
}
.nav__toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.nav__toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.nav__toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-nav {
  position: fixed;
  inset: 64px 0 0 0;
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 90;
  display: flex;
  flex-direction: column;
  padding: var(--space-xl) var(--gutter);
  gap: var(--space-lg);
  transform: translateY(-12px);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out);
}
.mobile-nav.is-open {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.mobile-nav a { font-size: var(--step-2); font-family: var(--font-display); }

/* Theme toggle: neomorphic switch */
.theme-toggle {
  width: 52px;
  height: 30px;
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  box-shadow: var(--shadow-neo-pressed);
  position: relative;
  padding: 3px;
}

.theme-toggle__thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--color-accent);
  transition: transform var(--duration-base) var(--ease-out), background var(--duration-base);
  transform: translateX(0);
}
[data-theme="dark"] .theme-toggle__thumb { transform: translateX(22px); }

/* --- Buttons --- */
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--step--1);
  font-weight: 600;
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-pill);
  transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out), background var(--duration-fast);
  will-change: transform;
}

.btn--primary {
  background: var(--color-accent);
  color: var(--color-accent-contrast);
  box-shadow: 0 1px 2px rgba(20,24,26,0.15), 0 8px 20px var(--color-accent-tint);
}
.btn--primary:hover { transform: translateY(-2px); box-shadow: 0 4px 10px rgba(20,24,26,0.18), 0 14px 28px var(--color-accent-tint); }
.btn--primary:active { transform: translateY(0) scale(0.98); }

.btn--ghost {
  background: var(--color-surface);
  color: var(--color-text);
  box-shadow: var(--shadow-neo-raised);
}
.btn--ghost:hover { transform: translateY(-2px); }
.btn--ghost:active { box-shadow: var(--shadow-neo-pressed); transform: translateY(0); }

.card__actions {
  margin-top: var(--space-md);
}

.certificate-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: var(--gutter);
}

.certificate-modal[hidden] {
  display: none;
}

.certificate-modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(10, 12, 14, 0.72);
  backdrop-filter: blur(6px);
}

.certificate-modal__panel {
  position: relative;
  z-index: 1;
  width: min(100%, 860px);
  max-height: 90vh;
  overflow: auto;
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  box-shadow: var(--shadow-card-hover);
}

.certificate-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  margin-bottom: var(--space-sm);
}

.certificate-modal__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  font-size: 1.25rem;
  background: var(--color-surface);
  box-shadow: var(--shadow-neo-raised);
}

.certificate-modal__close:hover {
  transform: translateY(-1px);
}

.certificate-modal__image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
  object-fit: contain;
}

/* --- Hero --- */
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  position: relative;
  overflow: hidden;
}

.hero__blob {
  position: absolute;
  width: 640px;
  height: 640px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--color-accent-tint), transparent 70%);
  top: -120px;
  right: -160px;
  filter: blur(10px);
  animation: drift 18s ease-in-out infinite;
  pointer-events: none;
}

.hero__content { max-width: 760px; }

.hero__title {
  overflow: hidden;
}

/* Each word/line wrapped in a span and staggered on load via JS-applied
   custom property --i, so no per-word CSS rule is needed. */
.hero__title .line {
  display: block;
  transform: translateY(110%);
  animation: rise var(--duration-reveal) var(--ease-out) forwards;
  animation-delay: calc(var(--i, 0) * 90ms + 200ms);
}

.hero__lede {
  margin-top: var(--space-md);
  font-size: var(--step-1);
  opacity: 0;
  animation: fade-up var(--duration-reveal) var(--ease-out) forwards;
  animation-delay: 650ms;
}

.hero__cta {
  margin-top: var(--space-xl);
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
  opacity: 0;
  animation: fade-up var(--duration-reveal) var(--ease-out) forwards;
  animation-delay: 800ms;
}

.hero__scroll-hint {
  position: absolute;
  bottom: var(--space-xl);
  left: var(--gutter);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-family: var(--font-mono);
  font-size: var(--step--2);
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__scroll-hint .dash {
  width: 20px;
  height: 1px;
  background: currentColor;
  animation: pulse-dash 2s ease-in-out infinite;
}

/* --- Reveal-on-scroll utility, driven by IntersectionObserver in JS --- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity var(--duration-reveal) var(--ease-out), transform var(--duration-reveal) var(--ease-out);
}
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.reveal[data-reveal-group] > * {
  transition-delay: calc(var(--i, 0) * 90ms);
}

/* --- Cards (Education / Experience / Projects) ---
   Single reusable pattern documented in the README as .card */
.grid {
  display: grid;
  gap: var(--space-lg);
}
.grid--2 { grid-template-columns: repeat(2, 1fr); }
.grid--3 { grid-template-columns: repeat(3, 1fr); }

.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-card);
  transition: transform var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out), border-color var(--duration-base);
  transform-style: preserve-3d;
  will-change: transform;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-border-strong);
}

.card__meta {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: var(--space-sm);
  flex-wrap: wrap;
  margin-bottom: var(--space-xs);
}

.card__date {
  font-family: var(--font-mono);
  font-size: var(--step--1);
  color: var(--color-text-muted);
  white-space: nowrap;
}

.card__org {
  color: var(--color-accent);
  font-weight: 600;
  font-size: var(--step--1);
}

.card__desc {
  margin-top: var(--space-sm);
  padding-left: 1.1em;
}
.card__desc li {
  position: relative;
  padding-left: var(--space-sm);
  margin-bottom: var(--space-2xs);
  color: var(--color-text-muted);
}
.card__desc li::marker { color: var(--color-accent); }

.card__links {
  margin-top: var(--space-md);
  display: flex;
  gap: var(--space-md);
}
.card__links a {
  font-size: var(--step--1);
  font-weight: 600;
  color: var(--color-accent);
  position: relative;
}
.card__links a::after {
  content: '';
  position: absolute;
  left: 0; bottom: -2px;
  height: 1px; width: 100%;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-base) var(--ease-out);
}
.card__links a:hover::after { transform: scaleX(1); }

/* --- Tag / pill pattern (Skills, tech stacks) --- */
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
}

.tag {
  font-family: var(--font-mono);
  font-size: var(--step--2);
  letter-spacing: 0.02em;
  padding: var(--space-2xs) var(--space-sm);
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  box-shadow: var(--shadow-neo-raised);
  color: var(--color-text);
  transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
}
.tag:hover { transform: translateY(-2px) scale(1.04); }

/* Skills proficiency: quiet segmented dots, not an animated progress bar */
.skill-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-md);
  padding-block: var(--space-sm);
  border-bottom: 1px solid var(--color-border);
}
.skill-row:last-child { border-bottom: none; }

.skill-row__dots {
  display: flex;
  gap: 5px;
}
.skill-row__dots span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-border-strong);
  transition: background var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out);
}
.skill-row__dots span.is-filled { background: var(--color-secondary); }
.reveal.is-visible .skill-row__dots span.is-filled {
  animation: pop var(--duration-base) var(--ease-out) backwards;
}
.skill-row__dots span:nth-child(1) { animation-delay: 60ms; }
.skill-row__dots span:nth-child(2) { animation-delay: 120ms; }
.skill-row__dots span:nth-child(3) { animation-delay: 180ms; }
.skill-row__dots span:nth-child(4) { animation-delay: 240ms; }
.skill-row__dots span:nth-child(5) { animation-delay: 300ms; }

.skills__group h3 { font-size: var(--step-0); margin-bottom: var(--space-sm); }
.skills__group { margin-bottom: var(--space-xl); }

/* --- Contact --- */
.contact__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2xl);
  align-items: start;
}

.field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xs);
  margin-bottom: var(--space-md);
}

.field label {
  font-family: var(--font-mono);
  font-size: var(--step--2);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.field input,
.field textarea {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  transition: box-shadow var(--duration-fast) var(--ease-out), border-color var(--duration-fast);
}

.field input:focus,
.field textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px var(--color-accent-tint);
  outline: none;
}

.field small.error {
  color: #B5544A;
  font-size: var(--step--2);
  min-height: 1em;
}

/* --- Social links --- */
.social-links {
  display: flex;
  gap: var(--space-md);
  flex-wrap: wrap;
}
.social-links a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-pill);
  background: var(--color-surface);
  box-shadow: var(--shadow-neo-raised);
  font-size: var(--step--1);
  font-weight: 600;
  transition: transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out);
}
.social-links a:hover { transform: translateY(-3px) rotate(-1deg); box-shadow: var(--shadow-card-hover); }
.social-links svg { width: 18px; height: 18px; }

/* --- Footer --- */
.footer {
  border-top: 1px solid var(--color-border);
  padding-block: var(--space-lg);
}
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-md);
}

.back-to-top {
  font-family: var(--font-mono);
  font-size: var(--step--2);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2xs);
  color: var(--color-text-muted);
  transition: color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out);
}
.back-to-top:hover { color: var(--color-accent); transform: translateY(-2px); }

/* ==========================================================================
   6. UTILITIES
   ========================================================================== */

.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}

.mt-lg { margin-top: var(--space-lg); }
.mt-xl { margin-top: var(--space-xl); }

/* ==========================================================================
   7. ANIMATIONS
   Keyframes referenced by hero, spine, reveal and ambient elements above.
   ========================================================================== */

@keyframes rise {
  to { transform: translateY(0); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pop {
  0% { transform: scale(0.4); }
  70% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

@keyframes pulse-dash {
  0%, 100% { transform: scaleX(1); opacity: 0.5; }
  50% { transform: scaleX(1.6); opacity: 1; }
}

@keyframes drift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-30px, 40px) scale(1.06); }
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* ==========================================================================
   8. MEDIA QUERIES (mobile-first: base styles above are mobile;
      progressively enhance from 480 / 768 / 1024 / 1280)
   ========================================================================== */

@media (min-width: 480px) {
  :root { --section-padding: 5rem; }
}

@media (min-width: 768px) {
  :root { --section-padding: 7rem; }
}

@media (max-width: 767px) {
  .nav__links { display: none; }
  .nav__toggle { display: grid; }
  .grid--2, .grid--3 { grid-template-columns: 1fr; }
  .contact__grid { grid-template-columns: 1fr; }
  .hero__blob { width: 380px; height: 380px; }
}

@media (min-width: 1024px) {
  :root { --section-padding: 8rem; }
}

@media (min-width: 1280px) {
  .container { padding-inline: var(--space-2xl); }
}

/* Graceful fallback where backdrop-filter is unsupported */
@supports not (backdrop-filter: blur(1px)) {
  .nav { background: var(--color-bg); }
}
```

## Java Script
```
/**
 * main.js — progressive-enhancement layer.
 * Nothing here is required for the page's core content or navigation to
 * work: every link is a real <a href="#...">, and the form still submits
 * (to nowhere, since there's no backend — see the HTML comment) if JS
 * fails to load. This file only adds motion and UX polish on top.
 */
(() => {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
   * 1. Footer year
   * ------------------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------------
   * 2. Theme toggle (persisted to localStorage, respects system default
   *    until the user makes an explicit choice)
   * ------------------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const STORAGE_KEY = 'portfolio-theme';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    themeToggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  };

  const storedTheme = localStorage.getItem(STORAGE_KEY);
  if (storedTheme) applyTheme(storedTheme);

  themeToggle?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme')
      || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
  });

  /* ---------------------------------------------------------------------
   * 3. Mobile nav toggle
   * ------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle?.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------------------------------------------------------------
   * 4. Certificate modal
   * ------------------------------------------------------------------- */
  const certButtons = document.querySelectorAll('[data-cert-modal-open]');
  const certModal = document.getElementById('certificateModal');
  const certCloseTriggers = document.querySelectorAll('[data-cert-modal-close]');
  const certTitle = document.getElementById('certificateTitle');
  const certImage = certModal?.querySelector('.certificate-modal__image');

  const openCertificateModal = (title, image) => {
    if (certTitle) certTitle.textContent = title || 'Certificate';
    if (certImage) {
      certImage.src = image || 'assets/certificate.svg';
      certImage.alt = `${title || 'Certificate'} preview`;
    }
    certModal?.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeCertificateModal = () => {
    certModal?.setAttribute('hidden', '');
    document.body.style.overflow = '';
  };

  certButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openCertificateModal(button.dataset.certTitle, button.dataset.certImage);
    });
  });
  certCloseTriggers.forEach((trigger) => trigger.addEventListener('click', closeCertificateModal));

  certModal?.addEventListener('click', (event) => {
    if (event.target === certModal) closeCertificateModal();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && certModal && !certModal.hasAttribute('hidden')) {
      closeCertificateModal();
    }
  });

  /* ---------------------------------------------------------------------
   * 5. Scroll-triggered reveals — IntersectionObserver instead of a
   *    scroll listener so we don't run layout work on every scroll frame;
   *    the browser only notifies us when an element actually crosses the
   *    viewport threshold.
   * ------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for very old browsers: just show everything.
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------------------------------------------------------------------
   * 5. Scroll spine — progress fill + active-section marker.
   *    Uses the same IntersectionObserver pattern (via a second observer
   *    tuned to section boundaries) rather than recalculating scroll
   *    position on every scroll event.
   * ------------------------------------------------------------------- */
  const spineFill = document.querySelector('[data-spine-fill]');
  const spineNodes = document.querySelectorAll('[data-spine-node]');
  const sections = ['hero', 'education', 'skills', 'work', 'contact']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const setActiveNode = (id) => {
    spineNodes.forEach((node) => {
      const match = node.getAttribute('href') === `#${id}`;
      node.classList.toggle('is-active', match);
    });
  };

  if (sections.length && 'IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNode(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // The fill height is a simple ratio, cheap enough to run on scroll
  // directly (single style write, no layout thrashing) but throttled
  // via requestAnimationFrame to stay off the main thread's critical path.
  let ticking = false;
  const updateSpineFill = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (spineFill) spineFill.style.height = `${Math.min(progress * 100, 100)}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateSpineFill);
      ticking = true;
    }
  }, { passive: true });
  updateSpineFill();

  /* ---------------------------------------------------------------------
   * 6. Front-end form validation (no backend — see HTML comment near the
   *    <form>). Wire this to a real endpoint before shipping.
   * ------------------------------------------------------------------- */
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach((field) => {
      const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
      const isEmpty = !field.value.trim();
      const isBadEmail = field.type === 'email' && field.value && !/^\S+@\S+\.\S+$/.test(field.value);

      if (isEmpty || isBadEmail) {
        valid = false;
        if (errorEl) errorEl.textContent = isEmpty ? 'This field is required.' : 'Enter a valid email address.';
        field.setAttribute('aria-invalid', 'true');
      } else {
        if (errorEl) errorEl.textContent = '';
        field.removeAttribute('aria-invalid');
      }
    });

    if (status) {
      status.textContent = valid
        ? 'Message ready to send — connect this form to a backend to deliver it.'
        : 'Please fix the highlighted fields.';
    }

    if (valid) form.reset();
  });
})();
```

## OUTPUT
<img width="1920" height="1080" alt="Screenshot 2026-07-25 145053" src="https://github.com/user-attachments/assets/e402778a-c053-42bb-8759-1fcd27e37ec8" />

<img width="1920" height="1080" alt="Screenshot 2026-07-25 145107" src="https://github.com/user-attachments/assets/c0a403e4-9fa7-4ef2-bb0d-83eead381e7f" />

<img width="1920" height="1080" alt="Screenshot 2026-07-25 145120" src="https://github.com/user-attachments/assets/69d32975-fa71-43c4-b337-c2c47d5a29ca" />

<img width="1920" height="1080" alt="Screenshot 2026-07-25 145132" src="https://github.com/user-attachments/assets/ceb7ee3e-7abd-43de-a55c-9b008348b1b3" />

<img width="1920" height="1080" alt="Screenshot 2026-07-25 145151" src="https://github.com/user-attachments/assets/7837a4e6-6cf9-460f-af0f-d0ee82151e77" />

<img width="1920" height="1080" alt="Screenshot 2026-07-25 145205" src="https://github.com/user-attachments/assets/8b2b4434-bd16-48d1-a060-dbfaf7314160" />

## RESULT
The program for creating Portfolio using HTML and CSS is executed successfully.
