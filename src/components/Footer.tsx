export default function Footer() {
  return (
    <footer className="bg-[#0d0d0f] text-neutral-300 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-8 grid gap-6 md:grid-cols-3">
        <div>
          <div className="text-white font-semibold mb-2">International Queer Safety Foundation</div>
          <p className="text-sm">
            Advancing global LGBTQ+ safety, digital sovereignty, and human-centered technology.
          </p>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Links</div>
          <ul className="text-sm space-y-1">
            <li><a className="hover:text-white" href="/privacy">Privacy</a></li>
            <li><a className="hover:text-white" href="/terms">Terms</a></li>
            <li><a className="hover:text-white" href="https://iqsf.org" aria-current="page">IQSF.org</a></li>
            <li><a className="hover:text-white" href="https://vectorforgood.com" target="_blank" rel="noopener">Vector For Good</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-2">Contact</div>
          <p className="text-sm">Dover, DE · info@iqsf.org</p>
          <div className="mt-3 flex items-center gap-3">
            <img src="/assets/icons/berlin.svg" alt="Berlin" className="h-6 w-auto" />
            <img src="/assets/icons/tallinn.svg" alt="Tallinn" className="h-6 w-auto" />
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-800 text-xs text-neutral-500 py-3 text-center">
        © {new Date().getFullYear()} International Queer Safety Foundation · A Vector For Good initiative
      </div>
    </footer>
  );
}
