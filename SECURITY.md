# Security Policy

- Please report vulnerabilities privately to security@yourdomain.org.
- Do not file public issues for sensitive reports.
- We rotate exposed credentials immediately and follow coordinated disclosure.

## Scope
- Frontend (this repo), Supabase schema & RLS, storage buckets, auth flows.

## Keys and Secrets
- Do not commit .env files. Use .env.example for client-safe variables only.
- Rotate credentials if secrets were ever committed.
