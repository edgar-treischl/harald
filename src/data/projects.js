export const projects = [
  {
    id: 'practicer',
    title: 'Practice R: An Interactive Textbook',
    description: 'Many students learn to analyze data using commercial packages, even though there is an open-source software with cutting-edge possibilities: R, a programming language with countless cool features for applied empirical research.\n \nPractice R introduces R to social science students, inspiring them to consider R as an excellent choice. In a non-technical pragmatic way, this book covers all typical steps of applied empirical research. Learn how to prepare, analyze, and visualize data in R. Discover how to collect data, generate reports, or automate error-prone tasks.\n \nThe book is accompanied by an R package. This provides further learning materials that include interactive tutorials, challenging you with typical problems of applied research. This way, you can immediately practice the knowledge you have learned. The package also includes the source code of each chapter and templates that help to create reports. Practice R has social science students in mind, nonetheless a broader audience may use Practice R to become a proficient R user.',
    image: 'images/practice_r.jpeg', // just relative path
    link: 'https://edgar-treischl.github.io/PracticeR/',
    topics: ['R'],
    technologies: ['R'],
    layout: 'custom',
  },
  {
    id: 'wirkungsevaluation',
    title: 'Wirkungsevaluation',
    description: 'Evaluationen werden häufig durchgeführt, um die kausalen Wirkungen einer Maßnahme zu identifizieren. Das Lehrbuch führt in die entsprechenden theoretischen und methodischen Grundlagen der Wirkungsevaluation ein und illustriert diese anhand ausgewählter Beispiele.\n \nZiel des Buches ist es dabei, einen praktischen Bezug zum Ablauf einer Evaluation und den einzelnen Entscheidungsschritten herzustellen, aber auch mögliche Fallstricke unterschiedlicher Evaluationsverfahren aufzuzeigen. Eine Lektüre ist daher sowohl für Evaluationsforschende als auch für Stakeholder wie Auftraggebende, Evaluierte und Entscheidungsträger ertragreich.',
    image: 'images/wirkungsevaluation.png', // relative path
    link: 'https://www.beltz.de/',
    topics: [],
    technologies: ['Kausalanalyse', 'Evaluation', 'Forschungsdesigns'],
    layout: 'standard',
  },
  {
    id: 'titanic',
    title: 'Titanic App',
    description: 'The shiny app introduces the basics of a logistic regression and examines who survived the Titanic accident. It outlines the logic of a logistic regression, it underlines what a odds ratio measures, and it discusses the performance of such models.',
    image: 'images/titanic.png', // relative path
    link: 'https://edgar-treischl.github.io/TitanicApp/',
    topics: ['R', 'Stats'],
    technologies: ['Logistic Regression', 'Evaluation', 'Forschungsdesigns'],
    layout: 'standard',
  },
    {
    id: 'reportmaster',
    title: 'ReportMaster',
    description: 'ReportMaster is designed to automatically create dynamic reports for Lime Survey. The package checks whether a survey has expired, retrieves data through the LimeSurvey API, and combines it with metadata to generate a dynamic report.\n \nThe package is accompanied by the MetaMaster package, which automatically generates metadata for LimeSurvey. The main functions of ReportMaster are designed to run in a Docker container and be executed as a cron job. This setup enables the package to generate reports for expired surveys. \n \n I created this package when I worked at the ISB Munich. Get in touch with me if you want to know more about it.',
    image: 'images/reportmaster.png', // relative path
    link: '',
    topics: ['R', 'Stats'],
    technologies: ['Automation', 'Lime Survey', 'R'],
    layout: 'standard',
  },
]
