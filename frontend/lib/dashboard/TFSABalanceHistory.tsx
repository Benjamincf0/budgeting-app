'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const LineChart = dynamic(
  () => import('recharts').then((mod) => mod.LineChart),
  { ssr: false }
);
const Line = dynamic(
  () => import('recharts').then((mod) => mod.Line),
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

// Dummy data for TFSA balance history; replace with real data as needed.
const tfsaHistory = [
  { date: '2023-01', balance: 30000 },
  { date: '2023-02', balance: 32000 },
  { date: '2023-03', balance: 34000 },
  { date: '2023-04', balance: 36000 },
  { date: '2023-05', balance: 38000 },
  { date: '2023-06', balance: 40000 },
  { date: '2023-07', balance: 42000 },
];

export const TFSABalanceHistory = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col h-full min-h-[340px]"
    >
      <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
        TFSA Balance History
      </h2>
      <div className="w-full flex justify-center">
        <LineChart
          width={360}
          height={260}
          data={tfsaHistory}
          margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 13 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#64748b', fontSize: 13 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: '#18181b', borderRadius: 8, color: '#fff', border: 'none' }} />
          <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
        </LineChart>
      </div>
    </motion.div>
  );
};
