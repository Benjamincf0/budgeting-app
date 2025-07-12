'use client';

import { motion } from 'framer-motion';

export const TFSABalance = () => {
  // Dummy TFSA balance value; replace with real data as needed.
  const balance = 50000;
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col items-start min-w-[180px] min-h-[90px]"
    >
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-1">TFSA Balance</div>
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </div>
    </motion.div>
  );
};
