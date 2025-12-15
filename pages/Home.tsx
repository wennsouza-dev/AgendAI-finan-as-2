import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, CheckCircle, TrendingUp, Shield } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center space-y-12">
      <div className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Novidade: Módulo Financeiro Disponível
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight">
          Controle total das suas <br/>
          <span className="text-indigo-600">Finanças Empresariais</span>
        </h1>
        
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          O AgendaAI Finanças é a solução completa para gerenciar receitas, despesas e visualizar o crescimento do seu negócio em tempo real.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            to="/financas"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-200 transform hover:-translate-y-1"
          >
            <Wallet className="mr-2 -ml-1" size={20} />
            Acessar Dashboard
          </Link>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            Ver Documentação
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left mt-12">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
            <TrendingUp size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Relatórios em Tempo Real</h3>
          <p className="text-slate-600">Acompanhe seu fluxo de caixa e tome decisões baseadas em dados atualizados.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
            <CheckCircle size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Conciliação Simplificada</h3>
          <p className="text-slate-600">Categorize transações automaticamente e mantenha tudo organizado.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
            <Shield size={24} />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Segurança Garantida</h3>
          <p className="text-slate-600">Seus dados financeiros são criptografados e armazenados com segurança máxima.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;