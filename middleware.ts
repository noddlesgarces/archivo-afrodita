import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // No interceptar estáticos, API ni la propia intro
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/intro') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Si no hay cookie, enviar a /intro
  const seen = req.cookies.get('seenIntro')?.value === '1';
  if (!seen) {
    const url = req.nextUrl.clone();
    url.pathname = '/intro';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Define qué rutas observa el middleware (toda la app)
export const config = {
  matcher: ['/((?!.*\\.).*)'],
};
