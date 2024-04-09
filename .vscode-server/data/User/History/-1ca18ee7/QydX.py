import socket

host = "15.156.160.96"
port = 8081

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((host, port))
    s.listen()