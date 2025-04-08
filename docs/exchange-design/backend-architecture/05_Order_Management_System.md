# Order Management System (OMS)

The **Order Management System (OMS)** is the central brain of the exchange. It handles the complete lifecycle of every order—receiving, validating, risk-checking, routing, and updating positions. The OMS is optimized for sub-millisecond processing at scale.

Once an order passes through the Customer Gateway, it is forwarded to the OMS, which operates on the same machine as the Client Gateway via Inter-Process Communication (IPC). This co-location minimizes latency and allows the system to scale independently across machines.

## Core Responsibilities

- **Order Validation**
  - Ensures the order has all required fields (symbol, quantity, side, etc.)
  - Rejects invalid or unsupported order types

- **Risk Checks**
  - Consults the **Risk Engine** to validate if the user has sufficient balance and margin
  - Uses the **Risk Cache** for near-instant lookups

- **Position Tracking**
  - Updates user positions through the **Position Keeper**
  - Syncs with the balance system asynchronously after order execution

- **Order Routing**
  - Sends validated orders to the appropriate **Matching Engine**
  - Uses **UDP** for ultra-fast delivery

- **Response Handling**
  - Generates internal acknowledgments or rejections
  - Forwards successful orders to the matching engine and logs the request for recovery

## Internal Components

- **Risk Engine**: Evaluates the user's available balance and current exposure.
- **Risk Cache**: Holds recent risk state data for low-latency access.
- **Position Keeper**: Manages real-time updates to open positions.
- **OrderBook Interface**: Coordinates with the engine's order book via the router.

The OMS is also responsible for ensuring that every incoming order goes through a consistent, audit-ready flow before reaching the matching layer. This ensures integrity, consistency, and compliance in trading operations.

> _With performance measured in microseconds, the OMS is built for environments where speed is not just a feature, but a requirement._
