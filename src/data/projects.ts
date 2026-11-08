import calculator from '../assets/images/ali-emad/calculator.jpg'
import contacts from '../assets/images/ali-emad/contacts.jpg'
import evently from '../assets/images/ali-emad/evently.jpg'
import islami from '../assets/images/ali-emad/islami.jpg'
import movies from '../assets/images/ali-emad/movies.jpg'
import news from '../assets/images/ali-emad/news.jpg'
import space from '../assets/images/ali-emad/space.jpg'
import tictactoe from '../assets/images/ali-emad/tictactoe.jpg'

export interface Project {
  no: string
  title: string
  description: string
  tags: string[]
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    no: '01',
    title: 'Islami',
    description:
      'An everyday Islamic companion with Quran reading, search and last-read progress, Hadith, digital Tasbeeh, reciters, radio, prayer times, and daily Azkar.',
    tags: ['Flutter', 'Dart', 'REST API', 'Custom widgets'],
    image: islami,
    featured: true,
  },
  {
    no: '02',
    title: 'Evently',
    description:
      'A personal event planner for creating, editing, favoriting, and organizing events, with Arabic and English plus light and dark themes.',
    tags: ['Flutter', 'Firebase', 'Cloud Firestore', 'Localization'],
    image: evently,
  },
  {
    no: '03',
    title: 'News',
    description:
      'A bilingual news reader for browsing world stories by category, searching headlines, and choosing a comfortable language and theme.',
    tags: ['Flutter', 'Dio API', 'Arabic + English', 'Dark mode'],
    image: news,
  },
  {
    no: '04',
    title: 'Movies',
    description:
      'A movie discovery experience with genre browsing, search, ratings, release dates, watchlists, viewing history, and profile management.',
    tags: ['Flutter', 'REST API', 'Firebase Auth', 'Watchlist'],
    image: movies,
  },
  {
    no: '05',
    title: 'Space',
    description:
      'An interactive tour of the solar system, pairing planet facts with immersive 3D models and an easy-to-explore mobile interface.',
    tags: ['Flutter', 'Dart', '3D models', 'Responsive UI'],
    image: space,
  },
  {
    no: '06',
    title: 'Contacts',
    description:
      'A simple contact manager for adding, editing, removing, and finding saved contacts, with form validation and local storage.',
    tags: ['Flutter', 'CRUD', 'Local storage', 'Validation'],
    image: contacts,
  },
  {
    no: '07',
    title: 'Tic-Tac-Toe',
    description:
      'A two-player X/O game with turn-based play, automatic winner and draw detection, and clear feedback on every move.',
    tags: ['Flutter', 'Dart', 'Game logic', 'Custom widgets'],
    image: tictactoe,
  },
  {
    no: '08',
    title: 'Calculator',
    description:
      'A focused calculator for everyday arithmetic, with a clean keypad, responsive layout, and clear handling of invalid operations.',
    tags: ['Flutter', 'Dart', 'Math logic', 'Responsive UI'],
    image: calculator,
  },
]
