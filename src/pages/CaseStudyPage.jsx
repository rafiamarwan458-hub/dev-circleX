import { useEffect } from "react";
import { PageShell } from "../Pages.jsx";
import { caseStudyImages } from "../data/caseStudyImages.js";

const caseStudies = {
  alcami: {
    name: "ALCAMI",
    sub: "",
    kicker: "PROJECT SHOWCASE",
    industry: "HEALTH & WELLNESS",
    focus: "PRODUCT CLARITY & RITUAL OPTIONS",
    board: ["", "WELLNESS.", "MADE CLEAR."],
    nav: "ALCAMI",
    imageTitle: "FIND YOUR",
    imageAccent: "DAILY RITUAL.",
    uiEyebrow: "",
    uiLink: "Explore the collection →",
    overview: ["MAKE THE", "RITUAL", "FEEL SIMPLE."],
    overviewCopy: [
      "Alcami brings daily wellness products into an approachable shopping experience. Warm imagery introduces the brand, while product information and ritual options help customers understand what they are choosing.",
      "The storefront connects education with purchase, giving shoppers a route from discovering a product to selecting the routine that suits them.",
    ],
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    featuresHeading: "BEHIND THE DECISION.",
    features: [
      ["PRODUCT CLARITY", "fv-product", "Product information, benefit explanations and clear imagery give shoppers useful context before they decide what belongs in their routine."],
      ["RITUAL OPTIONS", "fv-cart", "Kit choices, flavours and purchase options sit together, helping customers compare what is included before making a selection."],
      ["BROWSE ON MOBILE", "fv-mobile", "Readable product information and familiar purchase controls carry the same considered experience onto smaller screens."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["KNOW THE PRODUCT.", "CHOOSE YOUR RITUAL."],
      copy: "A wellness storefront that gives product information room to explain, then makes the next shopping step easy to find.",
    },
    moreProjects: true,
  },
  bajafarm: {
    name: "BAJAFARM",
    sub: "",
    kicker: "PROJECT SHOWCASE",
    industry: "FOOD & BEVERAGE",
    focus: "SEASONAL PRODUCTS & FARM STORY",
    board: ["", "FRESH FROM", "THE SOURCE."],
    nav: "BAJAFARM",
    imageTitle: "EXPLORE THE",
    imageAccent: "SEASON'S HARVEST.",
    uiEyebrow: "",
    uiLink: "Browse the collection →",
    overview: ["FROM FARM", "TO", "TABLE."],
    overviewCopy: [
      "Bajafarm's storefront brings the farm into the shopping experience. Landscape photography and seasonal produce give customers a sense of where the products come from before they explore the range.",
      "Seasonal boxes, individual products and complementary items connect that story with practical details of choosing an order.",
    ],
    featuresTitle: "FRESH PRODUCTS,",
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    featuresHeading: "THOUGHTFULLY PRESENTED.",
    features: [
      ["SEASONAL DISCOVERY", "fv-product", "Photography, category navigation and product descriptions give seasonal produce room to stand out and help customers explore what is available."],
      ["BUILD THE BASKET", "fv-cart", "Box sizes, quantities and complementary products sit within the buying experience, helping customers put together an order around their needs."],
      ["THE FARM IN VIEW", "fv-mobile", "Landscape imagery and an understated palette keep the farm's identity present throughout the storefront."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["FROM THE FARM.", "TO THE BASKET."],
      copy: "A food storefront that brings the source, the season and the product selection into one inviting shopping experience.",
    },
    moreProjects: true,
  },
  coreex: {
    name: "COREEX",
    sub: "",
    kicker: "PROJECT SHOWCASE",
    industry: "ACTIVEWEAR",
    focus: "PRODUCT DISCOVERY & FIT",
    board: ["COREEX", "COMFORT,", "CONSIDERED."],
    nav: "COREEX",
    imageTitle: "FIND YOUR",
    imageAccent: "EVERYDAY FIT.",
    uiEyebrow: "",
    uiLink: "Explore the range →",
    overview: ["FIND THE", "RIGHT", "FIT."],
    overviewCopy: [
      "Coreex presents compression clothing through product demonstrations, customer imagery and clear purchase choices. The experience gives shoppers several ways to understand the range before choosing a style.",
      "Product pages bring sizes, colours, product details and set options into the same decision space, keeping practical information close to the purchase.",
    ],
    featuresTitle: "PRODUCT CHOICES,",
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    featuresHeading: "CLEARER AT EVERY STEP.",
    features: [
      ["EXPLORE THE RANGE", "fv-product", "Product imagery and category cues help shoppers move between styles and understand the differences within the collection."],
      ["CHOOSE THE FIT", "fv-cart", "Size, colour and set options sit close to product information, keeping the choices that matter within the purchase flow."],
      ["SHOP ON MOBILE", "fv-mobile", "The smaller-screen experience keeps product imagery, information and calls to action accessible as customers browse."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["FIND THE FIT.", "CHOOSE WITH CONFIDENCE."],
      copy: "An activewear storefront organised around the details people weigh up before choosing clothing online.",
    },
    moreProjects: true,
  },
  glowholic: {
    name: "GLOWHOLIC",
    sub: "",
    kicker: "PROJECT SHOWCASE",
    industry: "SKINCARE & BEAUTY",
    focus: "PRODUCT EDUCATION & PURCHASE CHOICES",
    board: ["GLOWHOLIC", "CARE,", "MADE CLEAR."],
    nav: "GLOWHOLIC",
    uiNavLinks: true,
    imageTitle: "GET TO KNOW",
    imageAccent: "YOUR ROUTINE.",
    uiEyebrow: "",
    uiLink: "Explore the products →",
    overview: ["CARE,", "MADE", "CLEAR."],
    overviewCopy: [
      "Glowholic's products invite questions about what is included, how they are used and which option to choose. The storefront brings explanations, imagery and customer stories into the browsing experience.",
      "Purchase choices remain close to the product details, helping shoppers compare kits and options as they consider a routine.",
    ],
    featuresTitle: "PRODUCT EDUCATION,",
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    featuresHeading: "PART OF THE EXPERIENCE.",
    features: [
      ["EXPLAIN THE PRODUCT", "fv-product", "Product visuals, descriptions and usage information help shoppers understand what each item offers and where it fits in a routine."],
      ["COMPARE THE OPTIONS", "fv-cart", "Kit contents, purchase choices and relevant product selections give customers context as they decide what to buy."],
      ["KEEP IT FAMILIAR", "fv-mobile", "Consistent imagery, typography and navigation connect the desktop and mobile browsing experience."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["UNDERSTAND THE ROUTINE.", "CHOOSE YOUR CARE."],
      copy: "A beauty storefront that makes room for product education while keeping shopping choices within reach.",
    },
    moreProjects: true,
  },
  juntos: {
    name: "JUNTOS",
    sub: "",
    kicker: "PROJECT SHOWCASE",
    industry: "FOOTWEAR",
    focus: "MATERIALS, STYLE & PRODUCT CHOICE",
    board: ["JUNTOS", "MORE TO", "THE SHOE."],
    nav: "JUNTOS",
    uiNavLinks: true,
    uiEyebrow: "",
    imageTitle: "TAKE A",
    imageAccent: "CLOSER LOOK.",
    uiLink: "Explore the collection →",
    overview: ["THE SHOE.", "THE STORY.", ""],
    overviewCopy: [
      "Juntos gives its materials and product story a visible place in the storefront. Editorial photography and a restrained layout introduce the brand before customers explore individual styles.",
      "On product pages, close-up imagery, colour choices and sizing information bring that story back to the practical decision of choosing a pair.",
    ],
    featuresTitle: "GIVE THE PRODUCT",
    featuresHeading: "ITS SPACE.",
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    features: [
      ["SHOW THE SHOE", "fv-product", "Product angles and close-up imagery give shoppers a useful view of shape, texture and construction."],
      ["MAKE THE CHOICE", "fv-cart", "Style, colour and size selections sit alongside product information, connecting the brand story with the details of choosing a pair."],
      ["CARRY THE STORY", "fv-mobile", "Mobile layouts keep the material story, product imagery and shopping controls connected on a smaller screen."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["SEE THE SHOE.", "KNOW ITS STORY."],
      copy: "A footwear storefront where the product's character and the practical details of buying a pair have room to work together.",
    },
    moreProjects: true,
  },
  "kurbani-durjini": {
    name: "KURBANI",
    sub: "DURJINI",
    kicker: "PROJECT SHOWCASE",
    industry: "FINE JEWELLERY",
    focus: "PRODUCT DETAIL & GUIDED SELECTION",
    board: ["KURBANI DURJINI", "EVERY", "DETAIL COUNTS."],
    nav: "KURBANI DURJINI",
    uiNavLinks: true,
    uiEyebrow: "",
    imageTitle: "FIND YOUR",
    imageAccent: "SIGNATURE PIECE.",
    uiLink: "Explore the jewellery →",
    overview: ["CONSIDER", "EVERY", "DETAIL."],
    overviewCopy: [
      "Fine jewellery deserves time and attention. Kurbani Durjini's storefront pairs a refined brand presentation with product imagery and specifications that support a considered purchase.",
      "Collections introduce the range, while individual product pages bring metal, diamond and selection details closer to the customer's decision.",
    ],
    featuresTitle: "THE FINER DETAILS.",
    featuresHeading: "IN FOCUS.",
    featuresEyebrow: "THE SHOPPING EXPERIENCE",
    features: [
      ["JEWELLERY IN FOCUS", "fv-product", "Clean product backgrounds and detailed imagery give shoppers room to consider the shape, setting and finish of each piece."],
      ["INFORMED SELECTION", "fv-cart", "Product specifications, metal choices and available selection options help customers understand the piece they are considering."],
      ["A CONSISTENT FINISH", "fv-mobile", "Restrained typography and considered imagery connect the brand presentation with the practical information across the storefront."],
    ],
    experience: {
      eyebrow: "THE EXPERIENCE",
      title: ["THE DETAILS", "MAKE THE DECISION."],
      copy: "A jewellery storefront that pairs the appeal of the collection with the information needed to consider an individual piece.",
    },
    moreProjects: true,
  },
};

const legacyCaseSlugs = {
  "aura-skystore": "alcami",
  "formula-house": "bajafarm",
  kinetiq: "coreex",
  "nova-objects": "glowholic",
  "atelier-zero": "juntos",
  "arc-formula": "kurbani-durjini",
};

function Feature({ number, title, visual, image, children }) {
  const imageStyle = image
    ? {
        backgroundColor: "#e8e8e5",
        backgroundImage: `url("${image}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }
    : undefined;
  return (
    <article className="reveal">
      <span>{number}</span>
      <div
        className={`feature-visual ${visual}`}
        style={visual === "fv-mobile" ? undefined : imageStyle}
      >
        {!image && visual === "fv-product" && <div className="fv-card" />}
        {!image && visual === "fv-cart" && <div className="fv-drawer" />}
        {visual === "fv-mobile" &&
          (image ? (
            <img
              className="fv-phone"
              src={image}
              alt={`${title.toLowerCase()} mobile storefront preview`}
            />
          ) : (
            <div className="fv-phone" />
          ))}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}

function CaseContent({ data }) {
  return (
    <>
      <div
        className={`case-study-page${["ALCAMI", "BAJAFARM", "COREEX", "GLOWHOLIC", "JUNTOS", "KURBANI"].includes(data.name) ? " alcami-case-study" : ""}`}
      >
      <section className="case-hero">
        <div className="case-head reveal is-visible">
          <span className="page-kicker">
            {data.kicker || "CONCEPT CASE STUDY / TEMPLATE"}
          </span>
          <h1>
            {data.name}
            {data.sub && (
              <>
                <br />
                <span className="outline">{data.sub}</span>
              </>
            )}
          </h1>
          <div className="case-meta">
            <span>
              INDUSTRY <b>{data.industry}</b>
            </span>
            <span>
              SERVICE <b>SHOPIFY DEVELOPMENT</b>
            </span>
            <span>
              FOCUS <b>{data.focus}</b>
            </span>
          </div>
        </div>
        <div
          className="case-cover reveal is-visible"
          style={
            data.backgroundImage
              ? {
                  backgroundImage: `url("${data.backgroundImage}")`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }
              : undefined
          }
        >
          <div className="case-board">
            {data.board[0] && <span>{data.board[0]}</span>}
            <b>
              {data.board[1]}
              <br />
              {data.board[2]}
            </b>
          </div>
          {/* <div className="case-cover-object" /> */}
        </div>
      </section>
      <section className="case-overview reveal">
        <span className="section-label">PROJECT OVERVIEW</span>
        <div>
          <h2>
            {data.name === "BAJAFARM" ? (
              <>
                FROM FARM
                <br />
                TO <span className="outline-inline">TABLE.</span>
              </>
            ) : data.name === "JUNTOS" ? (
              <>
                THE SHOE.
                <br />
                <span className="outline-inline">THE STORY.</span>
              </>
            ) : (
              <>
                {data.overview[0]}
                <br />
                {data.overview[1]}
                <br />
                <span className="outline-inline">{data.overview[2]}</span>
              </>
            )}
          </h2>
        </div>
        <div className="case-overview-copy">
          {data.overviewCopy.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
      <section className="case-full-art reveal">
        <div className="case-ui">
          <div className="cui-nav">
            {data.nav}
            {(!data.moreProjects || data.uiNavLinks) && (
              <span>SHOP&nbsp;&nbsp; STORY&nbsp;&nbsp; BAG</span>
            )}
          </div>
          <div className="cui-main">
            <div
              className="cui-image"
              style={
                data.images.first
                  ? {
                      backgroundImage: `url("${data.images.first}")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }
                  : undefined
              }
            />
            <div className="cui-copy">
              {data.uiEyebrow !== "" && (
                <small>{data.uiEyebrow || "DAILY PRACTICE"}</small>
              )}
              <h3>
                {data.imageTitle}
                <br />
                {data.imageAccent}
              </h3>
              <p>{data.uiLink || "Shop the edit →"}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="case-features">
        <div className="section-heading reveal">
          <small>{data.featuresEyebrow || "SELECTED FEATURES"}</small>
          <h2>
            {data.featuresTitle || "THE DETAILS"}
            <br />
            <span className="outline-inline">
              {data.featuresHeading || "THAT SHAPE THE JOURNEY."}
            </span>
          </h2>
        </div>
        <div className="feature-showcase">
          {data.features.map(([title, visual, description], index) => (
            <Feature
              key={title}
              number={`0${index + 1}`}
              title={title}
              visual={visual}
              image={
                visual === "fv-product"
                  ? data.images.second
                  : visual === "fv-cart"
                    ? data.images.third
                    : visual === "fv-mobile"
                      ? data.images.mobile
                      : undefined
              }
            >
              {description}
            </Feature>
          ))}
        </div>
      </section>
      {data.experience ? (
        <section className="case-result case-experience reveal">
          <small>{data.experience.eyebrow}</small>
          <h2>
            {data.experience.title[0]}
            <br />
            <span>{data.experience.title[1]}</span>
          </h2>
          <p>{data.experience.copy}</p>
        </section>
      ) : (
        <section className="case-result reveal">
          <small>OUTCOME</small>
          <h2>
            SHOW THE CHANGE.
            <br />
            <span>THEN EXPLAIN WHY IT MATTERS.</span>
          </h2>
          <p>{data.outcome}</p>
        </section>
      )}
      <section className="page-cta reveal">
        <small>{data.moreProjects ? "MORE PROJECTS" : "NEXT PROJECT"}</small>
        <h2>
          {data.moreProjects ? "EXPLORE MORE" : "SEE MORE"}
          <br />
          <span>SELECTED WORK.</span>
        </h2>
        <a className="cta-pill" href="/portfolio">
          BACK TO PORTFOLIO <b>↗</b>
        </a>
      </section>
      </div>
    </>
  );
}

export default function CaseStudyPage() {
  const slug = new URLSearchParams(window.location.search).get("case") || "alcami";
  const canonicalSlug = legacyCaseSlugs[slug] || slug;
  const selectedSlug = caseStudies[canonicalSlug] ? canonicalSlug : "alcami";
  const data = {
    ...caseStudies[selectedSlug],
    ...caseStudyImages[selectedSlug],
  };
  useEffect(() => {
    document.title = `${[data.name, data.sub].filter(Boolean).join(" ")} — Dev CircleX`;
  }, [data.name, data.sub]);
  return (
    <PageShell current="/case-study">
      <CaseContent data={data} />
    </PageShell>
  );
}
