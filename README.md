Linke Demo: https://tienshake.github.io/octosiffer-landing/

# Installation Guide

## Prerequisites

Before running the project, ensure you have:
- Node.js installed (download from https://nodejs.org)
- Git installed (download from https://git-scm.com)

## Installation Steps

1. Clone the project:
```bash
git clone [repository-url]
cd octosiffer-lading
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

1. Start the development server and watch for CSS changes:
```bash
npm run watch:css
```

2. Open `index.html` in your browser
   - You can use a local server like Live Server in VSCode
   - Or simply open the file directly in your browser

## Building for Production

When you're ready to deploy:
```bash
npm run build:css
```

This will generate the optimized CSS file in `assets/css/app.css`

## Troubleshooting

If you encounter any issues:

1. Make sure all dependencies are installed:
```bash
npm install
```

2. Clear the CSS build and rebuild:
```bash
rm -rf assets/css/app.css
npm run build:css
```

3. Ensure all file paths in `tailwind.config.js` match your project structure
