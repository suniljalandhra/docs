---
id: Matching_Engines
title: Matching Engines
sidebar_position: 8
---

# Matching Engines

Each trading pair is handled by a dedicated Matching Engine responsible for maintaining the order book and executing trades using a price-time priority algorithm. These engines are isolated and receive orders via UDP from the Order Router.

The Matching Engine operates statelessly, with all trade and order updates pushed back to the OMS and logged for recovery if needed.

<!-- ## Future Direction

In future versions, Matching Engines will generate **Zero-Knowledge Proofs (ZKPs)** to cryptographically prove that trades were matched correctly without revealing sensitive order data. This will improve auditability and trust in the system. -->