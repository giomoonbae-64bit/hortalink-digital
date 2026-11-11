import { useEffect, useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./Icons";
import { navItems } from "../data/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fecha o menu móvel com a tecla Esc.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand-200 bg-sand-50/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="HortaLink Digital - ir para o início" onClick={close}>
          <Logo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[0.95rem] font-medium text-leaf-800 transition-colors hover:bg-leaf-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#participe"
            className="ml-2 inline-flex min-h-11 items-center rounded-full bg-leaf-700 px-5 py-2 text-[0.95rem] font-semibold text-white transition-colors hover:bg-leaf-800"
          >
            Participe
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-leaf-800 hover:bg-leaf-100 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="menu-movel"
          aria-label="Navegação principal (móvel)"
          className="border-t border-sand-200 bg-sand-50 lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={close}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-leaf-800 hover:bg-leaf-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#participe"
                onClick={close}
                className="mt-1 block rounded-xl bg-leaf-700 px-3 py-3 text-center text-base font-semibold text-white hover:bg-leaf-800"
              >
                Participe da pesquisa
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
