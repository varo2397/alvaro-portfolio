import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  ExternalLink,
  Mail,
  MapPin,
  Network,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles
} from "lucide-react";
import "./styles.css";

type Project = {
  name: string;
  category: string;
  url: string;
  impact: string;
  stack: string[];
};

type Role = {
  company: string;
  title: string;
  period: string;
  summary: string;
};

const projects: Project[] = [
  {
    name: "Affirm",
    category: "Fintech mobile commerce",
    url: "https://apps.apple.com/us/app/affirm-buy-now-pay-over-time/id967040652",
    impact: "Contributed to production-grade mobile experiences in a regulated, high-trust commerce environment.",
    stack: ["React Native", "Accessibility", "Mobile UX", "Release Quality"]
  },
  {
    name: "Nu Skin Vera",
    category: "Consumer mobile platform",
    url: "https://apps.apple.com/sg/app/nu-skin-vera/id1569408041",
    impact: "Built React Native features with native integrations and maintainable application architecture.",
    stack: ["React Native", "Java", "Objective-C", "App Architecture"]
  },
  {
    name: "Fortress",
    category: "B2B web platform",
    url: "https://fortresstech.io/",
    impact: "Delivered full-stack product work across web interfaces, API boundaries, and operational workflows.",
    stack: ["React", "TypeScript", "Node.js", "Microservices"]
  },
  {
    name: "Courier",
    category: "Notification infrastructure",
    url: "https://www.courier.com/",
    impact: "Worked in product surfaces where frontend state, developer experience, and backend services meet.",
    stack: ["React", "GraphQL", "TypeScript", "Design Systems"]
  },
  {
    name: "Polco",
    category: "Civic engagement SaaS",
    url: "https://info.polco.us/",
    impact: "Supported user-facing workflows for data-driven civic participation and organization tooling.",
    stack: ["React", "Node.js", "Product Delivery", "QA Collaboration"]
  },
  {
    name: "Grazzy",
    category: "Payments and hospitality",
    url: "https://www.grazzy.com/",
    impact: "Helped ship practical product experiences in payment-heavy workflows where reliability matters.",
    stack: ["React", "TypeScript", "Backend APIs", "Production Support"]
  }
];

const roles: Role[] = [
  {
    company: "Gorilla Logic",
    title: "Senior Software Engineer",
    period: "Apr 2022 - Present",
    summary:
      "Delivered scalable full-stack applications with React, TypeScript, Node.js, microservices, and close product/design/QA collaboration."
  },
  {
    company: "First Factory",
    title: "Software Engineer",
    period: "Feb 2021 - Apr 2022",
    summary:
      "Led team delivery, built CRM products from the ground up, and mentored engineers through architecture and code reviews."
  },
  {
    company: "Omni Costa Rica",
    title: "Full Stack Engineer",
    period: "Mar 2020 - Feb 2021",
    summary:
      "Improved transportation and banking apps through performance work, security enhancements, and native mobile integrations."
  },
  {
    company: "Bananacode",
    title: "Software Developer",
    period: "Mar 2019 - Mar 2020",
    summary:
      "Created React Native architectures, integrated native Java and Objective-C code, and shipped mobile game features."
  }
];

const skills = [
  { label: "Frontend", value: "React, Next.js, TypeScript, CSS systems", icon: Code2 },
  { label: "Backend", value: "Node.js, NestJS, Python, Django, FastAPI", icon: ServerCog },
  { label: "Data", value: "PostgreSQL, Firebase, MySQL, MariaDB", icon: Database },
  { label: "Mobile", value: "React Native, Java, Objective-C", icon: Smartphone },
  { label: "Architecture", value: "Microservices, REST, GraphQL, MVC/MVVM", icon: Network },
  { label: "Delivery", value: "Docker, GitHub Actions, CI/CD workflows", icon: Rocket }
];

function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Alvaro Castro home">
          AC
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-content reveal is-visible">
            <p className="eyebrow">
              <MapPin size={16} aria-hidden="true" /> San Jose, Costa Rica
            </p>
            <h1>
              Alvaro
              <span>Castro</span>
            </h1>
            <p className="hero-title">Senior Full-Stack Engineer</p>
            <p className="hero-copy">
              I build production web, mobile, and backend systems with React, React Native, TypeScript,
              Node.js, NestJS, PostgreSQL, and microservice-based architecture.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                <BriefcaseBusiness size={18} aria-hidden="true" /> View Work
              </a>
              <a className="button secondary" href="mailto:alvarocastro74@gmail.com">
                <Mail size={18} aria-hidden="true" /> Contact
              </a>
            </div>
          </div>
          <div className="hero-art reveal is-visible" aria-hidden="true">
            <div className="image-shell">
              <img
                src="/images/engineering-workspace.png"
                alt=""
              />
              <div className="scan-line" />
            </div>
            <div className="status-strip">
              <span>React Native</span>
              <span>TypeScript</span>
              <span>Node/NestJS</span>
              <span>PostgreSQL</span>
            </div>
            <div className="signal-card signal-a">
              <strong>99.9</strong>
              <span>reliability mindset</span>
            </div>
            <div className="signal-card signal-b">
              <strong>7+</strong>
              <span>years shipping</span>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics reveal" aria-label="Career highlights">
        <div>
          <strong>7+</strong>
          <span>years shipping software</span>
        </div>
        <div>
          <strong>6</strong>
          <span>featured product teams</span>
        </div>
        <div>
          <strong>3</strong>
          <span>platform surfaces: web, mobile, backend</span>
        </div>
      </section>

      <section className="section intro reveal">
        <div>
          <p className="section-kicker">Focus</p>
          <h2>Product engineering across the full stack.</h2>
        </div>
        <p>
          My work sits where product quality, frontend craft, API design, mobile delivery, and
          production reliability overlap. I have supported regulated fintech, civic technology,
          notification infrastructure, payments, CRMs, transportation, and consumer mobile products.
        </p>
      </section>

      <section className="section skills-section reveal" aria-labelledby="skills-title">
        <div className="section-heading">
          <p className="section-kicker">Capabilities</p>
          <h2 id="skills-title">Modern stack, practical delivery.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article className="skill" key={skill.label}>
                <Icon size={22} aria-hidden="true" />
                <h3>{skill.label}</h3>
                <p>{skill.value}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section reveal" id="work" aria-labelledby="work-title">
        <div className="section-heading split">
          <div>
            <p className="section-kicker">Selected Work</p>
            <h2 id="work-title">Products shipped with real users and real constraints.</h2>
          </div>
          <p>
            A focused view of the products and sites you listed, framed around the engineering
            responsibilities that matter to hiring teams.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <a className="project-card" href={project.url} target="_blank" rel="noreferrer" key={project.name}>
              <span>{project.category}</span>
              <div className="project-title">
                <h3>{project.name}</h3>
                <ArrowUpRight size={20} aria-hidden="true" />
              </div>
              <p>{project.impact}</p>
              <div className="tag-row">
                {project.stack.map((item) => (
                  <em key={item}>{item}</em>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section experience reveal" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 id="experience-title">A senior path through delivery, architecture, and mentorship.</h2>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item" key={role.company}>
              <div className="timeline-marker" aria-hidden="true" />
              <div>
                <p>{role.period}</p>
                <h3>{role.title}</h3>
                <strong>{role.company}</strong>
                <span>{role.summary}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact reveal" id="contact" aria-labelledby="contact-title">
        <div>
          <p className="section-kicker">Available For</p>
          <h2 id="contact-title">Senior full-stack roles, product teams, and complex delivery work.</h2>
          <p>
            Best fit: teams that need someone comfortable moving between frontend UX, backend APIs,
            mobile constraints, architecture tradeoffs, and production support.
          </p>
        </div>
        <div className="contact-panel">
          <a href="mailto:alvarocastro74@gmail.com">
            <Mail size={18} aria-hidden="true" /> alvarocastro74@gmail.com
          </a>
          <a href="tel:+50686424112">
            <Phone size={18} aria-hidden="true" /> +506 8642 4112
          </a>
          <a
            href="https://www.linkedin.com/in/alvaro-castro-venegas-b07b25162"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={18} aria-hidden="true" /> LinkedIn
          </a>
          <span>
            <ShieldCheck size={18} aria-hidden="true" /> Costa Rica timezone, remote-ready
          </span>
          <span>
            <Sparkles size={18} aria-hidden="true" /> AI-assisted workflows with Cursor, Claude Code, ChatGPT
          </span>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
