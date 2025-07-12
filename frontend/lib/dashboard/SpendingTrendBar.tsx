'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { sixMonthSpending } from '@/lib/mock';

const ResponsiveContainer = dynamic(
	() => import('recharts').then((mod) => mod.ResponsiveContainer),
	{ ssr: false }
);
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
      className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col h-full min-h-[340px]"
    >
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">6-Month Spending Trend</h2>
      <div className="w-full flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sixMonthSpending}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
            barCategoryGap={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis dataKey="month" tick={{ fill: '#64748b', fontSize: 13 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: '#64748b', fontSize: 13 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: '#18181b', borderRadius: 8, color: '#fff', border: 'none' }} />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8} />
              </linearGradient>
            </defs>
            <Bar
              dataKey="total"
              radius={[10, 10, 0, 0]}
              fill="url(#barGradient)"
              barSize={32}
              style={{ filter: 'drop-shadow(0 2px 8px rgba(59,130,246,0.10))' }}
            />
            <Bar
              dataKey="forecast"
              fill="none"
              stroke="#3b82f6"
              strokeDasharray="6 4"
              strokeWidth={3}
              barSize={32}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
