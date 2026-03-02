import "./App.css";
import { useTranslation } from "react-i18next";

type ResumeContent = {
  name: string;
  role: string;
  contacts: {
    email: string;
    phone: string;
    location: string;
    linkedInLabel: string;
    linkedInUrl: string;
    githubLabel: string;
    githubUrl: string;
    telegramLabel: string;
    telegramUrl: string;
  };
  sections: {
    professionalSummary: string;
    technicalToolkit: string;
    workExperience: string;
    education: string;
    volunteering: string;
    statsConnect: string;
    aboutMe: string;
  };
  summary: string;
  summaryList: string[];
  aboutMe: string;
  toolkit: {
    languagesLabel: string;
    languages: string;
    frameworksLabel: string;
    frameworks: string;
    toolsLabel: string;
    tools: string;
    speakingLanguagesLabel: string;
    speakingLanguages: string;
  };
  jobs: {
    devolux: {
      title: string;
      companyUrl: string;
      meta: string;
      points: string[];
    };
    gard: {
      title: string;
      companyUrl: string;
      meta: string;
      points: string[];
    };
  };
  education: {
    title: string;
    meta: string;
    points: string[];
  };
  volunteering: {
    etSetera: {
      title: string;
      meta: string;
      points: string[];
    };
    bur: {
      title: string;
      meta: string;
      points: string[];
    };
  };
  quote: string;
  language: {
    en: string;
    uk: string;
  };
};

function App() {
  const { t, i18n } = useTranslation();
  const content = t("resume", { returnObjects: true }) as ResumeContent;
  const isEnglish = i18n.resolvedLanguage === "en";

  return (
    <main className="page">
      <div className="lang-switch" role="group" aria-label="Language switcher">
        <button
          className={isEnglish ? "lang-btn active" : "lang-btn"}
          onClick={() => i18n.changeLanguage("en")}
        >
          {content.language.en}
        </button>
        <button
          className={!isEnglish ? "lang-btn active" : "lang-btn"}
          onClick={() => i18n.changeLanguage("uk")}
        >
          {content.language.uk}
        </button>
      </div>

      <header className="header">
        <h1>{content.name}</h1>
        <div className="role">{content.role}</div>
        <div className="contacts">
          <span>{content.contacts.email}</span>
          <span>•</span>
          <span>{content.contacts.phone}</span>
          <span>•</span>
          <span>{content.contacts.location}</span>
          <span>•</span>
          <a href={content.contacts.linkedInUrl} target="_blank" rel="noreferrer">
            {content.contacts.linkedInLabel}
          </a>
          <span>•</span>
          <a href={content.contacts.telegramUrl} target="_blank" rel="noreferrer">
            {content.contacts.telegramLabel}
          </a>
          <span>•</span>
          <a href={content.contacts.githubUrl} target="_blank" rel="noreferrer">
            {content.contacts.githubLabel}
          </a>
        </div>
      </header>

      <hr className="divider" />

      <section className="section">
        <h2>{content.sections.professionalSummary}</h2>
        <p className="summary">{content.summary}</p>
        <ul>
          {content.summaryList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>{content.sections.technicalToolkit}</h2>
        <div className="skills-grid">
          <div>
            <strong>{content.toolkit.languagesLabel}</strong> {content.toolkit.languages}
          </div>
          <div>
            <strong>{content.toolkit.frameworksLabel}</strong> {content.toolkit.frameworks}
          </div>
          <div>
            <strong>{content.toolkit.toolsLabel}</strong> {content.toolkit.tools}
          </div>
          <div>
            <strong>{content.toolkit.speakingLanguagesLabel}</strong> {content.toolkit.speakingLanguages}
          </div>
        </div>
      </section>

      <section className="section">
        <h2>{content.sections.aboutMe}</h2>
        <p className="summary">{content.aboutMe}</p>
      </section>

      <section className="section">
        <h2>{content.sections.workExperience}</h2>

        <article className="job">
          <div className="job-header flex flex-col gap-2">
            <div className="job-title">
              <a href={content.jobs.devolux.companyUrl} target="_blank" rel="noreferrer">
                {content.jobs.devolux.title}
              </a>
            </div>
            <div className="job-meta">{content.jobs.devolux.meta}</div>
          </div>
          <ul>
            {content.jobs.devolux.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="job">
          <div className="job-header flex flex-col gap-2">
            <div className="job-title">
              <a href={content.jobs.gard.companyUrl} target="_blank" rel="noreferrer">
                {content.jobs.gard.title}
              </a>
            </div>
            <div className="job-meta">{content.jobs.gard.meta}</div>
          </div>
          <ul>
            {content.jobs.gard.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section split">
        <div>
          <h2>{content.sections.education}</h2>
          <p className="edu-title">{content.education.title}</p>
          <p className="edu-meta">{content.education.meta}</p>
          <ul>
            {content.education.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{content.sections.volunteering}</h2>
          <p className="edu-title">{content.volunteering.etSetera.title}</p>
          <p className="edu-meta">{content.volunteering.etSetera.meta}</p>
          <ul>
            {content.volunteering.etSetera.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <p className="edu-title" style={{ marginTop: 12 }}>
            {content.volunteering.bur.title}
          </p>
          <p className="edu-meta">{content.volunteering.bur.meta}</p>
          <ul>
            {content.volunteering.bur.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className="quote">{content.quote}</p>
    </main>
  );
}

export default App;
