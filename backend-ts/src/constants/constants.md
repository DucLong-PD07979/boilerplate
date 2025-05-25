# Thư mục constants

- Chứa các hằng số dùng chung trong toàn bộ dự án
- Ví dụ: mã lỗi, thông báo, các giá trị cố định, config mặc định
- Giúp tránh lặp code, dễ bảo trì và thay đổi giá trị tập trung
- Nên đặt tên hằng số rõ ràng, viết hoa theo convention (ví dụ: `HTTP_OK = 200`)
- Không nên chứa logic hoặc biến đổi, chỉ là giá trị tĩnh

---

# Lưu ý

- Nếu có nhiều loại constants, có thể chia thành các file nhỏ theo nhóm (ví dụ: `httpStatus.ts`, `messages.ts`)
- Tránh hardcode giá trị trong code, thay vào đó dùng constants
