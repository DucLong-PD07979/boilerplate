# Thư mục middlewares

- Chứa các middleware dùng chung trong ứng dụng Express
- Middleware có thể xử lý:  
  + Kiểm tra xác thực (auth)  
  + Xử lý lỗi (error handler)  
  + Logging (ví dụ: morgan)  
  + Validation dữ liệu  
  + Giới hạn tần suất request (rate limiting)  
  + Các chức năng bảo mật (helmet, cors)  

---

# Lưu ý khi làm middleware

- Middleware nên nhỏ gọn, chuyên trách từng nhiệm vụ  
- Sắp xếp thứ tự middleware trong `index.ts` hoặc `app.ts` hợp lý  
- Middleware lỗi (error handling) cần có 4 tham số `(err, req, res, next)`  
- Dùng middleware để tái sử dụng và giảm lặp code  
