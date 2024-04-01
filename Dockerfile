# Sử dụng một hình ảnh cơ bản của Node
FROM node:latest
# Đặt thư mục làm việc
WORKDIR /usr/src/app

# Copy file package.json và package-lock.json (nếu có)
COPY package*.json ./

# Cài đặt các phụ thuộc của dự án
RUN npm install

# Copy tất cả các file và thư mục còn lại vào thư mục làm việc
COPY . .

# Cài đặt cổng mà ứng dụng sẽ chạy
EXPOSE 3000

# Chạy lệnh để khởi động ứng dụng của bạn
CMD ["npm", "run", "dev"]
