// sidebars.js or sidebars.ts
module.exports = {
  docsSidebar: [
    'what-is-vex',
    'why-vex',
    'vex-vs-other-exchanges',
    'faq',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/signing-up',
        'getting-started/trading-on-vex',
        'getting-started/order-types',
        'getting-started/portfolio-page',
        'getting-started/testnet-faucet',
        'getting-started/fees',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Design',
      items: [
        'exchange-design/order-matching',
        'exchange-design/order-settlement',
      ],
    },
    'referrals',
    'membership',
    'brand-kit',
    'for-developers',
  ],
};