const internalSystems = [
  "ERP and orders",
  "Planning",
  "Inventory",
  "Quality",
  "Warehouse",
  "Finance",
] as const;

const networkPartners = [
  "Suppliers",
  "CMO / CDMO",
  "External labs",
  "Packagers",
  "Carriers",
  "3PLs",
  "Distributors",
  "Customers",
] as const;

const maturityLevels = [
  ["01", "Inside the wall", "Your own orders, inventory, milestones, and transactions."],
  ["02", "Partner status", "Selected external events arrive from individual partners."],
  ["03", "Cross-partner process", "Evidence connects around one end-to-end business process."],
  ["04", "Network context", "Events are interpreted against demand, inventory, product, and market impact."],
  ["05", "Coordinated action", "Evidence reliably drives an owned, governed next step."],
] as const;

export function FourWallsNetworkVisual() {
  return (
    <figure className="visibility-visual visibility-boundary-visual">
      <div className="visibility-boundary-grid">
        <section className="four-wall-panel" aria-labelledby="four-wall-heading">
          <p className="visibility-kicker">Controlled boundary</p>
          <h3 id="four-wall-heading">Inside the four walls</h3>
          <div className="four-wall-systems">
            {internalSystems.map((system) => <span key={system}>{system}</span>)}
          </div>
          <p className="visibility-panel-note">Deep internal integration can make this view accurate, current, and complete.</p>
        </section>

        <div className="visibility-boundary-shift" aria-hidden="true">
          <span>Boundary expands</span>
          <strong>→</strong>
        </div>

        <section className="network-panel" aria-labelledby="network-heading">
          <p className="visibility-kicker">Independent organizations</p>
          <h3 id="network-heading">The operating network</h3>
          <div className="network-map">
            <strong className="network-hub">Brand owner</strong>
            {networkPartners.map((partner) => <span key={partner}>{partner}</span>)}
          </div>
          <p className="visibility-panel-note">Critical evidence now depends on participation, shared meaning, timing, identity, and permission.</p>
        </section>
      </div>
      <figcaption>
        <strong>Your systems can be integrated and your network can still be fragmented.</strong> Internal clarity does not guarantee visibility into the external milestones that determine supply performance.
      </figcaption>
    </figure>
  );
}

export function VisibilityMaturityVisual() {
  return (
    <figure className="visibility-visual maturity-visual">
      <ol className="maturity-ladder">
        {maturityLevels.map(([number, title, description]) => (
          <li key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ol>
      <figcaption>
        <strong>More data is not automatically more visibility.</strong> Each level adds identity, context, participation, governance, and workflow.
      </figcaption>
    </figure>
  );
}
