from http.server import BaseHTTPRequestHandler, HTTPServer  
import os  
import threading    
import json

def get_file_list(file_path="/home/chamodyaa/Apache2/httpd-2.4.58/htdocs/resources/all"):
    files = os.listdir(file_path)
    dict = {str(k): str(v) for k, v in enumerate(files)}
    print(type(dict))
    return dict

class server(BaseHTTPRequestHandler):
    
    def __init__(self, *args, **kwargs):
        self.Event_dictionary_list = []
        self.cached_timestamp = 0
        super().__init__(*args, **kwargs)
            
    def do_GET(self):
        self.send_response(200, 'OK')
        self.send_header('Content-type', 'application/json')
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        data = json.dumps(get_file_list())
        json_response = json.dumps(data).encode()
        # Send the JSON response
        #print(json_response)
        self.wfile.write(json_response)

        
def run():
    print('http server is starting...')
    port = 8081
    server_address = ('localhost', port)  
    httpd = HTTPServer(server_address, server)  
    print('http server is listening on port %d' % port)  
    httpd.serve_forever()    
if __name__ == '__main__':  
  run()
