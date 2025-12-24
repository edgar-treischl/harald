// src/data/slidesData.d.ts

export interface Slide {
  id: string
  title: string
  description: string
  image: string
  url?: string
  topics: string[]
}

export const projects: Slide[]
