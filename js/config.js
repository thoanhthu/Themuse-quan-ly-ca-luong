/**
 * Cấu hình Supabase & EmailJS cho ứng dụng Quản lý Ca & Lương
 */

// 1. Cấu hình Supabase (Thay đổi URL và Key của bạn tại đây)
const SUPABASE_URL = 'https://jbidxvzubgvgbjqgawgp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cSm047uZZxHRRSmeWwaihw_WTw0O3em';

// Khởi tạo Supabase Client
const supabase = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// 2. Cấu hình EmailJS (Có thể cấu hình trên giao diện Admin, đây là các biến mặc định nếu cần)
// SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY thường được lưu trong Supabase app_config 
// nhưng bạn có thể khai báo fallback tại đây nếu muốn.

console.log("Supabase Client đã được khởi tạo từ tệp cấu hình tập trung.");
