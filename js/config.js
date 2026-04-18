/**
 * Cấu hình Supabase & EmailJS cho ứng dụng Quản lý Ca & Lương
 */

// 1. Cấu hình Supabase (Thay đổi URL và Key của bạn tại đây)
const SUPABASE_URL = 'https://stfdebetemvaljnnkgdb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN0ZmRlYmV0ZW12YWxqbm5rZ2RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY0MTA4MTIsImV4cCI6MjA5MTk4NjgxMn0.6uQcmHrYGFBUQ3a_tGU5Y-YbR_vIBAIRYG_GBqBG8cM';

// Lưu ý: Supabase client được khởi tạo riêng trong từng trang (index.html, employee.html, auth.html)
// do SDK được load async. File này chỉ export URL và KEY.

