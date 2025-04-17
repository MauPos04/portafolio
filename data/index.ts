export const navItems = [
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
      title: "Currently learning new Deep Learning techniques, and always learning new AI tools.",
      description: "The Inside Scoop",
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
  
  export const projects = [
    {
      id: 1,
      title: "Ditek Robotics Static Website",
      des: "A website dedicated to showcasing robotics products and innovations.",
      img: "/ditek_robotics.png",
      iconLists: ["/wordpress_icon.svg","/wpformsbg.png", "/elementor-icon.svg"],
      link: "https://ditek.com.co/",
    },
    {
      id: 2,
      title: "AI Engineer APPU Project",
      des: "Developed a comprehensive data processing and reporting solution for a multi-location cafeteria management system. This project extracts transactional data from AWS DynamoDB, processes complex business rules, and generates detailed financial and operational reports for cafeteria management and accounting purposes. Additionally, implemented a sales projection model using XGBoost to forecast future demand and trends, and automated insightful report creation leveraging the OpenAI API for natural language summaries and executive-friendly outputs.",
      img: "/APPU_IMAGE_up.png",
      iconLists: ["/django_icon.svg", "/icons-bootstrap.svg", "/icon_python.svg", "/tensorflow.svg", "/icon_excel.svg", "/icons8-aws.svg"],
      link: "https://appu.store/",
    },
    {
      id: 3,
      title: "Que hay pa hacer",
      des: "A web application that helps users find activities and events in their area.",
      img: "/Que_hay_pa_hacer_up.png",
      iconLists: ["/re.svg", "/icons-bootstrap.svg", "/ts.svg", "/styled-components_icon.svg","/mongodb_svg.svg","/icon_angularjs.svg"],
      link: "https://github.com/MauPos04/cedesistemas-fs-2023-2",
    },
    {
      id: 4,
      title: "AI Traslator and summariser after scrapping",
      des: "A web app that scrapes data from websites and provides translation and summarization features.",
      img: "/Summarizer_code.png",
      iconLists: ["/icon_python.svg", "/icons8-hugging-face.svg"],
      link: "https://github.com/MauPos04/AI_NOTEBOOKS/blob/main/Web%20Scrap%20and%20Translate%20Using%20Transformers.ipynb",
    },
  ];


  export const otherProjects: { id: number; title: string; link?: string }[] = [
    { id: 1, title: "Biomass project in Enka's thermoelectric plant" },
    { id: 2, title: "Water Level PID controller using Neural Networks" }, 
    { id: 3, title: "Heart Deceases Prediction", link: "https://github.com/MauPos04/Heart_Diseases_Prediction" },
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
  
  export const companies = [
    
    {
      id: 1,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 2,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    }
  ];
  
export const workExperience = [
  {
    id: 1,
    title: "IA Engineer - APPU",
    desc: "Developed a data pipeline that ingests transactional records from AWS DynamoDB, applies complex business rules, and delivers detailed financial and operational reports for a multi‑location cafeteria network. Built an XGBoost sales‐forecasting model and automated executive‑ready, natural‑language summaries via the OpenAI API",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
    {
      id: 2,
      title: "Full Stack Developer",
      desc: "Assisted in the development of a web-based platform using React.js, Angularjs, Nextjs, MongoDb, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Wordpress Developer - Ditek",
      desc: "Led the landing page design and development for a robotics company, utilizing WordPress and Elementor to create a user-friendly interface.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Freelance AI stocks engineer",
      desc: "Developed a web application that scrapes data from important financial websites, providing necessary info for extracting indicators for a Machine Learning/DL model for stock prediction.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
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