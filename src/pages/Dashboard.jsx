import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/calendar.css';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  // Sample expense data - Replace with your actual data
  const expenseData = [
    { month: 'Jan', amount: 1200 },
    { month: 'Feb', amount: 900 },
    { month: 'Mar', amount: 1500 },
    { month: 'Apr', amount: 800 },
    { month: 'May', amount: 1100 },
    { month: 'Jun', amount: 1300 },
  ];

  const categoryData = [
    { name: 'Food', value: 400 },
    { name: 'Transport', value: 300 },
    { name: 'Shopping', value: 300 },
    { name: 'Bills', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const recentTransactions = [
    { id: 1, name: 'Grocery Shopping', amount: -85.50, date: '2025-04-20' },
    { id: 2, name: 'Salary Deposit', amount: 3000.00, date: '2025-04-19' },
    { id: 3, name: 'Electric Bill', amount: -120.00, date: '2025-04-18' },
  ];

  const chartColors = {
    primary: '#0088FE',
    secondary: '#00C49F',
    accent: '#FFBB28',
    neutral: '#FF8042'
  };

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Welcome back, John! 
          </h2>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl shadow-md text-white">
              <h3 className="text-sm opacity-90">Total Balance</h3>
              <p className="text-3xl font-bold mt-2">$5,240.00</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl shadow-md text-white">
              <h3 className="text-sm opacity-90">Monthly Savings</h3>
              <p className="text-3xl font-bold mt-2">$1,500.00</p>
            </div>
          </div>
        </div>




        
        
        <div className="w-full lg:w-auto">
          <Calendar
            onChange={setDate}
            value={date}
            className="shadow-xl"
          />
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Expenses Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Monthly Expenses</h3>
            <select className="px-3 py-1 border rounded-lg text-sm">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  tick={{ fill: '#666' }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#666' }}
                  axisLine={{ stroke: '#e5e7eb' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Bar 
                  dataKey="amount" 
                  fill={chartColors.primary}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Categories Chart */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Expense Categories</h3>
            <select className="px-3 py-1 border rounded-lg text-sm">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={Object.values(chartColors)[index % Object.values(chartColors).length]}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' 
                  }}
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  formatter={(value, entry) => <span className="text-gray-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Transactions Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold">Recent Transactions</h3>
          <button className="text-blue-500 hover:text-blue-600 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div>
                <p className="font-medium">{transaction.name}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <p className={`font-semibold ${
                transaction.amount > 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
