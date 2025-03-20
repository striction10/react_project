import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mwfcyuhzgyeywirvvowd.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13ZmN5dWh6Z3lleXdpcnZ2b3dkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4NTY0NDEsImV4cCI6MjA1NzQzMjQ0MX0.wb_cnlz99Etl4Jish3slu9CvCRA0z8c9eYqWp4XBwGU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;