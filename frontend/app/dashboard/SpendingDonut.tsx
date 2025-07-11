'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { spendingByCategory } from '@/lib/mock';

const PieChart = dynamic(
  () => import('recharts').then((mod) => mod.PieChart),
  { ssr: false }
);

const Pie = dynamic(
  () => import('recharts').then((mod) => mod.Pie),
  { ssr: false }
);

const Cell = dynamic(
  () => import('recharts').then((mod) => mod.Cell),
  { ssr: false }
);

const COLORS = [
  'fill-emerald-400',
  'fill-sky-400',
  'fill-violet-400',
  'fill-amber-400',
  'fill-rose-400',
];

export const SpendingDonut = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-4"
    >
      <h2 className="text-lg font-semibold mb-4">Monthly Spending by Category</h2>
      <div className="flex items-center justify-between">
        <div className="w-2/3">
          <PieChart width={300} height={300}>
            <Pie
              data={spendingByCategory}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              dataKey="value"
              onClick={(data) => console.log(data.name)}
            >
              {spendingByCategory.map((entry, index) => (
                <Cell 
                  key={entry.name} 
                  className={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="w-1/3">
          {spendingByCategory.map((entry, index) => (
            <div key={entry.name} className="flex items-center mb-2">
              <div className={`w-3 h-3 rounded-full mr-2 ${COLORS[index % COLORS.length]}`} />
              <span className="text-sm dark:text-gray-300">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
