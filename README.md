# react18-grouped-icons

An example React 18 project with grouped Icon components

## Table of Contents

- [react18-grouped-icons](#react18-grouped-icons)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Code Quality](#code-quality)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
    - [Troubleshooting](#troubleshooting)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Financial Contributions](#financial-contributions)
    - [How to Contribute Financially](#how-to-contribute-financially)
    - [Why Contribute Financially?](#why-contribute-financially)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Introduction

This project serves as a simple yet illustrative example of using React 18 with TypeScript to build scalable and maintainable grouped SVG icons. By leveraging the latest features of React and TypeScript, this project lays the groundwork for building complex, type-safe, and reusable UI components. The current way the icons are grouped, even if there are hundreds of icons, is easy to find using autocompletion usually available in IDEs.

Here's an example code snippet to illustrate:

```typescript
import * as Icons from './Icons';

<Icons.Icon1 primaryColor="red" secondaryColor="blue" />
```

## Features

- Type-Safe: Implements TypeScript for safer code and better developer experience.
- Reusable: Defines icons as reusable components with customizable properties.
- Maintainable: Makes use of interface to ensure all icons have a consistent API.
- Adaptable: Easily extendable to include more icons with different designs but the same interface.

## Code Quality

- Follows SOLID principles.
- Implements Clean Code practices.
- Utilizes strict typing to catch issues early.

For more information, see our [Coding Guidelines]().

## Prerequisites

- Node.js
- npm or Yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/flickleafy/react18-grouped-icons.git
```

2. Navigate to the project directory:

```bash
cd react18-grouped-icons
```

3. Install the dependencies:

```bash
npm install
```

or if you are using Yarn:

```bash
yarn install
```

### Troubleshooting

If you encounter issues during installation, try the following:

Clear your npm cache:

```bash
npm cache clean -f
```

Delete `node_modules/` and `package-lock.json`, then reinstall dependencies.

## Usage

To run the project, use the following command:

```bash
npm start
```

or if you are using Yarn:

```bash
yarn start
```

Your application will start, and you can view it at <http://localhost:3000>.

## Contributing

Please read our CONTRIBUTING.md file for more details.

## Financial Contributions

Your financial contributions are crucial for the long-term sustainability of this project. Even small donations help us cover hosting fees, buy development tools, and spend more time maintaining and improving the project.

### How to Contribute Financially

One-Time Donations: PayPal or Crypto Wallets
Recurring Donations: Become a backer or sponsor on Patreon or Open Collective
Corporate Sponsorships: Email us for a tailored sponsorship program.

### Why Contribute Financially?

Donations help us to add new features, maintain the existing ones, and plan the project's future. Your contribution makes a real difference!

## License

This project is licensed under the GPL-3.0 License. See the LICENSE file for details.

## Acknowledgements

- React Team for React 18
- TypeScript Team for TypeScript
- To all developers who contributed to the open-source packages used in this project.
- Special thanks to all individual contributors and sponsors.
