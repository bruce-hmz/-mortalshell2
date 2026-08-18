#!/usr/bin/env python3
"""Local preview server for out/ — threaded, no-store, supports Range for <video>."""
import http.server
import os
import socketserver
import sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "out")


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        super().end_headers()

    def log_message(self, fmt, *args):
        pass


class ThreadingReUseServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    allow_reuse_address = True
    daemon_threads = True


os.chdir(ROOT)
with ThreadingReUseServer(("127.0.0.1", PORT), NoCacheHandler) as httpd:
    print(f"preview serving {ROOT} at http://127.0.0.1:{PORT}/", flush=True)
    httpd.serve_forever()
