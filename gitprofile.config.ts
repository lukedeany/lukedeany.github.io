// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'lukedeany', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['lugatuic/MVMT-Dont-Be-Scared-2025', 'ld-uic/sparkhacks-2025-scheduler', 'lukedeany/murl-chess-minmax', 'lukedeany/sdl-project'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Various Minecraft Mods',
          description:
            'Worked with a team to port old minecraft mods to a newer version and using a newer language, while updating the user interface and fixing bugs that have been lingering for years.',
          imageUrl:
            'https://media.forgecdn.net/avatars/thumbnails/185/822/256/256/636829723898798601.png',
          link: 'https://modrinth.com/user/dataencoded',
        },
        {
          title: 'ROBLOX Medical System',
          description:
            'A medical system I created for an upcoming ROBLOX game. Probably one of the most complex systems I have created, and it interacts with a lot of other systems within the game, like the weapon system. A demo video is provided from this link.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png',
          link: 'https://www.youtube.com/watch?v=CdQjMXm2zhM',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Luke Deany', description: '', imageURL: '' },
  social: {
    linkedin: 'lukedeany',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'luke.deany3@gmail.com',
  },
  //resume: {
  //  fileUrl:
  //    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  //},
  skills: [
    'C++',
    'Java',
    'TypeScript',
    'Linux Operating System',
    'Windows Operating System',
    'Source Control',
  ],
  experiences: [
    
  ],
  certifications: [
  ],
  educations: [
    {
      institution: 'University of Illinois at Chicago',
      degree: 'Bachelors',
      from: '2024',
      to: '2026',
    },
    {
      institution: 'Waubonsee Community College',
      degree: 'Associates',
      from: '2022',
      to: '2014',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
