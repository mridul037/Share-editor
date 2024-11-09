# Multi-User Text Editor

A collaborative, Google Docs-like text editor allowing multiple users to edit documents in real time. Built using **React** and **Node.js** with **Yjs** for Conflict-Free Replicated Data Type (CRDT) synchronization, enabling smooth, conflict-free collaboration.

## Features

- **Real-Time Collaboration**: Multiple users can edit a document simultaneously.
- **Conflict-Free Syncing**: Powered by Yjs CRDT, ensuring conflict-free data consistency.
- **User-Friendly Interface**: Built with React for a seamless editing experience.
- **Backend Support**: Node.js server for handling connections and data persistence.

## Tech Stack

- **Frontend**: React for UI, Yjs for CRDT implementation.
- **Backend**: Node.js for server operations, handling user connections, and data syncing.

## About Yjs

[Yjs](https://github.com/yjs/yjs) is a high-performance, open-source CRDT (Conflict-Free Replicated Data Type) library that enables real-time, offline-first collaboration in web and desktop applications. In this project, Yjs provides the foundational syncing capabilities, allowing multiple users to work on the same document without conflicts.

### Key Advantages of Yjs

- **Conflict-Free Data Synchronization**: Yjs uses CRDTs, which automatically merge changes without conflicts, even if users are editing offline. Changes are synchronized seamlessly once a user reconnects.
- **Efficient and Scalable**: Yjs is optimized for high performance, even with large documents and many concurrent users.
- **Modular**: Yjs integrates easily with various backends and transports, making it adaptable for different types of real-time applications.
- **Undo/Redo Support**: Yjs enables fine-grained undo/redo functionality, tracking changes at the data level.

### Yjs in This Project

In this text editor, Yjs handles the following:

1. **Document Synchronization**: Ensures that all connected users see the same content in real time, regardless of network latency or connection status.
2. **Offline Support**: Users can make changes while offline, which will be automatically merged with others’ changes when they reconnect.
3. **Low Latency**: Yjs synchronizes changes with minimal delay, giving the impression of instant updates across all clients.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (version X.X.X or later)
- [Yjs](https://github.com/yjs/yjs) (for real-time syncing)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mridul037/Share-editor.git
   cd multi-user-text-editor

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
