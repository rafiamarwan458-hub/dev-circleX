import { useEffect, useState } from "react";
import { caseStudyImages } from "./data/caseStudyImages.js";

const pageInfo = {
  "/services": ["SERVICES", "services"],
  "/about": ["ABOUT", "about"],
  "/portfolio": ["PORTFOLIO", "portfolio"],
  "/contact": ["CONTACT", "contact"],
  "/seo": ["SEO", "seo"],
  "/shopify-development": ["SHOPIFY DEVELOPMENT", "shopify"],
  "/case-study": ["CASE STUDY", "case-study"],
};

const faqs = {
  seo: [
    [
      "Do you offer SEO for Shopify stores?",
      "Yes. We can review technical health, store structure, product and collection pages, and useful content to identify the SEO work that fits your store.",
    ],
    [
      "Can SEO and Shopify development be handled together?",
      "Yes. Connecting SEO and development helps technical improvements, store structure and customer experience support the same goals.",
    ],
    [
      "Do you guarantee first-page rankings?",
      "No. Search rankings depend on many factors outside any one provider’s control. We focus on clear priorities and improvements to the technical, structural and content signals your store can influence.",
    ],
    [
      "Can we start with a one-off SEO project?",
      "Yes. We can begin with a defined audit or implementation project. Ongoing review can follow if your priorities and results call for it.",
    ],
  ],
  shopify: [
    [
      "Can you work with our existing Shopify theme?",
      "Yes. We can improve your current theme, add custom sections and functionality, or plan a rebuild if the existing structure is holding the store back.",
    ],
    [
      "Will our team be able to edit the custom sections?",
      "Yes. We build reusable, clearly structured sections so your team can manage everyday content updates in Shopify without needing to change code.",
    ],
    [
      "Can you handle subscriptions, bundles and custom product options?",
      "Yes. We can connect the right Shopify apps and build custom product logic where needed, keeping the buying experience consistent with your storefront.",
    ],
    [
      "Can you support us after launch?",
      "Yes. Ongoing development can help with new features, store improvements, maintenance and the next priorities as your business changes.",
    ],
  ],
};

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

export function ImagePlaceholder({ label, className = "" }) {
  return (
    <div
      className={`image-placeholder ${className}`.trim()}
      role="img"
      aria-label={label}
    >
      <span>{label}</span>
    </div>
  );
}

function Header({ current }) {
  const [menu, setMenu] = useState(false);
  const [services, setServices] = useState(false);
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("devcirclex-theme") === "light" ? "light" : "dark",
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("devcirclex-theme", theme);
  }, [theme]);
  const nav = (href) => (
    <a className={current === href ? "active" : ""} href={href}>
      {href === "/" ? "HOME" : href.slice(1).toUpperCase()}
    </a>
  );
  return (
    <>
      <header className="site-header" data-header>
        <a href="/" aria-label="Dev CircleX home">
          <Brand />
        </a>
        <nav className="desktop-nav" aria-label="Primary">
          {nav("/")}
          <div
            className={`nav-item nav-services ${services ? "is-open" : ""}`}
            onMouseEnter={() => setServices(true)}
            onMouseLeave={() => setServices(false)}
          >
            <a
              className={`nav-services-trigger ${current === "/services" || current === "/seo" || current === "/shopify-development" ? "active" : ""}`}
              href="/services"
              aria-haspopup="true"
              aria-expanded={services}
            >
              SERVICES
            </a>
            <div className="services-mega">
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
                <div className="services-mega-art">
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
          {nav("/about")}
          {nav("/portfolio")}
          {nav("/contact")}
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
            <span className="theme-toggle-track">
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
            <span className="theme-toggle-thumb" />
          </button>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`mobile-nav ${menu ? "open" : ""}`}>
        <a href="/" onClick={() => setMenu(false)}>
          HOME
        </a>
        <div className="mobile-services">
          <span>SERVICES</span>
          <a href="/shopify-development" onClick={() => setMenu(false)}>
            SHOPIFY DEVELOPMENT
          </a>
          <a href="/seo" onClick={() => setMenu(false)}>
            SEO
          </a>
        </div>
        <a href="/about" onClick={() => setMenu(false)}>
          ABOUT
        </a>
        <a href="/portfolio" onClick={() => setMenu(false)}>
          PORTFOLIO
        </a>
        <a href="/contact" onClick={() => setMenu(false)}>
          CONTACT
        </a>
      </div>
    </>
  );
}

export function Footer({ notesPage = false, onSubscribe }) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-lockup">
            DEV CIRCLE<span className="brand-x">X</span>
          </div>
          <p>{notesPage
            ? "Shopify development and SEO for brands that care about how their store works."
            : "Building refined ecommerce experiences and search visibility for ambitious brands."}</p>
        </div>
        <div>
          <h3>INDUSTRIES</h3>
          {[
            "Fashion",
            "Food & Beverage",
            "Cosmetics",
            "Health & Wellness",
            "Jewelry",
            "Home & Lifestyle",
          ].map((x) => (
            <a href="/portfolio" key={x}>
              {x}
            </a>
          ))}
        </div>
        <div>
          <h3>COMPANY</h3>
          <a href="/portfolio">Portfolio</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h3>SERVICES</h3>
          <a href="/shopify-development">Shopify Development</a>
          <a href="/seo">SEO</a>
        </div>
        <div className="newsletter">
          <h3>{notesPage ? "NOTES FOR A BETTER STORE." : "NEWSLETTER"}</h3>
          <p>{notesPage
            ? "Practical thoughts on Shopify, search and the details that shape a better shopping experience."
            : "Stay up to date with Shopify, ecommerce UX and organic growth."}</p>
          <form
            className="inner-newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              const email = new FormData(event.currentTarget).get("email");
              if (onSubscribe) {
                onSubscribe(email);
              } else {
                const message = `Please add ${email} to my newsletter.`;
                window.location.assign(
                  `https://wa.me/923007443277?text=${encodeURIComponent(message)}`,
                );
              }
            }}
          >
            <input
              name="email"
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              ›
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 DEV CIRCLEX</span>
        <span>SHOPIFY / SEO / ECOMMERCE</span>
      </div>
    </footer>
  );
}

export function PageShell({ current, children }) {
  useEffect(() => {
    document.body.dataset.page = current.slice(1);
    document.title = `${pageInfo[current]?.[0] || "Dev CircleX"} — Dev CircleX`;
    const onScroll = () =>
      document
        .querySelector("[data-header]")
        ?.classList.toggle("scrolled", scrollY > 72);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((x) => {
          if (x.isIntersecting) {
            x.target.classList.add("is-visible");
            observer.unobserve(x.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((x) => observer.observe(x));
    return () => {
      removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [current]);
  return (
    <>
      <div className="page-grid" aria-hidden="true" />
      <Header current={current} />
      <main className="inner-main">{children}</main>
      <Footer
        notesPage={
          current === "/services" ||
          current === "/about" ||
          current === "/contact"
        }
      />
    </>
  );
}

function Hero({ type, kicker, title, copy, art }) {
  return (
    <section className={`page-hero ${type}-hero`}>
      <div className="page-hero-copy reveal is-visible">
        <span className="page-kicker">{kicker}</span>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{copy}</p>
      </div>
      <div
        className={`page-hero-art ${art} reveal is-visible`}
        aria-hidden={type !== "portfolio"}
      >
        {type === "portfolio" ? (
          <img src="\public\images\pages-images\portfolio-fan.png" alt={title} />
        ) : (
          <img src="/images/pages-images/brand-orbit.png" alt={title} />
        )}
      </div>
    </section>
  );
}

function Process({
  seo = false,
  services = false,
  contact = false,
  shopify = false,
}) {
  const steps = contact
    ? [
        [
          "WE REVIEW YOUR BRIEF",
          "We look at your store, priorities and the details you’ve shared to understand where help is needed.",
        ],
        [
          "WE DISCUSS THE SCOPE",
          "We talk through the requirements, ask the questions that matter and identify a practical approach.",
        ],
        [
          "WE AGREE THE NEXT STEP",
          "You receive a proposed scope and next steps, including timing and cost, before deciding whether to move ahead.",
        ],
      ]
    : services
    ? [
        [
          "UNDERSTAND",
          "We review your goals, products and current store, then agree the priorities and scope before work begins.",
        ],
        [
          "BUILD",
          "We develop the agreed experience in Shopify and bring you into the decisions where your feedback matters most.",
        ],
        [
          "REFINE",
          "We check the shopping experience, resolve issues and agree the next improvements around what the store needs.",
        ],
      ]
    : shopify
    ? [
        [
          "UNDERSTAND",
          "We get to know your products, customers and current store, then agree what needs to change and what a useful launch looks like.",
        ],
        [
          "BUILD",
          "We bring the agreed design and functionality into Shopify, sharing progress and involving you in the decisions that shape the experience.",
        ],
        [
          "REFINE",
          "We review key pages and shopping flows, resolve issues and prepare your team to manage the store and plan the next improvements.",
        ],
      ]
    : seo
    ? [
        [
          "AUDIT",
          "Review your store and available search data to identify technical issues, content gaps and opportunities worth investigating.",
        ],
        [
          "MAP",
          "Connect relevant searches with the right products, collections and supporting pages. Agree priorities around your range and business goals.",
        ],
        [
          "IMPLEMENT",
          "Put the agreed changes into place across page content, technical settings and internal links, coordinating with development where needed.",
        ],
        [
          "REVIEW",
          "Monitor the pages and searches we are working on, explain what the data shows and use it to guide the next steps.",
        ],
      ]
    : [
        [
          "DISCOVER",
          "We understand the business, customer, current store and growth priorities before choosing the solution.",
        ],
        [
          "BUILD",
          "Design and development stay connected so the final experience feels intentional.",
        ],
        [
          "OPTIMIZE",
          "We refine performance, usability, conversion paths and search visibility after the core system is in place.",
        ],
      ];
  return (
    <section className="process-section reveal">
      {!contact && (
        <div className="section-label">
          {shopify ? "HOW WE WORK" : seo ? "HOW WE PRIORITISE THE WORK" : "HOW WE WORK"}
        </div>
      )}
      <h2>
        {contact ? (
          <>
            A USEFUL
            <br />
            FIRST
            <br />
            <span className="outline-inline">CONVERSATION.</span>
          </>
        ) : services ? (
          <>
            A CLEAR PLAN.
            <br />
            <span className="outline-inline">A CONNECTED BUILD.</span>
          </>
        ) : shopify ? (
          <>
            A CLEAR BRIEF.
            <br />
            <span className="outline-inline">A CONSIDERED BUILD.</span>
          </>
        ) : seo ? (
          <>
            FIX WHAT MATTERS.
            <br />
            <span className="outline-inline">BUILD FROM THERE.</span>
          </>
        ) : (
          <>
            ONE SYSTEM.
            <br />
            <span className="outline-inline">NO HANDOFF GAPS.</span>
          </>
        )}
      </h2>
      <div className={`process-grid ${seo ? "four" : ""}`}>
        {steps.map(([name, text], i) => (
          <article key={name}>
            <span>0{i + 1}</span>
            <h3>{name}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ({ kind }) {
  const [open, setOpen] = useState(null);
  return (
    <section className="faq-section reveal page-faq">
      <h2>{kind === "seo" ? "SEO FAQ" : "SHOPIFY FAQ"}</h2>
      <div className="faq-list">
        {faqs[kind].map(([q, a], i) => (
          <article className={`faq-item ${open === i ? "open" : ""}`} key={q}>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span>{q}</span>
              <i>⌄</i>
            </button>
            <div className="faq-answer">
              <p>{a}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div className="services-page">
      <Hero
        type="services"
        art="service-hero-art"
        kicker="DEV CIRCLEX / SERVICES"
        title={
          'SERVICES<br /><span class="outline">BUILT FOR</span><br />GROWTH.'
        }
        copy="Build a stronger Shopify store and help the right people find it. Two focused services, connected around your customers and your business."
      />
      <section className="agency-statement compact-statement reveal">
        <p>
          From search results to checkout, customers should find a store that
          makes sense. We connect Shopify development and SEO around that
          journey.
        </p>
      </section>
      <section className="service-showcase" id="service-list">
        <a
          className="service-feature sf-shopify reveal"
          href="/shopify-development"
        >
          <div className="service-feature-index">01</div>
          <div className="service-feature-copy">
            <small>BUILD YOUR STOREFRONT</small>
            <h2>
              SHOPIFY
              <br />
              <span>DEVELOPMENT</span>
            </h2>
            <p>
              New stores, redesigns and custom features built around how your
              customers shop. We bring product pages, collections, carts and
              integrations together in a storefront your team can keep working
              with.
            </p>
            <p className="service-feature-details">
              Custom themes and sections · Product options · Subscriptions and
              bundles · App integrations · Store improvements · Ongoing
              development
            </p>
            <b>LET&apos;S TALK SHOPIFY ↗</b>
          </div>
          <div className="service-feature-art">
            <img src="/images/pages-images/product-journey.png" alt="Shopify development" />
          </div>
        </a>
        <a className="service-feature sf-seo reveal" href="/seo">
          <div className="service-feature-index">02</div>
          <div className="service-feature-copy">
            <small>HELP CUSTOMERS FIND YOU</small>
            <h2>
              SEARCH ENGINE
              <br />
              <span>OPTIMIZATION</span>
            </h2>
            <p>
              Give your products and collections a stronger foundation in
              search. We work on technical issues, page structure, on-page
              content and internal linking, with priorities tied to your
              store&apos;s actual needs.
            </p>
            <p className="service-feature-details">
              Technical SEO · Product and collection pages · Site structure ·
              Internal linking · Content planning · Search performance reviews
            </p>
            <b>LET&apos;S TALK SEO ↗</b>
          </div>
          <div className="service-feature-art">
            <img src="/images/pages-images/search-system.png" alt="SEO service" />
          </div>
        </a>
      </section>
      <Process services />
      <CTA
        eyebrow="YOUR NEXT STORE IMPROVEMENT"
        title={
          <>
            LET&apos;S MAKE
            <br />
            <span>YOUR STORE</span>
            <br />
            <span>WORK BETTER.</span>
          </>
        }
      />
    </div>
  );
}

export function About() {
  return (
    <div className="about-page">
      <Hero
        type="about"
        art="studio-art"
        kicker="ABOUT DEV CIRCLEX"
        title={'YOUR STORE.<br /><span class="outline">OUR</span><br />FOCUS.'}
        copy="Dev CircleX is a focused Shopify development and SEO studio. We help ecommerce brands turn business needs into stores customers can understand and teams can manage."
      />
      <section className="agency-statement compact-statement reveal">
        <p>
          Good ecommerce work connects what customers need with what your
          business needs to run. Our role is to understand both, then bring them
          together in Shopify.
        </p>
      </section>
      <section className="about-story reveal">
        <div className="section-label">THE STUDIO</div>
        <div className="about-story-grid">
          <h2>
            INTO THE
            <br />
            DETAILS.
            <br />
            <span className="outline-inline">
              CLOSE TO
              <br />
              YOUR BRAND.
            </span>
          </h2>
          <div className="about-story-copy">
            <p>
              We look at the whole store: how customers find products, what
              they need to know before buying and what your team needs to keep
              things running.
            </p>
            <p>
              That means making useful choices, explaining the trade-offs and
              giving the important details the attention they deserve. The aim
              is a store that serves your business beyond the first launch.
            </p>
          </div>
        </div>
      </section>
      <section className="principles-section" id="principles">
        <div className="section-heading reveal">
          <small>WHAT GUIDES THE WORK</small>
          <h2>
            FOUR PRINCIPLES.
            <br />
            <span className="outline-inline">ONE STANDARD.</span>
          </h2>
        </div>
        <div className="principle-grid">
          {[
            [
              "START WITH THE CUSTOMER",
              "Build around the questions people need answered and the actions they need to take.",
            ],
            [
              "MAKE IT USEFUL",
              "Give the team behind the store practical control over content, products and day-to-day changes.",
            ],
            [
              "GET THE DETAILS RIGHT",
              "Treat mobile layouts, product options, loading behaviour and small interactions as part of the core experience.",
            ],
            [
              "LEAVE ROOM TO IMPROVE",
              "Build with changing products, new priorities and future development in mind.",
            ],
          ].map(([title, text], i) => (
            <article className="principle-card reveal" key={title}>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-capability-band reveal">
        <div>
          <small>SPECIALISM</small>
          <b>SHOPIFY DEVELOPMENT</b>
        </div>
        <div>
          <small>SEARCH</small>
          <b>SEO</b>
        </div>
        <div>
          <small>WORKING STYLE</small>
          <b>DIRECT COLLABORATION</b>
        </div>
      </section>
      <section className="split-section page-split about-split">
        <div className="split-copy reveal">
          <span className="page-kicker">WORKING TOGETHER</span>
          <h2>
            CLEAR PRIORITIES.
            <br />
            <span>OPEN</span>
            <br />
            <span>CONVERSATION.</span>
          </h2>
          <p>
            Useful progress starts with a shared understanding of the job. We
            agree what matters, keep feedback focused and explain the decisions
            that affect your store.
          </p>
          <p>
            You bring knowledge of your products and customers. We bring the
            development and search perspective to help put it to work.
          </p>
          <a className="text-link" href="/contact">
            LET&apos;S TALK
          </a>
        </div>
        <div className="split-media reveal">
          <img src="/images/pages-images/connected-work.png" alt="About working together" />
        </div>
      </section>
      <CTA
        eyebrow="LET'S WORK THROUGH IT"
        title={
          <>
            BRING US
            <br />
            <span>THE HARD PART.</span>
          </>
        }
      />
    </div>
  );
}

function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const cards = [
    ["wellness", "ALCAMI", "HEALTH & WELLNESS", "wa-a", "a", "alcami"],
    ["food", "BAJAFARM", "FOOD & BEVERAGE", "wa-b", "b", "bajafarm"],
    ["fashion", "COREEX", "ACTIVEWEAR", "wa-c", "c", "coreex"],
    ["beauty", "GLOWHOLIC", "SKINCARE & BEAUTY", "wa-d", "d", "glowholic"],
    ["fashion", "JUNTOS", "FOOTWEAR", "wa-e", "e", "juntos"],
    ["fashion", "KURBANI DURJINI", "FINE JEWELLERY", "wa-f", "f", "kurbani-durjini"],
  ];
  return (
    <div className="portfolio-page">
      <Hero
        type="portfolio"
        art="portfolio-reel"
        kicker="SELECTED WORK"
        title={'A CLOSER<br /><span class="outline">LOOK</span> AT<br />THE WORK.'}
        copy="Explore Shopify storefronts across wellness, food, fashion and beauty. Each takes a different approach to presenting products and helping customers decide what to buy."
      />
      <section className="portfolio-intro reveal">
        <p>
          A wellness routine needs explanation. Fresh produce needs appetite
          appeal. Footwear needs a clear view of fit and materials. The details
          change with the category; the shopping experience should remain easy
          to follow.
        </p>
        <div className="filter-row">
          {["all", "wellness", "food", "fashion", "beauty"].map((x) => (
            <button
              className={filter === x ? "active" : ""}
              data-filter={x}
              aria-pressed={filter === x}
              onClick={() => setFilter(x)}
              key={x}
            >
              {x.toUpperCase()}
            </button>
          ))}
        </div>
      </section>
      <section className="work-grid" id="work-grid">
        {cards
          .filter(([category]) => filter === "all" || category === filter)
          .map(([category, name, industry, art, cardClass, slug]) => {
            const thumbnail = caseStudyImages[slug].images.thumbnail;
            return (
              <a
                className={`work-card wc-${cardClass} reveal is-visible`}
                href="/case-study"
                data-category={category}
                data-case-slug={slug}
                key={name}
              >
                <div
                  className={`work-art ${art}`}
                  style={
                    thumbnail
                      ? {
                          backgroundColor: "#e8e8e5",
                          backgroundImage: `url("${thumbnail}")`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "contain",
                        }
                      : undefined
                  }
                >
                  {!thumbnail &&
                    (art === "wa-a" ? (
                      <>
                        <div className="wa-board">
                          SUNRISE
                          <br />
                          <b>YOGA RITUAL</b>
                        </div>
                        <div className="wa-object" />
                      </>
                    ) : (
                      <b>{name}</b>
                    ))}
                </div>
                <div className="work-meta">
                  <small>{industry} / SHOPIFY DEVELOPMENT</small>
                  <h2>{name}</h2>
                  <span>VIEW PROJECT ↗</span>
                </div>
              </a>
            );
          })}
      </section>
      <CTA
        eyebrow="WHAT COULD YOUR STORE BECOME?"
        title={
          <>
            YOUR STORE
            <br />
            <span>COULD BE</span>
            <br />
            <span>NEXT.</span>
          </>
        }
      />
    </div>
  );
}

function Contact() {
  return (
    <div className="contact-page">
      <Hero
        type="contact"
        art="contact-signal"
        kicker="START A PROJECT"
        title={
          "LET'S BUILD<br /><span class=\"outline\">WHAT YOUR</span><br />STORE NEEDS."
        }
        copy="Launching a Shopify store, planning a redesign or solving a problem with an existing site? Tell us where you are and what you want to change."
      />
      <section className="contact-page-form reveal">
        <div className="contact-page-copy">
          <small>TELL US ABOUT YOUR STORE</small>
          <h2>
            WHAT NEEDS
            <br />
            TO WORK
            <br />
            BETTER?
          </h2>
          <p>
            Share what exists, what is getting in the way and what you want to
            achieve. A rough outline is enough to start a useful conversation.
          </p>
          <p className="whatsapp-contact">
            Prefer to talk it through? Message us on WhatsApp:
            <br />
            <a href="https://wa.me/923007443277" target="_blank" rel="noopener noreferrer">
              +92 300 7443277
            </a>
          </p>
          <div className="engagement-tags">
            <span>NEW SHOPIFY BUILD</span>
            <span>REDESIGN</span>
            <span>CUSTOM DEVELOPMENT</span>
            <span>SEO</span>
          </div>
        </div>
        <Form full />
      </section>
      <section className="contact-next reveal">
        <div className="section-label">AFTER YOU GET IN TOUCH</div>
        <Process contact />
      </section>
    </div>
  );
}
function Form({ full = false }) {
  return (
    <form
      className={`scope-form ${full ? "contact-full-form" : ""}`}
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const message = [
          "Project enquiry",
          `Name: ${formData.get("name")}`,
          `Work email: ${formData.get("email")}`,
          `Company: ${formData.get("company") || "Not provided"}`,
          `Current website: ${formData.get("website") || "Not provided"}`,
          `Project details: ${formData.get("details")}`,
        ].join("\n");
        window.location.assign(
          `https://wa.me/923007443277?text=${encodeURIComponent(message)}`,
        );
      }}
    >
      <div className="form-row">
        <label>
          NAME
          <input name="name" placeholder="Your name" autoComplete="name" required />
        </label>
        <label>
          WORK EMAIL
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            required
          />
        </label>
      </div>
      <div className="form-row">
        <label>
          BRAND OR COMPANY
          <input name="company" placeholder="Your brand or company" autoComplete="organization" />
        </label>
        <label>
          CURRENT WEBSITE
          <input
            name="website"
            type="url"
            placeholder="https://..."
            autoComplete="url"
          />
          <span className="field-note">Optional if you’re starting something new.</span>
        </label>
      </div>
      <label>
        PROJECT DETAILS
        <textarea
          name="details"
          rows={full ? 5 : 5}
          placeholder="Tell us what you’re building or improving. Include your priorities, existing issues and any target launch date."
          required
        />
      </label>
      <button className="submit-btn" type="submit">
        SEND YOUR BRIEF <span>↗</span>
      </button>
      {full && (
        <p className="form-note">
          We’ll use these details to understand your project and respond to your
          enquiry.
        </p>
      )}
    </form>
  );
}

function Shopify() {
  return (
    <div className="shopify-page">
      <Hero
        type="shopify"
        art="shopify-device-scene"
        kicker="01 / SHOPIFY DEVELOPMENT"
        title={
          'SHOPIFY<br /><span class="outline">BUILT FOR</span><br />YOUR NEXT STEP.'
        }
        copy="A new store, a better shopping experience or a feature your theme can’t handle. We build Shopify around what your brand needs next."
      />
      <section className="agency-statement compact-statement reveal">
        <p>
          Your storefront should help customers buy and help your team run the
          business. We connect <span>design, product logic and everyday controls</span>{" "}
          to make both sides work together.
        </p>
      </section>
      <Capabilities />
      <Process shopify />
      <FAQ kind="shopify" />
      <CTA
        eyebrow="LET’S TALK ABOUT YOUR STORE"
        title={
          <>
            MAKE SHOPIFY
            <br />
            <span>WORK YOUR WAY.</span>
          </>
        }
      />
    </div>
  );
}
function Capabilities() {
  const capabilities = [
    [
      "CUSTOM THEME DEVELOPMENT",
      "A storefront shaped around your brand, products and customers. Custom layouts and editable sections give your team room to tell the story and keep content current.",
    ],
    [
      "STORE REDESIGNS & REBUILDS",
      "Keep what serves your customers and rethink what gets in their way. We rework navigation, page layouts and product presentation around a clearer plan.",
    ],
    [
      "PRODUCT OPTIONS & BUNDLES",
      "Help customers choose the right combination. We connect product options, bundles and subscription journeys using suitable apps and custom development where needed.",
    ],
    [
      "INTEGRATIONS & AUTOMATION",
      "Connect the tools your store depends on, from reviews and email to fulfilment. We plan how information moves between systems and reduce avoidable manual steps.",
    ],
    [
      "PERFORMANCE & CONVERSION",
      "Review loading behaviour, mobile usability and shopping friction. We use available data to prioritise changes and test improvements where tracking and traffic allow.",
    ],
    [
      "ONGOING DEVELOPMENT",
      "Keep your store moving as the business changes. Add sections, introduce features and resolve issues with development support scoped around your next priorities.",
    ],
  ];
  return (
    <section className="capabilities-section">
      <div className="section-heading reveal">
        <small>WHAT WE BUILD</small>
        <h2>
          YOUR BRAND.
          <br />
          <span className="outline-inline">BUILT INTO SHOPIFY.</span>
        </h2>
      </div>
      <div className="capability-list">
        {capabilities.map(([name, description], i) => (
          <article className="capability-row reveal" key={name}>
            <span>0{i + 1}</span>
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SEO() {
  return (
    <div className="seo-page">
      <Hero
        type="seo"
        art="seo-radar"
        kicker="02 / ECOMMERCE SEO"
        title={
          'HELP THE<br /><span class="outline">RIGHT PEOPLE</span><br />FIND YOU.'
        }
        copy="Make it easier for people to discover your products when they’re looking for what you sell. We connect technical SEO, store structure and useful content around that goal."
      />
      <section className="agency-statement compact-statement reveal">
        <p>
          From a search query to a product choice, every step should make sense.
          We connect <span>technical SEO, useful content and clear store navigation</span>{" "}
          around what customers are trying to find.
        </p>
      </section>
      <section className="seo-pillars">
        <div className="section-heading reveal">
          <small>SEO FOR YOUR STOREFRONT</small>
          <h2>
            SEARCH STARTS
            <br />
            <span className="outline-inline">WITH YOUR STORE.</span>
          </h2>
        </div>
        <div className="pillar-grid">
          {[
            [
              "TECHNICAL SEO",
              "Review crawling, indexing and page-performance issues. Identify what needs attention so search engines can access and understand the pages that matter to your store.",
            ],
            [
              "ECOMMERCE ARCHITECTURE",
              "Organise products and collections into a clear structure, with navigation and internal links that connect shoppers to the right pages.",
            ],
            [
              "ON-PAGE OPTIMIZATION",
              "Give each key page a clear purpose. Refine titles, headings and product copy around relevant searches and the questions customers ask.",
            ],
            [
              "CONTENT PLANNING & DEVELOPMENT",
              "Turn customer questions into useful collection copy, product information and buying guides. Build content around your range and the decisions people need help making.",
            ],
            [
              "SCHEMA & SEARCH APPEARANCE",
              "Review structured data and search listings, including product information and page descriptions, to help your store communicate clearly in search.",
            ],
            [
              "MEASUREMENT & IMPROVEMENT",
              "Review search visibility and engagement with key pages. Use what the data shows to choose the next round of improvements.",
            ],
          ].map(([name, description], i) => (
            <article className="seo-pillar reveal" key={name}>
              <span>0{i + 1}</span>
              <h3>{name}</h3>
              <p>{description}</p>
              <div className="pillar-meter">
                <i />
              </div>
            </article>
          ))}
        </div>
      </section>
      <Process seo />
      <FAQ kind="seo" />
      <CTA
        eyebrow="LET’S FIND YOUR NEXT OPPORTUNITY"
        linkText="LET’S TALK SEO"
        title={
          <>
            MAKE YOUR STORE
            <br />
            <span>EASIER TO FIND.</span>
          </>
        }
      />
    </div>
  );
}

function CaseStudy() {
  return (
    <>
      <section className="case-hero">
        <div className="case-head reveal is-visible">
          <span className="page-kicker">CONCEPT CASE STUDY / TEMPLATE</span>
          <h1>
            AURA
            <br />
            <span className="outline">SKYSTORE</span>
          </h1>
          <div className="case-meta">
            <span>
              INDUSTRY <b>WELLNESS</b>
            </span>
            <span>
              SERVICE <b>SHOPIFY DEVELOPMENT</b>
            </span>
            <span>
              FOCUS <b>CUSTOM EXPERIENCE</b>
            </span>
          </div>
        </div>
        <div className="case-cover reveal is-visible">
          <div className="case-board">
            <span>TITLE DEED</span>
            <b>
              SUNRISE
              <br />
              YOGA RITUAL
            </b>
          </div>
          <div className="case-cover-object" />
        </div>
      </section>
      <section className="case-overview reveal">
        <span className="section-label">PROJECT OVERVIEW</span>
        <h2>
          A CALMER
          <br />
          COMMERCE
          <br />
          <span className="outline-inline">EXPERIENCE.</span>
        </h2>
        <div className="case-overview-copy">
          <p>
            This page is a reusable case-study template for your real Dev
            CircleX portfolio. Replace the concept content with an actual client
            brief, screenshots, feature work and measurable outcomes.
          </p>
          <p>
            The layout keeps the project visual first, then explains the
            problem, system and implementation.
          </p>
        </div>
      </section>
      <section className="case-full-art reveal">
        <div className="case-ui">
          <div className="cui-nav">
            AURA <span>SHOP&nbsp;&nbsp; STORY&nbsp;&nbsp; BAG</span>
          </div>
          <div className="cui-main">
            <div className="cui-image" />
            <div className="cui-copy">
              <small>DAILY PRACTICE</small>
              <h3>
                MOVE WITH
                <br />
                INTENTION.
              </h3>
              <p>Shop the edit →</p>
            </div>
          </div>
        </div>
      </section>
      <section className="case-result reveal">
        <small>OUTCOME</small>
        <h2>
          SHOW THE CHANGE.
          <br />
          <span>THEN EXPLAIN WHY IT MATTERS.</span>
        </h2>
        <p>
          Use this section for credible outcomes: faster load times, cleaner
          workflows, improved conversion paths, better mobile behavior or
          measurable search growth.
        </p>
      </section>
      <CTA
        title={
          <>
            SEE MORE
            <br />
            <span>SELECTED WORK.</span>
          </>
        }
      />
    </>
  );
}
function CTA({
  title,
  eyebrow = "THE NEXT BUILD STARTS HERE",
  linkText = "START A PROJECT",
}) {
  return (
    <section className="page-cta reveal">
      <small>{eyebrow}</small>
      <h2>{title}</h2>
      <a className="cta-pill" href="/contact">
        {linkText} <b>↗</b>
      </a>
    </section>
  );
}

export default function InnerPage({ current }) {
  const Page =
    {
      "/services": Services,
      "/about": About,
      "/portfolio": PortfolioPage,
      "/contact": Contact,
      "/seo": SEO,
      "/shopify-development": Shopify,
      "/case-study": CaseStudy,
    }[current] || Services;
  return (
    <PageShell current={current}>
      <Page />
    </PageShell>
  );
}
