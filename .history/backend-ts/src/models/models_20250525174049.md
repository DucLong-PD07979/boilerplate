# Thư mục models

- Chứa các định nghĩa schema và model cho database (ví dụ: Mongoose schemas)
- Định nghĩa cấu trúc dữ liệu, kiểu dữ liệu và các ràng buộc cho các collection/table
- Tách biệt dữ liệu với logic xử lý và controller
- Nên giữ models đơn giản, chỉ tập trung mô tả dữ liệu và validation cơ bản
- Nếu cần, có thể thêm các method hoặc statics cho model để tái sử dụng

---

# Lưu ý

- Kiểm soát chặt chẽ kiểu dữ liệu và ràng buộc để tránh lỗi dữ liệu
- Tránh đặt logic nghiệp vụ phức tạp trong models, nên chuyển sang service
- Cập nhật models khi schema database thay đổi để đồng bộ dữ liệu
