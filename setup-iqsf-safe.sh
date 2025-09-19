#!/usr/bin/env bash
set -Ee -o pipefail

echo "=== IQSF safe setup ==="

# --- Guard: must run at repo root
if [ ! -f package.json ] && [ ! -d .git ]; then
  echo "Error: run this from your repository root (no package.json or .git found)."
  exit 1
fi

# --- Ensure git identity (prevents commit failures)
git config user.name  >/dev/null 2>&1 || git config user.name  "IQSF Bot"
git config user.email >/dev/null 2>&1 || git config user.email "bot@iqsf.org"

# --- Directories
mkdir -p public/favicons public/assets/icons public/images

# --- Write icons (skip if already present)
if [ ! -f public/assets/icons/berlin.svg ]; then
cat <<'EOF' > public/assets/icons/berlin.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" aria-hidden="true" role="img">
  <title>Berlin – Brandenburg Gate Icon</title>
  <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10 62 H118"/><path d="M18 56 H110"/><path d="M14 50 H114"/>
    <rect x="18" y="66" width="10" height="34" rx="1.5"/>
    <rect x="36" y="66" width="10" height="34" rx="1.5"/>
    <rect x="56" y="66" width="10" height="34" rx="1.5"/>
    <rect x="76" y="66" width="10" height="34" rx="1.5"/>
    <rect x="96" y="66" width="10" height="34" rx="1.5"/>
    <rect x="10" y="102" width="108" height="8" rx="1.5"/>
    <circle cx="64" cy="44" r="4"/>
  </g>
</svg>
EOF
fi

if [ ! -f public/assets/icons/tallinn.svg ]; then
cat <<'EOF' > public/assets/icons/tallinn.svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 160" aria-hidden="true" role="img">
  <title>Tallinn – Old Town & Cathedral Icon</title>
  <g fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <rect x="10" y="122" width="108" height="18" rx="2"/>
    <path d="M64 24 l-6 16 h12 z"/><path d="M64 40 V108"/>
    <rect x="54" y="78" width="20" height="30" rx="1.5"/>
    <path d="M30 94 c0-10 10-18 16-18 s16 8 16 18 H30 z"/>
    <path d="M66 94 c0-10 10-18 16-18 s16 8 16 18 H66 z"/>
  </g>
</svg>
EOF
fi

# --- vercel.json (headers) – overwrite safely
cat <<'EOF' > vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "Content-Security-Policy", "value": "default-src 'self'; connect-src 'self' https://*.supabase.co; img-src 'self' https://*.supabase.co data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self';" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
EOF

# --- Optional: add favicon/meta tags to public/index.html for Vite apps
if [ -f public/index.html ] && ! grep -q 'rel="icon"' public/index.html; then
cat <<'EOF' >> public/index.html
<!-- IQSF favicon & social tags -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
<meta property="og:image" content="/images/og-1200x630.png">
EOF
fi

# --- Favicon generation if possible
if command -v convert >/dev/null 2>&1 && [ -f public/images/iqsf-logo.png ]; then
  echo "Generating favicons from public/images/iqsf-logo.png"
  convert public/images/iqsf-logo.png -resize 48x48 public/favicons/favicon-48.png
  convert public/images/iqsf-logo.png -define icon:auto-resize=16,32,48,64 public/favicon.ico
  convert public/images/iqsf-logo.png -resize 180x180 public/favicons/apple-touch-icon.png
else
  echo "Note: favicon generation skipped (no ImageMagick or logo)."
fi

# --- Git branch (safe)
BASE_BRANCH="$(git symbolic-ref --short refs/remotes/origin/HEAD 2>/dev/null | sed 's@^origin/@@' || true)"
[ -z "$BASE_BRANCH" ] && BASE_BRANCH="main"

FEATURE="feat/iqsf-assets-$(date +%Y%m%d%H%M%S)"
echo "Switching to feature branch: $FEATURE (base: $BASE_BRANCH)"

# Try switch; if branch exists, just reuse it
git fetch --all --prune
if ! git switch -c "$FEATURE" 2>/dev/null; then
  git switch "$FEATURE"
fi

# --- Commit safely (only if there are changes)
if ! git diff --quiet -- public vercel.json; then
  git add public vercel.json
  git commit -m "chore: add favicons, Berlin/Tallinn SVGs, and Vercel security headers"
  git push -u origin "$FEATURE"
  echo "Pushed branch '$FEATURE'. Open a PR into '$BASE_BRANCH'."
else
  echo "No changes to commit."
fi

echo "=== Done ==="