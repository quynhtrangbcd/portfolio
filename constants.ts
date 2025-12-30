import { ExperienceItem, ProjectItem, SkillItem, TestimonialItem } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/nguyen-thi-quynh-trang-69bb46160/",
  email: "quynhtrang.bcd@gmail.com",
  github: "#" // Not provided in CV
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: "Business Analyst",
    company: "VIMID (Project AOT)",
    period: "10/2024 - Present",
    description: "Developing Odoo ERP enterprise management software for Engine Technology sector to optimize management time and support report generation.",
    achievements: [
      "Gathered and analyzed solutions based on customer requirements for the automotive industry.",
      "Finalized solutions and documented them in the Business Blueprint Document (BBD).",
      "Continuously learned specialized business processes in engine technology."
    ]
  },
  {
    id: '2',
    role: "Business Analyst",
    company: "Haca Seafood",
    period: "09/2024 - Present",
    description: "Implementing Odoo ERP for a Seafood Processing & Export company to improve work efficiency and compliance with Circular 200.",
    achievements: [
      "Conducted detailed business analysis and transitioned requirements into the development phase.",
      "Wrote test scenarios and performed testing after development completion.",
      "Supported end-users in warehousing, production, accounting, and payroll processes."
    ]
  },
  {
    id: '3',
    role: "Business Analyst",
    company: "QD.Tek",
    period: "09/2023 - Present",
    description: "Managed Odoo ERP implementation for a Technology Equipment Trading company.",
    achievements: [
      "Documented requirements in the Business Blueprint Document (BBD).",
      "Guided end-users on purchasing, warehousing, and accounting modules.",
      "Aligned system outputs with tax and accounting standards (TT200)."
    ]
  },
  {
    id: '4',
    role: "Business Analyst",
    company: "HaMo Group",
    period: "10/2022 - 06/2023",
    description: "Developed Odoo ERP software for the Beauty Care Technology sector.",
    achievements: [
      "Created Business Requirement Documents (BRD) and conducted detailed analysis.",
      "Organized step-by-step training workshops to overcome employee resistance to new ERP systems.",
      "Successfully connected sales, inventory, accounting, HR, and manufacturing modules."
    ]
  },
  {
    id: '5',
    role: "Business Analyst",
    company: "Viettel (vESS Project)",
    period: "06/2022 - 06/2023",
    description: "Developed enterprise management software (vESS) for SMEs in compliance with Circular 88 and Circular 200.",
    achievements: [
      "Documented solutions in the Software Requirement Specification (SRS).",
      "Created user manuals and conducted testing for the Digital Business Platform.",
      "Reduced manual work and human errors by integrating sales, inventory, and accounting."
    ]
  },
  {
    id: '6',
    role: "Tester and BA",
    company: "Luong Quoi Coconut",
    period: "02/2022 - 05/2022",
    description: "Worked on the DMS (Distribution Management System) to optimize sales processes for branches and distributors.",
    achievements: [
      "Wrote test scenarios for web and app functions; executed system testing.",
      "Collaborated with teams to fix bugs and guide end-users on software usage.",
      "Enabled effective worktime management through attendance tracking features."
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'p1',
    title: "Viettel Enterprise Support System (vESS)",
    category: "SaaS Platform",
    problem: "SMEs needed a compliant enterprise management platform that aligned with Circular 88 and Circular 200 while being easy to adopt.",
    solution: "Gathered requirements, created SRS, and conducted user training workshops to reduce resistance to adoption.",
    outcome: "Connected sales, inventory, accounting, and HR, significantly reducing manual work and human errors for end clients.",
    tags: ["SaaS", "Compliance", "SRS", "Training"]
  },
  {
    id: 'p2',
    title: "QD.Tek Odoo ERP Implementation",
    category: "ERP Optimization",
    problem: "The client needed to optimize management time and ensure report generation compliance (TT200) for technology equipment trading.",
    solution: "Developed Business Blueprint (BBD), managed full development lifecycle, and provided specialized training for headquarters and branches.",
    outcome: "Improved customer relationship management and aligned operations with industry tax and accounting standards.",
    tags: ["Odoo", "BBD", "Trading", "Process Mapping"]
  },
  {
    id: 'p3',
    title: "DMS for Coconut Processing",
    category: "Sales Optimization",
    problem: "Need to optimize the sales process for company branches and distributors, and manage sales rep attendance.",
    solution: "Implemented a Distribution Management System (DMS) with auto-sync features and comprehensive testing scenarios.",
    outcome: "Streamlined sales processes and enabled real-time supervisor monitoring of sales representative attendance.",
    tags: ["DMS", "Testing", "Sales", "Mobile App"]
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Analysis
  { name: "Requirement Gathering (BRD/SRS)", level: 95, category: "Analysis" },
  { name: "Process Modeling (BPMN/UML)", level: 85, category: "Analysis" },
  { name: "UAT & Quality Assurance", level: 85, category: "Analysis" },
  { name: "Business Process Improvement", level: 90, category: "Analysis" },

  // Technical
  { name: "Odoo ERP Implementation", level: 90, category: "Technical" },
  { name: "SQL (Basic) for Data Analysis", level: 60, category: "Technical" },
  { name: "System Integration", level: 80, category: "Technical" },

  // Tools (Requested additions)
  { name: "Bizagi Modeler", level: 85, category: "Tools" },
  { name: "Data Grid", level: 80, category: "Tools" },
  { name: "AI Application", level: 75, category: "Tools" },
  { name: "Microsoft Ecosystem", level: 90, category: "Tools" },
  { name: "Jira & Confluence", level: 90, category: "Tools" },
  { name: "Power BI / Tableau", level: 70, category: "Tools" },

  // Soft Skills
  { name: "Communication & Training", level: 90, category: "Soft Skills" },
  { name: "Analytical Problem Solving", level: 90, category: "Soft Skills" },
  { name: "Adaptability & Teamwork", level: 95, category: "Soft Skills" },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [];