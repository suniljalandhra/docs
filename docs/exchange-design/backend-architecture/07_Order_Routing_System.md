---
id: Order_Routing_System
title: Order Routing System
sidebar_position: 7
---

# Order Routing System

The **Order Routing System** is responsible for directing validated orders from the OMS to the appropriate Matching Engine. It ensures that each order reaches the correct destination based on the trading pair (e.g., BTC/USDC, ETH/USDC).

This component is designed for ultra-low latency and uses **UDP** to transmit orders efficiently. Since matching engines are isolated per trading pair and often run on separate machines, UDP helps avoid the overhead of traditional transport protocols.

## Key Points

- Uses **symbol-based routing** to determine the target Matching Engine.
- **UDP transport** is used for speed and simplicity in one-way communication.
- Designed to be stateless, allowing horizontal scaling and easy failover.

> _This system acts as a lightweight and fast bridge between the core logic of the exchange and its execution layer._
