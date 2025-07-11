'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cashflow } from '@/lib/mock';

export const CashflowPanel = () => {
  const netCashflow = cashflow.income - cashflow.expenses;
  const totalWidth = cashflow.income + cashflow.expenses;
  const incomeWidth = (cashflow.income / totalWidth) * 100;
  const expensesWidth = (cashflow.expenses / totalWidth) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-4 w-full md:static sm:fixed sm:inset-x-0 sm:bottom-0"
    >
      <h2 className="text-lg font-semibold mb-4">Income vs Expenses</h2>
      
      <div className="flex h-8 w-full rounded-full overflow-hidden">
        <div 
          className="bg-emerald-500"
          style={{ width: `${incomeWidth}%` }}
        />
        <div 
          className="bg-rose-500"
          style={{ width: `${expensesWidth}%` }}
        />
      </div>
      
      <div className="flex justify-between mt-2 text-sm">
        <div>
          <span className="text-gray-600 dark:text-gray-400">Income: </span>
          <span className="text-emerald-500">
            {cashflow.income.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
        </div>
        <div>
          <span className="text-gray-600 dark:text-gray-400">Expenses: </span>
          <span className="text-rose-500">
            {cashflow.expenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <span className="text-gray-600 dark:text-gray-400 mr-2">Net Cash-flow:</span>
        <span className={`text-xl font-semibold ${netCashflow >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
          {netCashflow.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </span>
        {netCashflow >= 0 ? (
          <ArrowUpRight className="text-emerald-500 ml-2" size={20} />
        ) : (
          <ArrowDownRight className="text-rose-500 ml-2" size={20} />
        )}
      </div>
    </motion.div>
  );
};
