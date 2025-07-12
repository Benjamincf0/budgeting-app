'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { summary } from '@/lib/mock';

interface CardProps {
  label: string;
  value: number;
  isPositive?: boolean;
}

const Card = ({ label, value, isPositive }: CardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col items-start min-w-[180px] min-h-[90px]"
  >
    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">{label}</div>
    <div className="flex items-center mt-1">
      <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 drop-shadow-sm">
        {value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>
      {isPositive !== undefined && (
        <span className={isPositive ? 'text-emerald-500 ml-2' : 'text-rose-500 ml-2'}>
          {isPositive ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
        </span>
      )}
    </div>
  </motion.div>
);

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <Card label="Current Balance" value={summary.balance} />
      <Card label="Income MTD" value={summary.incomeMTD} isPositive={true} />
      <Card label="Expenses MTD" value={summary.expensesMTD} isPositive={false} />
      <Card label="Net MTD" value={summary.netMTD} isPositive={summary.netMTD > 0} />
    </div>
  );
};
