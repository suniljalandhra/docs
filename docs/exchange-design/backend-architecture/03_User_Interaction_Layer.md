# User Interaction Layer

The user interaction layer serves as the primary entry point into the exchange system. It handles external client connections, processes incoming trading requests, and ensures that only valid, authenticated traffic reaches the core systems. This layer is built to support both REST and FIX protocols to accommodate a wide range of clients—from browser-based traders to institutional algorithmic systems.

When a user submits an order, the request first passes through a **Load Balancer** that distributes traffic across multiple **Client Gateway (CG)** instances. These gateways are stateless and horizontally scalable, making it easy to scale based on traffic volume or failover scenarios.

Each **Client Gateway** is responsible for the following:

- **Session Validation**: Ensures the user's session token or API key is valid and not expired.
- **Request Format Validation**: Checks the structure and completeness of the order request.
- **Rate Limiting**: Enforces per-user or per-IP request rate limits to prevent abuse or system overload.
- **Protocol Conversion**: Converts FIX messages into a normalized format if needed before forwarding them into the core exchange.

Once a request passes all these checks, it is deemed valid and is handed off to the Order Management System (OMS) for further processing.

> _This layer is optimized for security, compliance, and speed, acting as a gatekeeper between the external world and the high-performance internals of the exchange._
