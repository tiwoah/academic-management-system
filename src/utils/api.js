// pretend this is a real api w/ connected server
const programsInfo = {
  accounting: {
    creditsNeeded: 48,
    coursesNeeded: [
      2010, 2011, 2020, 3000, 3110, 4000, 4001, 4200, 4400, 4600, 4710, 4720,
      4900, 5100, 5200, 5201,
    ],
  },
  arts: {
    creditsNeeded: 19.5,
    coursesNeeded: [6300, 6301, 6340, 6350, 6360, 6900],
  },
  biochemistry: {
    creditsNeeded: 37,
    coursesNeeded: [2020, 2021, 3010, 3051, 3130, 3140, 4000, 4050, 4290],
  },
  biophysics: {
    creditsNeeded: 30,
    coursesNeeded: [2090, 3900, 4080, 4310, 2160, 2800, 3750, 4750, 4901],
  },
  criminology: {
    creditsNeeded: 117,
    coursesNeeded: [
      1650, 2650, 2652, 2653, 3654, 3655, 3656, 3657, 3658, 3659, 3660, 3663,
      4650, 4652, 4654, 4655, 4657, 4658, 4659, 4661, 4662, 4663, 4666, 4667,
    ],
  },
  softwareEngineering: {
    creditsNeeded: 125,
    coursesNeeded: [
      1100, 1011, 1021, 1028, 1101, 1102, 1013, 1014, 1025, 1800, 1801, 1090,
      2011, 2021, 2030, 2032, 2200, 2311, 2001, 2003, 2015, 2930, 2020, 2211,
      3101, 3201, 3221, 3311, 3451, 3342, 3000, 2210, 3216, 4313, 4314, 4315,
      4413, 4000, 4550,
    ],
  },
};

const coursesInfo = {
  1028: { name: "Discrete Math", credits: 3 },
  1011: { name: "Computational Thinking", credits: 3 },
  1800: { name: "Engineering Mechanics", credits: 3 },
  2010: { name: "Intro to Financial Accounting", credits: 3.0 },
  2011: { name: "Intro to Financial Accounting 2", credits: 3.0 },
  2020: { name: "Management Accounting Concepts", credits: 3.0 },
  3000: { name: "Financial Reporting and Analysis", credits: 3.0 },
  3110: { name: "Intermediate Financial Accounting 2", credits: 3.0 },
  4000: {
    name: "Teaching Accounting in the Intermediate-Senior Divisions - A",
    credits: 3.0,
  },
  4001: {
    name: "Teaching Accounting in the Intermediate-Senior Divisions - B",
    credits: 3.0,
  },
  4200: { name: "Contemporary Issues In Accounting", credits: 3.0 },
  4400: { name: "Managerial Cost Accounting & Analysis", credits: 3.0 },
  4600: { name: "Auditing Standards & Applications", credits: 3.0 },
  4710: { name: "Introduction To Income Taxation", credits: 3.0 },
  4720: { name: "Advanced Income Taxation", credits: 3.0 },
  4900: {
    name: "Guided Study - Selected Problems in Accounting",
    credits: 3.0,
  },
  5100: { name: "Financial Accounting For Managers", credits: 3.0 },
  5200: { name: "Financial Decisions for Managers", credits: 3.0 },
  5201: {
    name: "Financial Reporting and Control in Technology Firms",
    credits: 3.0,
  },

  6300: { name: "Cultural Policy", credits: 3.0 },
  6301: { name: "Issues in Arts and Cultural Management", credits: 3.0 },
  6340: {
    name: "Managing the Broadcast & Digital Worlds: Strategy and Change in Television and Online Media",
    credits: 3.0,
  },
  6350: {
    name: "The Business of Creativity in the Cultural Sector",
    credits: 3.0,
  },
  6360: {
    name: "Arts, Media and Entertainment: Managing Strategic and Business Solutions in the Digital Media Universe",
    credits: 3.0,
  },
  6900: {
    name: "Individual Study: Selected Problems in Arts and Cultural Management",
    credits: 3.0,
  },

  1100: { name: "Chemistry and Materials Science for Engineers", credits: 4.0 },
  1011: { name: "Computational Thinking Through Mechatronics", credits: 3.0 },
  1021: {
    name: "Object Oriented Programming from Sensors to Actuators",
    credits: 3.0,
  },
  1028: { name: "Discrete Mathematics for Engineers", credits: 3.0 },
  1101: {
    name: "Renaissance Engineer 1: Ethics, Communication and Problem Solving",
    credits: 4.0,
  },
  1102: {
    name: "Renaissance Engineer 2: Engineering Design Principles",
    credits: 4.0,
  },
  1013: { name: "Applied Calculus I", credits: 3.0 },
  1014: { name: "Applied Calculus II", credits: 3.0 },
  1025: { name: "Applied Linear Algebra", credits: 3.0 },
  1800: { name: "Engineering Mechanics", credits: 3.0 },
  1801: {
    name: "Electricity, Magnetism and Optics for Engineers",
    credits: 3.0,
  },
  1090: { name: "Introduction to Logic for Computer Science", credits: 3.0 },
  2011: { name: "Fundamentals of Data Structures", credits: 3.0 },
  2021: { name: "Computer Organization", credits: 4.0 },
  2030: { name: "Advanced Object Oriented Programming", credits: 3.0 },
  2032: { name: "Introduction to Embedded Systems", credits: 4.0 },
  2200: { name: "Electrical Circuits", credits: 3.0 },
  2311: { name: "Software Development Project", credits: 3.0 },
  2001: {
    name: "Engineering Projects: Management, Economics & Safety",
    credits: 3.0,
  },
  2003: { name: "Effective Engineering Communication", credits: 3.0 },
  2015: { name: "Applied Multivariate and Vector Calculus", credits: 3.0 },
  2930: { name: "Introduction to Probability and Statistics", credits: 3.0 },
  2020: { name: "Electricity and Magnetism", credits: 3.0 },
  2211: { name: "Experimental Electromagnetism", credits: 1.0 },
  3101: { name: "Design and Analysis of Algorithms", credits: 3.0 },
  3201: { name: "Digital Logic Design", credits: 4.0 },
  3221: { name: "Operating System Fundamentals", credits: 3.0 },
  3311: { name: "Software Design", credits: 3.0 },
  3451: { name: "Signals and Systems", credits: 4.0 },
  3342: { name: "System Specification and Refinement", credits: 3.0 },
  3000: { name: "Professional Engineering Practice", credits: 3.0 },
  2210: { name: "Engineering and the Environment", credits: 3.0 },
  3216: {
    name: "Digital Systems Engineering: Modeling, Implementation and Validation",
    credits: 3.0,
  },
  4313: { name: "Software Engineering Requirements", credits: 3.0 },
  4314: { name: "Advanced Software Engineering", credits: 3.0 },
  4315: { name: "Mission-Critical Systems", credits: 3.0 },
  4413: { name: "Building E-Commerce Systems", credits: 3.0 },
  4000: { name: "Engineering Project", credits: 6.0 },
  4550: { name: "Introduction to Control Systems", credits: 3.0 },
};

let userDatabase = {};

export const addUser = (id, name, program, courses) => {
  const newUser = {
    name: name,
    id: id,
    program: program,
    creditsEarned: 0,
    creditsNeeded: 69,
    courses: courses,
  };
  userDatabase[id] = newUser;
};

export const getCoursesInfo = () => {
  return coursesInfo;
};

export const getUserFromID = (id) => {
  return userDatabase[id];
};

export const getUserDatabase = () => {
  return userDatabase;
};

export const changeUserProgramFromId = (id, program) => {
  userDatabase[id].program = program;
};

export const changeUserCreditsFromId = (id, program) => {
  userDatabase[id].creditsEarned = creditsEarned;
};
