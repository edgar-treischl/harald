import { projects as rawSlides } from './slidesData'

export interface Slide {
  id: string
  title: string
  description: string
  image: string
  url?: string
  topics: string[]
}

const sortByTitle = (a: Slide, b: Slide) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })

export const slideCatalog: Slide[] = [...rawSlides].sort(sortByTitle)
