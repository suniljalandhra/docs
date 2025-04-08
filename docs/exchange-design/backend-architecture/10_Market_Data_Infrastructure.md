---
id: Market_Data_Infrastructure
title: Market Data Infrastructure
sidebar_position: 10
---

# Market Data Infrastructure

The Market Data Infrastructure is responsible for distributing real-time updates to connected clients. These updates include price changes, order book depth, and recent trades.

## Components

- **Transit Gateway**  
  Collects market data from Matching Engines and forwards it to distribution endpoints.

- **Multicast Fanout**  
  Distributes real-time data to subscribed clients using multicast for low-latency, high-throughput delivery.

## Data Types Published

- Order book snapshots and deltas
- Trade tick data (price, volume, side)
- Ticker updates (last price, 24h volume, high/low)

This system is designed to scale horizontally and deliver consistent, timely data for trading, analytics, and user interfaces.
