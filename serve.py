#!/usr/bin/env python3
"""Simple HTTP server for serving the dist folder"""
import http.server
import socketserver
import os
from pathlib import Path

# Change to dist directory
dist_dir = Path(__file__).parent / 'dist'
os.chdir(dist_dir)

PORT = 8000
Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✓ Server running at http://localhost:{PORT}/")
    print(f"  Serving from: {dist_dir}")
    print(f"  Open http://localhost:{PORT}/ in your browser")
    print(f"  Press Ctrl+C to stop")
    httpd.serve_forever()
