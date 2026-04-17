# 🕯️ Hệ Thống Quản Lý Ca Làm & Tính Lương (The Muse Candle)

Hệ thống quản lý nhân sự đa người dùng (Multi-tenant) dành cho các doanh nghiệp vừa và nhỏ, cửa hàng, xưởng sản xuất. Ứng dụng giúp tự động hóa việc đăng ký lịch làm việc, sắp xếp ca bằng AI và tính lương nhanh chóng.

## 🌟 Tính năng chính

-   **Dashboard Tổng Quan**: Theo dõi chi phí nhân sự, doanh thu và ngày công trong tháng.
-   **Quản Lý Nhân Viên**: Lưu trữ thông tin, mức lương, tài khoản ngân hàng và mã PIN đăng nhập riêng biệt.
-   **Sắp Xếp Lịch Tuần**: 
    -   Nhân viên tự gửi đăng ký lịch qua Cổng Nhân Viên.
    -   Hệ thống gợi ý lịch làm việc tối ưu.
    -   Hỗ trợ in ấn và sao chép lịch từ tuần trước.
-   **Tính Lương Tự Động**: 
    -   Hỗ trợ hệ số lương Thứ 7, Chủ Nhật, Ngày lễ.
    -   Cộng dồn chi phí phát sinh (Hoa hồng, phí ship, mua hàng...).
    -   Xuất báo cáo Excel chuyên nghiệp.
-   **Cổng Nhân Viên (Mobile First)**: 
    -   Xem lịch làm việc cá nhân.
    -   Đăng ký lịch tuần tới.
    -   Xem bảng lương chi tiết từng kỳ.
-   **Thông Báo Email**: Tích hợp EmailJS để gửi nhắc ca tự động cho nhân viên.

## 🛠️ Công nghệ sử dụng

-   **Frontend**: HTML5, Vanilla CSS, JavaScript (ES6+).
-   **Backend**: [Supabase](https://supabase.com/) (PostgreSQL + Auth + Real-time).
-   **Thư viện**: 
    -   Supabase JS SDK.
    -   SheetJS (Xuất Excel).
    -   EmailJS (Gửi Email).

## 🚀 Hướng dẫn cài đặt

Để sử dụng hệ thống này cho doanh nghiệp của bạn, hãy làm theo các bước sau:

### 1. Chuẩn bị Supabase
1.  Đăng ký tài khoản tại [Supabase](https://supabase.com/).
2.  Tạo một Project mới.
3.  Vào mục **SQL Editor**, mở một bản tin mới và dán toàn bộ nội dung trong tệp [MIGRATION.sql](MIGRATION.sql) vào rồi nhấn **RUN**. Tệp này sẽ khởi tạo bảng `app_config` và thiết lập các chính sách bảo mật (RLS).
4.  Vào mục **Project Settings** > **API** để lấy `Project URL` và `Anon Key`.

### 2. Cấu hình Ứng dụng
1.  Mở tệp `js/config.js`.
2.  Thay thế `SUPABASE_URL` và `SUPABASE_ANON_KEY` bằng thông tin bạn vừa lấy ở Bước 1.
3.  (Tùy chọn) Nếu bạn muốn sử dụng tính năng Super Admin (Xem danh sách tất cả các shop đăng ký), hãy mở `master-admin.html` và `MIGRATION.sql` để thay thế email admin thành email của bạn.

### 3. Triển khai (Deployment)
Dự án này là ứng dụng tĩnh (Static Page), bạn có thể tải lên bất kỳ nền tảng hosting nào (Vercel, Netlify, GitHub Pages, Firebase Hosting...).

### 4. Cấu hình EmailJS (Nếu cần)
Bạn có thể cấu hình thông số EmailJS trực tiếp trong tab **Cài Đặt** của ứng dụng Admin sau khi đã đăng nhập.

## 📱 Cổng Nhân Viên
Gửi link sau cho nhân viên của bạn (thay `OWNER_ID` bằng ID tài khoản Supabase của bạn - có thể xem ở tab Cài Đặt):
`https://your-domain.com/employee.html?owner=YOUR_OWNER_ID`

## 👨‍💻 Tác giả
Dự án được phát triển bởi **The Muse Candle**.

---
*Lưu ý: Dự án sử dụng Row Level Security (RLS) để đảm bảo dữ liệu của các Shop không bị lẫn lộn. Mỗi tài khoản đăng ký sẽ chỉ nhìn thấy dữ liệu của chính mình.*
