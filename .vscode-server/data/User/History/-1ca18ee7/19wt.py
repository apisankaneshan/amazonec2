import socket

host = "15.156.160.96"
port = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((host, port))
    s.listen()
    
    connection, addr = s.accept()
    
    with connection:
        print(f"Connected by {addr}")
        while True:
            data = connection.recv(1024)
            if not data:
                break
            connection.sendall(data)