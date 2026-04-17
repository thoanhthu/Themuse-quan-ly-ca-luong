-- ========================================================
-- SCRIPT KHỞI TẠO CƠ SỞ DỮ LIỆU ĐA NGƯỜI DÙNG (FULL SETUP)
-- Dán cái này vào SQL Editor của Supabase và nhấn RUN
-- ========================================================

-- 1. Tạo bảng app_config nếu chưa có (Giải quyết lỗi "Relation does not exist")
CREATE TABLE IF NOT EXISTS public.app_config (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    owner_id UUID UNIQUE REFERENCES auth.users(id),
    business_name TEXT DEFAULT 'My Business',
    logo_url TEXT DEFAULT 'logo.png',
    employees JSONB DEFAULT '[]',
    sched_data JSONB DEFAULT '{}',
    mult_settings JSONB DEFAULT '{"t7": 1.5, "cn": 2, "le": 2}',
    payslips JSONB DEFAULT '{}',
    avail JSONB DEFAULT '{}',
    admin_config JSONB DEFAULT '{}',
    emailjs_config JSONB DEFAULT '{}',
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Kích hoạt Row Level Security (RLS) để bảo mật dữ liệu giữa các shop
ALTER TABLE public.app_config ENABLE ROW LEVEL SECURITY;

-- 3. Tạo chính sách: Mỗi chủ shop chỉ được thao tác trên dữ liệu của chính mình
DROP POLICY IF EXISTS "Users can manage their own config" ON public.app_config;
CREATE POLICY "Users can manage their own config" 
ON public.app_config 
FOR ALL 
USING (auth.uid() = owner_id);

-- 4. Tạo chính sách: Cho phép Super Admin xem toàn bộ danh sách khách hàng (Leads)
DROP POLICY IF EXISTS "Super admin can see all" ON public.app_config;
CREATE POLICY "Super admin can see all" 
ON public.app_config 
FOR SELECT 
USING ( auth.jwt() ->> 'email' = 'YOUR_ADMIN_EMAIL@gmail.com' );

-- 5. Cấp quyền truy cập cho người dùng đã đăng nhập
GRANT ALL ON public.app_config TO authenticated;
GRANT ALL ON public.app_config TO service_role;
