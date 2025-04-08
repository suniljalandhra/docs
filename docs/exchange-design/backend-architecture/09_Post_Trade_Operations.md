# Post-Trade Operations

After a trade is executed, several post-trade tasks are handled asynchronously to avoid slowing down the critical path.

These operations include:

- **Balance Updates**  
  Adjusting user balances based on executed trades.

- **Position Updates**  
  Syncing updated positions to the persistent store.

All of these actions are decoupled from the real-time order flow to keep latency low and throughput high.
