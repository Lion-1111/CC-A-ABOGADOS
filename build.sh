#!/bin/bash
set -e
mkdir -p vercel_out
# Copy all HTML files from root
for f in *.html; do
  [ -f "$f" ] && cp "$f" vercel_out/
done
# Copy assets directory
cp -r assets vercel_out/assets
# Copy other static files
[ -f robots.txt ] && cp robots.txt vercel_out/
[ -f sitemap.xml ] && cp sitemap.xml vercel_out/
echo "Build complete. Files in vercel_out:"
ls vercel_out/
