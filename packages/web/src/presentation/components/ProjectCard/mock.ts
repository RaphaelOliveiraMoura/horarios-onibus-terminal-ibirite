import { ProjectCardProps } from '.'

export default {
  profile: {
    picture:
      'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
  },
  project: {
    id: '1',
    liked: false,
    title: 'Calculadora em Python',
    description:
      'Projeto desenvolvido para aprender conceitos básicos da linguagem python.',
    lastUpdate: '12min atrás',
    picture:
      'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4',
    techs: [
      { id: '1', name: 'Javascript' },
      { id: '2', name: 'NextJS' }
    ],
    comments: [
      {
        id: '1',
        text: 'Ótimo projeto, muito interessante',
        profile: {
          picture:
            'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
        },
        replies: [
          {
            id: '1',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          },
          {
            id: '2',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          }
        ],
        liked: false
      },
      {
        id: '2',
        text: 'Ótimo projeto, muito interessante',
        profile: {
          picture:
            'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
        },
        replies: [],
        liked: false
      },
      {
        id: '3',
        text: 'Ótimo projeto, muito interessante',
        profile: {
          picture:
            'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
        },
        replies: [
          {
            id: '1',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          },
          {
            id: '2',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          },
          {
            id: '3',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          },
          {
            id: '4',
            text: 'Ótimo projeto, muito interessante',
            profile: {
              picture:
                'https://avatars.githubusercontent.com/u/3603793?s=460&u=c6b825c85da562a7c915289087dab96783a808a4&v=4'
            },
            liked: false
          }
        ],
        liked: false
      }
    ]
  }
} as ProjectCardProps
