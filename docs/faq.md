**FAQs**

**1. How decentralized is VEX?**

Decentralization in exchanges has often been a meme. While it comes with trade-offs, centralized exchanges typically sacrifice decentralization for performance — but the end user pays the price with a lack of security and transparency. On the other hand, decentralized exchanges prioritize decentralization but often suffer from poor performance.

At VEX, we believe not everything needs to be decentralized and that's why our order matching is off-chain while our order settlement is on-chain. To add, our orderbooks are kept off-chain to maximize performance and maintain low latency but keeping in mind that they are secured with full integrity using zero-knowledge proofs, ensuring all trades are verifiable without trusting any single party or backend. To further harden security, we leverage Trusted Execution Environments (TEEs) on the backend, allowing sensitive operations to run even more securely, even in untrusted environments.

**2. What are zk-proofs and how are they secure and transparent?**

Zero-knowledge proofs allow one party to prove something is true without revealing any extra information — like proving you know a password without actually showing it. In the context of VEX, zk-proofs are generated for all transactions, and these proofs are then settled and verifiable on-chain. Because only the proof — not the full transaction details — is exposed, the chances of MEV attacks like frontrunning and sandwich attacks are drastically reduced as searchers and node operators can only see that a transaction is valid, but they can’t see sensitive information like the exact timing or full trade details. At the same time, transparency is fully preserved because all transactions are verifiable on-chain with complete integrity.

For a more in-depth explanition refer: 

**3. What if the exchange gets hacked or stops taking orders?**

If VEX ever stops working or fails to generate zk-proofs, you can use the escape hatch feature to forcefully withdraw your funds directly from the smart contract — no middlemen or questions asked. Your assets stay under your control at all times, no matter what happens to the platform.

**4. Are my transactions on VEX private or publicly visible?**

All of your transactions are private yet publicly verifiable on the blockchain. 

**5. Is VEX custodial or non-custodial?**

VEX is fully non-custodial where you trade on your behalf. 

