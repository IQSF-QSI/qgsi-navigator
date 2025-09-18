import React from 'react';

/**
 * Minimal guard: pass a session and roles array.
 * Usage:
 *   <AdminGuard session={session} roles={claims?.roles}><AdminPanel/></AdminGuard>
 */
export function AdminGuard({
  session,
  roles,
  children,
}: {
  session: any;
  roles?: string[] | undefined;
  children: React.ReactNode;
}) {
  if (!session) return <div>Sign in required.</div>;
  const isAdmin = Array.isArray(roles) && roles.includes('admin');
  if (!isAdmin) return <div>Access denied.</div>;
  return <>{children}</>;
}
