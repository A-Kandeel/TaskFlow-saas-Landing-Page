# TaskFlow SaaS

A modern, responsive SaaS landing page built with React and custom CSS.
The project presents a polished product experience through a hero
section, feature highlights, an interactive-style demo, workflow steps, testimonials, 
pricing plans, FAQs, and calls to action.

## Live Demo

Visit the live TaskFlow landing page: `https://task-flow-saa-s-landing-page.vercel.app/`

## Overview

TaskFlow SaaS provides a polished landing page experience for an AI-focused SaaS product. 
It features a minimalist visual identity, a green-accented color palette, 
reusable React components, and responsive layouts designed to present product information in a clear and engaging way.

The application is organized into modular sections, making the interface easier to maintain, customize, and extend.

The main application renders the page sections in this order:

1.  Navigation bar
2.  Hero
3.  Trusted companies
4.  Features
5.  Demo
6.  How it works
7.  Testimonials
8.  Pricing
9.  FAQ
10. Call to action
11. Footer

## Features

-   **Responsive navigation** — Provides a structured navigation experience with mobile-friendly styling.
-   **Hero Section** — Introduces TaskFlow with a headline, supporting content, and calls to action.
    preview.
-   **Trusted companies section** — Displays company names or brand references as social proof.
-   **Feature Highlights** — Presents product capabilities using reusable card layouts.
-   **Interactive Demo section** — Showcases a sample product interface visually. It does not connect to a live AI service.
-   **How it works section** — Explains the product workflow through a sequence of steps.
-   **Testimonials** — Presents sample customer testimonials in a structured layout.
-   **Pricing section** — Displays subscription tiers and their features.
-   **FAQ section** — Organizes frequently asked questions into an interactive accordion.
-   **Call to Action (CTA) section** — Encourages visitors to take the next step.
-   **Responsive layouts**  — Uses CSS layouts and media queries to adapt the interface to different screen sizes.
-   **Reusable React components** — Organizes the page into modular, maintainable sections.

The demo's visual presentation should not be interpreted as proof of a live AI integration; no API connection is established by the supplied code.

## Tech Stack

-   **React** --- component-based user interface.
-   **JavaScript (ES6+)** --- application composition and behavior.
-   **CSS3** --- styling, responsive layouts, and visual effects.
-   **Create React App** --- development server and production build
    scripts.
-   **npm** --- dependency installation and script execution.

## Project Structure

``` text
TaskFlow-SaaS-app/
└── src/
    ├── assets/
    ├── components/
    │   ├── Demo/
    │   │   ├── demo.jsx
    │   │   └── generated.jsx
    │   ├── FAQ/
    │   │   ├── faq.jsx
    │   │   └── faqCard.jsx
    │   ├── Features/
    |   │   ├── features.jsx
    │   │   └── featuresCard.jsx
    │   ├── Pricing/
    │   │   ├── pricing.jsx
    │   │   └── pricingCard.jsx
    │   ├── testimonials/
    │   ├── button.jsx
    │   ├── cta.jsx
    │   ├── footer.jsx
    │   ├── hero.jsx
    │   ├── howitworks.jsx
    │   ├── logo.jsx
    │   ├── navbar.jsx
    │   ├── secHeader.jsx
    │   └── TrustedCompanies.jsx
    ├── data/
    │   ├── faq.js
    │   ├── features.js
    │   ├── pricing.js
    │   └── testimonial.js
    ├── styles/
    │   ├── normalize.css
    │   ├── all.min.css
    │   ├── global.css
    │   └── MyFramework.css
    ├── App.css
    ├── App.jsx
    └── index.js
```

### Architecture notes

-   `App.jsx` composes the main page by importing and rendering each
    section component.
-   `index.js` mounts the React application and imports the global
    stylesheets.
-   `components/` contains the reusable UI sections and smaller
    components.
-   `data/` contains the FAQ, feature, pricing, and testimonial content.
-   `styles/` contains shared stylesheet resources.
-   `App.css` contains page and section styling, including CSS custom
    properties.

## Getting Started

### Prerequisites

Make sure you have installed:

-   [Node.js](https://nodejs.org/)
-   npm (included with Node.js)

### Installation

1.  Clone the repository.

    ``` bash
    git clone https://github.com/A-Kandeel/TaskFlow-SaaS-Landing-Page
    ```

2.  Navigate into the cloned repository.

    ``` bash
    cd TaskFlow-SaaS-app
    ```

3.  Install dependencies.

    ``` bash
    npm install
    ```

4.  Start the development server.

    ``` bash
    npm start
    ```

5.  Open <http://localhost:3000> in your browser.

## Available Scripts

  -----------------------------------------------------------------------
  Command                             Description
  ----------------------------------- -----------------------------------
  `npm start`                         Runs the app in development mode.

  `npm run build`                     Creates an optimized production
                                      build in `build/`.
  -----------------------------------------------------------------------

These scripts are the standard scripts described by the supplied Create
React App setup. Confirm they are present in your `package.json`.

## Design System

The CSS uses custom properties to maintain a consistent visual language.
The supplied variables include:

  Variable              Purpose                         Supplied value
  --------------------- ------------------------------- ----------------
  `--main-color`        Soft green surface              `#edf4df`
  `--sec-color`         Secondary dark green/charcoal   `#303630`
  `--accent`            Bright green accent             `#b9f34a`
  `--bg-color`          Main background                 `#f6f6f3`
  `--dark`              Dark text and surfaces          `#151617`
  `--text-color`        Secondary text                  `#656a68`
  `--line`              Borders and dividers            `#e2e3de`
  `--section-padding`   Standard section spacing        `100px`
  `--main-transition`   Shared transition duration      `0.3s`
  `--letter-space`      Shared letter spacing           `1.35px`

The design system uses CSS custom properties to keep colors, spacing, borders, 
and transitions consistent across the landing page. Update these variables in the stylesheet where :root is defined to customize the design.

## Customization
### You can customize the project by modifying the following areas:

-   **Page content:** Edit the text, labels, and section content in the relevant components.
-   **Features:**  Update `src/data/features.js` and the Features component.
-   **Pricing:** Update `src/data/pricing.js` and the Pricing components.
-   **FAQs:** Update `src/data/faq.js` and the FAQ components.
-   **Testimonials:** Update `src/data/testimonial.js` and the
    testimonials components.
-   **Colors and spacing:** Modify the CSS custom properties in the stylesheet where `:root` 
    is defined.
-   **Page layout:** Add, remove, or reorder components in `App.jsx`.
-   **Navigation and calls to action:** Update the relevant components to change labels, 
    links, and interactions.

## Production Build

To create a production build, run:

``` bash
npm run build
```

Create React App outputs the optimized build to the `build/` directory.
Deploy that directory using a static hosting service compatible with
React single-page applications.

## Future Improvements

Potential future enhancements include:

-   Connecting the demo to a real AI API.
-   Adding authentication and account management.
-   Integrating a payment provider for subscription plans.
-   Adding automated tests.
-   Improving keyboard accessibility and form validation.

These features are ideas for future development and are not currently implemented.

## Contributing

If you plan to accept contributions:

1.  Fork the repository.
2.  Create a feature branch.
3.  Make your changes.
4.  Run the available tests and build.
5.  Open a pull request describing your changes.

## License

No license has been specified for this project.

------------------------------------------------------------------------

Built with React and custom CSS.
