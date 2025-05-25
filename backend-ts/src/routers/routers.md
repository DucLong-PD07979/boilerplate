# Thư mục routers

- Chứa các file định nghĩa route cho ứng dụng (API endpoints)
- Tách riêng các nhóm route theo chức năng (ví dụ: user, product, auth)
- Kết nối các route với controller tương ứng để xử lý request
- Thường chỉ định middleware cụ thể cho từng route hoặc nhóm route
- Giúp tổ chức code rõ ràng, dễ mở rộng và bảo trì

---

# Lưu ý

- Đặt tên route rõ ràng, theo chuẩn RESTful nếu có thể
- Sử dụng Router của Express để tách nhỏ các route module
- Middleware chung có thể được dùng ở cấp app hoặc router tùy trường hợp
- Tránh đặt logic xử lý trực tiếp trong router, chuyển cho controller
