# Thư mục controllers

- Chứa các hàm xử lý logic chính cho từng route của API
- Nhận request từ client, gọi service xử lý, trả về response
- Không nên chứa logic phức tạp hoặc truy vấn database trực tiếp
- Tách biệt rõ ràng giữa controller và service để dễ bảo trì và test

---

# Lưu ý khi làm việc với controllers

- Xử lý validate đầu vào (hoặc chuyển cho middleware validation)
- Gọi service tương ứng để thực hiện nghiệp vụ
- Bắt lỗi và trả về response phù hợp (có thể sử dụng middleware xử lý lỗi)
- Giữ controller nhẹ, chỉ tập trung điều phối luồng xử lý
