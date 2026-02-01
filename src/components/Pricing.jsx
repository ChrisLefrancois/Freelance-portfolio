// src/components/Pricing.jsx
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="mt-4 text-center">3. Pricing</h2>

        <p className="pricing-subtitle">
          Every project is different. These ranges are here to give you clarity — final pricing depends on scope.
        </p>

        <div className="pricing-grid">
          <PricingCard
            badge="Starter"
            price="From $500–$900"
            forWho="Great for first-time websites"
            bullets={[
              "One-page website or landing page",
              "Responsive design",
              "Contact form",
              "Basic SEO setup",
              "Fast turnaround",
            ]}
          />

          <PricingCard
            badge="Business"
            price="From $1,500–$3,000"
            highlight
            forWho="Best all-around option"
            bullets={[
              "Multi-page site or small web app",
              "Booking / admin flow",
              "Payments or integrations (if needed)",
              "Clean, scalable structure",
              "Deployment + handoff",
            ]}
          />

          <PricingCard
            badge="Custom / Pro"
            price="$3,000+"
            forWho="For web apps & advanced features"
            bullets={[
              "Full custom web application",
              "Dashboards + automations",
              "E-commerce / ordering systems",
              "Reporting-friendly data structure",
              "Optional ongoing support",
            ]}
          />
        </div>

        <div className="pricing-cta">
          <p className="pricing-cta__text">
            Not sure what fits? I offer a <span className="pricing-cta__accent">free 15-minute intro call</span>.
          </p>

          <div className="pricing-cta__actions">
            <a className="btn button-submit" href="#contact">
              Contact me
            </a>
            <a className="btn pricing-secondary" href="#projects">
              See projects
            </a>
          </div>

          <p className="pricing-cta__small">Payment plans available for larger projects.</p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ badge, price, bullets, forWho, highlight = false }) {
  return (
    <div className={`pricing-card ${highlight ? "pricing-card--highlight" : ""}`}>
      <div className="pricing-card__top">
        <div className="pricing-card__badge">{badge}</div>
        <div className="pricing-card__price">{price}</div>
        <div className="pricing-card__for">{forWho}</div>
      </div>

      <ul className="pricing-card__list">
        {bullets.map((b, idx) => (
          <li key={idx}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
