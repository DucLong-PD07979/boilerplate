# Thư mục repositories

- Chứa các lớp hoặc hàm tương tác trực tiếp với database
- Tách biệt rõ phần truy xuất dữ liệu khỏi service và controller
- Thường bao gồm các phương thức CRUD (Create, Read, Update, Delete)
- Giúp dễ dàng thay đổi cách truy xuất dữ liệu mà không ảnh hưởng đến logic nghiệp vụ
- Có thể tối ưu hoặc cache dữ liệu tại lớp này nếu cần

---

# Lưu ý

- Tránh chứa logic nghiệp vụ trong repository, chỉ tập trung thao tác dữ liệu
- Đảm bảo các truy vấn hiệu quả, tránh query thừa hoặc không cần thiết
- Đơn giản hóa interface để dễ test và tái sử dụng
