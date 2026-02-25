import { useEffect, useState } from "react";
import { Link, NavLink, Route, Routes, useLocation } from "react-router-dom";

const CONTACT_PHONE_DISPLAY = "88979 47572";
const CONTACT_PHONE_LINK = "tel:+918897947572";
const SALON_ADDRESS = "1st Floor, Srini Gold Avenue, Opp: Vaishnaoi Enclave, Kompally - 500067";
const INSTAGRAM_URL = "https://www.instagram.com/ivoryglamstudio/";
const MAPS_URL = "https://maps.app.goo.gl/phV8DX7HEdTFFuQv5?g_st=iw";

const MEN_HAIR_CUT = [
  { service: "Hair Cut", price: "₹250" },
  { service: "Trimming / Shaving", price: "₹150" },
  { service: "Dry Head Massage (15 min)", price: "₹100" },
  { service: "Oil Massage (20 min)", price: "₹150" },
  { service: "Hair Wash & Blow Dry (L'Oreal)", price: "₹150" },
  { service: "Hair Wash & Blow Dry (Nashi)", price: "₹250" },
];

const MEN_HAIR_COLOR = [
  { service: "Beard Color", price: "₹250" },
  { service: "Hair Black Color / Henna", price: "₹600" },
  { service: "Global Hair Color (L'Oreal - Majirel)", price: "₹800" },
  { service: "Global Hair Color (Schwarzkopf)", price: "₹1000" },
  { service: "Global Hair Color (L'Oreal - iNOA)", price: "₹1200" },
];

const MEN_HAIR_SPA = [
  { service: "L'Oreal Smoothening", price: "₹799" },
  { service: "L'Oreal Anti-Hair Fall", price: "₹899" },
  { service: "L'Oreal Anti-Dandruff", price: "₹999" },
  { service: "Nashi Anti-Hair Fall", price: "₹1299" },
  { service: "Nashi Anti-Dandruff", price: "₹1399" },
  { service: "Nashi Filler Therapy Treatment", price: "₹1499" },
];

const MEN_HAIR_TREATMENTS = [
  { service: "Permanent Straightening", price: "₹2500 onwards" },
  { service: "Hair Botox", price: "₹3000 onwards" },
  { service: "Keratin", price: "₹3500 onwards" },
];

const MEN_PACKAGES = [
  {
    name: "Basic Plan",
    price: "₹659",
    items: ["Hair cut", "Beard (Trimming / Shaving)", "Oil massage", "Hair wash"],
  },
  {
    name: "Classic Plan",
    price: "₹999",
    items: ["Haircut", "Beard styling", "Oil massage", "De-tan (Face & Neck)"],
  },
  {
    name: "Premium Plan",
    price: "₹2899",
    items: [
      "Haircut + Hair spa + Hair wash",
      "Beard styling",
      "Seasoul cleanup",
      "Manicure + Pedicure (Dead Sea)",
    ],
  },
  {
    name: "Luxury Plan",
    price: "₹4999",
    items: [
      "Haircut + Hair spa + Hair wash",
      "Beard styling",
      "Manicure + Pedicure (Luxury)",
      "Brightening Facial / O3+ Radiance Facial",
    ],
  },
];

const WOMEN_HAIR_CUT = [
  { service: "Kids Hair Cut (Below 7 Years)", price: "₹500" },
  { service: "Hair Cut and Style", price: "₹800" },
  { service: "Creative Hair Cut", price: "₹1000" },
  { service: "Dry Head Massage (15 min)", price: "₹150" },
  { service: "Oil Massage (20 min)", price: "₹300" },
  { service: "Hair Wash & Blow Dry (L'Oreal)", price: "₹200" },
  { service: "Hair Wash & Blow Dry (Nashi)", price: "₹300" },
];

const WOMEN_HAIR_STYLING = [
  { service: "Straight Blow Dry", price: "₹500 onwards" },
  { service: "Blow-out / Blow-in", price: "₹800 onwards" },
  { service: "Straightening", price: "₹800 onwards" },
  { service: "Tong Curls", price: "₹1000" },
];

const WOMEN_HAIR_COLOR = [
  { service: "Hair Black Color / Henna", price: "₹800" },
  { service: "Global Hair Color (L'Oreal - Majirel)", price: "₹2500" },
  { service: "Global Hair Color (Schwarzkopf)", price: "₹2800" },
  { service: "Global Hair Color (L'Oreal - iNOA)", price: "₹3000" },
  { service: "Root Touch Up", price: "₹1000" },
  { service: "Highlight (Per Streak)", price: "₹300" },
  { service: "Global Highlights", price: "₹5000 onwards" },
  { service: "Balayage", price: "₹5500 onwards" },
];

const WOMEN_HAIR_SPA = [
  { service: "L'Oreal Smoothening", price: "₹1299" },
  { service: "L'Oreal Anti-Hair Fall", price: "₹1399" },
  { service: "L'Oreal Anti-Dandruff", price: "₹1499" },
  { service: "Nashi Anti-Hair Fall", price: "₹1499" },
  { service: "Nashi Anti-Dandruff", price: "₹1599" },
  { service: "Nashi Filler Therapy Treatment", price: "₹1699" },
];

const WOMEN_HAIR_TREATMENTS = [
  { service: "Permanent Straightening", price: "₹7000 onwards" },
  { service: "Hair Botox", price: "₹6000 onwards" },
  { service: "Nano Plastry", price: "₹6000 onwards" },
  { service: "Keratin", price: "₹5500 onwards" },
];

const WOMEN_THREADING = [
  { service: "Eyebrows", price: "₹60" },
  { service: "Upper Lip", price: "₹50" },
  { service: "Lower Lip / Chin", price: "₹50" },
  { service: "Sides", price: "₹50" },
  { service: "Forehead", price: "₹60" },
  { service: "Full Face", price: "₹200" },
];

const WOMEN_WAXING_COLUMNS = ["Basic", "Standard", "Premium", "Roll On"];
const WOMEN_WAXING_ROWS = [
  { service: "Upper Lip", prices: ["₹80", "₹100", "₹120", "₹120"] },
  { service: "Lower Lip", prices: ["₹80", "₹100", "₹120", "₹120"] },
  { service: "Chin & Jaw Line", prices: ["₹80", "₹100", "₹120", "₹120"] },
  { service: "Side Locks", prices: ["₹80", "₹100", "₹120", "₹120"] },
  { service: "Full Face", prices: ["₹250", "₹350", "₹450", "₹550"] },
  { service: "Under Arms", prices: ["₹150", "₹200", "₹250", "₹350"] },
  { service: "Full Arms", prices: ["₹350", "₹550", "₹650", "₹800"] },
  { service: "Half Legs", prices: ["₹350", "₹450", "₹550", "₹700"] },
  { service: "Full Legs", prices: ["₹500", "₹650", "₹850", "₹1000"] },
  { service: "Half Back / Front", prices: ["₹300", "₹400", "₹500", "₹650"] },
  { service: "Full Back / Front", prices: ["₹500", "₹700", "₹900", "₹1050"] },
  { service: "Bikini Wax", prices: ["₹500", "₹750", "₹1000", "-"] },
  { service: "Full Body Wax", prices: ["₹2000", "₹3000", "₹4000", "₹5000"] },
];

const DETAN_COLUMNS = ["Standard", "Premium"];
const DETAN_ROWS = [
  { service: "Face", prices: ["₹400", "₹500"] },
  { service: "Under Arms", prices: ["₹125", "₹150"] },
  { service: "Neck", prices: ["₹300", "₹400"] },
  { service: "Full Arms", prices: ["₹500", "₹600"] },
  { service: "Half Legs", prices: ["₹400", "₹500"] },
  { service: "Full Legs", prices: ["₹650", "₹800"] },
  { service: "Upper Back / Upper Front", prices: ["₹500", "₹600"] },
  { service: "Bikini", prices: ["₹300", "₹400"] },
  { service: "Full Body", prices: ["₹2200", "₹3000"] },
];

const CLEANUPS = [
  {
    service: "Seasoul Brazilian Skin Lightening Cleanup",
    price: "₹649",
    note:
      "Lightens, cleans and targets darkness with regular treatment; suitable for intimate-area care.",
  },
  {
    service: "Seasoul Organic Cleanup",
    price: "₹749",
    note: "Clarifies and cleanses skin while moisturizing, hydrating and smoothening.",
  },
  {
    service: "Ozone Glow4sure",
    price: "₹1249",
    note: "Ultimate shine boost.",
  },
];

const MANICURES = [
  { service: "Deluxe Manicure", price: "₹499" },
  { service: "Dead Sea Manicure", price: "₹599" },
  { service: "Luxury Manicure", price: "₹699" },
];

const PEDICURES = [
  { service: "Deluxe Pedicure", price: "₹499" },
  { service: "Dead Sea Pedicure", price: "₹599" },
  { service: "Luxury Pedicure", price: "₹799" },
];

const FACIALS = [
  { service: "Fruit Facial", price: "₹800" },
  { service: "Gold Facial", price: "₹1599" },
  { service: "Diamond Facial", price: "₹1999" },
  {
    service: "O3+ Radiance and Whitening Facial",
    price: "₹2999",
    note: "Whitening facial kit for tan and pigmented skin, radiance and shine.",
  },
  {
    service: "Bridal Glow",
    price: "₹3999",
    note: "Power-packed facial for bridal care; supports skin brightening and healthy glow.",
  },
];

const LUXURY_FACIALS = [
  {
    service: "Hydra Facial",
    price: "₹5000",
    note: "Deep pore cleaning with intense skin hydration.",
  },
  {
    service: "Korean Glass Skin Facial",
    price: "₹6000",
    note:
      "Hydrates, brightens, supports even tone, tightens pores, softens fine lines and boosts firmness.",
  },
];

const WOMEN_PACKAGES = [
  {
    name: "Basic Plan",
    price: "₹2499",
    items: [
      "Eyebrows + Upper lips + Forehead",
      "Waxing (Full arms, Underarms, Half legs)",
      "Manicure + Pedicure",
      "Fruit facial",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹4699",
    items: [
      "Creative haircut",
      "Waxing (Full arms, Underarms, Half legs, Full face)",
      "Manicure + Pedicure",
      "Gold facial",
    ],
  },
  {
    name: "Luxury Plan",
    price: "₹7999",
    items: [
      "Creative haircut + Hair spa + Hair wash",
      "Waxing (Full arms, Underarms, Half legs, Full face)",
      "Luxury Manicure + Pedicure",
      "O3+ Radiance and Whitening Facial",
    ],
  },
];

const BRIDAL_PACKAGES = [
  {
    name: "Pre Bridal Bride Package (Premium)",
    price: "₹4999",
    items: [
      "Facial Gold / Diamond",
      "Hands, legs, underarms & full-face waxing",
      "Dead Sea Manicure",
      "Dead Sea Pedicure",
      "Hair Spa L'Oreal",
    ],
  },
  {
    name: "Pre Bridal Groom Package (Premium)",
    price: "₹3999",
    items: [
      "Facial Gold / Diamond",
      "Hair & Beard",
      "Dead Sea Manicure",
      "Dead Sea Pedicure",
      "Hair Spa L'Oreal",
    ],
  },
  {
    name: "Pre Bridal Bride Package (Luxury)",
    price: "₹8999",
    items: [
      "Facial Bridal Glow",
      "Full body & full-face waxing",
      "Luxury Manicure",
      "Luxury Pedicure",
      "Hair Spa Nashi",
    ],
  },
  {
    name: "Pre Bridal Groom Package (Luxury)",
    price: "₹5999",
    items: [
      "Facial Bridal Glow",
      "Hair & Beard",
      "Luxury Manicure",
      "Luxury Pedicure",
      "Hair Spa Nashi",
    ],
  },
];

const MAKEUP_PRICING = [
  { service: "Basic Makeup", price: "₹3000" },
  { service: "Party Makeup", price: "₹5000" },
  { service: "Engagement Makeup", price: "₹7000" },
  { service: "Hair Styling", price: "₹1500 onwards" },
  { service: "Saree Draping", price: "₹1000" },
  {
    service: "Bridal HD Makeup",
    price: "₹15000",
    note: "Includes Hair, Makeup and Saree Draping.",
  },
  {
    service: "Groom Makeup",
    price: "₹5000",
    note: "Includes Hair and Makeup.",
  },
];

const OUTDOOR_MAKEUP = [
  { service: "Within City", price: "₹1000" },
  { service: "Out of Station", price: "₹5000" },
];

function useRevealAnimations() {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);
}

function SimplePriceCard({ title, rows, note }) {
  return (
    <article className="price-card">
      <h3>{title}</h3>
      <table className="price-table">
        <tbody>
          {rows.map((row) => (
            <tr key={`${title}-${row.service}`}>
              <th scope="row">
                <span className="service-name">{row.service}</span>
                {row.note ? <small>{row.note}</small> : null}
              </th>
              <td>{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {note ? <p className="table-note">{note}</p> : null}
    </article>
  );
}

function TierPriceCard({ title, columns, rows, note }) {
  return (
    <article className="price-card">
      <h3>{title}</h3>
      <div className="tier-table-wrap">
        <table className="tier-table">
          <thead>
            <tr>
              <th>Service</th>
              {columns.map((column) => (
                <th key={`${title}-${column}`}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${title}-${row.service}`}>
                <th scope="row">{row.service}</th>
                {row.prices.map((price, index) => (
                  <td key={`${row.service}-${columns[index]}`}>{price}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? <p className="table-note">{note}</p> : null}
    </article>
  );
}

function PackageCards({ title, plans }) {
  return (
    <div>
      <div className="section-title-row">
        <p className="eyebrow">Packages</p>
        <h2>{title}</h2>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article className="plan-card" key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul className="plan-list">
              {plan.items.map((item) => (
                <li key={`${plan.name}-${item}`}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      return;
    }
    const id = location.hash.slice(1);
    const element = document.getElementById(id);
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <div className="bg-shape bg-shape-one" />
      <div className="bg-shape bg-shape-two" />

      <header className="site-header container">
        <Link className="brand" to="/">
          <img className="brand-logo" src="/ivory-glam-logo.svg" alt="IGS logo" />
          <span className="brand-text">
            <span className="brand-top">IVORY GLAM</span>
            <span className="brand-main">Studio</span>
          </span>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          Menu
        </button>

        <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" end>
            Home
          </NavLink>
          <Link to="/#services">Services</Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <NavLink to="/pricing">Pricing</NavLink>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
      </header>

      {children}

      <footer className="site-footer" id="contact">
        <div className="container footer-grid">
          <div>
            <h3>Ivory Glam Studio & Unisex Salon</h3>
            <p>Hair | Skin | Makeup</p>
          </div>
          <div>
            <h4>Booking</h4>
            <p>
              Phone: <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE_DISPLAY}</a>
            </p>
            <p>Email: hello@ivoryglamstudio.com</p>
            <p>
              Instagram:{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                @ivoryglamstudio
              </a>
            </p>
          </div>
          <div>
            <h4>Address</h4>
            <p>{SALON_ADDRESS}</p>
            <p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </p>
          </div>
          <div>
            <h4>Business Hours</h4>
            <p>Mon-Sat: 9:00 AM - 8:30 PM</p>
            <p>Sunday: 8:00 AM - 9:30 PM</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero container reveal">
        <div className="hero-content">
          <p className="eyebrow">Hair | Skin | Makeup</p>
          <h1>Ivory Glam Studio</h1>
          <p className="lead">
            Premium unisex salon experience with precision styling, skin services, bridal prep,
            and makeup designed for modern elegance.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-ghost" to="/pricing">
              View Full Price Menu
            </Link>
          </div>
        </div>

        <aside className="hero-panel">
          <p className="eyebrow">What Clients Love</p>
          <ul>
            <li>Personalized consultation before every session.</li>
            <li>Premium hygiene and curated product routines.</li>
            <li>Bridal and event-ready finish with lasting wear.</li>
          </ul>
          <div className="stats">
            <article>
              <h2>4.7+</h2>
              <p>Average Rating</p>
            </article>
            <article>
              <h2>1800+</h2>
              <p>Styled Looks</p>
            </article>
          </div>
        </aside>
      </section>

      <section className="section container reveal" id="services">
        <div className="section-title-row">
          <p className="eyebrow">Signature Services</p>
          <h2>Crafted for elegance and confidence</h2>
        </div>
        <div className="service-grid">
          <article className="service-card">
            <h3>Hair Couture</h3>
            <p>Hair cuts, color, spa, treatment and high-definition styling for all occasions.</p>
          </article>
          <article className="service-card">
            <h3>Bridal & Groom Studio</h3>
            <p>Pre-bridal skin and hair rituals plus event-ready makeup looks.</p>
          </article>
          <article className="service-card">
            <h3>Skin & Facial Rituals</h3>
            <p>De-tan, cleanup, classic facials and luxury skin hydration therapies.</p>
          </article>
          <article className="service-card">
            <h3>Nail Lounge</h3>
            <p>Deluxe, Dead Sea and Luxury manicure-pedicure care for polished results.</p>
          </article>
        </div>
      </section>

      <section className="section split-layout container reveal">
        <article className="split-copy">
          <p className="eyebrow">Studio Atmosphere</p>
          <h2>Ivory calm. Peach warmth. Black contrast.</h2>
          <p>
            Our interiors are intentionally minimal but luxurious, with flattering tones and soft
            contrast that make every makeover pop naturally in photos and real life.
          </p>
        </article>
        <div className="mood-grid">
          <div className="mood-card mood-card-one">Bridal Prep</div>
          <div className="mood-card mood-card-two">Color Bar</div>
          <div className="mood-card mood-card-three">Nail Rituals</div>
        </div>
      </section>

      <section className="book-banner container reveal" id="book">
        <p className="eyebrow">Reserve Your Slot</p>
        <h2>Ready for your next glam session?</h2>
        <p>
          Call <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE_DISPLAY}</a> and visit us at {SALON_ADDRESS}
        </p>
        <a className="btn btn-ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
          Visit Instagram
        </a>
      </section>
    </main>
  );
}

function PricingPage() {
  return (
    <main className="container">
      <section className="pricing-hero reveal">
        <p className="eyebrow">Official Price Menu</p>
        <h1>Ivory Glam Studio & Unisex Salon</h1>
        <p className="lead">
          Complete service pricing for Men, Women, Bridal and Makeup. Hair treatment prices vary
          by hair length, density and consultation.
        </p>
      </section>

      <section className="pricing-jump reveal">
        <a href="#men-pricing">Men</a>
        <a href="#women-pricing">Women</a>
        <a href="#bridal-pricing">Bridal</a>
        <a href="#makeup-pricing">Makeup</a>
      </section>

      <section className="section reveal" id="men-pricing">
        <div className="section-title-row">
          <p className="eyebrow">Men</p>
          <h2>Hair, color, spa and treatments</h2>
        </div>
        <div className="pricing-grid-two">
          <SimplePriceCard title="Men's Hair Cut" rows={MEN_HAIR_CUT} />
          <SimplePriceCard title="Men's Hair Color" rows={MEN_HAIR_COLOR} />
          <SimplePriceCard title="Men's Hair Spa" rows={MEN_HAIR_SPA} />
          <SimplePriceCard
            title="Men's Hair Treatments"
            rows={MEN_HAIR_TREATMENTS}
            note="Treatment rates are starting prices and depend on hair length."
          />
        </div>
      </section>

      <section className="section reveal">
        <PackageCards title="Men's Packages" plans={MEN_PACKAGES} />
      </section>

      <section className="section reveal" id="women-pricing">
        <div className="section-title-row">
          <p className="eyebrow">Women</p>
          <h2>Comprehensive beauty menu</h2>
        </div>
        <div className="pricing-grid-two">
          <SimplePriceCard title="Women's Hair Cut" rows={WOMEN_HAIR_CUT} />
          <SimplePriceCard title="Hair Styling" rows={WOMEN_HAIR_STYLING} />
          <SimplePriceCard title="Women's Hair Color" rows={WOMEN_HAIR_COLOR} />
          <SimplePriceCard title="Women's Hair Spa" rows={WOMEN_HAIR_SPA} />
          <SimplePriceCard
            title="Women's Hair Treatments"
            rows={WOMEN_HAIR_TREATMENTS}
            note="Treatment rates are starting prices and vary by consultation."
          />
          <SimplePriceCard title="Threading" rows={WOMEN_THREADING} />
        </div>
      </section>

      <section className="section reveal">
        <TierPriceCard
          title="Waxing Services"
          columns={WOMEN_WAXING_COLUMNS}
          rows={WOMEN_WAXING_ROWS}
          note="Peel Off Wax Underarms: ₹350"
        />
      </section>

      <section className="section reveal">
        <TierPriceCard title="De-Tan / Bleach Services" columns={DETAN_COLUMNS} rows={DETAN_ROWS} />
      </section>

      <section className="section reveal">
        <div className="pricing-grid-two">
          <SimplePriceCard title="Clean Ups" rows={CLEANUPS} />
          <SimplePriceCard title="Manicures" rows={MANICURES} />
          <SimplePriceCard title="Pedicures" rows={PEDICURES} />
          <SimplePriceCard title="Facials" rows={FACIALS} />
          <SimplePriceCard title="Luxury Facials" rows={LUXURY_FACIALS} />
        </div>
      </section>

      <section className="section reveal">
        <PackageCards title="Women's Packages" plans={WOMEN_PACKAGES} />
      </section>

      <section className="section reveal" id="bridal-pricing">
        <PackageCards title="Pre-Bridal Packages" plans={BRIDAL_PACKAGES} />
      </section>

      <section className="section reveal" id="makeup-pricing">
        <div className="section-title-row">
          <p className="eyebrow">Makeup</p>
          <h2>Studio and outdoor bookings</h2>
        </div>
        <div className="pricing-grid-two">
          <SimplePriceCard title="Makeup Menu" rows={MAKEUP_PRICING} />
          <SimplePriceCard title="Outdoor Makeup Charges" rows={OUTDOOR_MAKEUP} />
        </div>
      </section>

      <section className="book-banner reveal pricing-note-banner">
        <p className="eyebrow">Thank You | Visit Again</p>
        <h2>IVORY GLAM STUDIO & UNISEX SALON</h2>
        <p>{SALON_ADDRESS}</p>
        <p>
          Call now: <a href={CONTACT_PHONE_LINK}>{CONTACT_PHONE_DISPLAY}</a>
        </p>
        <p>
          Instagram:{" "}
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            @ivoryglamstudio
          </a>
        </p>
      </section>
    </main>
  );
}

export default function App() {
  useRevealAnimations();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Layout>
  );
}
