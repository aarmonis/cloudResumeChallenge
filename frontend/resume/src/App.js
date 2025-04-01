import React, { useState } from 'react';
import VisitorCounter from './components/VisitorCounter';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaShieldAlt } from 'react-icons/fa';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('all');

  const sections = ['all', 'education', 'experience', 'skills', 'projects', 'research'];

  const personalInfo = {
    name: "ANTONIOS ARMONIS",
    email: "ant.armonis@gmail.com",
    phone: "+30 6930796757",
    linkedin: "www.linkedin.com/in/antonios-armonis-304544104",
    github: "github.com/aarmonis",
    military: "Military Service: Completed"
  };

  const education = [
    {
      institution: "DEREE – The American College of Greece",
      location: "Athens, Greece",
      degree: "BA in Economics",
      period: "Sept. 2019 – May 2025",
      details: [
        {
          text: "Dissertation: \"Modeling Loan Transitions of Single-Family US Mortgages\" – Developed a Markov framework model to estimate mortgage transition probabilities using Fannie Mae data.",
          link: "https://accuria.com/machine-learning-for-transitions-and-modifications-in-us-single-family-mortgages/"
        },
        "Key Courses: Econometrics, Credit and Lending, Money and Banking, Financial Modeling.",
        "Research: EEFA Research Lab – Contributed to NLP applications, experiment design, and statistical modeling."
      ]
    },
    {
      institution: "UCL – University College London",
      location: "London, United Kingdom",
      degree: "MBBS Medicine: Completed pre-clinical years before exiting",
      period: "Sept. 2014 – Aug. 2019",
      details: []
    },
    {
      institution: "Athens College",
      location: "Athens, Greece",
      degree: "International Baccalaureate Diploma",
      period: "Sept. 2012 – Jul. 2014",
      details: []
    }
  ];

  const experience = [
    {
      company: "Accuria Ltd",
      location: "London, UK",
      position: "Data Scientist (Work Placement)",
      period: "Sep. 2024 – Present",
      achievements: [
        "Designed a scalable data pipeline in R using DuckDB and GitHub Actions to process Fannie Mae loan performance data, achieving 70% reduction in processing time.",
        "Optimized ETL workflow using Parquet files stored in AWS S3, enhancing data accessibility and analytics efficiency.",
        "Developed loan transition models for delinquency and cure rates, providing insights for risk management and policy formulation.",
        "Refactored SQL queries for a country-level credit risk dashboard, reducing loading time by 20%.",
        "Authored comprehensive data documentation for clarity, maintainability, and knowledge transfer."
      ]
    },
    {
      company: "UNI-PHARMA Pharmaceutical Laboratories S.A.",
      location: "Athens, Greece",
      position: "Intern Data Analyst at Validation Department",
      period: "June 2022 – Aug. 2022",
      achievements: [
        "Created visualizations using Seaborn and Highcharter for quick identification of data trends.",
        "Developed Quality Assurance KPI dashboards in Python to enhance operational intelligence.",
        "Cleaned complex datasets and performed OCR tasks to extract and organize production logs."
      ]
    },
    {
      company: "Ulysses-Systems",
      location: "Piraeus, Greece",
      position: "Intern Software Developer",
      period: "June 2021 – Aug 2021",
      achievements: [
        "Labeled datasets for ML-driven email classification models.",
        "Prepared live software demos, enhancing client engagement."
      ]
    }
  ];

  const research = [
    {
      organization: "Experimental Economics, Fintech, & Analytics Lab - ACG",
      position: "Junior Researcher",
      period: "Aug 2024 – Present",
      details: [
        "Leveraged pre-trained transformers and NLP techniques to analyze sentiment in Coldplay lyrics.",
        "Contributed to experimental design and drafting of grant applications exploring LLMs in business solutions."
      ]
    }
  ];

  const projects = [
    {
      name: "Salifort Employee Attrition",
      description: "Implemented a machine learning model to predict employee attrition, enhancing retention strategies.",
      link: "https://github.com/aarmonis/salifort_employee_attrition"
    },
    {
      name: "TikTok Comments Classification Model",
      description: "Developed a Random Forest model to categorize TikTok comments for content moderation.",
      link: "https://github.com/aarmonis/tiktok_claim_classifier"
    },
    {
      name: "Athex Financial Retriever",
      description: "Built a RAG system to chat with financial statement data from Athens Stock Exchange companies.",
      link: "https://github.com/aarmonis/athex-financial-retriever"
    },
    {
      name: "Portfolio Optimization",
      description: "Designed a Shiny application for portfolio optimization with financial data retrieval and visualization.",
      link: "https://github.com/aarmonis/Markowitz_Optimization_R_shinny_UI"
    },
    {
      name: "Customer Churn Prediction",
      description: "Developed a Naive Bayes model to predict bank customer churn.",
      link: "https://github.com/aarmonis/customer-churn-prediction"
    }
  ];

  const skills = {
    languages: ["Python", "R", "SQL"],
    libraries: ["FastAPI", "PyTorch", "scikit-learn", "Pydantic", "LangChain", "Bedrock", "pandas", "NumPy", "dplyr", "data.table", "DBI", "Shiny"],
    Technologies: ["NLP", "DuckDB", "GitHub Actions", "AWS S3", "Parquet"],
    certifications: [
      {
        name: "Google Advanced Data Analytics Certificate",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/AHZGLQ4LXPS5?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"
      }
    ]
  };

  const activities = ["Running", "Agriculture", "Travel", "Reading"];

  const shouldShowSection = (section) => {
    return activeSection === 'all' || activeSection === section;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-900 text-white p-6">
          <h1 className="text-3xl font-bold">{personalInfo.name}</h1>

          {/* Contact info with icons */}
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-blue-200" size={16} />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-blue-200" size={16} />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline hover:text-blue-200">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="mr-2 text-blue-200" size={18} />
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <FaGithub className="mr-2 text-blue-200" size={18} />
              <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-200">
                GitHub
              </a>
            </div>
            <div className="flex items-center">
              <FaShieldAlt className="mr-2 text-blue-200" size={16} />
              <span>{personalInfo.military}</span>
            </div>
          </div>

          {/* Add the VisitorCounter component */}
          <VisitorCounter />
        </div>

        {/* Navigation */}
        <div className="bg-gray-100 p-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md text-sm font-medium capitalize ${activeSection === section
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Education Section */}
          {shouldShowSection('education') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{edu.institution}</h3>
                      <p className="text-gray-600">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{edu.location}</p>
                      <p className="text-gray-600">{edu.period}</p>
                    </div>
                  </div>
                  {edu.details.length > 0 && (
                    <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="mb-1">
                          {typeof detail === 'string' ? (
                            detail
                          ) : (
                            <>
                              {detail.text.split('"')[0]}
                              "<a
                                href={detail.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                {detail.text.split('"')[1]}
                              </a>"
                              {detail.text.split('"')[2]}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Work Experience */}
          {shouldShowSection('experience') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Work Experience</h2>
              {experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{exp.company}</h3>
                      <p className="text-gray-600">{exp.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{exp.location}</p>
                      <p className="text-gray-600">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Research */}
          {shouldShowSection('research') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Research</h2>
              {research.map((res, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{res.organization}</h3>
                      <p className="text-gray-600">{res.position}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600">{res.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                    {res.details.map((detail, idx) => (
                      <li key={idx} className="mb-1">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Projects */}
          {shouldShowSection('projects') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-600">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                    </h3>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {shouldShowSection('skills') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b border-gray-200 pb-2">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Tech Stacks</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.Technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.libraries.map((lib, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {lib}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.certifications.map((cert, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {typeof cert === 'string' ? (
                          cert
                        ) : (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {cert.name}
                          </a>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activities */}
          <div className="mt-6">
            <h3 className="font-semibold text-gray-800">Activities & Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {activities.map((activity, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {activity}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;