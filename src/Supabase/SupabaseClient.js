import { createClient } from "@supabase/supabase-js";

//ctenvios
const supabaseUrl = "https://pqvznyarcnqrttfvyxcu.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxdnpueWFyY25xcnR0ZnZ5eGN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzUxODE2OTUsImV4cCI6MTk5MDc1NzY5NX0.2c8LX0Gi6GaGjEp8H5KwoHY_P2B8Z7FxfeTSwWfgyRM";

export const supabase = createClient(supabaseUrl, supabaseKey);