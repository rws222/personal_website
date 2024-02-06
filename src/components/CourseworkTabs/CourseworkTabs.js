import * as React from 'react';
import PropTypes from 'prop-types';
import './CourseworkTabs.css';
import Tabs from '../../mui_components/Tabs.js'
import Tab from '../../mui_components/Tab.js'
import { useMediaQuery } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className='tab-panel'
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <div>{children}</div>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CourseworkTabs(props) {
  const isBelowCutoff = useMediaQuery('(max-width:699px)');

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabVariant = isBelowCutoff ? 'scrollable' : 'fullWidth';

  const classData = {
    cse440: { credits: 3, desc: "Average-case runtime analysis of algorithms. Randomized algorithms and probabilistic analysis of their performance. Analysis of data structures including hash tables, augmented data structures with order statistics. Amortized analysis. Elementary computational geometry. Limits on algorithm space efficiency using PSPACE-completeness theory." },
    cse475: { credits: 3, desc: "Parallel computer architectures, parallel languages, parallelizing compilers and operating systems. Design, implementation, and analysis of parallel algorithms for scientific and data-intensive computing." },
    cse447: { credits: 3, desc: "Modern data mining techniques: data cleaning; attribute and subset selection; model construction, evaluation and application. Algorithms for decision trees, covering algorithms, association rule mining, statistical modeling, model and regression trees, neural networks, instance-based learning and clustering covered. This course, a version of CSE 347 for graduate students, requires research projects and advanced assignments, and expects students to have a background in probability, statistics, and programming." },
    cse426: { credits: 3, desc: "Bayesian decision theory and the design of parametric and nonparametric classification and regression: linear, quadratic, nearest-neighbors, neural nets. Boosting, bagging. This course, a version of CSE 326 for graduate students requires advanced assignments." },
    cse411: { credits: 3, desc: "Deeper study of programming and software engineering techniques. The majority of assignments involve programming in contemporary programming languages. Topics include memory management, GUI design, testing, refactoring, and writing secure code." },
    cse342: { credits: 3, desc: "Architecture and protocols of computer networks. Protocol layers; network topology; data-communication principles, including circuit switching, packet switching and error control techniques; sliding window protocols, protocol analysis and verification; routing and flow control; local and wide area networks; network interconnection; client-server interaction; emerging networking trends and technologies; topics in security and privacy." },
    cse492: { credits: 3, desc: "Research with Professor Dominic DiFranzo. I built a program that generated text and image content using NLP models for his Truman Project, a platform for researchers to conduct social media experiments." },
    cse303: { credits: 3, desc: "Process and thread programming models, management, and scheduling. Resource sharing and deadlocks. Memory management, including virtual memory and page replacement strategies. I/O issues in the operating system. File system implementation. Multiprocessing. Computer security as it impacts the operating system." },
    cse241: { credits: 3, desc: "Design of large databases: Integration of databases and applications using SQL and JDBC; transaction processing; performance tuning; data mining and data warehouses." },
    cse340: { credits: 3, desc: "Algorithms for searching, sorting, manipulating graphs and trees, finding shortest paths and minimum spanning trees, scheduling tasks, etc.: proofs of their correctness and analysis of their asymptotic runtime and memory demands. Designing algorithms: recursion, divide-and-conquer, greediness, dynamic programming. Limits on algorithm efficiency using elementary NP-completeness theory." },
    cse216: { credits: 3, desc: "The software lifecycle; lifecycle models; software planning; testing; specification methods; maintenance. Emphasis on team work and large-scale software systems, including oral presentations and written reports." },
    cse392: { credits: 3, desc: "Research with Professor Dominic DiFranzo. I worked on frontend and backend components of a social media platform as part of his Truman Project. I implemented the ability to add hashtags to posts and search for tags, and made improvements to the Semantic UI web interface." },
    cse264: { credits: 3, desc: "Practical experience in designing and implementing modern Web applications. Concepts, tools, and techniques, including: HTTP, HTML, CSS, DOM, JavaScript, Ajax, PHP, graphic design principles, mobile web development." },
    cse140: { credits: 3, desc: "Basic representations used in algorithms: propositional and predicate logic, set operations and functions, relations and their representations, matrices and their representations, graphs and their representations, trees and their representations. Basic formalizations for proving algorithm correctness: logical consequences, induction, structural induction. Basic formalizations for algorithm analysis: counting, pigeonhole principle, permutations." },
    cse109: { credits: 4, desc: "Advanced programming and data structures, including dynamic structures, memory allocation, data organization, symbol tables, hash tables, B-trees, data files. Object-oriented design and implementation of simple assemblers, loaders, interpreters, compilers, and translators. Practical methods for implementing medium-scale programs." },
    cse017: { credits: 3, desc: "Algorithmic design and implementation in a high level, object oriented language, such as Java. Classes, subclasses, recursion, searching, sorting, linked lists, trees, stacks, queues." },
    cse002: { credits: 2, desc: "Problem-solving and object-oriented programming using Java.  Includes laboratory.  No prior programming experience needed." },
    cse012: { credits: 3, desc: `Fundamental concepts of computing and "computational thinking": problem analysis, abstraction, algorithms, digital representation of information, and networks. Applications of computing and communication that have changed the world. Impact of computing on society.` },
    creg258: { credits: 2, desc: "Continuation of CREG 257 Complete design, construction, and testing of projects selected and developed in CREG 257. Final design reviews and project presentations; final written report; development issues, including manufacturability, patents, and ethics." },
    creg257: { credits: 3, desc: "With CREG 258, provides a complete design experience for Electrical and Computer Engineers. Students are expected to identify essential project aspects crucial to success and to perform in-depth engineering evaluation and testing demonstrating that desired results can be achieved with the proposed implementation. Instruction in technical writing, product development, ethics and professional engineering, and presentation of design and research. Two three hour sessions and one additional two hour lecture per week." },
    ece201: { credits: 3, desc: "Structure and function of digital computers. Computer components and their operations. Computer interconnection structures. Memory system and cache memory. Interrupt driven input/output and direct memory access. Instruction sets and addressing modes. Instruction pipelining. Floating-point representation and arithmetic. Alternative architectures: RISC vs. CISC and introduction to parallel architectures." },
    ece128: { credits: 3, desc: "Implementation issues and techniques for digital logic design; combinational and sequential logic design using digital ICs; hardware description languages; field programmable gate arrays (FPGAs); designs with modular building blocks; and functional simulations will be covered in this course." },
    ece132: { credits: 3, desc: "Basic digital logic and circuitry. Architecture of microcontrollers. Number conversion and data encoding in microcontrollers. Input and output of microcontrollers. Timers and interrupt routines. Serial communication protocols. Data acquisition, control, sensors, and actuators. Basic software techniques of programming microcontrollers." },
    ece108: { credits: 4, desc: "Continuous and discrete signal and system descriptions using signal space and transform representations. Includes Fourier series, continuous and discrete Fourier transforms, Laplace transforms, and z-transforms. Introduction to sampling." },
    ece182: { credits: 1, desc: "Experiments designed to exploit the students understanding of basic circuits and filters. Experiments designed to help students understand basic signals and systems concepts such as time-frequency domain duality, power measurement, modulation, sampling and data conversion. Students are introduced to a variety of integrated circuits including multipliers, analog switches, digital electronics, S/H, A/D, and D/A converters. Computer software design aids, especially Spice and LabView, are used throughout the semester. One three-hour laboratory per week." },
    ece123: { credits: 3, desc: "Methods for analyzing and designing circuits containing electronic devices. Topics include device models, basic amplifier configurations, operating point stabilization, frequency response analysis, and computer-aided analysis of active circuits." },
    ece121: { credits: 2, desc: "One lecture and one laboratory per week. Experiments illustrating the principles of operation of electronic devices and their circuit applications. Basic electronic instrumentation and measurement techniques." },
    ece081: { credits: 4, desc: "Circuit elements and laws. Behavior of simple linear networks, include equivalent circuits and solution techniques. Solution of DC circuits and AC circuits using phasor techniques. Introduction to operational amplifiers. Steady state and transient response of simple circuits. Includes a weekly session for review and discussion." },
    ece033: { credits: 4, desc: "Analysis, design and implementation of small digital circuits. Boolean algebra. Minimization techniques, synchronous sequential circuit design, number systems and arithmetic. Microcomputer architecture and assembly level programming." },
    fin377: { credits: 3, desc: "Use python to obtain, explore, groom, visualize, and analyze data. Make all of that reproducible, reusable, and shareable. Apply those skills to problems in the finance domain." },
    fin335: { credits: 3, desc: "Financial planning and analysis using financial models for enhanced managerial decision making. The student will develop an appreciation of financial data within a company and ways of converting the data to information. Specific topics will include performance evaluation, financial planning, capital expenditure analysis, business valuation, cost of capital, hurdle rates, leasing, working capital management, and other appropriate topics." },
    fin328: { credits: 3, desc: "The study of corporate financial management issues related to capital budgeting, working capital, capital structure, mergers, and financing." },
    fin323: { credits: 3, desc: "This course covers the concepts of risk and returns on financial assets from the viewpoint of various constituents. Investor objectives, attitudes, and constraints are considered within the risk-return matrix. Concepts of valuation are covered." },
    fin125: { credits: 3, desc: "An introductory finance course that provides students with the basic finance skills and knowledge needed to undertake downstream courses in the finance major. Major topic areas will include time value of money, risk and return valuation of stocks and bonds, capital budgeting, cost of capital, and financial statement analysis." },
    acct151: { credits: 3, desc: "The organization, measurement and interpretation of economic information. Introduction to accounting theory, concepts and principles, the accounting cycle, information processing, and financial statements. Exposure to controversial issues concerning income determination and valuation." },
    acct152: { credits: 3, desc: "An introduction to internal accounting information for all levels of management. Topics include cost flow in a manufacturing operation; planning, evaluating and controlling through budgeting and standard costing; and decision-making using cost-volume-profit analysis, direct costing, and relevant costs." },
    bis111: { credits: 3, desc: "This course examines the fundamental role of information systems in supporting and managing all business functions and enabling firms to compete effectively. Both technical and managerial aspects of information systems are introduced. The course integrates technical infrastructure, database concepts, management decision-making, and business process issues critical to the understanding of operational and strategic information systems. It introduces business applications that support accounting, finance, supply chain management, and marketing." },
    bus005: { credits: 1, desc: "An introduction to the foundations of business integrity. The role of individual decisions and ethics in business is explored. Students evaluate cases and ethical issues they are likely to face in business. Covers fundamentals of corporate governance and cases in governance failures such as WorldCom and Enron. Social responsibility, ethical business leaders, and current topics in business ethics are addressed." },
    eco146: { credits: 3, desc: "The application of economic analysis to managerial and public policy decision-making." },
    eco029: { credits: 3, desc: "The nature and functions of money. Global money and financial markets. The role of commercial and central banks. Effects of the interest rate, exchange rate, and the money supply on the economy. Examination and evaluation of current and past monetary policies." },
    eco001: { credits: 4, desc: "A one-semester course in the principles of economics. General topics covered are: supply and demand; pricing and production decisions of firms; the role of government in the economy; the determination of national income; money and banking; monetary and fiscal policy; and government finance." },
    law201: { credits: 3, desc: "This course examines the legal relationships between business and government, business and society, and the individual and society. A significant focus of the course is on the structure of the U.S. legal system, the role of the courts in the legal system, and contract law as the principal mechanism for the private allocation of resources and risk allocation. The course also focuses on business ethics with particular emphasis on corporate social responsibility." },
    mgt143: { credits: 3, desc: "This course provides an in-depth look at people and behavior within organizations. We will study how employees impact the effectiveness of their organization and how organizations and their managers impact the attitudes, behaviors, and effectiveness of employees. You will learn (a) how organizations can improve their performance through better management of people and teams, (b) how individual managers can be more effective and successful in their careers, and (c) how individuals can be more effective in organizational settings." },
    mkt111: { credits: 3, desc: "The purpose of this course is to give an overview of the entire marketing function. At the end of this course, students will be able to understand the meaning of the marketing concept, various marketing terminologies, how firms develop and evaluate marketing strategies related to product, place, price, and promotions, how marketing strategies are related to other strategies of the firm, and what internal and external factors influence the marketing decisions." },
    ibe385: { credits: 3, desc: "IBE students continue to work with the detailed design including the fabrication and testing of working prototypes of their new products designed in IBE Capstone Project I course. In addition to the technical design of the products, detailed financial and marketing plans are required. Written reports and oral presentations to sponsors and invited venture capitalists are required." },
    ibe380: { credits: 3, desc: "IBE students work in cross-disciplinary teams of 5 to 6 business and engineering majors with a faculty mentor on the marketing, financial and economic planning, and technical and economic feasibility of actual new product concepts initiated by the course’s corporate sponsors. These sponsors are incubator start-up firms to ensure that the projects have both business and engineering elements. Written reports and oral presentations to sponsors and invited venture capitalists are required." },
    ibe250: { credits: 1, desc: "A semester-long simulation game in which interdisciplinary teams of IBE students compete against each other. Topics include market analysis, working capital management, capital budgeting, raising long-term capital, plant location, and inventory control. Oral presentations and written reports." },
    ibe150: { credits: 1, desc: "A series of cases that integrate elements of business and engineering. Example topics include, but are not limited to, introduction to cost benefit analysis, introduction to modeling and optimization, team dynamics, and international negotiation and joint ventures. Oral presentations and written reports." },
    ibe050: { credits: 3, desc: "The course introduces students to the interaction and interdependence of business planning and engineering design in the context of entrepreneurial new product development. Students develop skills in communication, teamwork and critical thinking while working in such areas as competitive strategy, financial modeling, marketing mix, prototyping, product testing, and the development of technical specifications." },
    ibe010: { credits: 1, desc: "Introduction to the various business and engineering professions through a series of presentations and demonstrations. Emphasis is on the diversity of business and engineering career opportunities and the associated curricular choices. Students also create their web page with four-year curriculum plan and an updated resume, learn Cad-Cam and presentation software, and explore career opportunities." },
    ise358: { credits: 3, desc: "A mathematical analysis of how people interact in strategic situations. Applications include strategic pricing, negotiations, voting, contracts and economic incentives, and environmental issues." },
    math231: { credits: 3, desc: "Probability and distribution of random variables; populations and random sampling; chi-square and t distributions; estimation and tests of hypotheses; correlation and regression theory of two variables." },
    math205: { credits: 3, desc: "Linear differential equations and applications; matrices and systems of linear equations; vector spaces; eigenvalues and application to linear systems of differential equations." },
    math023: { credits: 12, desc: "Functions and graphs; limits and continuity; derivative, differential, and applications; indefinite and definite integrals; trigonometric, logarithmic, exponential, and hyperbolic functions. Applications of integration; techniques of integration; separable differential equations; infinite sequences and series; Taylor's Theorem and other approximations; curves and vectors in the plane. Vectors in space; partial derivatives; Lagrange multipliers; multiple integrals; vector analysis; line integrals; Green's Theorem, Gauss's Theorem." },
    phy021: { credits: 5, desc: "A continuation of PHY 11. Electrostatics and magnetostatics; DC circuits; Maxwell’s equations; waves; physical and geometrical optics; introduction to modern physics. One three-hour laboratory period per week." },
    phy011: { credits: 5, desc: "Kinematics, frames of reference, laws of motion in Newtonian theory and in special relativity, conservation laws, as applied to the mechanics of mass points; temperature, heat and the laws of thermodynamics; kinetic theory of gases. One three-hour laboratory period per week." },
    chm030: { credits: 4, desc: "An introduction to important topics in chemistry: atomic structure, properties of matter, chemical reactions, energy, structure and bonding in organic and inorganic compounds. The course features a lecture tightly linked to a three-hour studio experience that combines laboratory work and recitation." },
    mech002: { credits: 3, desc: "Static equilibrium of particles and rigid bodies. Elementary analysis of simple truss and frame structures, internal forces, stress, and strain." },
    engr010: { credits: 2, desc: "Introduction to programming for engineering tasks. Use of programming tools to solve engineering problems. Interfacing sensors and actuators to a microcontroller board and programming to interact with the world. Computer lab setting. Final project controls engineering equipment." },
    eco099: { credits: 2, desc: "Credit for AP Macroeconomics." },
    des096: { credits: 4, desc: "An introduction to graphic design for the non-design major." },
    psyc001: { credits: 4, desc: "Psychology as a science of behavior. Natural science aspects such as learning, sensation-perception, and physiological bases; and social science aspects such as human development, intelligence, and personality. Methodologies appropriate to these areas, and related societal problems." },
    engl011: { credits: 3, desc: "English 11 is designed to deepen your skills in critical reading and writing through a close engagement with literary and cultural texts and advanced training in best writing practices. You will make persuasive, thoughtful, and well-supported arguments in a variety of forms." },
    engl001: { credits: 3, desc: "Introduction to academic writing that supports a claim in respectful conversation with others. Topics drawn from important issues in the world in which students live. The course provides multiple opportunities to engage thoughtfully in the writing process." },
  };

  function courseDesc(courseIndex) {
    return classData[courseIndex].desc 
    + "\n\nCredits: " + classData[courseIndex].credits
  }

  const totalClasses = Object.keys(classData).length + 4; //4 for calc 1 + 2 and the two physics labs

  const totalCredits = Object.keys(classData).reduce((sum, key) => {
    return sum + classData[key].credits;
  }, 0);

  return (
    <div className='coursework'>
      <div className='coursework-info'>
        <Tabs
            className='coursework-info-tabs'
            value={value} 
            onChange={handleChange} 
            variant={tabVariant}
          >
          <Tab label="Computer Science" {...a11yProps(0)} />
          <Tab label="Electrical & Computer Engineering" {...a11yProps(1)} />
          <Tab label="Finance" {...a11yProps(2)} />
          <Tab label="Business" {...a11yProps(3)} />
          <Tab label="IBE" {...a11yProps(4)} />
          <Tab label="General" {...a11yProps(5)} />
        </Tabs>
        <div className='coursework-break' />
        <div className='coursework-panel-wrapper'>
          <CustomTabPanel value={value} index={0}>
            {/* Computer Science */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse440')}>
                    CSE 440 - Advanced Algorithms
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse475')}>
                    CSE 475 - Parallel Programming
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse475')}>
                    CSE 447 - Data Mining
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse426')}>
                    CSE 426 - Fundamentals of Machine Learning
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse411')}>
                    CSE 411 - Advanced Programming Techniques
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse342')}>
                    CSE 342 - Fundamentals of Internetworking
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse492')}>
                    CSE 492 - Independent Study
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse303')}>
                    CSE 303 - Operating System Design
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('cse241')}>
                    CSE 241 - Database Systems & Applications
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse340')}>
                    CSE 340 - Design & Analysis of Algorithms
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse216')}>
                    CSE 216 - Software Engineering
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse392')}>
                    CSE 392 - Independent Study
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse264')}>
                    CSE 264 - Web Systems Programming
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse140')}>
                    CSE 140 - Discrete Structures & Algorithms
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse109')}>
                    CSE 109 - Systems Software
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse017')}>
                    CSE 017 - Programming & Data Structures
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse002')}>
                    CSE 002 - Fundamentals of Programming
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('cse012')}>
                    CSE 012 - Survey of CS (AP Credit)
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* Electrical and Computer Engineering */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('creg258')}>
                    CREG 258 - Computer Engr Senior Project II
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('creg257')}>
                    CREG 257 - Computer Engr Senior Project I
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ece201')}>
                    ECE 201 - Computer Architecture
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ece128')}>
                    ECE 128 - FPGA Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ece132')}>
                    ECE 132 - Microcontroller Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ece108')}>
                    ECE 108 - Signals & Systems
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ece182')}>
                    ECE 182 - Junior Circuit Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ece123')}>
                    ECE 123 - Electronic Circuits
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ece121')}>
                    ECE 121 - Electronic Circuit Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ece081')}>
                    ECE 081 - Princ of Electrical Engineering
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ece033')}>
                    ECE 033 - Intro to Computer Engineering
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {/* Finance */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('fin377')}>
                    FIN 377 - Data Science for Finance
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('fin335')}>
                    FIN 335 - Financial Management
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('fin328')}>
                    FIN 328 - Corporate Financial Policy
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('fin323')}>
                    FIN 323 - Investments
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('fin125')}>
                    FIN 125 - Intro to Finance
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {/* Business Core */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('acct151')}>
                    ACCT 151 - Financial Accounting
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('acct152')}>
                    ACCT 152 - Managerial Accounting
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('bis111')}>
                    BIS 111 - Information Systems
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('bus005')}>
                    BUS 005 - Business Ethics
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('eco146')}>
                    ECO 146 - Applied Microeconomic Analysis
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('eco029')}>
                    ECO 029 - Money, Banking, & Financial Systems
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('eco001')}>
                    ECO 001 - Principles of Economics
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('law201')}>
                    LAW 201 - Legal Environment of Business
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('mgt143')}>
                    MGT 143 - Management
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('mkt111')}>
                    MKT 111 - Marketing
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            {/* IBE */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ibe385')}>
                    IBE 385 - IBE Capstone Design II
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ibe380')}>
                    IBE 380 - IBE Capstone Design I
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ibe250')}>
                    IBE 250 - Junior Lab
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ibe150')}>
                    IBE 150 - Sophomore Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ibe050')}>
                    IBE 050 - Freshman Workshop
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('ibe010')}>
                    IBE 010 - Freshman Seminar
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            {/* General */}
            <div className="class-list-container">
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('ise358')}>
                    ISE 358 - Game Theory
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('math231')}>
                    MATH 231 - Probability & Statistics
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('math205')}>
                    MATH 205 - Linear Methods
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('math023')}>
                    MATH 021-023 - Calculus I-III
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('phy021')}>
                    PHY 021,022 - Physics II & Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('phy011')}>
                    PHY 011,012 - Physics I & Lab
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='right' arrow 
                    title={courseDesc('chm030')}>
                    CHM 030 - Intro to Chemical Principles
                  </Tooltip>
                </li>
              </ul>
              <ul className="class-list-column">
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('mech002')}>
                    MECH 002 - Intro to Mechanics
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('engr010')}>
                    ENGR 010 - Engineering Computations
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('eco099')}>
                    ECO 099 - Economics (AP Credit for Macroeconomics)
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('des096')}>
                    DES 096 - Graphic Design
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('psyc001')}>
                    PSYC 001 - Intro to Psychology
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('engl011')}>
                    ENGL 011 - Critical Reading & Writing
                  </Tooltip>
                </li>
                <li>
                  <Tooltip placement='left' arrow 
                    title={courseDesc('engl001')}>
                    ENGL 001 - Critial Reading & Composition
                  </Tooltip>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
        </div>
    </div>
    <p>Total classes: {totalClasses}. Total credits: {totalCredits}.</p>
  </div>
  );
}

export default CourseworkTabs;