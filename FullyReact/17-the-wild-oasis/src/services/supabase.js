import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://onqletmmebzeslcpmete.supabase.co";
// This is a public key, so it's safe to expose it here. Also there is a rsa policy in place to prevent unauthorized access.
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ucWxldG1tZWJ6ZXNsY3BtZXRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTkzMTUsImV4cCI6MjAzMTY5NTMxNX0.pmbMagvs8VriYQGOsV11TgEISPXewBN1EqnTxg2vAD4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
