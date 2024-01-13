import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rjsjdswevbnmctmropur.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqc2pkc3dldmJubWN0bXJvcHVyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNDkwODAyNiwiZXhwIjoyMDIwNDg0MDI2fQ.Xn8YTAMsig_X2Itdhtr6yy5Yk_c29ZbHnJsdOAOn7y4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
