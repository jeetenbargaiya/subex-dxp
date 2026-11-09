
"use client";

import { useEffect, useRef, useState } from "react";
import { Lottie } from "lottie-react";
import subexAnimation from "../public/assets/subex-logo-animation.json";

const stats = [
  { value: "30+", label: "Years of Innovation" },
  { value: "110+", label: "Countries" },
  { value: "200 B+", label: "XDRs Processed in a Single Stance" },
  { value: "60%", label: "of Customers Associated for More Than 8 Years" },
];

const shifts = [
  {
    title: "AI That Thinks Ahead",
    description:
      "Subex’s AI identifies anomalies early and autonomously recommends the root cause, helping teams act faster with clarity.",
  },
  {
    title: "Human-Driven Autonomy",
    description:
      "Subex blends autonomous AI with human oversight, predicting issues early, correcting itself intelligently, and escalating recommendations for human review and approval.",
  },
  {
    title: "Intent-Driven Experiences",
    description:
      "Subex helps telcos shift to intent-driven outcomes by anticipating needs, aligning actions instantly, and delivering experiences with purpose.",
  },
];

const pillars = [
  {
    id: "fearless",
    title: "FEARLESS",
    introduction:
      "Business assurance that predicts revenue, service, and experience risks before they surface, so telcos can launch new offerings with absolute confidence.",
    description:
      "Subex transforms business uncertainty into measurable outcomes by mitigating risks proactively, simplifying operational complexity, and ensuring every service launch is backed by strategic intelligence. With systems that anticipate issues, not just react to them, telecom operators move faster, scale stronger, and innovate fearlessly.",
    features: [
      {
        title: "Predict Revenue & Service Risks Early",
        text: "Business assurance detects revenue leakages, service issues, and experience risks before they affect customers.",
      },
      {
        title: "Guarantee Launch Readiness",
        text: "Dynamic assurance ensures SLAs, services, and experiences stay stable from day one.",
      },
      {
        title: "Confidence To Innovate",
        text: "Data-backed decisions give telcos the power to introduce new products fearlessly.",
      },
    ],
  },
  {
    id: "seamless",
    title: "SEAMLESS",
    introduction:
      "From manual partner operations to fully digital B2B2X orchestration, Subex connects every partner, product, and process into one frictionless ecosystem.",
    description:
      "Legacy partner management runs on emails, spreadsheets, and siloed portals. Subex replaces this with an intelligent orchestration layer that digitizes onboarding, offer design, order flows, and settlements. Operators get a single view of complex B2B2X chains while partners experience simple, predictable journeys.",
    features: [
      {
        title: "Digitize Every Partner Workflow",
        text: "Move from manual, ad-hoc operations to structured, rule-driven digital flows for onboarding, contracts, SLAs, and compliance.",
      },
      {
        title: "Orchestrate B2B2X Journeys",
        text: "Design and launch multi-party offers that combine connectivity, content, cloud, and IoT services. Subex orchestrates catalog, orders, usage, and revenue sharing across every stakeholder.",
      },
      {
        title: "Simplify From Friction to Flow",
        text: "Give operators and partners a single source of truth for performance, status, and settlements. Reduce disputes, accelerate go-to-market, and deliver experiences that simply work.",
      },
    ],
  },
  {
    id: "fraud-free",
    title: "FRAUD-FREE",
    introduction: "Fraud moves fast. Protection must move faster.",
    description:
      "Subex replaces after-loss controls with real-time, multi-layered defense that stops threats across identities, transactions, networks, and partner channels the moment they appear. Fraud strikes across subscriptions, roaming, identities, payments, partners, and APIs. Subex applies 30 years of fraud expertise with AI scoring, end-to-end solutions, and link analysis to prevent loss before it occurs, continuously monitoring interactions to stop fraud in real time.",
    features: [
      {
        title: "Detect",
        text: "Comprehensive Visibility Across Every Fraud Type. Across IRSF, SIM Box, Wangiri, subscription, identity, roaming, payments, and partner fraud, Subex’s models and behavioural intelligence reveal known and emerging risks instantly.",
      },
      {
        title: "Prevent",
        text: "High-Risk Events Before They Become Loss. Real-time scoring and adaptive intelligence block high-risk transactions instantly, ensuring genuine customers move ahead without friction.",
      },
      {
        title: "Assure",
        text: "Unified Fraud Protection Across Every Touchpoint. Every channel — onboarding, usage, roaming, APIs, partners, devices — is secured through one integrated, always-on fraud defence layer that evolves with new threats.",
      },
    ],
  },
];

const solutions = [
  {
    title: "Fraud Management",
    description:
      "Subex empowers CSPs to anticipate and eliminate fraudulent intent before it impacts business. Our AI-powered fraud management system continuously learns and adapts, identifying both known and emerging threats in real time.",
    second:
      "By combining deep-domain expertise with advanced analytics, Subex safeguards every digital journey, ensuring your network remains fearless, seamless, and fraud-free.",
    href: "/products/fraud-management/",
  },
  {
    title: "Business Assurance",
    description:
      "Subex’s business assurance solutions ensure that every dollar earned is a dollar realized. Through AI-driven automation, they detect leakages, reconcile complex data streams, and deliver 360° visibility across the revenue chain.",
    second:
      "With continuous, real-time validation and actionable insights, Subex enables operators to strengthen financial integrity while accelerating growth.",
    href: "/products/business-assurance/",
  },
  {
    title: "Partner Ecosystem Management",
    description:
      "Built for the interconnected era, Subex’s partner ecosystem solutions simplify multi-party collaboration with precision and transparency. The AI-enabled framework automates partner onboarding, settlement, and dispute management, reducing friction and human error.",
    second:
      "By ensuring accuracy, accountability, and trust across every transaction, Subex transforms partnerships into powerful growth engines.",
    href: "/products/partner-ecosystem-management/",
  },
];


type MenuItem = {
  label: string;
  children?: MenuItem[];
};

type MenuColumn = {
  heading?: string;
  items: MenuItem[];
};

const megaMenus: Record<string, MenuColumn[]> = {
  Solutions: [
    {
      heading: "Fraud",
      items: [
        { label: "Bypass Fraud" },
        { label: "Scam, Spam, and Robocalling" },
        { label: "SMS Fraud" },
        { label: "Handset Fraud" },
        { label: "Mobile Money Fraud" },
        { label: "International Revenue Share Fraud" },
        { label: "Dealer Fraud" },
        { label: "CLI Spoofing" },
        { label: "Subscription Fraud" },
        { label: "Roaming Fraud" },
        { label: "Artificially Inflated Traffic" },
      ],
    },
    {
      heading: "Assurance",
      items: [
        { label: "Revenue Assurance" },
        { label: "Margin Assurance" },
        { label: "Cost Assurance" },
        { label: "Migration Assurance" },
        {
          label: "Other Assurance areas",
          children: [
            { label: "Order Management" },
            { label: "Collections and Payments" },
            { label: "Financial Reporting & Accounting" },
            { label: "Mobile Money" },
            { label: "Transformation Assurance" },
            { label: "Regulatory Assurance" },
            { label: "CX Assurance" },
            { label: "Asset Assurance" },
          ],
        },
      ],
    },
    {
      heading: "Ecosystem Management",
      items: [
        {
          label: "Partner Lifecycle Management",
          children: [{ label: "Partner Portal" }],
        },
        {
          label: "Digital Services Billing",
          children: [
            { label: "Content Billing" },
            { label: "IOT/M2M Billing" },
          ],
        },
        {
          label: "Wholesale Billing and Routing",
          children: [
            { label: "Interconnect Billing & Settlement" },
            { label: "Reconciliation & Dispute Management" },
            { label: "OBR/A Number Billing" },
            { label: "Smart Agreements" },
            { label: "Route Optimization" },
          ],
        },
        { label: "Roaming Billing" },
        { label: "Enterprise Billing" },
      ],
    },
  ],

  Services: [
    {
      items: [
        { label: "Business Consulting" },
        { label: "Managed Services" },
      ],
    },
  ],

  Products: [
    {
      items: [
        {
          label: "Fraud Management",
          children: [
            {
              label: "FraudZap™",
              children: [
                { label: "Handset FraudZap™" },
                { label: "Mobile Money FraudZap™" },
                { label: "MVNO FraudZap™" },
              ],
            },
          ],
        },
      ],
    },
    {
      items: [
        { label: "Business Assurance" },
        { label: "Partner Ecosystem" },
        {
          label: "AI Agents Squads",
          children: [
            { label: "Fraud Investigative Agent" },
            { label: "PEM AI Agents" },
            { label: "Business Assurance Agent Suite" },
          ],
        },
        { label: "Signaling Risk Intelligence" },
      ],
    },
  ],

  "About Us": [
    {
      items: [
        { label: "About Subex" },
        { label: "Management Team" },
        { label: "Brand" },
        { label: "Investor" },
        { label: "Careers" },
      ],
    },
  ],

  Resources: [
    {
      items: [
        { label: "Case Studies" },
        { label: "Flyers" },
        { label: "Webinars" },
        { label: "Podcasts" },
        { label: "Whitepapers" },
        { label: "Point of View" },
        { label: "Blog" },
      ],
    },
  ],
};

function MenuItems({ items }: { items: MenuItem[] }) {
  return (
    <ul className="mega-menu-list">
      {items.map((item) => (
        <li key={item.label}>
          <a
  href="#"
  className="mega-menu-link"
  onClick={(event) => event.preventDefault()}
>
            <span className="mega-menu-chevron">›</span>
            <span>{item.label}</span>
          </a>

          {item.children && (
            <MenuItems items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}

function SubexHeroAnimation() {
  return (
    <div className="hero-animation">
      <Lottie
        src={subexAnimation}
        loop
        autoplay
        renderer="svg"
        className="hero-lottie"
        aria-label="Subex animated brand visual"
      />
    </div>
  );
}

const officeLocations = {
  india: {
    label: "India: Subex Limited",
    name: "Subex Limited",
    address:
      "Pritech Park, SEZ Block -09, 4th Floor B Wing Survey No. 51 to 64/4 Outer Ring Road, Bellandur Village Varthur, Hobli, Bengaluru, Karnataka 560103, India",
    contact: "Tel: +91 80 37451377",
  },
  usa: {
    label: "USA: Subex Inc",
    name: "Subex Inc",
    address: "1499 W 120th Ave, Suite 210 Westminster, CO 80234, USA",
    contact: "",
  },
  uk: {
    label: "UK: Subex UK Limited",
    name: "Subex (UK) Limited",
    address:
      "Unit 1J, Sambhav House, First Floor, 275-287 Station Road, Harrow HA1 1NA",
    contact: "Email: info@subex.com | Contact: +447736518379",
  },
  ipswich: {
    label: "Subex (UK) Limited – Ipswich",
    name: "Subex (UK) Limited – Ipswich",
    address:
      "Rooms N2-06 Columba House, Innovation Martlesham, Adastral Park, Ipswich, IP5 3RE, United Kingdom.",
    contact: "",
  },
  dubai: {
    label: "Dubai: Subex",
    name: "Subex",
    address:
      "Office number 722, Building number 6WA, Dubai Airport Free Zone Authority (DAFZA), P.O. Box: Box 54834, Dubai, United Arab Emirates",
    contact: "Tel: +971 4 214 6700 | Fax: +971 4 214 6714",
  },
  singapore: {
    label: "Singapore: Subex (Asia Pacific) Pte Limited",
    name: "Subex (Asia Pacific) Pte Limited",
    address:
      "175A Bencoolen Street, #08-03 Burlington Square, Singapore 189650",
    contact: "Tel: +65 6338 1218 | Fax: +65 6338 1216",
  },
};


export default function Home() {
  const [selectedOffice, setSelectedOffice] =
  useState<keyof typeof officeLocations>("india");
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (

    <main>
      


<header className="site-header" ref={headerRef}>
  <a href="/" className="brand" aria-label="Subex home">
    <img
      src="/assets/subex-logo.svg"
      alt="Subex - New Possibilities. Now Possible."
      className="brand-logo"
    />
  </a>

  <nav className="main-navigation mega-nav" aria-label="Main navigation">
    {Object.entries(megaMenus).map(([label, columns]) => (
      <div
        className={`mega-nav-item ${activeMenu === label ? "is-open" : ""}`}
        key={label}
      >
        <button
          type="button"
          className="mega-nav-trigger"
          aria-expanded={activeMenu === label}
          onClick={() =>
            setActiveMenu(activeMenu === label ? null : label)
          }
        >
          {label}
          <span className="mega-nav-arrow" aria-hidden="true" />
        </button>

        {activeMenu === label && (
          <div className="mega-menu-panel">
            <div className="mega-menu-columns">
              {columns.map((column, index) => (
                <div className="mega-menu-column" key={`${label}-${index}`}>
                  {column.heading && (
                    <h3 className="mega-menu-heading">
                      <span className="mega-heading-mark">›</span>
                      {column.heading}
                    </h3>
                  )}
                  <MenuItems items={column.items} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ))}

    <a href="/newsroom/" className="mega-nav-direct">
      Newsroom
    </a>
  </nav>

  <a href="/request-demo/" className="header-cta">
    Contact Us
  </a>
</header>




      <section className="home-hero">
        <div className="hero-content">
          <p className="hero-eyebrow">AI-NATIVE INTELLIGENCE</p>
          <h1>
            The world no longer runs on information.
            <br />
            It runs on <span>intent.</span>
          </h1>
          <p className="hero-description">
            In an era where the world no longer runs on information but on
            intent, Subex brings an AI-first approach to help operators
            anticipate, interpret, and deliver real-time outcomes.
          </p>
          <a href="/request-demo/" className="primary-button">
            Request Demo <span>↗</span>
          </a>
        </div>

<div className="hero-media">
  <SubexHeroAnimation />
</div>

      </section>

      <section className="stats-section" aria-label="Subex statistics">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="global-shift section-container">
        <div className="section-intro">
          <p className="section-eyebrow">THE GLOBAL SHIFT</p>
          <h2>The Rules Have Changed And We’re Helping Telcos Rewrite Them</h2>
        </div>
        <div className="shift-grid">
          {shifts.map((item, index) => (
            <article className="shift-card" key={item.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {pillars.map((pillar, index) => (
        <section
          className={`pillar-section pillar-${index + 1}`}
          id={pillar.id}
          key={pillar.id}
        >
          <div className="section-container">
            <div className="pillar-intro">
              <p className="section-eyebrow">THE SUBEX DIFFERENCE</p>
              <h2>{pillar.title}</h2>
              <h3>{pillar.introduction}</h3>
              <p>{pillar.description}</p>
            </div>

            <div className="feature-grid">
              {pillar.features.map((feature, featureIndex) => (
                <article className="feature-card" key={feature.title}>
                  <span className="card-number">
                    0{featureIndex + 1}
                  </span>
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="solutions-section section-container">
        <div className="section-intro">
          <p className="section-eyebrow">WHAT WE DO</p>
          <h2>Our Solutions</h2>
          <p>AI-powered solutions built to predict, prevent, and perform.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <article className="solution-card" key={solution.title}>
              <span className="card-number">0{index + 1}</span>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <p>{solution.second}</p>
              <a href={solution.href} className="text-link">
                Explore More <span>↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="global-trust">
        <div className="section-container">
          <p className="section-eyebrow">OUR GLOBAL TRUST NETWORK</p>
          <h2>Our Global Trust Network</h2>
          <p>
            From emerging digital players to leading telecom operators
            worldwide, Subex empowers organizations to create secure,
            seamless, and fearless digital journeys. We transform complexity
            into confidence through AI-driven assurance, fraud management,
            and partner ecosystem management systems.
          </p>
          <p>
            Their success stories define ours.
            <br />
            Together, we make new possibilities, now possible.
          </p>
          <div className="trust-placeholder">
            Customer and partner logos will be placed here using original
            Subex brand assets.
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="section-container">
          <p className="section-eyebrow">THE SUBEX PROMISE</p>
          <h2>
            The world no longer runs on information.
            <br />
            It runs on intent. So do we.
          </h2>
          <p>
            Subex brings an AI-first approach to fraud management, business
            assurance, and partner ecosystem management—helping operators
            anticipate outcomes, not just react to them.
          </p>
          <a href="/request-demo/" className="primary-button">
            Request Demo <span>↗</span>
          </a>
          <a href="/contact/" className="secondary-button">
  Contact Us <span>↗</span>
</a>
        </div>
      </section>

      
<footer className="site-footer">
  <div className="section-container footer-main">
    <div className="footer-office">
      <h3>Our Offices</h3>

      <select
        className="office-select"
        value={selectedOffice}
        onChange={(event) =>
          setSelectedOffice(
            event.target.value as keyof typeof officeLocations
          )
        }
        aria-label="Select Subex office"
      >
        {Object.entries(officeLocations).map(([key, office]) => (
          <option value={key} key={key}>
            {office.label}
          </option>
        ))}
      </select>

      <address className="office-address">
        <strong>{officeLocations[selectedOffice].name}</strong>
        <span>{officeLocations[selectedOffice].address}</span>
        {officeLocations[selectedOffice].contact && (
          <span>{officeLocations[selectedOffice].contact}</span>
        )}
      </address>
    </div>

    <div className="footer-link-column">
      <a href="/solutions/">Solutions</a>
      <a href="/services/">Services</a>
      <a href="/products/">Products</a>
      <a href="/press-release/">Press Release</a>
    </div>

    <div className="footer-link-column">
      <a href="/about-us/">About Subex</a>
      <a href="/management-team/">Management Team</a>
      <a href="/brand/">Brand</a>
      <a href="/investor/">Investor</a>
      <a href="/careers/">Careers</a>
      <a href="/contact/">Contact</a>
    </div>

    <div className="footer-link-column">
      <a href="/case-studies/">Case Studies</a>
      <a href="/flyers/">Flyers</a>
      <a href="/webinars/">Webinars</a>
      <a href="/whitepapers/">White Papers</a>
      <a href="/point-of-view/">Point of View</a>
      <a href="/blog/">Blogs</a>
    </div>
  </div>

  <div className="footer-bottom section-container">
    <div className="footer-legal">
      <a href="/privacy-policy/">Privacy Policy</a>
      <a href="/cookies/">Cookies</a>
    </div>

    <div className="footer-copyright">
      © Copyright SUBEX 2026. All Rights Reserved.
    </div>

    <div className="footer-socials" aria-label="Social media">
      <a href="https://www.linkedin.com/company/subex-ltd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <span className="social-letter">in</span>
      </a>
      <a href="https://www.facebook.com/SubexLimited/" target="_blank" rel="noreferrer" aria-label="Facebook">
        <span className="social-letter">f</span>
      </a>
      <a href="https://www.instagram.com/subexlimited/" target="_blank" rel="noreferrer" aria-label="Instagram">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" className="social-dot" />
        </svg>
      </a>
      <a href="https://x.com/subexlimited" target="_blank" rel="noreferrer" aria-label="X">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 3h4.5l11.5 18h-4.5L4 3Zm0 18 7-8m2-2 7-8" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </main>
  );
}
