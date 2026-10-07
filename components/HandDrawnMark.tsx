const steps = [
  { number: "1", title: "Actors", detail: "people · organizations · incentives", x: 450, y: 76 },
  { number: "2", title: "Flows", detail: "information · products · money · value", x: 690, y: 166 },
  { number: "3", title: "Systems", detail: "processes · technology · rules · constraints", x: 690, y: 350 },
  { number: "4", title: "Decisions", detail: "choices · trade-offs · coordination", x: 450, y: 448 },
  { number: "5", title: "Outcomes", detail: "results · friction · consequences", x: 210, y: 350 },
  { number: "6", title: "Feedback", detail: "learn · adapt · iterate", x: 210, y: 166 },
];

export function HandDrawnMark() {
  return (
    <section className="approach-section" aria-labelledby="approach-title">
      <div className="approach-heading">
        <p>My approach</p>
        <h2 id="approach-title">How I approach a system</h2>
      </div>

      <figure className="hand-drawn-mark">
        <svg
          className="systems-cycle systems-cycle-desktop"
          viewBox="-50 0 1000 560"
          role="img"
          aria-labelledby="systems-cycle-title systems-cycle-description"
        >
          <title id="systems-cycle-title">How I approach a complex system</title>
          <desc id="systems-cycle-description">
            A circular method that moves from actors to flows, systems, decisions,
            outcomes, and feedback, then repeats.
          </desc>
          <defs>
            <marker id="cycle-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" />
            </marker>
          </defs>

          <g className="cycle-connectors">
            <path d="M515 94 C585 102 635 118 662 143" />
            <path d="M735 205 C754 249 750 293 723 321" />
            <path d="M654 388 C595 425 538 440 499 441" />
            <path d="M401 441 C344 433 289 416 247 386" />
            <path d="M178 318 C151 275 153 224 179 191" />
            <path d="M238 139 C286 103 346 89 391 87" />
          </g>

          <g className="cycle-center">
            <path d="M358 224 C378 181 434 166 482 180 C530 194 554 241 538 283 C520 329 462 348 412 329 C363 311 339 266 358 224 Z" />
            <text x="450" y="222" textAnchor="middle">Understand</text>
            <text x="450" y="254" textAnchor="middle">Explain</text>
            <text x="450" y="286" textAnchor="middle">Improve</text>
            <path d="M404 302 C431 308 469 308 496 302" />
          </g>

          {steps.map((step) => (
            <g className={`cycle-step cycle-step-${step.number}`} transform={`translate(${step.x} ${step.y})`} key={step.title}>
              <ellipse className="cycle-blob" cx="0" cy="0" rx="112" ry="55" />
              <circle cx="-72" cy="-7" r="17" />
              <text className="cycle-number" x="-72" y="-1" textAnchor="middle">{step.number}</text>
              <text className="cycle-title" x="-45" y="0">{step.title}</text>
              <text className="cycle-detail" x="-45" y="25" textAnchor="start">{step.detail}</text>
            </g>
          ))}

          <g className="cycle-questions">
            <text x="575" y="42"><tspan x="575">Who is involved?</tspan><tspan x="575" dy="17">What do they want?</tspan></text>
            <text x="805" y="142"><tspan x="805">What moves?</tspan><tspan x="805" dy="17">Where are the bottlenecks?</tspan></text>
            <text x="805" y="335"><tspan x="805">How does it work?</tspan><tspan x="805" dy="17">What limits it?</tspan></text>
            <text x="675" y="442"><tspan x="675">Who decides?</tspan><tspan x="675" dy="17">What are the trade-offs?</tspan></text>
            <text x="22" y="335"><tspan x="22">What happens?</tspan><tspan x="22" dy="17">What is unintended?</tspan></text>
            <text x="22" y="142"><tspan x="22">What do we learn?</tspan><tspan x="22" dy="17">What changes next?</tspan></text>
          </g>

          <text className="cycle-principle" x="450" y="520" textAnchor="middle">
            Understand the system before you optimize it.
          </text>
        </svg>

        <ol className="systems-cycle-mobile" aria-label="How I approach a system">
          {steps.map((step) => (
            <li key={step.title}>
              <span className="mobile-cycle-number">{step.number}</span>
              <span><strong>{step.title}</strong><small>{step.detail}</small></span>
            </li>
          ))}
        </ol>
        <figcaption>Understand the system before you optimize it.</figcaption>
      </figure>
    </section>
  );
}
