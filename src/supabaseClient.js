import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xwaxpbsvvwwoshapwhxi.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YXhwYnN2dnd3b3NoYXB3aHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4ODQzMjIsImV4cCI6MjAwNjQ2MDMyMn0.p3QWDUi5FWmbWBGdh1LJmkC_pAEDFR2sAEqzyNr5T2A";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
