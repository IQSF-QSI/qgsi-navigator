# Architecture (Navigator)

- Vite + React + TypeScript + Tailwind
- Supabase (auth, PostgREST, storage)
- RLS: default deny, allow by explicit policy
- Documents served via signed URLs (short TTL)
- Admin routes behind role "admin" claim
