#!/bin/bash

# Định nghĩa tên file cấu hình và tên miền của bạn
NGINX_CONFIG_FILE='/etc/nginx/sites-available/DCA'
DOMAIN='DCA' # Thay thế your_domain bằng tên miền thực tế của bạn

# Tạo bản sao lưu file cấu hình hiện tại
sudo cp $NGINX_CONFIG_FILE "${NGINX_CONFIG_FILE}.bak"

# Viết nội dung mới vào file cấu hình
cat <<EOF | sudo tee $NGINX_CONFIG_FILE
server {
    listen 80;
    listen [::]:80;

    server_name 103.241.43.167;

    location / {
        proxy_pass http://localhost:3000; # Chuyển hướng request đến app Node.js
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

# Kiểm tra cấu hình Nginx để đảm bảo không có lỗi
sudo nginx -t

# Khởi động lại Nginx để áp dụng cấu hình mới
sudo systemctl restart nginx

echo "Cấu hình Nginx đã được cập nhật và dịch vụ đã được khởi động lại."
