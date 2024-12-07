export const LEFT_MARGIN_DEFAULT = 56;
export const RIGHT_MARGIN_DEFAULT = 56;

export const templates = [
  {
    id: 'blank',
    label: 'Blank Document',
    imageUrl: '/images/blank-document.svg',
    initialContent: '<p>Start typing your content here...</p>',
  },
  {
    id: 'software-proposal',
    label: 'Software Proposal',
    imageUrl: '/images/software-proposal.svg',
    initialContent: `
      <h1>Software Proposal</h1>
      <h2>Project Overview</h2>
      <p>Provide a summary of the software project, its goals, and the problem it aims to solve.</p>
      <h2>Scope of Work</h2>
      <p>Detail the tasks and deliverables included in the project scope.</p>
      <h2>Timeline</h2>
      <p>Provide an estimated timeline for project completion.</p>
      <h2>Budget</h2>
      <p>Include a breakdown of the estimated project costs.</p>
    `,
  },
  {
    id: 'resume',
    label: 'Resume',
    imageUrl: '/images/resume.svg',
    initialContent: `
      <h1>Your Name</h1>
      <p>Email | Phone | LinkedIn | Portfolio</p>
      <h2>Professional Summary</h2>
      <p>A brief statement about your skills, experience, and career goals.</p>
      <h2>Work Experience</h2>
      <ul>
        <li>Job Title - Company Name (Dates of Employment)</li>
        <li>Job Title - Company Name (Dates of Employment)</li>
      </ul>
      <h2>Education</h2>
      <ul>
        <li>Degree - Institution (Graduation Year)</li>
      </ul>
      <h2>Skills</h2>
      <p>List your relevant skills here.</p>
    `,
  },
  {
    id: 'project-proposal',
    label: 'Project Proposal',
    imageUrl: '/images/project-proposal.svg',
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Introduction</h2>
      <p>Provide a brief overview of the project and its objectives.</p>
      <h2>Project Scope</h2>
      <p>Describe the scope of the project, including key deliverables and constraints.</p>
    `,
  },
  {
    id: 'letter',
    label: 'Letter',
    imageUrl: '/images/letter.svg',
    initialContent: `
      <p>[Your Address]</p>
      <p>[Recipient's Address]</p>
      <p>[Date]</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: 'cover-letter',
    label: 'Cover Letter',
    imageUrl: '/images/cover-letter.svg',
    initialContent: `
      <p>[Your Address]</p>
      <p>[Recipient's Address]</p>
      <p>[Date]</p>
      <p>Dear [Hiring Manager's Name],</p>
      <p>[Opening paragraph: introduce yourself and state your purpose]</p>
      <p>[Body paragraphs: discuss your qualifications and experiences]</p>
      <p>[Closing paragraph: express your enthusiasm and request an interview]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: 'business-letter',
    label: 'Business Letter',
    imageUrl: '/images/business-letter.svg',
    initialContent: `
      <p>[Your Company Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>
      <p>[Recipient's Name]</p>
      <p>[Recipient's Position]</p>
      <p>[Recipient's Company Name]</p>
      <p>Dear [Recipient's Name],</p>
      <p>[Body of the letter]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
      <p>[Your Position]</p>
    `,
  },
];
