// src/data/slidesData.js

const Icon1 = import.meta.env.BASE_URL + 'images/slides_code.png'
const Icon2 = import.meta.env.BASE_URL + 'images/slides_git.png'
const Icon3 = import.meta.env.BASE_URL + 'images/slides_packages.png'
const Icon4 = import.meta.env.BASE_URL + 'images/ebf_website.png'
const Icon5 = import.meta.env.BASE_URL + 'images/slides_program.png'

export const projects = [
  {
    id: '1',
    title: 'Code Quality and Style',
    description: 'Write clear, modular code, and develop with style. The slides summarize main concepts and common pitfalls when ...',
    image: Icon1,
    url: 'https://edgar-treischl.github.io/slidesCode/',
    topics: [],
  },
  {
    id: '2',
    title: 'Git(Hub)',
    description: 'The slides provide a step-by-step guide to working with Git, GitHub, and version control basics ...',
    image: Icon2,
    url: 'https://edgar-treischl.github.io/slidesGit/',
    topics: ['A Gentle Introduction'],
  },
  {
    id: '3',
    title: 'R Package Development',
    description: 'Turn your R scripts into reliable, maintainable, shareable tools. In this hands-on workshop, you’ll learn: R packages with usethis & devtools; Testing with testthat ...',
    image: Icon3,
    url: 'https://edgar-treischl.github.io/slidesRPackages/',
    topics: [],
  },
  {
    id: '4',
    title: 'EBF Slides',
    description: 'I held my lecture “educational empirical research” several times online, inspect the materials on the lecture website.',
    image: Icon4,
    url: 'https://edgar-treischl.github.io/EBF/',
    topics: [],
  },
  {
    id: '5',
    title: 'R Programming',
    description: 'Do not repeat yourself, learn how to programm with R. The slides introduces to main concepts ...',
    image: Icon5,
    url: 'https://edgar-treischl.github.io/slidesProgramming/#1',
    topics: [],
  },
]
