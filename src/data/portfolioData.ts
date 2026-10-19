import type { ProfileInfo, Project, SkillCategory, ExperienceItem, AchievementItem, InterestItem } from '../types/portfolio';


/**
 * PORTFOLIO DATA CONFIGURATION
 * 
 * Jiya, you can easily customize all your personal info, projects, links, 
 * and achievements right here in this file!
 */

export const PROFILE_INFO: ProfileInfo = {
  name: "Jiya Baghel",
  nickname: "Jiya",
  title: "Computer Science Engineering Student | AI & ML Enthusiast | Aspiring Software Developer",
  tagline: "Building intelligent solutions through code, creativity, and curiosity.",
  heroDescription: "I'm a Computer Science Engineering student specialising in AI & Machine Learning, passionate about turning ideas into practical software and data-driven solutions.",
  aboutIntro: "Hello! I am a passionate Computer Science Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Symbiosis Institute of Technology, Nagpur. I thrive on translating theoretical data concepts and algorithms into practical, functional software.",
  aboutPhilosophy: "I believe the best way to master technology is through active, hands-on building and meaningful collaboration. Whether designing machine learning pipelines, building responsive web applications, or running college events, I bring curiosity, structural rigor, and creative energy to every endeavor.",
  leadershipIntro: "Beyond coding, I am deeply invested in community building and collaborative leadership. As the Organising Secretary for Event Management, I coordinate large-scale events, bridge student-faculty operations, and lead multidisciplinary teams. Previously, as Co-coordinator of the Competitive Club, I spearheaded technical and cultural initiatives that brought students together to compete and grow.",
  education: {
    degree: "B.Tech in Computer Science Engineering",
    specialization: "Specialization in Artificial Intelligence and Machine Learning",
    institution: "Symbiosis Institute of Technology",
    location: "Nagpur, Maharashtra, India",
    graduationYear: "2028",
    status: "Currently Pursuing (Expected 2028)"
  },
  contact: {
    email: "jiyab623@gmail.com",
    github: "https://github.com/Jiya2006",
    linkedin: "https://www.linkedin.com/in/jiya-baghel-3724a7241",
    location: "Nagpur, India"
  },
  resumeFileName: "resume.pdf"
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code",
    accent: "violet",
    description: "Core languages used for problem solving, algorithmic thinking, and building foundational logic.",
    skills: ["Python", "Java", "C"]
  },
  {
    id: "ml-data",
    title: "Machine Learning & Data",
    icon: "BrainCircuit",
    accent: "cyan",
    description: "Libraries and frameworks applied to data analysis, model training, and predictive modeling.",
    skills: ["Machine Learning", "pandas", "NumPy", "Jupyter Notebook"]
  },
  {
    id: "web-cs",
    title: "Web & Computer Science",
    icon: "Globe",
    accent: "purple",
    description: "Fundamental computer science principles and frontend technologies for responsive user interfaces.",
    skills: ["HTML", "CSS", "Data Structures"]
  },
  {
    id: "tools-simulation",
    title: "Tools & Simulation",
    icon: "Terminal",
    accent: "cyan",
    description: "Development environments, version control, and specialized network simulation toolkits.",
    skills: ["GitHub", "NS-3", "WSL", "Aqua-Sim-NG"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction Using Machine Learning",
    subtitle: "Healthcare Data Classification",
    category: "ml",
    categoryLabel: "Machine Learning",
    problemStatement: "Early identification of diabetic risk indicators using clinical health metrics to assist proactive screening.",
    description: "A machine-learning project exploring diabetes prediction using structured medical data. Evaluates patient variables to determine indicator correlations and assess predictive accuracy.",
    technologies: ["Python", "Jupyter Notebook", "pandas", "NumPy"],
    contribution: "Implemented exploratory data analysis, handled feature normalization, and trained classification models on patient metrics.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "credit-card-fraud",
    title: "Credit Card Fraud Detection",
    subtitle: "Anomaly Detection & Classification",
    category: "ml",
    categoryLabel: "Machine Learning",
    problemStatement: "Detecting anomalous patterns within transaction streams characterized by extreme class imbalance.",
    description: "A classification project exploring the detection of potentially fraudulent financial transactions. Investigates statistical feature distributions to isolate suspicious signals.",
    technologies: ["Python", "pandas", "NumPy", "Jupyter Notebook"],
    contribution: "Analyzed transaction feature patterns, explored classification pipelines, and reviewed precision-recall metrics for fraud identification.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "recommendation-system",
    title: "Recommendation System",
    subtitle: "Personalized Discovery Engine",
    category: "ml",
    categoryLabel: "Machine Learning",
    problemStatement: "Filtering large catalogs to surface tailored recommendations aligned with user preferences.",
    description: "A machine learning exploration into recommender algorithms, calculating item-to-item and user-preference similarities to generate relevant suggestions.",
    technologies: ["Python", "pandas", "NumPy", "Jupyter Notebook"],
    contribution: "Computed similarity matrices, built recommendation logic, and validated suggestion outputs using structured data.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "spam-sms-detection",
    title: "Spam SMS Detection",
    subtitle: "Text Classification & NLP",
    category: "ml",
    categoryLabel: "Machine Learning",
    problemStatement: "Automating the classification of unwanted or malicious text messages from genuine user communication.",
    description: "A text-classification project designed to distinguish spam messages from legitimate messages through natural language preprocessing and token analysis.",
    technologies: ["Python", "NLP Concepts", "pandas", "Jupyter Notebook"],
    contribution: "Handled text cleaning, token transformation, and trained classifier algorithms to distinguish spam patterns.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Predictive Behavior Analytics",
    category: "ml",
    categoryLabel: "Machine Learning",
    problemStatement: "Understanding key churn indicators and predicting customer retention probabilities.",
    description: "A machine-learning project exploring customer churn prediction by correlating account tenure, service usage, and engagement indicators.",
    technologies: ["Python", "pandas", "NumPy", "Data Visualization"],
    contribution: "Performed feature correlation on customer behavior datasets and evaluated decision patterns that precede service termination.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "taskmaster-todo-app",
    title: "TaskMaster – To-Do List App",
    subtitle: "Interactive Productivity Web App",
    category: "web",
    categoryLabel: "Web Development",
    problemStatement: "Streamlining personal productivity through a clean, distraction-free task management interface.",
    description: "A task-management application for organising tasks, categorizing daily objectives, and tracking completion status with persistent state.",
    technologies: ["HTML", "CSS", "JavaScript", "Web Storage"],
    contribution: "Designed user-friendly UI layout, implemented interactive task filtering, completion toggles, and local storage retention.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Completed",
    featured: true
  },
  {
    id: "underwater-mac-protocols",
    title: "Energy-Efficient MAC Protocols for Underwater Sensor Networks",
    subtitle: "Network Protocol Simulation Research",
    category: "simulation",
    categoryLabel: "Simulation & Research",
    problemStatement: "Mitigating high propagation latency and conserving critical battery life in underwater acoustic sensor nodes.",
    description: "An academic simulation project exploring energy-efficient communication protocols in underwater sensor networks (UWSNs) under challenging acoustic transmission conditions.",
    technologies: ["NS-3", "WSL", "Aqua-Sim-NG", "Python"],
    contribution: "Configured underwater network topologies, executed packet loss and energy consumption evaluations, and analyzed latency behaviors.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "Academic Research",
    featured: false
  },
  {
    id: "ca-workease",
    title: "CA Workease",
    subtitle: "Intelligent Workflow Automation (In Progress)",
    category: "ml",
    categoryLabel: "Machine Learning / Dev",
    problemStatement: "Simplifying operational and computational bottlenecks in professional workflows through smart automation.",
    description: "A project currently under active development exploring machine learning integrations to assist and streamline workflows. Functionality and architecture are continuously evolving as features are validated.",
    technologies: ["Python", "Machine Learning", "Software Development"],
    contribution: "Architecting core module flows and experimenting with intelligent assistive features.",
    githubUrl: "https://github.com/Jiya2006",
    isPlaceholderRepo: true,
    status: "In Progress",
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "organising-secretary",
    role: "Organising Secretary – Event Management",
    organization: "Symbiosis Institute of Technology, Nagpur",
    period: "Current Role",
    isCurrent: true,
    summary: "Leading planning, coordination, and execution for college-level events, ensuring smooth operational flow, inter-departmental synergy, and student engagement.",
    responsibilities: [
      "Orchestrate event timelines, logistics, and resource management across multiple college initiatives.",
      "Facilitate seamless communication between faculty advisors, administration, and student organizing committees.",
      "Manage cross-functional sub-teams handling technical, stage, hospitality, and scheduling operations.",
      "Resolve on-ground logistical challenges and ensure high-standard execution during live gatherings."
    ],
    skills: ["Event Management", "Leadership", "Team Coordination", "Strategic Planning", "Communication"]
  },
  {
    id: "competitive-club",
    role: "Co-coordinator – Competitive Club",
    organization: "Symbiosis Institute of Technology, Nagpur",
    period: "Previous Role",
    isCurrent: false,
    summary: "Spearheaded collaborative initiatives uniting technical and cultural activities to promote student participation, healthy competition, and peer learning.",
    responsibilities: [
      "Collaborated in organizing technical competitions, hackathons, and cultural activities for students.",
      "Fostered peer participation and coordinated with club members to drive active attendance.",
      "Maintained event documentation, team scheduling, and participant guidelines."
    ],
    skills: ["Teamwork", "Public Relations", "Activity Coordination", "Peer Engagement"]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "national-dance",
    title: "National-Level Dance Participation",
    category: "Arts & Culture",
    description: "Represented at national-level dance platforms, reflecting long-term dedication, rhythm, stage presence, and disciplined artistic performance.",
    badge: "National Level",
    icon: "Music"
  },
  {
    id: "gold-dodgeball",
    title: "Gold Medal in Dodgeball",
    category: "Sports",
    description: "Secured first place and gold medal in dodgeball competition, demonstrating quick reflexes, tactical teamwork, agility, and sportsmanship.",
    badge: "Gold Medal",
    icon: "Trophy"
  },
  {
    id: "college-events",
    title: "College Cultural & Technical Event Leadership",
    category: "Leadership",
    description: "Recognized for proactive contributions to college life through leadership roles in Event Management and the Competitive Club.",
    badge: "Institutional",
    icon: "Award"
  }
];

export const INTERESTS: InterestItem[] = [
  { name: "Machine Learning", category: "Tech", icon: "BrainCircuit" },
  { name: "Python Programming", category: "Tech", icon: "Code" },
  { name: "Software Development", category: "Tech", icon: "Terminal" },
  { name: "Data-Driven Problem Solving", category: "Tech", icon: "LineChart" },
  { name: "Creative Projects", category: "Creative", icon: "Sparkles" },
  { name: "Event Management", category: "Leadership", icon: "Users" },
  { name: "Dance", category: "Creative", icon: "Heart" }
];
