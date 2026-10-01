export const navItems = [
  { name: "Start", link: "#top" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/XG_MAC.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building RAG systems, evaluating LLMs, and turning data into useful products.",
    description: "Applied AI & Software",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export type PortfolioProject = {
  id: number;
  title: string;
  des: string;
  img: string;
  images?: string[];
  iconLists: string[];
  link?: string;
  ctaLabel?: string;
  tags?: string[];
  badge?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: 5,
    title: "Hablemos por Ellos",
    des: "A donation and recurring-payment platform that helps a nonprofit manage supporters, contributions, and day-to-day operations.",
    img: "/hablemos-por-ellos-logo.png",
    images: ["/hablemos-por-ellos-logo.png"],
    iconLists: ["/next.svg", "/re.svg", "/ts.svg"],
    link: "https://github.com/Hablemos-Por-Ellos/Hablemos_por_ellos_cobros",
    ctaLabel: "View code",
    tags: ["Next.js", "Supabase", "Recurring payments"],
    badge: "Social impact",
  },
  {
    id: 1,
    title: "Ditek Robotics Static Website",
    des: "A website dedicated to showcasing robotics products and innovations.",
    img: "/ditek_robotics.png",
    images: ["/ditek_robotics.png"],
    iconLists: ["/wordpress_icon.svg","/wpformsbg.png", "/elementor-icon.svg"],
    link: "https://ditek.com.co/",
    ctaLabel: "Visit website",
    tags: ["WordPress", "Elementor"],
    badge: "Client website",
  },
  {
    id: 3,
    title: "QueHayPaHacer",
    des: "An activity-discovery platform with a React interface, Node.js/Express API, and MongoDB persistence.",
    img: "/Que_hay_pa_hacer_up.png",
    images: ["/Que_hay_pa_hacer_up.png"],
    iconLists: ["/re.svg", "/ts.svg", "/mongodb_svg.svg"],
    link: "https://github.com/MauPos04/cedesistemas-fs-2023-2",
    ctaLabel: "View code",
    tags: ["React", "Express", "MongoDB"],
    badge: "Full-stack product",
  },
];

export const projectsSectionAI: PortfolioProject[] = [
  {
    id: 5,
    title: "AI Support Triage Assistant",
    des: "An evidence-backed support workflow that retrieves documentation, recommends escalation routes, and improves through human-reviewed feedback.",
    img: "/support-triage-workflow.svg",
    iconLists: ["/re.svg", "/ts.svg", "/openai.svg", "/icons8-aws.svg"],
    tags: ["Express", "DynamoDB", "Vector Stores", "Cognito"],
    badge: "Private project · Workflow overview",
  },
  {
    id: 4,
    title: "Sports Prediction Platform",
    des: "Football and tennis forecasts with calibrated ensemble models, a React interface, and prediction tracking against real outcomes.",
    img: "/sports-prediction-current.png",
    images: ["/sports-prediction-current.png", "/prediction-evaluation-workflow.svg"],
    iconLists: ["/icon_python.svg", "/re.svg", "/ts.svg"],
    link: "https://github.com/MauPos04/Scores-pred-front",
    ctaLabel: "View code",
    tags: ["FastAPI", "XGBoost", "PyTorch", "GCP"],
    badge: "Football & tennis · Calibration & drift",
  },
  {
    id: 3,
    title: "Stock Forecasting Platform",
    des: "LSTM stock forecasts with a FastAPI backend, Next.js interface, authentication, rolling backtests, and calibrated forecast intervals.",
    img: "/ai-stocks-production.png",
    images: ["/ai-stocks-production.png", "/prediction-evaluation-workflow.svg"],
    iconLists: ["/icon_python.svg", "/tensorflow.svg", "/next.svg", "/mongodb_svg.svg"],
    link: "https://github.com/MauPos04/AI_stocks_model_f1",
    ctaLabel: "View code",
    tags: ["FastAPI", "MLflow", "Docker", "Cloud Run"],
    badge: "Time-series ML · Cloud deployment",
  },
  {
    id: 2,
    title: "Multimodal RAG Assistant",
    des: "Retrieval across text and images to ground answers in source material, combining multimodal processing with hosted and local LLMs.",
    img: "/Multimodal_RAG.png",
    images: ["/Multimodal_RAG.png"],
    iconLists: ["/openai.svg", "/icon_python.svg", "/tensorflow.svg", "/ollama.svg", "/openrouter.svg"],
    link: "https://github.com/MauPos04/Muldimodal_RAG",
    ctaLabel: "View code",
    tags: ["RAG", "Text & images", "Local LLMs"],
    badge: "Multimodal retrieval",
  },
];

export const additionalAIProjects: PortfolioProject[] = [
  {
    id: 6,
    title: "APPU · Forecasting & AI Reporting",
    des: "DynamoDB data pipelines, XGBoost sales forecasts, and OpenAI executive summaries for a multi-location cafeteria business.",
    img: "/APPU_IMAGE_up.png",
    iconLists: ["/icon_python.svg", "/icons8-aws.svg", "/openai.svg", "/icon_excel.svg"],
    link: "https://appu.store/",
    ctaLabel: "Visit website",
    tags: ["XGBoost", "DynamoDB", "Financial reports"],
    badge: "Business analytics",
  },
  {
    id: 1,
    title: "LLM-to-SQL Analyst",
    des: "Natural-language querying for MySQL using LangChain, Python, SQLAlchemy, and local or hosted language models.",
    img: "/LLM_SQL.png",
    iconLists: ["/openai.svg", "/ollama.svg", "/icon_python.svg"],
    tags: ["LangChain", "SQLAlchemy", "MySQL"],
    badge: "Private project · Natural-language analytics",
  },
];

export const projectsSectionTwo: PortfolioProject[] = [
  {
    id: 1,
    title: "Arquitecture Landing",
    des: "Landing page concept highlighting the studio's portfolio, services, and contact flow.",
    img: "/Arquitecture_1_landing.png",
    images: ["/Arquitecture_1_landing.png", "/Arquitecture_2_landing.png"],
    iconLists: [],
    link: "#",
  },
  {
    id: 2,
    title: "Fitness Landing",
    des: "Landing page concept for fitness coaching with benefits, plans, and a clear CTA.",
    img: "/Fitness_landing_1.png",
    images: ["/Fitness_landing_1.png", "/Fitness_landing_2.png"],
    iconLists: [],
    link: "#",
  },
  {
    id: 3,
    title: "Restaurant Landing",
    des: "Landing page concept featuring branding, signature dishes, and quick reservations.",
    img: "/Restaurant_landing_1.png",
    images: ["/Restaurant_landing_1.png", "/Restaurant_landing_2.png"],
    iconLists: [],
    link: "#",
  },
];

export const projectsSectionThree: PortfolioProject[] = [
  {
    id: 1,
    title: "Restaurant Menu",
    des: "Clean menu layout concept to showcase dishes, prices, and categories.",
    img: "/Restaurant_menu_3.png",
    images: [],
    iconLists: [],
    link: "#",
  },
  {
    id: 2,
    title: "Simple Pricing Landing",
    des: "Pricing-focused landing page concept with clear tiers and comparisons.",
    img: "/Simple_landing_1_prices.png",
    images: [],
    iconLists: [],
    link: "#",
  },
  {
    id: 3,
    title: "Simple Landing",
    des: "Minimal landing page concept focused on a crisp message and key sections.",
    img: "/Simple_landing_2.png",
    images: [],
    iconLists: [],
    link: "#",
  },
];
// other projects
export const otherProjects: { id: number; title: string; link?: string }[] = [
  { id: 1, title: "Biomass project in Enka's thermoelectric plant" },
  { id: 2, title: "Water Level PID controller using Neural Networks" }, 
  { id: 3, title: "Heart Disease Prediction", link: "https://github.com/MauPos04/Heart_Diseases_Prediction" },
  { id: 4, title: "AI Translation & Summarization Notebook", link: "https://github.com/MauPos04/AI_NOTEBOOKS/blob/main/Web%20Scrap%20and%20Translate%20Using%20Transformers.ipynb" },
];

export const testimonials = [
  {
    quote: "Working alongside Mauricio has been an absolute pleasure. His professionalism, punctuality, and dedication at every stage of the project left us thoroughly impressed. I wholeheartedly recommend Mauricio for any initiative seeking outstanding results.",
    name: "Marlon Bernate",
    title: "Ceo at Appu",
    // img: "/profile1.svg",
  },
  {
    quote: "Collaborating with Mauricio was a truly enriching experience. His ability to find creative solutions and his attention to detail made a significant difference in our project. He is, without a doubt, the ideal partner to boost any venture.",
    name: "Christian",
    title: "Chief At ENKA termoelectric",
    // img: "/profile2.svg",
  },
  {
    quote: "Mauricio demonstrated a high level of commitment and the skill to tackle complex challenges. His results-driven approach and passion for the work ensured our project's success. I highly recommend him.",
    name: "Camilo Diez",
    title: "CEO at Ditek Robotics",
    // img: "/profile3.svg",
  },
  {
    quote: "Our collaboration with Mauricio exceeded all expectations. His clear communication, efficiency, and technical talent were key in transforming our vision into reality. Mauricio is, without a doubt, an exemplary professional.",
    name: "Juan Gomez",
    title: "Inplay Genius Sports Supervisor",
    // img: "/profile4.svg",
  },
];  

export type Certification = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  icon: string;
  color: string;
  featured?: boolean;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  { id: "aws-ai-practitioner", name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", date: "August 2026", icon: "aws", color: "#FF9900", featured: true },
  { id: "azure-ai-fundamentals", name: "Microsoft Certified: Azure AI Fundamentals", issuer: "Microsoft", date: "August 2026", icon: "azure", color: "#0078D4", featured: true },
  { id: "google-genai-leader", name: "Generative AI Leader", issuer: "Google Cloud", date: "February 2026", icon: "google", color: "#4285F4", featured: true },
  { id: "mongodb-agents", name: "Building AI Agents with MongoDB", issuer: "MongoDB", date: "October 2025", icon: "mongodb", color: "#47A248" },
  { id: "mongodb-rag", name: "Building RAG Apps Using MongoDB", issuer: "MongoDB", date: "August 2025", icon: "mongodb", color: "#47A248" },
  { id: "nvidia-deep-learning", name: "Fundamentals of Deep Learning", issuer: "NVIDIA Deep Learning Institute", date: "January 2025", icon: "nvidia", color: "#76B900" },
  { id: "nvidia-llm", name: "Building LLM Applications With Prompt Engineering", issuer: "NVIDIA Deep Learning Institute", date: "January 2025", icon: "nvidia", color: "#76B900" },
  { id: "nvidia-transformers", name: "Building Transformer-Based Natural Language Processing Applications", issuer: "NVIDIA Deep Learning Institute", date: "January 2025", icon: "nvidia", color: "#76B900" },
];

export const technologies = [
  { id: "python", name: "Python", description: "APIs & data pipelines", icon: "python", color: "#3776AB" },
  { id: "react", name: "React", description: "Product interfaces", icon: "react", color: "#61DAFB" },
  { id: "nextjs", name: "Next.js", description: "Full-stack applications", icon: "nextjs", color: "#FFFFFF" },
  { id: "azure", name: "Microsoft Azure", description: "AI Foundry · AI Search · Blob", icon: "azure", color: "#0078D4" },
  { id: "aws", name: "AWS", description: "Bedrock · DynamoDB · S3", icon: "aws", color: "#FF9900" },
  { id: "google", name: "Google Cloud", description: "Cloud Run · Cloud Build", icon: "google", color: "#4285F4" },
  { id: "vertex", name: "Vertex AI", description: "Google Cloud AI", icon: "vertex", color: "#4285F4" },
  { id: "tensorflow", name: "TensorFlow", description: "Deep learning & LSTM", icon: "tensorflow", color: "#FF6F00" },
  { id: "pytorch", name: "PyTorch", description: "Deep learning", icon: "pytorch", color: "#EE4C2C" },
  { id: "mongodb", name: "MongoDB", description: "Application persistence", icon: "mongodb", color: "#47A248" },
  { id: "snowflake", name: "Snowflake", description: "Data analysis", icon: "snowflake", color: "#29B5E8" },
  { id: "jira", name: "Jira", description: "Project management", icon: "jira", color: "#0052CC" },
  { id: "confluence", name: "Confluence", description: "Team documentation", icon: "confluence", color: "#0052CC" },
];

export const companies = [
  {
    id: 1,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "",
    description: "Web Hosting",
    color: "#673DE6",
  },
  {
    id: 2,
    name: "Docker",
    img: "/dock.svg",
    nameImg: "",
    description: "Containerization",
    color: "#2496ED",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "AI Analyst · Grupo Bios",
    role: "AI & Software Engineer",
    period: "April 2026 — Present",
    desc: "Developing RAG solutions and agent workflows over enterprise information. Evaluating LLMs, improving retrieval, and defining architectures for business use cases.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data Scientist · APPU",
    role: "Data pipelines, forecasting & reporting",
    period: "November 2024 — April 2025",
    desc: "Processed cafeteria data from DynamoDB, forecast sales with XGBoost, and automated executive reports with the OpenAI API.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    role: "Full-stack applications",
    period: "January 2023 — July 2024",
    desc: "Developed web applications and APIs with React, AngularJS, Node.js, and MongoDB, connecting useful interfaces with reliable backend services.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Ditek Robotics",
    role: "Freelance WordPress development",
    period: "Client project",
    desc: "Designed and built a product-focused website with WordPress and Elementor for a robotics company.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/MauPos04"
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://twitter.com/"
  },
  {
    id: 3,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/mauricioposadapalma04"
  },
  {
    id: 4,
    img: "/insta.svg",
    url: "https://instagram.com/"
  }
];






