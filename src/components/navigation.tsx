"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./dark-mode-toggle";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Archivo Sindical", href: "/archivo" },
  { name: "Cronología", href: "/cronologia" },
  { name: "Actualidad", href: "/actualidad" },
  { name: "Contacto", href: "/contacto" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-neutral-50 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-700 transition-colors">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 group">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                  <div className="w-4 h-4 bg-neutral-50 transform rotate-45"></div>
                </div>
                <span className="text-xl font-serif font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  Archivo Afrodita
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neutral-900 dark:bg-neutral-100 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <DarkModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-600"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-neutral-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-200">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-neutral-900 flex items-center justify-center">
                    <div className="w-4 h-4 bg-neutral-50 transform rotate-45"></div>
                  </div>
                  <span className="text-xl font-serif font-semibold text-neutral-900">
                    Archivo Afrodita
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-neutral-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-neutral-200 dark:divide-neutral-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                      Tema
                    </span>
                    <DarkModeToggle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}