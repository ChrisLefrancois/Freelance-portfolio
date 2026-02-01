// src/components/Services.jsx
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="mt-4 text-center">2. Services</h2>

        <p className="services-subtitle">
          I build modern, reliable web apps for small businesses — with a practical approach to operations and numbers.
        </p>

        <div className="services-grid">
          <ServiceCard
            title="Websites & Landing Pages"
            subtitle="Clean, fast, mobile-friendly"
            bullets={[
              "Single-page or multi-page websites",
              "Responsive design (mobile / tablet / desktop)",
              "Contact forms + email notifications",
              "Basic SEO + performance setup",
              "Deployed and ready to share",
            ]}
            meta="Timeline: 5–7 days"
          />

          <ServiceCard
            title="Web Apps & Ordering Systems"
            subtitle="Custom tools to run your business"
            bullets={[
              "Ordering / booking flows",
              "Admin dashboards",
              "User accounts & authentication",
              "Stripe payments",
              "Secure data storage (MongoDB / PostgreSQL)",
            ]}
            meta="Timeline: 2–4 weeks"
          />

          <ServiceCard
            title="Automations & Integrations"
            subtitle="Reduce manual work and errors"
            bullets={[
              "Forms → email / Google Sheets",
              "Stripe / Shopify workflows",
              "Simple internal tools",
              "Reporting helpers",
              "Small improvements with big time savings",
            ]}
            meta="Great for recurring tasks"
          />

          <ServiceCard
            title="Tech + Bookkeeping Setup"
            subtitle="Tools that make financial sense"
            bullets={[
              "Payment & sales tracking setup",
              "Cleaner reporting structure",
              "Simple bookkeeping workflows",
              "Dashboards that match real operations",
              "Tech decisions with clarity on numbers",
            ]}
            meta="Best for small businesses"
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, subtitle, bullets, meta }) {
  return (
    <div className="service-card">
      <div className="service-card__header">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__subtitle">{subtitle}</p>
      </div>

      <ul className="service-card__list">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>

      <div className="service-card__meta">{meta}</div>
    </div>
  );
}
