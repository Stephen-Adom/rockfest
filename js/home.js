const homePage = () => `<section id="headline" class="headline">
<div class="container">
  <h5 class="headline-subtitle">"Be a Part of Musical History!"</h5>
  <h1 class="headline-title fw-bolder">
    THE BIGGEST MUSIC EVENT OF THE YEAR
  </h1>

  <div class="event-summary card border border-4">
    <div class="card-body p-3 fw-semibold">
      The biggest music event in decades. Attended by more than 100
      musicians from all over the world. Get your ticket now!
    </div>
  </div>

  <p class="event-date fw-bolder mt-3 mb-1">
    2023.02.23(THU) ~ 28(TUE)
  </p>
  <p class="event-venue">
    @ Allegiant Stadium, Las Vegas, United States
  </p>
</div>
</section>

<section id="program" class="main-program">
<div class="container py-5 px-2">
  <h1
    class="program-section-title section-title text-white text-center"
  >
    Main Program
  </h1>

  <div
    class="program-content d-flex flex-column flex-sm-column flex-md-column flex-lg-row align-items-center flex-column gap-2 gap-lg-1"
  ></div>

  <div class="program-action text-center">
    <a
      href="#"
      type="button"
      class="join_program_btn w-76 py-4 px-4 d-block d-sm-block d-md-block d-lg-none d-xl-none"
    >
      Join CC Global Summit 2015
    </a>
    <a
      href="#"
      type="button"
      class="w-76 py-4 px-4 d-none d-sm-none d-md-none d-lg-block d-xl-block see_all_program_btn"
    >
      SEE THE WHOLE PROGRAM
    </a>
  </div>
</div>
</section>

<section id="speakers" class="bg-white">
<div class="container py-5 px-2">
  <h1 class="speaker-section-title section-title text-center fw-bold">
    Featured Artists
  </h1>

  <div class="speakers-content">
    <div class="row">
      <div class="col-12 col-sm-12 col-md-12 col-lg-6">
        <div class="speaker-card card">
          <div
            class="card-body d-flex align-items-start gap-3 gap-lg-4 px-1"
          >
            <div class="image-container"></div>
            <div class="speaker-info">
              <h6 class="speaker-name fw-bolder">Yochai Benkler</h6>
              <p class="speaker-job-title fst-italic">
                Berkman Professor of Enterpreneurial Legal Studies at
                Harvard Law School
              </p>

              <p class="work-description mb-0">
                Benkler studies common-based peer production and
                published his seminal book The Wealth of Network in 2006
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div
      class="show-more-button w-100 d-grid mt-4 d-block d-sm-block d-md-block d-lg-none d-xl-none"
    >
      <button
        type="button"
        title="show more"
        class="btn btn-outline-secondary btn-block py-2 w-100 d-flex align-items-center justify-content-center gap-1"
      >
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
        </svg>
      </button>
    </div>
  </div>
</div>
</section>

<section id="partners">
<div class="container py-5 px-0">
  <h1
    class="partner-section-title section-title text-white text-center fw-bold"
  >
    Partner
  </h1>

  <div
    class="partners-content d-flex align-items-center justify-content-center flex-wrap gap-4 gap-lg-5 mt-5"
  >
    <div class="partner-card">
      <img src="assets/images/mozilla.png" width="100%" alt="mozilla" />
    </div>
    <div class="partner-card">
      <img src="assets/images/google.png" width="100%" alt="google" />
    </div>
    <div class="partner-card">
      <img src="assets/images/naver.png" width="100%" alt="naver" />
    </div>
    <div class="partner-card">
      <img src="assets/images/kakao1.png" width="100%" alt="kakao" />
    </div>
    <div class="partner-card">
      <img src="assets/images/airbnb.png" width="100%" alt="airbnb" />
    </div>
  </div>
</div>
</section>

<footer id="footer">
<div
  class="container py-5 px-0 d-flex align-items-center justify-content-between justify-content-sm-between justify-content-md-between justify-content-lg-start gap-lg-5"
>
  <div
    class="logo d-flex align-items-center justify-content-center gap-1"
  >
    <img
      src="assets/images/rock_fest_logo.jpg"
      width="55px"
      alt="rock fest"
    />
    <h5 class="logo-name">
      rock<span class="logo-name-orange">fest</span>
    </h5>
  </div>
  <div
    class="d-flex align-items-start align-items-sm-start align-items-md-center align-items-lg-center flex-column flex-sm-column flex-md-row flex-lg-row gap-lg-2"
  >
    <p>2023 Rockfest by Designesia.</p>
    <p>Some Rights Reserved.</p>
  </div>
</div>
</footer>

`;

export default homePage;
