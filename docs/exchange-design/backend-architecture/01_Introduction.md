---
id: Introduction
title: Introduction
sidebar_position: 1
---
# Introduction

This document explains the core architecture of our provable crypto exchange.

The system is designed for high performance, low-latency trading, and includes components like Client Gateways (CG), Order Management System (OMS), Matching Engines, and Market Data services.

Key features:

- Supports REST and FIX APIs
- Handles spot trading across multiple pairs
- Optimized for microsecond-level latency
- Uses UDP and IPC for fast internal communication
- Asynchronous balance updates and order archiving

The following sections break down each part of the system and its role in processing user orders from entry to execution.
