# Thư mục configs

- Chứa các file cấu hình cho project
- Tải biến môi trường từ file `.env` bằng thư viện `dotenv`
- Định nghĩa các biến cấu hình dùng chung trong app (port, database URL, secret keys,...)
- Có thể tách cấu hình theo môi trường (development, production)
- Không chứa thông tin nhạy cảm, chỉ load từ biến môi trường hoặc file `.env` (đã nằm trong `.gitignore`)

---

# Lưu ý khi làm việc trong configs

- Luôn kiểm tra biến môi trường có tồn tại, nếu không thì throw error hoặc sử dụng giá trị mặc định
- Tránh commit file `.env` có chứa secret
- Mọi thay đổi cấu hình nên được cập nhật rõ ràng trong file này để dễ quản lý
