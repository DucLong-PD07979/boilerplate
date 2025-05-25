# Thư mục services

- Chứa các hàm hoặc lớp xử lý logic nghiệp vụ chính của ứng dụng
- Tách biệt rõ ràng giữa logic nghiệp vụ và các tầng khác như controller, repository
- Thường gọi repository để truy xuất hoặc cập nhật dữ liệu
- Thực hiện các xử lý phức tạp, tính toán, hoặc kết hợp nhiều thao tác
- Giúp dễ dàng viết unit test cho phần logic nghiệp vụ

---

# Lưu ý

- Giữ services thuần logic, không xử lý request hay response trực tiếp
- Tránh gọi controller hoặc router trong service
- Có thể chia nhỏ service theo chức năng hoặc module để dễ quản lý
