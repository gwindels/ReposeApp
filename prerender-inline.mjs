import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// First, we need to build the HTML string by using jsdom to simulate a browser
async function prerender() {
  try {
    console.log('Starting pre-render...');
    
    // We'll use a workaround: create a temporary HTML file that includes inline scripts
    const distDir = path.join(__dirname, 'dist');
    const indexPath = path.join(distDir, 'index.html');
    
    if (!fs.existsSync(indexPath)) {
      console.error('dist/index.html not found. Run npm run build first.');
      process.exit(1);
    }

    // Read the current index.html
    let html = fs.readFileSync(indexPath, 'utf-8');
    
    // Read the bundled JavaScript
    const assetsDir = path.join(distDir, 'assets');
    const jsFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));
    
    if (jsFiles.length === 0) {
      console.error('No JavaScript bundle found');
      process.exit(1);
    }
    
    const jsFile = jsFiles[0];
    const jsPath = path.join(assetsDir, jsFile);
    let jsContent = fs.readFileSync(jsPath, 'utf-8');
    
    // Read CSS files
    const cssFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.css'));
    let cssContent = '';
    for (const cssFile of cssFiles) {
      const cssPath = path.join(assetsDir, cssFile);
      cssContent += fs.readFileSync(cssPath, 'utf-8');
    }
    
    // Create a new HTML with inline CSS and JS
    html = html.replace(
      '</head>',
      `<style>${cssContent}</style>\n</head>`
    );
    
    // Remove the external script and CSS link tags
    html = html.replace(
      /<script type="module" crossorigin src="[^"]*"><\/script>/,
      ''
    );
    html = html.replace(
      /<link rel="stylesheet" crossorigin href="[^"]*">/,
      ''
    );
    
    // Add the JavaScript at the end of body before closing tag
    html = html.replace(
      '</body>',
      `<script>${jsContent}</script>\n</body>`
    );
    
    // Write the updated HTML
    fs.writeFileSync(indexPath, html, 'utf-8');
    
    console.log('✓ Pre-rendering complete');
    console.log(`✓ All assets inlined into index.html`);
    
  } catch (error) {
    console.error('Pre-rendering failed:', error.message);
    process.exit(1);
  }
}

prerender();
