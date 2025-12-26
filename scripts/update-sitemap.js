#!/usr/bin/env node

/**
 * Script to update the lastmod dates in sitemap.xml
 * Run this script when you update website content
 * 
 * Usage: node scripts/update-sitemap.js
 * Or: npm run update-sitemap
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITEMAP_PATH = join(__dirname, '..', 'public', 'sitemap.xml');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Update sitemap.xml with current date
const updateSitemap = () => {
  try {
    console.log('📄 Reading sitemap.xml...');
    const sitemap = readFileSync(SITEMAP_PATH, 'utf8');
    
    const currentDate = getCurrentDate();
    console.log(`📅 Current date: ${currentDate}`);
    
    // Replace all lastmod dates with current date
    const updatedSitemap = sitemap.replace(
      /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
      `<lastmod>${currentDate}</lastmod>`
    );
    
    writeFileSync(SITEMAP_PATH, updatedSitemap, 'utf8');
    
    console.log('✅ Sitemap updated successfully!');
    console.log(`   File: ${SITEMAP_PATH}`);
    console.log(`   All lastmod dates set to: ${currentDate}`);
  } catch (error) {
    console.error('❌ Error updating sitemap:', error.message);
    process.exit(1);
  }
};

// Run the update
updateSitemap();
