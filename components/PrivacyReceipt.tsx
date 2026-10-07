"use client";

import { useEffect, useState } from "react";

type ReceiptState = {
  language: string;
  localVisitNumber: number;
  referrer: string;
  timezone: string;
  viewport: string;
};

const defaultReceipt: ReceiptState = {
  language: "Checking",
  localVisitNumber: 1,
  referrer: "Checking",
  timezone: "Checking",
  viewport: "Checking",
};

export function PrivacyReceipt() {
  const [receipt, setReceipt] = useState<ReceiptState>(defaultReceipt);

  useEffect(() => {
    const visitKey = "br_visit_count";
    const storedVisits = Number.parseInt(localStorage.getItem(visitKey) || "0", 10);
    const localVisitNumber = Number.isFinite(storedVisits) ? storedVisits + 1 : 1;
    localStorage.setItem(visitKey, String(localVisitNumber));

    setReceipt({
      language: navigator.language || "Unknown",
      localVisitNumber,
      referrer: document.referrer || "Direct visit / hidden by browser",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "Unknown",
      viewport: `${window.innerWidth} x ${window.innerHeight}`,
    });
  }, []);

  return (
    <div className="privacy-receipt">
      <p>
        Visit #{receipt.localVisitNumber} on this browser.
      </p>
      <p>
        This site does not know much about you. But before you type a word, your
        browser already shares small clues - timezone, language, screen size, and
        whether you arrived directly or through another link.
      </p>
      <dl className="receipt-grid">
        <div>
          <dt>Timezone</dt>
          <dd>{receipt.timezone}</dd>
        </div>
        <div>
          <dt>Language</dt>
          <dd>{receipt.language}</dd>
        </div>
        <div>
          <dt>Viewport</dt>
          <dd>{receipt.viewport}</dd>
        </div>
        <div>
          <dt>Visit count</dt>
          <dd>{receipt.localVisitNumber}</dd>
        </div>
        <div className="wide">
          <dt>Referrer</dt>
          <dd>{receipt.referrer}</dd>
        </div>
      </dl>
      <p className="receipt-note">
        Later, this may become a proper privacy page. For now, it is a small
        reminder that the internet starts taking notes early.
      </p>
    </div>
  );
}
