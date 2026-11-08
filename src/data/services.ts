export interface Service {
  no: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    no: '01',
    title: 'Flutter app development',
    description:
      'Modern, responsive mobile applications built with a focus on performance, usability, and clean code.',
  },
  {
    no: '02',
    title: 'Figma to Flutter',
    description:
      'Turn Figma designs into responsive Flutter interfaces while preserving the original visual details.',
  },
  {
    no: '03',
    title: 'Firebase & REST APIs',
    description:
      'Connect apps to authentication, cloud data, and external APIs to create useful, reliable features.',
  },
  {
    no: '04',
    title: 'Bug fixes & UI improvements',
    description:
      'Resolve Flutter issues and refine existing screens with clearer layouts and smoother interactions.',
  },
]
