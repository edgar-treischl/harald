declare module '@/data/projects' {
  export interface Project {
    id: number | string
    title: string
    description: string
    image: string
    topics: string[]
  }

  export const projects: Project[]
}
