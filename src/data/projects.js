export const projects = [
    {
    id: 'spe3ctr',
    title: 'sp3ctr',
    description: 'The sp3ctr package is part of the Trigger Validation Framework, a modular system for running, tracking, and managing data validation workflows.\n \nsp3ctr is the undercover agency of your data preparation and validation pipeline. It launches the appropriate validation pipeline whenever changes are detected and it creates pointer files to monitor tables. Validation pipelines, reports, and pointer data create a rich meta data for a complete audit trail. Whether automatically or manually triggered, sp3ctr ensures all important steps will be tracked, supporting a robust, traceable, and reproducible workflow. \n I created this package when I worked at the ISB Munich. Get in touch with me if you want to know more about it.',
    image: '/images/trigger.webp', // relative path
    link: '',
    topics: ['R'],
    technologies: ['Validation', 'Automation', 'R'],
    layout: 'standard',
  },
    {
    id: 'configr-cli',
    title: 'configr',
    description: 'configr-cli is a command-line interface designed to fetch configuration files from configr via shell. It connects to the GitLab API to retrieve the latest version of a file, allowing users to inspect, copy, or replace local versions with ease. \n I created this package when I worked at the ISB Munich. Get in touch with me if you want to know more about it.',
    image: '/images/configr.png', // relative path
    link: '',
    topics: ['Python'],
    technologies: ['Validation', 'Automation', 'R'],
    layout: 'standard',
  },
  {
    id: 'practicer',
    title: 'Practice R: An Interactive Textbook',
    description: 'Many students learn to analyze data using commercial packages, even though there is an open-source software with cutting-edge possibilities: R, a programming language with countless cool features for applied empirical research.\n \nPractice R introduces R to social science students, inspiring them to consider R as an excellent choice. In a non-technical pragmatic way, this book covers all typical steps of applied empirical research. Learn how to prepare, analyze, and visualize data in R. Discover how to collect data, generate reports, or automate error-prone tasks.\n \nThe book is accompanied by an R package. This provides further learning materials that include interactive tutorials, challenging you with typical problems of applied research. This way, you can immediately practice the knowledge you have learned. The package also includes the source code of each chapter and templates that help to create reports. Practice R has social science students in mind, nonetheless a broader audience may use Practice R to become a proficient R user.',
    image: '/images/practice_r.jpeg', // just relative path
    link: 'https://www.degruyterbrill.com/document/doi/10.1515/9783110704976/html?lang=de&srsltid=AfmBOorEMW5k4lNGeCnhjOKnydWI6ExZ5n4mOctYD9Yg9TdtCZQUBPeN',
    topics: ['R', 'Books'],
    technologies: ['R'],
    layout: 'custom',
  },
  {
    id: 'wirkungsevaluation',
    title: 'Wirkungsevaluation',
    description: 'Evaluationen werden häufig durchgeführt, um die kausalen Wirkungen einer Maßnahme zu identifizieren. Das Lehrbuch führt in die entsprechenden theoretischen und methodischen Grundlagen der Wirkungsevaluation ein und illustriert diese anhand ausgewählter Beispiele.\n \nZiel des Buches ist es dabei, einen praktischen Bezug zum Ablauf einer Evaluation und den einzelnen Entscheidungsschritten herzustellen, aber auch mögliche Fallstricke unterschiedlicher Evaluationsverfahren aufzuzeigen. Eine Lektüre ist daher sowohl für Evaluationsforschende als auch für Stakeholder wie Auftraggebende, Evaluierte und Entscheidungsträger ertragreich.',
    image: '/images/wirkungsevaluation.png', // relative path
    link: 'https://www.beltz.de/fachmedien/soziologie/produkte/details/42792-wirkungsevaluation.html',
    topics: ['Books'],
    technologies: ['Kausalanalyse', 'Evaluation', 'Forschungsdesigns'],
    layout: 'custom',
  },
  {
    id: 'titanic',
    title: 'Titanic/Logistic Regression App',
    description: 'During my time at university, I developed several educational apps. For example, the Titanic app introduces the fundamentals of logistic regression by exploring who survived the Titanic disaster. It explains the logic behind logistic regression, highlights the interpretation of odds ratios, and evaluates model performance. Originally built with R Shiny, I later recreated the app using React to improve its interactivity and user experience.',
    image: '/images/titanic.png', // relative path
    link: 'https://edgar-treischl.github.io/TitanicApp/',
    topics: ['Web'],
    technologies: ['Logistic Regression', 'Evaluation'],
    layout: 'standard',
  },
  {
    id: 'reportmaster',
    title: 'ReportMaster',
    description: 'ReportMaster is designed to automatically create dynamic reports for Lime Survey. The package checks whether a survey has expired, retrieves data through the LimeSurvey API, and combines it with metadata to generate a dynamic report.\n \nThe package is accompanied by the MetaMaster package, which automatically generates metadata for LimeSurvey. The main functions of ReportMaster are designed to run in a Docker container and be executed as a cron job. This setup enables the package to generate reports for expired surveys. \n \n I created this package when I worked at the ISB Munich. Get in touch with me if you want to know more about it.',
    image: '/images/oes.webp', // relative path
    link: '',
    topics: ['R'],
    technologies: ['Automation', 'Lime Survey', 'R'],
    layout: 'standard',
  },
  {
    id: 'docster',
    title: 'Docster',
    description: 'Docster is a documentation website I built with Docusaurus to enhance internal documentation standards. Leveraging React under the hood, Docusaurus makes it easy to create interactive, customizable sites with Markdown-based content. Docster serves as a central hub for various projects, giving users quick access to guides, tutorials, and references. \n \n The website features a clean, modern design focused on usability and accessibility. It includes a powerful search function, intuitive navigation, and a responsive layout that adapts seamlessly to different screen sizes. Hosted on GitLab Pages, Docster is easy to deploy, maintain, and update.',
    image: '/images/docster.png',
    link: '',
    topics: ['Web'],
    technologies: ['React', 'Web', 'Documentation'],
    layout: 'standard',
  },
    {
    id: 'harald',
    title: 'Website',
    description: 'My personal website, built with Vue.js, is a showcase of my projects, skills, and experiences. Designed with a clean and modern aesthetic, it prioritizes usability and accessibility to create an intuitive browsing experience. Visitors can explore my bio, dive into my projects, view presentations, and get in touch through the contact section—all in one seamless platform.',
    image: '/images/harald.png',
    link: 'https://github.com/edgar-treischl/harald',
    topics: ['Web'],
    technologies: ['Vue'],
    layout: 'standard',
  },
]
