// sidebars.ts
module.exports = {
  docsSidebar: [
    'Intro',
    'Why-vex',
    'Vex-vs-other-exchanges',
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/Signing-up',
        'getting-started/Trading-on-vex',
        'getting-started/Order-types',
        'getting-started/Portfolio-page',
        'getting-started/Testnet-faucet',
        'getting-started/Fees',
      ],
    },
    {
      type: 'category',
      label: 'Exchange Design',
      items: [
        {
          type: 'category',
          label: 'Backend Architecture',
          items: [
            'exchange-design/backend-architecture/Introduction',
            'exchange-design/backend-architecture/System_Overview',
            'exchange-design/backend-architecture/User_Interaction_Layer',
            'exchange-design/backend-architecture/Client_Gateway',
            'exchange-design/backend-architecture/Order_Management_System',
            'exchange-design/backend-architecture/Order_Flow_Lifecycle',
            'exchange-design/backend-architecture/Order_Routing_System',
            'exchange-design/backend-architecture/Matching_Engines',
            'exchange-design/backend-architecture/Post_Trade_Operations',
            'exchange-design/backend-architecture/Market_Data_Infrastructure',
          ]
        },
        {
          type: 'category',
          label: 'Order Matching',
          items: [
            'exchange-design/order-matching/Introduction',
            'exchange-design/order-matching/Orderbook',
            'exchange-design/order-matching/Provable_Orderbook',
          ]
        },
        'exchange-design/order-settlement',
      ],
    },
    'faq',
    'referrals',
    'brand-kit',
    'for-developers',
  ],
};