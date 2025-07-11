'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { sixMonthSpending } from '@/lib/mock';

const BarChart = dynamic(
  () => import('recharts').then((mod) => mod.BarChart),
  { ssr: false }
);

const Bar = dynamic(
  () => import('recharts').then((mod) => mod.Bar),
  { ssr: false }
);

const XAxis = dynamic(
  () => import('recharts').then((mod) => mod.XAxis),
  { ssr: false }
);

const YAxis = dynamic(
  () => import('recharts').then((mod) => mod.YAxis),
  { ssr: false }
);

const Tooltip = dynamic(
  () => import('recharts').then((mod) => mod.Tooltip),
  { ssr: false }
);

const CartesianGrid = dynamic(
  () => import('recharts').then((mod) => mod.CartesianGrid),
  { ssr: false }
);

export const SpendingTrendBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-md bg-white dark:bg-zinc-900 p-4"
    >
      <h2 className="text-lg font-semibold mb-4">6-Month Spending Trend</h2>
      <BarChart
        width={600}
        height={300}
        data={sixMonthSpending}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <defs>
          <filter id="shadow" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.2" />
          </filter>
        </defs>
        <Bar
          dataKey="total"
          className="fill-sky-400"
          filter="url(#shadow)"
        />
        <Bar
          dataKey="forecast"
          className="fill-transparent stroke-sky-400"
          strokeDasharray="4 4"
          strokeWidth={2}
        />
      </BarChart>
    </motion.div>
  );
};
