# Prompt: Đẩy skill Power BI DAX lên GitHub

Dán nguyên đoạn dưới đây vào **Claude Code trên máy Windows**.

```text
Tôi muốn đẩy skill Power BI DAX tạo sáng nay lên GitHub cá nhân (tài khoản: TungNguyen-C4U) để dùng chung giữa các máy và các session Claude Code trên đám mây. Làm lần lượt các bước sau:

1. TÌM VÀ KIỂM TRA SKILL
- Tìm các file SKILL.md trong %USERPROFILE%\.claude\skills\. Xác định skill DAX/Power BI tạo gần đây nhất. Nếu có nhiều hơn một skill phù hợp, hỏi tôi chọn skill nào.
- Kiểm tra cấu trúc: file nằm đúng vị trí skills\<ten-skill>\SKILL.md; frontmatter có name (chữ thường, số, dấu "-", trùng tên thư mục) và description (không rỗng, tối đa 1024 ký tự).
- Nếu có lỗi, cho tôi xem nội dung cần sửa và CHỜ tôi đồng ý rồi mới sửa.

2. KIỂM TRA CÔNG CỤ
- Kiểm tra git: git --version, git config user.name, git config user.email. Nếu chưa cấu hình name/email thì hỏi tôi, không tự đặt.
- Kiểm tra GitHub CLI: gh --version và gh auth status.
  - Nếu đã có gh và đã đăng nhập: dùng gh để tạo repo.
  - Nếu chưa có gh: KHÔNG tự cài. Hướng dẫn tôi tạo repo trống trên github.com (không tạo README), chờ tôi báo xong rồi push bằng git. Git Credential Manager sẽ mở trình duyệt để tôi đăng nhập.

3. TẠO REPO CỤC BỘ
- Tạo thư mục %USERPROFILE%\claude-skills với cấu trúc:
    claude-skills\
      .claude\skills\<ten-skill>\   (SAO CHÉP từ skill gốc, không di chuyển)
      README.md                     (tiếng Việt: danh sách skill, cách dùng với Claude Code, cách cài lên máy khác)
      .gitignore                    (bỏ qua .env, *.key, __pycache__, .DS_Store, Thumbs.db, file tạm)
- Nếu thư mục claude-skills đã tồn tại, hỏi tôi trước.

4. KIỂM TRA BẢO MẬT TRƯỚC KHI PUSH
- Quét toàn bộ file sẽ commit để tìm thông tin nhạy cảm: API key, token, mật khẩu, connection string, tên server/database nội bộ, email, dữ liệu khách hàng hoặc dữ liệu công ty.
- Nếu phát hiện bất cứ điều gì đáng ngờ, DỪNG LẠI và báo tôi.

5. ĐẨY LÊN GITHUB
- Repo tên: TungNguyen-C4U/claude-skills, chế độ PRIVATE. Nếu repo này đã tồn tại, kiểm tra xem nó có đang private không: nếu đúng thì clone về và thêm skill vào .claude/skills/ (không ghi đè skill khác); nếu là public thì DỪNG và hỏi tôi.
- Trước khi push, cho tôi xem danh sách file sẽ commit và CHỜ tôi xác nhận.
- git init -b main, commit với message "Add Power BI DAX skill", thêm remote origin rồi push.

6. BÁO CÁO
- Đưa link repo, danh sách file đã đẩy.
- Hướng dẫn: (a) cách dùng repo này trong session Claude Code trên claude.ai/code, (b) cách cài skill lên máy khác (clone repo rồi chép thư mục skill vào %USERPROFILE%\.claude\skills\), (c) cách cập nhật khi tôi sửa skill sau này.

Quy tắc chung:
- KHÔNG xóa hoặc di chuyển skill gốc trong .claude\skills.
- KHÔNG tạo repo public.
- Hỏi tôi trước mọi thao tác không chắc chắn.
- Trả lời bằng tiếng Việt.
```

## Sau khi chạy xong

- Repo để **Private** vì skill có thể chứa thông tin nội bộ của công ty.
- Skill nằm trong `.claude/skills/` của repo, nên mọi session Claude Code mở repo này đều tự nạp skill, kể cả session trên claude.ai/code.
- Nếu muốn dùng trên claude.ai / Claude Desktop (không gắn repo): nén thư mục skill thành `.zip` rồi tải lên **claude.ai → Settings → Capabilities → Skills → Upload skill**, sau đó mở session mới.
