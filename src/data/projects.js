import PracticerImg from '@/assets/images/practice_r.jpeg'
import WirkungImg from '@/assets/images/wirkungsevaluation.png'

export const projects = [
  {
    id: 'practicer',
    title: 
    'Practice R: An Interactive Textbook',
    description:
      'Many students learn to analyze data using commercial packages, even though there is an open-source software with cutting-edge possibilities: R, a programming language with countless cool features for applied empirical research.\n \nPractice R introduces R to social science students, inspiring them to consider R as an excellent choice. In a non-technical pragmatic way, this book covers all typical steps of applied empirical research. Learn how to prepare, analyze, and visualize data in R. Discover how to collect data, generate reports, or automate error-prone tasks. The book is accompanied by an R package. This provides further learning materials that include interactive tutorials, challenging you with typical problems of applied research. This way, you can immediately practice the knowledge you have learned. The package also includes the source code of each chapter and templates that help to create reports.\n \nPractice R has social science students in mind, nonetheless a broader audience may use Practice R to become a proficient R user.',
    image: PracticerImg,
    link: 'https://edgar-treischl.github.io/PracticeR/',
    topics: ['R'],
    technologies: ['R'],
  },
  {
    id: 'wirkungsevaluation',
    title: 'Wirkungsevaluation: Grundlagen, Standards, Beispiele',
    description:
      'Evaluationen werden häufig durchgeführt, um die kausalen Wirkungen einer Maßnahme zu identifizieren. Das Lehrbuch führt in die entsprechenden theoretischen und methodischen Grundlagen der Wirkungsevaluation ein und illustriert diese anhand ausgewählter Beispiele. Ziel des Buches ist es dabei, einen praktischen Bezug zum Ablauf einer Evaluation und den einzelnen Entscheidungsschritten herzustellen, aber auch mögliche Fallstricke unterschiedlicher Evaluationsverfahren aufzuzeigen.\n \nEine Lektüre ist daher sowohl für Evaluationsforschende als auch für Stakeholder wie Auftraggebende, Evaluierte und Entscheidungsträger ertragreich.',
    image: WirkungImg,
    link: 'https://www.beltz.de/',
    topics: [],
    technologies: ['React', 'Firebase', 'CSS'],
  },
]
