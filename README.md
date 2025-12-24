# Vuetify (Default)


This repository contains the source code of **my personal website**, built with **Vue 3** and **Vuetify**.  


## 🧠 Tech Stack

- **Vue 3** 
- **TypeScript** (strict, checked with `vue-tsc`)
- **Vuetify** (UI components + layout system)
- **Vite**
- **Yarn**


## 🚀 Getting Started

This section covers how to start the development server and build the website.

### Starting the Development Server

To start the development server with hot-reload, run the following command. The server will be accessible at [http://localhost:3000](http://localhost:3000):

```bash
yarn dev
```

> Add NODE_OPTIONS='--no-warnings' to suppress the JSON import warnings that happen as part of the Vuetify import mapping. If you are on Node [v21.3.0](https://nodejs.org/en/blog/release/v21.3.0) or higher, you can change this to NODE_OPTIONS='--disable-warning=5401'. If you don't mind the warning, you can remove this from your package.json dev script.

### Building

The site is automatically built and deployed via GitHub Actions on every push to the main branch. To build manually, use:

```bash
yarn build
```


For a type check, run:

```
yarn type-check
```

### 📁 Project Structure (Important Stuff)

````
public/   # Images, static assets
src/
├─ components/        # Reusable Vue components
├─ data/
│  └─ projects.ts     # Project data
├─ pages/
│  ├─ Projects.vue    # Projects listing
│  └─ ...
├─ plugins/           # Vuetify / app plugins
├─ router/            # Router
├─ plugins/           # Vuetify / app plugins
└─ main.ts            # App entry point
```

