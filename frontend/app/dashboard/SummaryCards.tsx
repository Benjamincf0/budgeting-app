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
    className="rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-4"
  >
    <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
    <div className="flex items-center mt-2">
      <span className="text-xl font-semibold">
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card label="Current Balance" value={summary.balance} />
      <Card label="Income MTD" value={summary.incomeMTD} isPositive={true} />
      <Card label="Expenses MTD" value={summary.expensesMTD} isPositive={false} />
      <Card label="Net MTD" value={summary.netMTD} isPositive={summary.netMTD > 0} />
    </div>
  );
};
