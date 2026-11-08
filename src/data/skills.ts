import type { IconType } from 'react-icons'
import { FiDatabase, FiLayers, FiSmartphone, FiTarget, FiTool, FiZap } from 'react-icons/fi'
import { SiDart, SiFirebase, SiFigma, SiFlutter, SiGit } from 'react-icons/si'

export interface Skill {
  name: string
  category: 'App development' | 'Architecture & interface' | 'Integrations & workflow'
  icon: IconType
  color: string
  blurb: string
}

export const skills: Skill[] = [
  {
    name: 'Flutter',
    category: 'App development',
    icon: SiFlutter,
    color: '#49DDE4',
    blurb: 'Cross-platform mobile apps for Android and iOS.',
  },
  {
    name: 'Dart & OOP',
    category: 'App development',
    icon: SiDart,
    color: '#ABA6A3',
    blurb: 'Object-oriented Dart with practical app structure.',
  },
  {
    name: 'Android Native',
    category: 'App development',
    icon: FiSmartphone,
    color: '#C15846',
    blurb: 'Mobile-first thinking across Flutter and native Android.',
  },
  {
    name: 'Clean Architecture',
    category: 'Architecture & interface',
    icon: FiLayers,
    color: '#49DDE4',
    blurb: 'Organized, maintainable code that can grow with the product.',
  },
  {
    name: 'State Management',
    category: 'Architecture & interface',
    icon: FiTarget,
    color: '#ABA6A3',
    blurb: 'Clear app state and predictable interaction flows.',
  },
  {
    name: 'Responsive UI',
    category: 'Architecture & interface',
    icon: FiZap,
    color: '#C15846',
    blurb: 'Thoughtful layouts and reusable custom widgets.',
  },
  {
    name: 'Firebase',
    category: 'Integrations & workflow',
    icon: SiFirebase,
    color: '#49DDE4',
    blurb: 'Authentication and cloud-backed app features.',
  },
  {
    name: 'REST APIs',
    category: 'Integrations & workflow',
    icon: FiTool,
    color: '#ABA6A3',
    blurb: 'Connect apps to external services and live data.',
  },
  {
    name: 'Database & local storage',
    category: 'Integrations & workflow',
    icon: FiDatabase,
    color: '#C15846',
    blurb: 'Firestore, local storage, and form validation.',
  },
  {
    name: 'Git & GitHub',
    category: 'Integrations & workflow',
    icon: SiGit,
    color: '#49DDE4',
    blurb: 'Version control and collaborative development.',
  },
  {
    name: 'Figma to Flutter',
    category: 'Integrations & workflow',
    icon: SiFigma,
    color: '#ABA6A3',
    blurb: 'Translate interface designs into working mobile screens.',
  },
]

export const skillCategories = [
  'App development',
  'Architecture & interface',
  'Integrations & workflow',
] as const
