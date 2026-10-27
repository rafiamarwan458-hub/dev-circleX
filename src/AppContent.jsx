import { useEffect, useState } from "react";
import { Footer, ImagePlaceholder } from "./Pages.jsx";

const assetUrl = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

const faqs = [
  [
    "What can Dev CircleX help us with?",
    "We combine custom Liquid development, ecommerce UX, integrations and performance work rather than treating Shopify as only a theme-installation platform.",
  ],
  [
    "Can you redesign an existing Shopify store?",
    "Yes. We can work from an existing theme, rebuild key sections, improve conversion paths, or create a full custom storefront depending on the scope.",
  ],
  [
    "Do you build custom Shopify sections and features?",
    "Yes. Product logic, subscriptions, bundles, custom sections, integrations, CRO features, cart behavior and responsive theme development are all within scope.",
  ],
  [
    "Can we work with you from another country?",
    "Yes. Dev CircleX can support international storefronts, responsive builds, localization setups and ongoing development workflows.",
  ],
  [
    "Can you support the store after launch?",
    "Yes. Ongoing improvements, maintenance, CRO iterations and feature development can continue after launch.",
  ],
];

function Brand() {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <b>X</b>
        <i />
      </span>
      <span className="brand-word">
        DEV CIRCLE<span className="brand-x">X</span>
      </span>
    </span>
  );
}

function Header({ menuOpen, setMenuOpen, theme, setTheme }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <>
      <header className="site-header" data-header>
        <a href="/" aria-label="Dev CircleX home">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          <a className="active" href="/">
            HOME
          </a>
          <div
            className={`nav-item nav-services ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <a
              className="nav-services-trigger"
              href="/services"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              SERVICES
            </a>
            <div className="services-mega" aria-label="Services menu">
              <div className="services-mega-panel">
                <div className="services-mega-copy">
                  <span className="services-mega-eyebrow">WHAT WE DO</span>
                  <a className="service-mega-link" href="/shopify-development">
                    <span className="service-mega-number">01</span>
                    <span className="service-mega-title">
                      SHOPIFY DEVELOPMENT
                    </span>
                    <span className="service-mega-arrow">↗</span>
                  </a>
                  <a className="service-mega-link" href="/seo">
                    <span className="service-mega-number">02</span>
                    <span className="service-mega-title">SEO</span>
                    <span className="service-mega-arrow">↗</span>
                  </a>
                </div>
                <div className="services-mega-art" aria-hidden="true">
                  <div className="mega-orbit mega-orbit-a" />
                  <div className="mega-orbit mega-orbit-b" />
                  <div className="mega-x">X</div>
                  <span className="mega-ray ray-a" />
                  <span className="mega-ray ray-b" />
                  <span className="mega-ray ray-c" />
                </div>
              </div>
            </div>
          </div>
          <a href="/about">ABOUT</a>
          <a href="/portfolio">PORTFOLIO</a>
          <a href="/contact">CONTACT</a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            aria-pressed={theme === "light"}
            aria-label={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="theme-toggle-track" aria-hidden="true">
              <span className="theme-toggle-icon moon">
                <svg viewBox="0 0 24 24">
                  <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
                </svg>
              </span>
              <span className="theme-toggle-icon sun">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3.4" />
                  <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
                </svg>
              </span>
            </span>
            <span className="theme-toggle-thumb" aria-hidden="true" />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${menuOpen ? "open" : ""}`} data-mobile-nav>
        <a href="/" onClick={() => setMenuOpen(false)}>
          HOME
        </a>
        <div className="mobile-services">
          <span>SERVICES</span>
          <a href="/shopify-development" onClick={() => setMenuOpen(false)}>
            SHOPIFY DEVELOPMENT
          </a>
          <a href="/seo" onClick={() => setMenuOpen(false)}>
            SEO
          </a>
        </div>
        <a href="/about" onClick={() => setMenuOpen(false)}>
          ABOUT
        </a>
        <a href="/portfolio" onClick={() => setMenuOpen(false)}>
          PORTFOLIO
        </a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>
          CONTACT
        </a>
      </div>
    </>
  );
}

function PhoneShowcase() {
  return (
    <div className="hero-devices">
      <img src={assetUrl("/images/pages-images/home-mobile-hero.png")} alt="Mobile Hero" />
    </div>
  );
}

function Portfolio() {
  const projects = [
    {
      projectClass: "project-a",
      name: "ALCAMI",
      title: "WELLNESS,\nMADE CLEAR.",
      category: "HEALTH & WELLNESS",
      slug: "alcami",
      image: assetUrl("/images/pages-images/banner-alcami.png"),
    },
    {
      projectClass: "project-b",
      name: "BAJAFARM",
      title: "FRESH FROM\nTHE SOURCE.",
      category: "FOOD & BEVERAGE",
      slug: "bajafarm",
      image: assetUrl("/images/pages-images/banner-bajafarm.png"),
    },
    {
      projectClass: "project-c",
      name: "COREEX",
      title: "COMFORT,\nCONSIDERED.",
      category: "ACTIVEWEAR",
      slug: "coreex",
      image: "/images/pages-images/banner-coreex.png",
    },
    {
      projectClass: "project-d",
      name: "GLOWHOLIC",
      title: "CARE,\nMADE CLEAR.",
      category: "SKINCARE & BEAUTY",
      slug: "glowholic",
      image: assetUrl("/images/pages-images/banner-glowholic.png"),
    },
  ];
  return (
    <section className="portfolio" id="portfolio">
      {projects.map(({ projectClass, name, title, category, slug, image }, index) => (
        <a
          className={`project-card ${projectClass} work-card reveal`}
          href={`/case-study?case=${slug}`}
          data-case-slug={slug}
          key={slug}
          aria-label={`View ${name} case study`}
        >
          <div className="project-card-inner">
            <div className="project-visual project-has-placeholder">
              {image ? (
                <img className="project-image" src={image} alt={`${name} project`} />
              ) : (
                <ImagePlaceholder label={`Add image: ${name} project`} />
              )}
            </div>
            <div className="project-copy">
              <h2>
                {title.split("\n").map((line, lineIndex) => (
                  <span
                    className={index === 3 && lineIndex === 1 ? "outline" : ""}
                    key={line}
                  >
                    {line}
                  </span>
                ))}
              </h2>
              <div className="project-meta">
                <div>
                  <small>{category}</small>
                  <b>{name}</b>
                  <span>Shopify development</span>
                </div>
                <span className="project-action">
                  <small>0{index + 1} / 05</small>
                  <b>VIEW PROJECT <i aria-hidden="true">—</i></b>
                </span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("devcirclex-theme") === "light" ? "light" : "dark",
  );
  const [faqOpen, setFaqOpen] = useState(null);
  const sendWhatsAppMessage = (message) => {
    window.location.assign(
      `https://wa.me/923007443277?text=${encodeURIComponent(message)}`,
    );
  };

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("devcirclex-theme", theme);
  }, [theme]);
  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => revealObserver.observe(element));
    const onScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 72);
      document
        .querySelectorAll(".project-card")
        .forEach((card, index) =>
          card.style.setProperty(
            "--card-top",
            `${(window.innerWidth <= 767 ? 78 : window.innerWidth <= 1000 ? 86 : 92) + index * (window.innerWidth <= 767 ? 12 : 18)}px`,
          ),
        );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="home-page">
      <div className="page-grid" aria-hidden="true" />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <section className="hero" id="home">
          <div className="hero-noise" aria-hidden="true" />
          <div className="hero-copy reveal is-visible">
            <span className="hero-eyebrow">SHOPIFY DEVELOPMENT &amp; SEO</span>
            <h1>
              <span>SHOPIFY</span>
              <span>THAT</span>
              <span className="outline">WORKS.</span>
            </h1>
            <p>
              Shopify development and SEO for brands ready to improve how customers shop, how their store runs and how people find them.
            </p>
            <a className="text-link" href="/contact">
              START A PROJECT
            </a>
          </div>
          <PhoneShowcase />
        </section>
        <section
          className="agency-statement reveal"
          aria-label="Dev CircleX Shopify agency positioning"
        >
          <p>
            We connect Shopify development and SEO to make your store easier
            to shop and easier to find, with the flexibility to keep improving
            as your business grows.
          </p>
        </section>
        <Portfolio />
        <section className="shopping-section reveal">
          <h2>
            BUILT AROUND
            <br />
            <span className="outline-inline">REAL SHOPPING.</span>
          </h2>
          <div className="shopping-pillars">
            {[
              "Product discovery",
              "Clear product pages",
              "Custom features",
              "Mobile shopping",
              "Search visibility",
              "Ongoing development",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>
        <section className="split-section journey" id="services">
          <div className="split-media reveal">
            <img src={assetUrl("/images/pages-images/product-journey.png")} alt="Product Journey" />
          </div>
          <div className="split-copy reveal">
            <span className="section-eyebrow">FROM FIRST LOOK TO CHECKOUT</span>
            <h2>
              MAKE THE
              <br />
              NEXT STEP
              <br />
              <span>FEEL OBVIOUS.</span>
            </h2>
            <p>
              Customers arrive with questions. Is this the right product? What
              are the options? What happens next?
            </p>
            <p>We organize the experience around those decisions, connecting navigation, product information and purchase controls so customers move through your store with confidence.</p>
            <a className="text-link" href="/about">
              EXPLORE OUR APPROACH
            </a>
          </div>
        </section>
        <section className="split-section passion" id="about">
          <div className="split-copy reveal">
            <span className="section-eyebrow">THE WAY WE WORK</span>
            <h2>
              CARE IN
              <br />
              <span>THE DETAILS.</span>
            </h2>
            <p>
              The small things shape how a store feels: a useful filter, a
              clear size selector, a product page that answers the next
              question.
            </p>
            <p>
              We give those details the same attention as the bigger design
              decisions, while building a store your team can manage after
              launch.
            </p>
            <a className="text-link" href="/about">
              ABOUT DEV CIRCLEX
            </a>
          </div>
          <div className="split-media reveal">
            <img src={assetUrl("/images/pages-images/detail-components.png")} alt="studio process" />
          </div>
        </section>
        <section className="testimonial-section work-style-section">
          <div className="testimonial-copy reveal">
            <span className="section-eyebrow">WHAT YOU CAN EXPECT</span>
            <h2>
              KNOW WHAT&apos;S
              <br />
              <span>HAPPENING.</span>
              <br />
              AND WHY.
            </h2>
            <p>
              You should know what is being built, what needs your input and
              what comes next. We keep priorities visible and explain technical
              decisions in plain language, so feedback can move the work
              forward.
            </p>
            <a className="text-link" href="/about">
              HOW WE WORK
            </a>
          </div>
          <div className="testimonial-gallery reveal">
            <img src={assetUrl("/images/pages-images/connected-work.png")} alt="Studio details" />
          </div>
        </section>
        <section className="faq-section reveal">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article
                className={`faq-item ${faqOpen === index ? "open" : ""}`}
                key={question}
              >
                <button
                  type="button"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span>{question}</span>
                  <i>⌄</i>
                </button>
                <div className="faq-answer">
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-inner reveal">
            <div className="contact-heading">
              <small>START A PROJECT</small>
              <h2>
                WHAT DOES
                <br />
                <span>YOUR STORE</span>
                <br />
                NEED NEXT?
              </h2>
              <p>Tell us what you are trying to achieve and where you need help.</p>
              <p className="whatsapp-contact">
                Or contact us on
                <br />
                WhatsApp:{" "}
                <a
                  href="https://wa.me/923007443277"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +92 300 7443277
                </a>
              </p>
            </div>
            <form
              className="scope-form"
              onSubmit={(event) => {
                event.preventDefault();
                const fields = new FormData(event.currentTarget);
                sendWhatsAppMessage(
                  [
                    "Hello, I would like to discuss a project.",
                    `Name: ${fields.get("name")}`,
                    `Email: ${fields.get("email")}`,
                    `Service: ${fields.get("service")}`,
                    `Website: ${fields.get("website") || "Not provided"}`,
                    `Project details: ${fields.get("details")}`,
                  ].join("\n"),
                );
              }}
            >
              <div className="form-row">
                <label>
                  NAME
                  <input name="name" type="text" placeholder="Your name" required />
                </label>
                <label>
                  EMAIL
                  <input
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  SERVICE
                  <select name="service" defaultValue="" required>
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Shopify Development</option>
                    <option>Store Redesign</option>
                    <option>Custom Features</option>
                    <option>Ongoing Support</option>
                  </select>
                </label>
                <label>
                  WEBSITE
                  <input name="website" type="url" placeholder="https://" />
                </label>
              </div>
              <label>
                PROJECT DETAILS
                <textarea
                  name="details"
                  rows="5"
                  placeholder="Tell us about the project"
                  required
                />
              </label>
              <button className="submit-btn" type="submit">
              SEND YOUR BRIEF <span>↗</span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer
        notesPage
        onSubscribe={(email) =>
          sendWhatsAppMessage(
            `Please add ${email} to your notes for a better store mailing list.`,
          )
        }
      />
    </div>
  );
}

export default AppContent;
