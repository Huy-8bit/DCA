#!/bin/bash

# Cập nhật danh sách các gói
sudo apt update

# Cài đặt các gói cần thiết để cho phép apt sử dụng repository qua HTTPS
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# Thêm khóa GPG chính thức của Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Thêm Docker repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

# Cập nhật danh sách các gói một lần nữa
sudo apt update

# Cài đặt Docker CE
sudo apt install docker-ce -y

# Thêm người dùng hiện tại vào nhóm Docker để không cần sudo khi sử dụng Docker
sudo usermod -aG docker ${USER}

# In ra thông báo cài đặt thành công
echo "Docker has been installed successfully"

