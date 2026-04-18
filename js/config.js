/**
 * Cấu hình Supabase & EmailJS cho ứng dụng Quản lý Ca & Lương
 */

// 1. Cấu hình Supabase (Thay đổi URL và Key của bạn tại đây)
const SUPABASE_URL = 'https://jbidxvzubgvgbjqgawgp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cSm047uZZxHRRSmeWwaihw_WTw0O3em';

// Lưu ý: Supabase client được khởi tạo riêng trong từng trang (index.html, employee.html, auth.html)
// do SDK được load async. File này chỉ export URL và KEY.

