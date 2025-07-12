'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { spendingByCategory } from '@/lib/mock';

const ResponsiveContainer = dynamic(
	() => import('recharts').then((mod) => mod.ResponsiveContainer),
	{ ssr: false }
);
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
  '#10b981',
  '#3b82f6',
  '#a21caf',
  '#f59e42',
  '#ef4444',
];

const spendingByCategoryWithColors = spendingByCategory.map((entry, index) => ({
  ...entry,
  fill: COLORS[index % COLORS.length],
}));

export const SpendingDonut = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col h-full min-h-[340px]"
    >
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Monthly Spending by Category</h2>
      <div className="w-full flex flex-col md:flex-row gap-4 flex-1">
        <div className="w-full md:flex-1flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingByCategoryWithColors}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="90%"
                dataKey="value"
                nameKey="name"
                paddingAngle={0}
                stroke="#0d4c8c" // Dark border color
                strokeWidth={0} // Smooth border width
              >
                {spendingByCategoryWithColors.map((entry) => (
                  <Cell 
                    key={entry.name} 
                    fill={entry.fill} 
                    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))' }}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-full md:w-40 flex flex-col justify-center">
          {spendingByCategoryWithColors.map((entry) => (
            <div key={entry.name} className="flex items-center mb-2">
              <div style={{ background: entry.fill }} className="w-4 h-4 rounded-full mr-3 shadow" />
              <span className="text-base text-zinc-700 dark:text-zinc-200 font-medium">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
