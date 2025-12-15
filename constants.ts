import { Transaction, MonthlyStat, DashboardSummary } from './types';

export const MOCK_SUMMARY: DashboardSummary = {
  totalBalance: 12450.80,
  monthlyIncome: 8500.00,
  monthlyExpense: 3240.50,
};

export const MOCK_CHART_DATA: MonthlyStat[] = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Fev', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Abr', income: 2780, expense: 3908 },
  { name: 'Mai', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    description: 'Desenvolvimento de Website',
    amount: 3500.00,
    type: 'income',
    category: 'Vendas',
    date: '2023-10-25'
  },
  {
    id: '2',
    description: 'Licença de Software',
    amount: 120.00,
    type: 'expense',
    category: 'Ferramentas',
    date: '2023-10-24'
  },
  {
    id: '3',
    description: 'Consultoria Marketing',
    amount: 1200.00,
    type: 'income',
    category: 'Serviços',
    date: '2023-10-23'
  },
  {
    id: '4',
    description: 'Servidor AWS',
    amount: 450.50,
    type: 'expense',
    category: 'Infraestrutura',
    date: '2023-10-22'
  },
  {
    id: '5',
    description: 'Café da Equipe',
    amount: 85.00,
    type: 'expense',
    category: 'Alimentação',
    date: '2023-10-21'
  }
];