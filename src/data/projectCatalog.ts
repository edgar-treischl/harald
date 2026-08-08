import { projects as rawProjects } from './projects'

export type ProjectLayout = 'standard' | 'custom'

export interface ProjectRecord {
  id: string | number
  title: string
  description: string
  image: string
  link?: string
  topics: string[]
  technologies: string[]
  layout?: ProjectLayout
}

export interface Project extends ProjectRecord {
  layout: ProjectLayout
  fullImage: string
}

const normalizeProject = (project: ProjectRecord): Project => ({
  ...project,
  layout: project.layout ?? 'standard',
  fullImage: project.image,
})

const sortByTitle = (a: ProjectRecord, b: ProjectRecord) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' })

export const projectCatalog: Project[] = [...(rawProjects as ProjectRecord[])]
  .sort(sortByTitle)
  .map(normalizeProject)

export const projectTopics: string[] = [
  'All',
  ...new Set(
    projectCatalog
      .flatMap(project => project.topics)
      .sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
  ),
]

export function findProjectById(projectId: string | number | string[] | null | undefined) {
  const id = Array.isArray(projectId) ? projectId[0] : projectId

  if (id == null) {
    return undefined
  }

  return projectCatalog.find(project => String(project.id) === String(id))
}
