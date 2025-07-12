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
      className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 w-full flex flex-col items-center mt-2"
    >
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Income vs Expenses</h2>
      <div className="flex h-8 w-full rounded-full overflow-hidden shadow-inner bg-zinc-200 dark:bg-zinc-800">
        <div 
          className="bg-emerald-500 transition-all duration-500"
          style={{ width: `${incomeWidth}%`, borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }}
        />
        <div 
          className="bg-rose-500 transition-all duration-500"
          style={{ width: `${expensesWidth}%`, borderTopRightRadius: 16, borderBottomRightRadius: 16 }}
        />
      </div>
      <div className="flex justify-between mt-2 text-sm w-full">
        <div>
          <span className="text-gray-600 dark:text-gray-400">Income: </span>
          <span className="text-emerald-500 font-semibold">
            {cashflow.income.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </span>
        </div>
        <div>
          <span className="text-gray-600 dark:text-gray-400">Expenses: </span>
          <span className="text-rose-500 font-semibold">
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
