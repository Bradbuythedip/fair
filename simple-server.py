from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

class CORSRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET')
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Content-Type', 'application/javascript')
        SimpleHTTPRequestHandler.end_headers(self)

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

os.chdir('dist')
httpd = HTTPServer(('localhost', 3000), CORSRequestHandler)
print("Serving at http://localhost:3000")
httpd.serve_forever()