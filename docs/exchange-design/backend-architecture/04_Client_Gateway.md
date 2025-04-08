---
id: Client_Gateway
title: Client Gateway
sidebar_position: 4
---

# Client Gateway

The **Client Gateway (CG)** is a stateless, high-speed microservice that sits between external clients and the internal core of the exchange. It is responsible for validating incoming requests before they reach sensitive components like the Order Management System (OMS). Multiple CG instances can be deployed in parallel to support scaling and redundancy, and they are typically accessed through a Load Balancer.

This gateway performs a series of critical checks to ensure only valid and secure requests are allowed through. These checks are fast, efficient, and designed to minimize overhead while maintaining security and compliance.

## Responsibilities of the Client Gateway

- **Session Validation**  
  Verifies that the request includes a valid session token, API key, or HMAC signature. Invalid or expired sessions are rejected immediately.

- **API Request Validation**  
  Ensures the structure of the incoming request matches expected formats. This is especially critical for FIX messages, which require strict field definitions.

- **Rate Limiting**  
  Applies per-user or per-IP limits to prevent abuse and protect internal resources. Configurable thresholds are enforced for both REST and FIX traffic.

- **Protocol Conversion**  
  If a FIX message is received, it is normalized into the exchange's internal request format before forwarding. This ensures a unified downstream interface regardless of the incoming protocol.

## Performance

The CG is optimized for ultra-low latency:

- Fast validation pipeline using local or in-memory data
- Stateless design enables horizontal scaling with zero warm-up time
- Designed to operate well under high concurrency and DDOS-mitigation setups

> _The CG acts as a smart filter: enforcing policy, validating integrity, and translating protocols—all before a request reaches the core trading engine._
