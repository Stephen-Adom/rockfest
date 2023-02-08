import homePage from './home.js';
import aboutPage from './about.js';

const main = document.querySelector('#main');
const scrollToTopBtn = document.querySelector('.scroll_to_top');
const navbar = document.querySelector('.navbar.navbar-expand-lg');
const navbarBrand = document.querySelector('.navbar-brand');
const navbarLinksContent = document.querySelector('.navbar .navbar-nav');
const offcanvas = document.querySelector('.offcanvas');
const offCanvasBody = document.querySelector('.offcanvas-body .list-group');

// START:: SITE VARABLES
const navigationLinks = [
  {
    label: 'About',
    url: '#about',
    layout: aboutPage(),
  },
  {
    label: 'Program',
    url: '#program',
  },
  {
    label: 'Join',
    url: '#join',
  },
  {
    label: 'Sponsor',
    url: '#sponsor',
  },
  {
    label: 'News',
    url: '#news',
  },
];

const speakers = [
  {
    name: 'Yochai Benkler',
    jobTitle:
      'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    accomplishment:
      'Benkler studies common-based peer production and published his seminal book The Wealth of Network in 2006',
    image: 'speaker_01.png',
  },
  {
    name: 'Kilnam Chon',
    jobTitle: '',
    accomplishment:
      "Kilnam Chon helped bring the internet to Asia and is an outspoken advoate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the internet Society's(ISOC) Internet Hall of Fame",
    image: 'speaker_02.png',
  },
  {
    name: 'SohYeong Noh',
    jobTitle: 'Director of Art Centre Nabi and a board member of CC Korea',
    accomplishment:
      'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities and the arts.',
    image: 'speaker_03.png',
  },
  {
    name: 'Julia Leda',
    jobTitle: 'President of Young Pirates of Europe',
    accomplishment:
      "European ingetration, political democracy and participation of youth through online as her major condem. Reda's report outlining potential changes to EU copyright law was approved by the Parliament in July",
    image: 'speaker_04.png',
  },
  {
    name: 'Lila Tretikov',
    jobTitle: 'Executive Director of the Wikimedia Foundation',
    accomplishment:
      'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipeda. Wikipedia is freely available in 290 language and used by nearly half a billion people around the world every month',
    image: 'speaker_05.png',
  },
  {
    name: 'Ryan Merkley',
    jobTitle: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    accomplishment:
      'Ryan had been leading open-source project at the Mozilla Foundation such as the open source movement.',
    image: 'speaker_06.png',
  },
];

const programs = [
  {
    title: 'Lecture',
    description:
      'Listen to the speakers from various countries about the messages of sharing and opening.',
    icon: 'program_icon_01.png',
  },
  {
    title: 'CC Exhibition',
    description:
      'Appreciate various creations applying CC license of artists, organized from Art Center Nabi.',
    icon: 'program_icon_02.png',
  },
  {
    title: 'Forum',
    description:
      'Have the time to share your thoughts and opinions with experts for each topic.',
    icon: 'program_icon_03.png',
  },
  {
    title: 'Workshop',
    description:
      'Try creating your own work using open source license rather than just watching.',
    icon: 'program_icon_04.png',
  },
  {
    title: 'CC Ignite',
    description:
      'Get opportunities to network with CC affiliates around the world, also after the summit.',
    icon: 'program_icon_05.png',
  },
];

// END:: SITE VARABLES

function renderNavigationLinks() {
  let navHtml = '';

  navigationLinks.forEach((link) => {
    navHtml += `
    <li class="nav-item">
      <a class="nav-link" href="${link.url}">${link.label}</a>
    </li>
    `;
  });

  navbarLinksContent.innerHTML = navHtml;
}

function renderSidebarNavigationLinks() {
  let navHtml = '';

  navigationLinks.forEach((link) => {
    navHtml += `
    <li class="list-group-item">
      <a href="${link.url}" data-bs-dismiss="offcanvas">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>

        ${link.label}
      </a>
    </li>
    `;
  });

  offCanvasBody.innerHTML = navHtml;
}

function initializeSpeakersDisplay() {
  const speakersContent = document.querySelector('.speakers-content .row');

  let speakersHtml = '';

  if (window.innerWidth > 575) {
    speakers.forEach((speaker) => {
      speakersHtml += `
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="speaker-card card">
          <div
            class="card-body d-flex align-items-start gap-3 gap-lg-4 px-1"
          >
            <div class="image-container" style="background-image: url('./assets/images/users/${speaker.image}');"></div>
            <div class="speaker-info">
              <h6 class="speaker-name fw-bolder">${speaker.name}</h6>
              <p class="speaker-job-title fst-italic">
              ${speaker.jobTitle}
              </p>
  
              <p class="work-description mb-0">
              ${speaker.accomplishment}
              </p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  } else {
    speakers.slice(0, 2).forEach((speaker) => {
      speakersHtml += `
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="speaker-card card">
          <div
            class="card-body d-flex align-items-start gap-3 gap-lg-4 px-1"
          >
            <div class="image-container" style="background-image: url('./assets/images/users/${speaker.image}');"></div>
            <div class="speaker-info">
              <h6 class="speaker-name fw-bolder">${speaker.name}</h6>
              <p class="speaker-job-title fst-italic">
              ${speaker.jobTitle}
              </p>
  
              <p class="work-description mb-0">
              ${speaker.accomplishment}
              </p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  }

  speakersContent.innerHTML = speakersHtml;
}

function renderPrograms() {
  const programContent = document.querySelector('.program-content');

  let programHtml = '';
  programs.forEach((program) => {
    programHtml += `
    <div class="program-info card w-100">
      <div
        class="card-body d-flex flex-row flex-sm-row flex-md-row flex-lg-column justify-content-lg-center align-items-center"
      >
        <img
          src="./assets/images/${program.icon}"
          alt="${program.icon}"
        />
        <h6 class="program-title fw-bold mb-0">${program.title}</h6>
        <p class="program-description mb-0">
        ${program.description}
        </p>
      </div>
    </div>
    `;
  });

  programContent.innerHTML = programHtml;
}

function showMoreLessSpeakers(type) {
  const speakersContent = document.querySelector('.speakers-content .row');

  let speakersHtml = '';
  if (type === 'more') {
    speakers.forEach((speaker) => {
      speakersHtml += `
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="speaker-card card">
          <div
            class="card-body d-flex align-items-start gap-3 gap-lg-4 px-1"
          >
            <div class="image-container" style="background-image: url('./assets/images/users/${speaker.image}');"></div>
            <div class="speaker-info">
              <h6 class="speaker-name fw-bolder">${speaker.name}</h6>
              <p class="speaker-job-title fst-italic">
              ${speaker.jobTitle}
              </p>
  
              <p class="work-description mb-0">
              ${speaker.accomplishment}
              </p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  } else {
    speakers.slice(0, 2).forEach((speaker) => {
      speakersHtml += `
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="speaker-card card">
          <div
            class="card-body d-flex align-items-start gap-3 gap-lg-4 px-1"
          >
            <div class="image-container" style="background-image: url('./assets/images/users/${speaker.image}');"></div>
            <div class="speaker-info">
              <h6 class="speaker-name fw-bolder">${speaker.name}</h6>
              <p class="speaker-job-title fst-italic">
              ${speaker.jobTitle}
              </p>
  
              <p class="work-description mb-0">
              ${speaker.accomplishment}
              </p>
            </div>
          </div>
        </div>
      </div>
      `;
    });
  }

  speakersContent.innerHTML = speakersHtml;
}

function updateButtonContent(showMoreBtn, type) {
  if (type === 'more') {
    showMoreBtn.innerHTML = `
    LESS
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
`;
  } else {
    showMoreBtn.innerHTML = `
    MORE
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-2 h-2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>`;
  }
}

function showMoreSpeakersEvent() {
  const showMoreBtn = document.querySelector('.show-more-button button');

  showMoreBtn.addEventListener('click', () => {
    const speakerCards = document.querySelectorAll('.speaker-card');
    if (Array.from(speakerCards).length !== speakers.length) {
      showMoreLessSpeakers('more');
      updateButtonContent(showMoreBtn, 'more');
    } else {
      showMoreLessSpeakers('less');
      updateButtonContent(showMoreBtn, 'less');
    }
  });
}

function removeActiveClassToNavlinks() {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-item');

  navLinks.forEach((navLink) => {
    navLink.children[0].classList.remove('active');
  });
}

function saveCurrentPageInSession(route) {
  sessionStorage.setItem('route', route);
}

function loadHomePage() {
  main.innerHTML = homePage();
  removeActiveClassToNavlinks();
  saveCurrentPageInSession('#');

  setTimeout(() => {
    renderPrograms();
    initializeSpeakersDisplay();
    showMoreSpeakersEvent();
  }, 600);
}

function navigateToPage(element) {
  const href = element.getAttribute('href');
  const navLinkInfo = navigationLinks.find((link) => link.url === href);
  saveCurrentPageInSession(href);

  if (navLinkInfo && 'layout' in navLinkInfo) {
    main.innerHTML = navLinkInfo.layout;
    removeActiveClassToNavlinks();
    element.classList.add('active');
  }
}

(function initialise() {
  renderNavigationLinks();
  renderSidebarNavigationLinks();

  if (
    !sessionStorage.getItem('route')
    || sessionStorage.getItem('route') === '#'
  ) {
    loadHomePage();
  } else {
    const navLinkInfo = navigationLinks.find(
      (link) => link.url === sessionStorage.getItem('route'),
    );
    if (navLinkInfo && 'layout' in navLinkInfo) {
      main.innerHTML = navLinkInfo.layout;
      removeActiveClassToNavlinks();
    }
  }
}());

navbar.addEventListener('click', (e) => {
  if (e.target.matches('li a')) {
    navigateToPage(e.target);
  } else if (
    e.target.matches('a div h5')
    || e.target.matches('a div h5 span')
    || e.target.matches('a div img')
  ) {
    loadHomePage();
  }
});

offcanvas.addEventListener('click', (e) => {
  if (
    e.target.matches('a img')
    || e.target.matches('a h5')
    || e.target.matches('a h5 span')
  ) {
    loadHomePage();
  } else if (e.target.matches('li a')) {
    navigateToPage(e.target);
  }
});

// Event listener for scroll_to_top button
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    scrollToTopBtn.classList.remove('hide');
    navbar.classList.add('active');
    navbarBrand.classList.remove('d-none');
  } else {
    scrollToTopBtn.classList.add('hide');
    navbar.classList.remove('active');
    navbarBrand.classList.add('d-none');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
