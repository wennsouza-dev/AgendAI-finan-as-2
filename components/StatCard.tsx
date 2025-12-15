import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  type?: 'balance' | 'income' | 'expense';
  trend?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, type = 'balance', trend }) => {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(val);
  };

  const getIcon = () => {
    switch (type) {
      case 'income': return <ArrowUpRight className="text-emerald-500" />;
      case 'expense': return <ArrowDownRight className="text-rose-500" />;
      default: return <DollarSign className="text-indigo-500" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'income': return 'bg-emerald-50';
      case 'expense': return 'bg-rose-50';
      default: return 'bg-indigo-50';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'income': return 'text-emerald-700';
      case 'expense': return 'text-rose-700';
      default: return 'text-indigo-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 transition-all hover:shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-500">{title}</h3>
        <div className={`p-2 rounded-lg ${getBgColor()}`}>
          {getIcon()}
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-slate-900">{formatCurrency(value)}</span>
        {trend && (
          <span className={`text-xs font-medium mt-1 ${getTextColor()}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
};

export default StatCard;