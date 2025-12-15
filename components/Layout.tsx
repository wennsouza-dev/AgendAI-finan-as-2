import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, Wallet, Bell, Settings, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-indigo-600 bg-indigo-50' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Fixo */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold text-slate-800 tracking-tight">AgendaAI</span>
              </Link>

              <nav className="hidden md:flex space-x-1">
                <Link
                  to="/"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')}`}
                >
                  <div className="flex items-center gap-2">
                    <LayoutGrid size={18} />
                    Início
                  </div>
                </Link>
                <Link
                  to="/financas"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/financas')}`}
                >
                  <div className="flex items-center gap-2">
                    <Wallet size={18} />
                    Finanças
                  </div>
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Bell size={20} />
              </button>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Settings size={20} />
              </button>
              <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600 ring-2 ring-white cursor-pointer">
                US
              </div>
              <button className="md:hidden p-2 text-slate-600">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-slate-500">
            &copy; {new Date().getFullYear()} AgendaAI. Módulo Financeiro v1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;