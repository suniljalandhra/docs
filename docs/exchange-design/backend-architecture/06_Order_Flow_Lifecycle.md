# Order Flow Lifecycle

The order flow lifecycle describes the path a trading order takes from submission to execution and final reporting. Each stage in the lifecycle ensures the order is valid, secure, and processed with full compliance and integrity.

## Lifecycle Stages

1. **Order Submission**  
   The user sends an order via REST or FIX. The request is routed through a load balancer to a Client Gateway (CG).

2. **Session Validation**  
   The CG checks that the user's session or API credentials are valid and active. Invalid sessions are rejected immediately.

3. **Request Validation & Rate Limiting**  
   The CG verifies that the request format is correct and enforces any rate limiting or IP restrictions.

4. **Forward to OMS**  
   Validated requests are passed to the Order Management System (OMS) via Inter-Process Communication (IPC).

5. **Initial Processing**  
   The OMS checks that the order contains all required fields such as symbol, quantity, and order type.

6. **Order Routing**  
   Once the order passes validation and risk checks, it is routed to the appropriate Matching Engine for the trading pair.

7. **Order Matching**  
   The Matching Engine processes the order using price-time priority and attempts to match it against the live order book.

8. **Execution Report**  
    If matched, an execution report is generated and returned to the user via the same CG pathway.

9. **Asynchronous Updates**  
    Balance updates, position adjustments, and order archiving occur in the background to keep the flow lightweight and responsive.

> _This structured and streamlined lifecycle ensures reliable, scalable trade execution without compromising performance or control._
