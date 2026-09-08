const icons = {
  bank: '<path d="m3 9 9-6 9 6M3 21h18M5 10v8m5-8v8m4-8v8m5-8v8M3 9h18"/>',
  arrows: '<path d="M3 7h17m-5-5 5 5-5 5M21 17H4m5-5-5 5 5 5"/>',
  shield:
    '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M6 15h5"/>',
  crypto:
    '<path d="m12 2 8 5v10l-8 5-8-5V7l8-5Zm0 0v20M4 7l8 5 8-5M4 17l8-5 8 5"/>',
  screens:
    '<rect x="2" y="4" width="15" height="12" rx="2"/><path d="M6 20h7m-3-4v4"/><rect x="16" y="9" width="6" height="12" rx="1"/>',
  wallet:
    '<path d="M20 8V5H5a2 2 0 0 0 0 4h16v11H5a2 2 0 0 1-2-2V7"/><path d="M21 12h-6v4h6"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18M5 6h14M5 18h14"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  scan: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/><circle cx="12" cy="10" r="3"/><path d="M7 18c0-5 10-5 10 0"/>',
};
const modules = [
  {
    title: "Core banking engine",
    category: "banking",
    icon: "bank",
    featured: true,
    intro:
      "The foundation for accounts, balances and your day-to-day financial operations.",
    detail:
      "Multi-currency accounts, real-time ledger and balance tracking, configurable fees and limits, reconciliation and reporting.",
    tags: "Accounts · Ledger · Reconciliation",
  },
  {
    title: "SEPA payments",
    category: "banking",
    icon: "arrows",
    featured: true,
    intro:
      "Connect your customers to European payment rails through banking integrations.",
    detail:
      "SEPA Credit Transfer and SEPA Instant support, payment tracking, beneficiary checks and configurable transaction rules. Availability depends on the banking provider.",
    tags: "Transfers · Payment tracking",
  },
  {
    title: "KYC / KYB",
    category: "compliance",
    icon: "scan",
    featured: true,
    intro:
      "Make individual and business onboarding part of one connected experience.",
    detail:
      "Customisable onboarding flows, sanctions and PEP screening, and optional integrations with verification providers such as Sumsub, Onfido and Ondato.",
    tags: "Identity · Business verification",
  },
  {
    title: "Card issuing",
    category: "banking",
    icon: "card",
    featured: true,
    intro:
      "Put your brand in your customers’ hands with virtual and physical card programmes.",
    detail:
      "Configure prepaid or debit cards, spending limits and transaction controls. Card schemes and mobile-wallet support depend on the selected issuer and programme.",
    tags: "Virtual cards · Physical cards",
  },
  {
    title: "Crypto wallet & custody",
    category: "crypto",
    icon: "crypto",
    featured: true,
    intro:
      "Connect digital assets to your platform with wallet infrastructure and custody options.",
    detail:
      "An enterprise wallet module with MPC-based architecture, approval policies and external custody integrations. This is separate from SwissXO’s device-based self-custody product.",
    tags: "Digital assets · Wallet infrastructure",
  },
  {
    title: "Client mobile frontend",
    category: "experience",
    icon: "screens",
    featured: true,
    intro:
      "A mobile experience that feels like your brand, from onboarding to everyday use.",
    detail:
      "White-label iOS and Android interfaces for accounts, cards, wallets and onboarding, with configurable branding, languages and authentication.",
    tags: "iOS · Android · Your brand",
  },
  {
    title: "Back-office dashboard",
    category: "experience",
    icon: "grid",
    intro:
      "Give your team a central workspace for customers, transactions and operations.",
    detail:
      "Role-based access, KYC and AML case review, transaction visibility, fee and limit configuration, audit logs and exportable reports.",
    tags: "Operations · Roles · Reporting",
  },
  {
    title: "Client web frontend",
    category: "experience",
    icon: "screens",
    intro:
      "Bring your financial product to the browser with a branded customer portal.",
    detail:
      "Responsive web interfaces for onboarding, account management, payments and digital assets, tailored to your product’s branding and workflows.",
    tags: "Web portal · White-label",
  },
  {
    title: "AML & transaction monitoring",
    category: "compliance",
    icon: "shield",
    intro:
      "Bring transaction activity, risk signals and case handling into view.",
    detail:
      "Configurable risk scores and thresholds, sanctions screening, real-time and retrospective monitoring, and integrations for fiat and crypto risk analysis.",
    tags: "Risk rules · Screening · Case review",
  },
  {
    title: "Dedicated IBANs",
    category: "banking",
    icon: "bank",
    intro:
      "Enable named customer accounts through integrated banking providers.",
    detail:
      "Dedicated IBAN configurations for retail and business customers, with transaction tracking and reconciliation. Account issuance is subject to the provider’s eligibility and approval.",
    tags: "Named accounts · Banking integrations",
  },
  {
    title: "SWIFT payments",
    category: "banking",
    icon: "globe",
    intro: "Connect international payment journeys to your financial platform.",
    detail:
      "International transfer integration, payment status tracking, beneficiary checks and configurable limits through banking partners with access to the relevant networks.",
    tags: "International transfers · Tracking",
  },
  {
    title: "Currency wallets",
    category: "banking",
    icon: "wallet",
    intro:
      "Give customers one place to hold and manage multiple fiat currencies.",
    detail:
      "Send, receive and convert funds through integrated financial institutions. Supported currencies and wallet availability depend on your provider configuration.",
    tags: "Multi-currency · Balances",
  },
  {
    title: "Forex exchange",
    category: "banking",
    icon: "arrows",
    intro: "Make currency conversion a natural part of your customer journey.",
    detail:
      "FX rate integration, configurable spreads and fees, conversion tracking, and reporting for cross-border payments and treasury workflows.",
    tags: "FX · Conversion · Fee controls",
  },
  {
    title: "Open banking",
    category: "banking",
    icon: "bank",
    intro: "Connect bank account data and payment initiation to your product.",
    detail:
      "API-based account aggregation and payment initiation through open banking integrations. Provider and market availability are determined during scoping.",
    tags: "Account aggregation · Payment initiation",
  },
  {
    title: "Card acquiring",
    category: "banking",
    icon: "card",
    intro: "Support card payments and wallet top-ups within your platform.",
    detail:
      "Integrate card acceptance, 3D Secure, fraud controls and payment reporting through acquiring partners, configured around your merchant and product requirements.",
    tags: "Card acceptance · Top-ups",
  },
  {
    title: "Crypto swap integration",
    category: "crypto",
    icon: "arrows",
    intro:
      "Bring fiat-to-crypto and crypto-to-crypto exchange into the wallet experience.",
    detail:
      "Connect liquidity providers and internal routing for exchange journeys, with pricing and execution integrated into wallet and transaction flows.",
    tags: "Swaps · Liquidity · Exchange",
  },
];
const grid = document.querySelector("#module-grid");
function renderModules(filter) {
  const visible = modules.filter(
    (module) =>
      filter === "all" ||
      (filter === "featured" ? module.featured : module.category === filter),
  );
  grid.innerHTML = visible
    .map(
      (module) =>
        `<article class="module-card"><div class="module-card-top"><span class="module-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[module.icon]}</svg></span><span class="module-num">${String(modules.indexOf(module) + 1).padStart(2, "0")} / 16</span></div><h3>${module.title}</h3><p>${module.intro}</p><div class="module-tags">${module.tags}</div><details><summary>Explore module <span aria-hidden="true">+</span></summary><p>${module.detail}</p></details></article>`,
    )
    .join("");
}
renderModules("all");
document.querySelectorAll("[data-filter]").forEach((button) =>
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-pressed", String(selected));
    });
    renderModules(button.dataset.filter);
  }),
);
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  nav.classList.remove("open");
}
menu.addEventListener("click", () => {
  const expanded = menu.getAttribute("aria-expanded") === "true";
  menu.setAttribute("aria-expanded", String(!expanded));
  nav.classList.toggle("open", !expanded);
});
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) {
    closeMenu();
    menu.focus();
  }
});
const descriptions = {
  wallet:
    "SwissXO self-custody wallet showing assets and keys held on this device",
  wallets:
    "SwissXO wallet manager showing a primary wallet and an additional Trust Wallet account",
  portfolio:
    "SwissXO illustrative portfolio: USDT, USDC, ETH, TRX and BTC, totalling $111,068.40",
};
document.querySelectorAll("[data-screen]").forEach((button) =>
  button.addEventListener("click", () => {
    const screen = document.querySelector("#xo-screen");
    screen.src = `./swissxo-${button.dataset.screen}-funded.webp`;
    screen.alt = descriptions[button.dataset.screen];
    document.querySelectorAll("[data-screen]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }),
);
const dialog = document.querySelector("#contact-dialog");
const form = document.querySelector("#contact-form");
let opener;
function openContact(button, interest) {
  opener = button;
  closeMenu();
  if (interest) form.elements.interest.value = interest;
  document.querySelector("#form-status").textContent = "";
  dialog.showModal();
  document.body.classList.add("dialog-open");
}
document
  .querySelectorAll("[data-contact]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      openContact(button, button.dataset.interest),
    ),
  );
document
  .querySelectorAll("[data-solution]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      openContact(button, button.dataset.solution),
    ),
  );
document
  .querySelector(".close-dialog")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  }
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  opener?.focus();
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = `Swisstech enquiry: ${data.get("interest")}`;
  const body = `Hi Swisstech,\n\nI'm interested in ${data.get("interest")}.\n\n${data.get("message")}\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}`;
  const mailto = `mailto:contact@swisstech.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const status = document.querySelector("#form-status");
  status.textContent =
    "Your email draft is ready. If your email app did not open, email contact@swisstech.dev directly. No message has been sent by this website.";
  window.location.href = mailto;
});

// These interface concepts are illustrative. They never initiate financial actions.
const chart = `<div class="ui-chart"><svg viewBox="0 0 330 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 87L25 82L45 85L67 60L90 69L115 46L141 57L165 35L192 40L215 17L245 26L274 12L302 18L330 2L330 100H0Z" fill="currentColor" opacity=".07"/><path class="chart-path" d="M0 87L25 82L45 85L67 60L90 69L115 46L141 57L165 35L192 40L215 17L245 26L274 12L302 18L330 2" fill="none" stroke="currentColor" stroke-width="2"/></svg></div><div class="ui-chart-labels"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>`;
const productViews = {
  banking: `<div class="ops-shell">
  <aside class="ops-rail" aria-label="Example workspace navigation"><b>+</b><span class="selected" title="Overview">▦</span><span title="Profiles">◎</span><span title="Transactions">⇄</span><span title="Cards">▱</span><span title="Compliance">◇</span><span class="ops-rail-bottom" title="Settings">⚙</span></aside>
  <div class="ops-main">
    <div class="ops-heading"><div><small>YOUR OPERATIONS, CONNECTED</small><h3>Overview<span>.</span></h3></div><span class="ops-admin"><i>SW</i> Workspace <b>⌄</b></span></div>
    <div class="ops-summary"><div class="ops-treasury"><div><span>Total account value</span><i>↗</i></div><strong>€5,142,941<span>.06</span></strong><footer><span><i class="ops-live"></i> Across your accounts</span><b>EUR equivalent</b></footer></div><div class="ops-health"><span>Operations status</span><div class="health-orbit"><span>✓</span></div><b>All clear</b><small>No AML transfer issues</small></div></div>
    <div class="ops-queues"><button data-queue="messages" aria-pressed="false"><span class="ops-queue-icon violet">✉</span><span>Unread messages<strong>18</strong></span><i>↗</i></button><button data-queue="documents" aria-pressed="false"><span class="ops-queue-icon amber">▤</span><span>Pending documents<strong>04</strong></span><i>↗</i></button><button data-queue="risk" aria-pressed="false"><span class="ops-queue-icon mint">◇</span><span>AML issues<strong>00</strong></span><i>↗</i></button></div>
    <div class="ops-queue-detail" hidden aria-live="polite"></div>
    <div class="ops-analytics"><div class="ops-growth"><div class="ops-card-heading"><span>Registered users</span><div class="ops-periods" role="group" aria-label="User growth period"><button data-period="30" aria-pressed="true">30D</button><button data-period="90" aria-pressed="false">90D</button></div></div><div class="ops-growth-number"><strong data-user-total>484</strong><span data-user-change>↗ 5.0%</span><small data-period-caption>vs. previous month</small></div><div class="ops-chart" role="img" aria-label="Illustrative user growth over 30 days, ending at 484 users"><svg viewBox="0 0 480 140" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="growth-fill" x1="0" x2="0" y1="0" y2="1"><stop stop-color="currentColor" stop-opacity=".2"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient></defs><path class="ops-gridlines" d="M0 20H480M0 60H480M0 100H480"/><path data-growth-area d="M0 118C40 118 40 100 80 105S135 65 180 80S245 93 285 58S330 70 370 37S425 45 480 12V140H0Z" fill="url(#growth-fill)"/><path class="ops-previous-line" d="M0 126C70 112 90 125 150 103S225 110 280 85S350 94 405 70S440 79 480 57"/><path data-growth-line d="M0 118C40 118 40 100 80 105S135 65 180 80S245 93 285 58S330 70 370 37S425 45 480 12" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="480" cy="12" r="4" fill="currentColor"/></svg></div><div class="ops-chart-axis"><span data-chart-start>01 JUN</span><span data-chart-mid>15 JUN</span><span data-chart-end>30 JUN</span></div><div class="ops-legend"><span><i></i> Current period</span><span><i></i> Previous period</span></div></div><div class="ops-customers"><div class="ops-card-heading">Customer mix</div><div class="ops-donut" role="img" aria-label="Customer mix: Business 60%, Personal 30%, Premium 10%"><div><strong>484</strong><small>ACCOUNTS</small></div></div><div class="ops-mix"><span><i></i>Business <b>60%</b></span><span><i></i>Personal <b>30%</b></span><span><i></i>Premium <b>10%</b></span></div></div></div>
    <div class="ops-transactions"><div class="ops-card-heading"><span>Latest transactions</span><span class="ops-table-note">EXAMPLE ACTIVITY</span></div><div class="ops-transaction"><i>↙</i><span><b>Incoming transfer</b><small>SEPA · Business account</small></span><span class="ops-amount">+ €12,500.00<small>Completed</small></span></div><div class="ops-transaction"><i>↗</i><span><b>Supplier payment</b><small>SWIFT · Business account</small></span><span class="ops-amount">− €4,280.00<small>Completed</small></span></div></div>
  </div></div>`,
  payments: `<div class="ui-heading"><div><small>PAYMENTS & CARD PROGRAMMES</small><h3>Your brand. In their hands.</h3></div><span>Activity ⌄</span></div><div class="payment-layout"><div class="ui-card-wide"><span>yourbrand <i>✳</i></span><b>•••• &nbsp; •••• &nbsp; 2084</b><small>BUSINESS / VIRTUAL CARD</small></div><div><div class="ui-row"><i>↗</i><div><strong>Supplier payment</strong><small>EUR · SEPA transfer</small></div><b>€8,420</b></div><div class="ui-row"><i>↙</i><div><strong>Incoming payment</strong><small>CHF · Bank transfer</small></div><b>₣12,500</b></div><div class="ui-row"><i>▱</i><div><strong>Card purchase</strong><small>Virtual card · 2084</small></div><b>€240</b></div></div></div><div class="ui-row"><i>✓</i><div><strong>Rules that work your way</strong><small>Configure limits, permissions and spending controls.</small></div></div>`,
  compliance: `<div class="ui-heading"><div><small>IDENTITY & RISK WORKSPACE</small><h3>Clarity at every step.</h3></div><span>Case review ⌄</span></div><div class="ui-stat-strip"><div><small>Verified profiles</small><strong>124 <i>✓</i></strong></div><div><small>Business reviews</small><strong>08</strong></div><div><small>Open alerts</small><strong>03</strong></div></div><div class="ui-row"><i>◇</i><div><strong>Individual onboarding</strong><small>Identity check · KYC workflow</small></div><em>Verified</em></div><div class="ui-row"><i>▦</i><div><strong>Business onboarding</strong><small>Company verification · KYB workflow</small></div><em class="review">In review</em></div><div class="ui-row"><i>⌘</i><div><strong>Transaction monitoring</strong><small>Custom rules · Case management</small></div><em>Screened</em></div>`,
  crypto: `<div class="ui-heading"><div><small>DIGITAL ASSET WORKSPACE</small><h3>Connect the next economy.</h3></div><span>Wallets & exchange</span></div><div class="payment-layout"><div class="ui-swap"><div><span>From · EUR</span><strong>1,000</strong></div><div class="swap-divider">⇅</div><div><span>To · USDC</span><strong>1,080</strong></div><p>Illustrative quote · Not a live rate</p></div><div><div class="ui-row"><i>₿</i><div><strong>Bitcoin</strong><small>BTC wallet</small></div><b>0.042 BTC</b></div><div class="ui-row"><i>Ξ</i><div><strong>Ethereum</strong><small>ETH wallet</small></div><b>1.50 ETH</b></div><div class="ui-row"><i>$</i><div><strong>USD Coin</strong><small>USDC wallet</small></div><b>2,450 USDC</b></div></div></div><div class="ui-row"><i>◇</i><div><strong>Your custody configuration</strong><small>Wallet policies, approvals and liquidity integrations.</small></div></div>`,
};
const productContent = document.querySelector("#product-content");
const productPanel = document.querySelector("#product-panel");
const productTabs = [...document.querySelectorAll("[data-product]")];
function selectProduct(button, focus = false) {
  productTabs.forEach((tab) => {
    const active = tab === button;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  productPanel.setAttribute("aria-labelledby", button.id);
  productContent.innerHTML = productViews[button.dataset.product];
  productPanel.dataset.product = button.dataset.product;
  if (focus) button.focus();
}
productTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectProduct(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = (index + 1) % productTabs.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = (index - 1 + productTabs.length) % productTabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = productTabs.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      selectProduct(productTabs[next], true);
    }
  });
});
selectProduct(productTabs[0]);
document.querySelectorAll("[data-theme]").forEach((button) =>
  button.addEventListener("click", () => {
    productPanel.dataset.colour = button.dataset.theme;
    document.querySelectorAll("[data-theme]").forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
  }),
);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector(".motion-toggle");
let userPaused = false;
function syncMotion() {
  const paused = userPaused || reducedMotion.matches;
  document.body.classList.toggle("motion-paused", paused);
  motionButton.setAttribute("aria-pressed", String(paused));
  motionButton.setAttribute(
    "aria-label",
    reducedMotion.matches
      ? "Motion disabled by system preference"
      : paused
        ? "Resume decorative motion"
        : "Pause decorative motion",
  );
  motionButton.innerHTML = reducedMotion.matches
    ? "○ <span>Reduced motion</span>"
    : paused
      ? "▷ <span>Resume motion</span>"
      : "Ⅱ <span>Pause motion</span>";
  motionButton.disabled = reducedMotion.matches;
}
motionButton.addEventListener("click", () => {
  userPaused = !userPaused;
  syncMotion();
});
reducedMotion.addEventListener("change", syncMotion);
syncMotion();
if ("IntersectionObserver" in window) {
  document.body.classList.add("motion-ready");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document
    .querySelectorAll(".reveal")
    .forEach((element) => revealObserver.observe(element));
}
const heroArt = document.querySelector(".hero-art");
heroArt.addEventListener("pointermove", (event) => {
  if (reducedMotion.matches || userPaused || event.pointerType !== "mouse")
    return;
  const rect = heroArt.getBoundingClientRect();
  heroArt.style.setProperty(
    "--pointer-x",
    `${((event.clientX - rect.left) / rect.width - 0.5) * 14}px`,
  );
  heroArt.style.setProperty(
    "--pointer-y",
    `${((event.clientY - rect.top) / rect.height - 0.5) * 10}px`,
  );
});
heroArt.addEventListener("pointerleave", () => {
  heroArt.style.setProperty("--pointer-x", "0px");
  heroArt.style.setProperty("--pointer-y", "0px");
});
let scrollFramePending = false;
function updateScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.querySelector(".scroll-progress").style.width =
    `${max > 0 ? Math.min(100, Math.max(0, (window.scrollY / max) * 100)) : 0}%`;
  document
    .querySelector(".header")
    .classList.toggle("scrolled", window.scrollY > 35);
  scrollFramePending = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scrollFramePending) {
      scrollFramePending = true;
      requestAnimationFrame(updateScroll);
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateScroll, { passive: true });
updateScroll();

// Open and filter the actual module library from every ecosystem entry point.
document.querySelectorAll("[data-modules]").forEach((link) =>
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const catalogue = document.querySelector("#modules");
    catalogue.open = true;
    document
      .querySelector('[data-filter="' + link.dataset.modules + '"]')
      .click();
    history.replaceState(null, "", "#modules");
    catalogue.querySelector("summary").focus({ preventScroll: true });
    catalogue.scrollIntoView({
      behavior: reducedMotion.matches ? "instant" : "smooth",
      block: "start",
    });
  }),
);
if (location.hash === "#modules")
  document.querySelector("#modules").open = true;

productContent.addEventListener("click", (event) => {
  const period = event.target.closest("[data-period]");
  if (period) {
    const longer = period.dataset.period === "90";
    productContent
      .querySelectorAll("[data-period]")
      .forEach((button) =>
        button.setAttribute("aria-pressed", String(button === period)),
      );
    productContent.querySelector("[data-user-change]").textContent = longer
      ? "↗ 18.6%"
      : "↗ 5.0%";
    productContent.querySelector("[data-period-caption]").textContent = longer
      ? "vs. previous quarter"
      : "vs. previous month";
    productContent.querySelector("[data-chart-start]").textContent = longer
      ? "01 APR"
      : "01 JUN";
    productContent.querySelector("[data-chart-mid]").textContent = longer
      ? "15 MAY"
      : "15 JUN";
    const path = longer
      ? "M0 129C40 126 45 115 80 114S130 90 180 94S240 63 285 68S335 39 370 44S435 22 480 12"
      : "M0 118C40 118 40 100 80 105S135 65 180 80S245 93 285 58S330 70 370 37S425 45 480 12";
    productContent.querySelector("[data-growth-line]").setAttribute("d", path);
    productContent
      .querySelector("[data-growth-area]")
      .setAttribute("d", path + "V140H0Z");
    productContent
      .querySelector(".ops-chart")
      .setAttribute(
        "aria-label",
        "Illustrative user growth over " +
          period.dataset.period +
          " days, ending at 484 users",
      );
  }
  const queue = event.target.closest("[data-queue]");
  if (queue) {
    const detail = productContent.querySelector(".ops-queue-detail");
    const wasOpen = queue.getAttribute("aria-pressed") === "true";
    productContent
      .querySelectorAll("[data-queue]")
      .forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button === queue && !wasOpen),
        ),
      );
    detail.hidden = wasOpen;
    detail.textContent = {
      messages:
        "18 unread conversations · 12 customer enquiries · 6 onboarding follow-ups",
      documents:
        "4 documents awaiting review · 2 proof of address · 2 company registrations",
      risk: "No open AML transfer issues in this example workspace. Screening and case review are available in the compliance module.",
    }[queue.dataset.queue];
  }
});
