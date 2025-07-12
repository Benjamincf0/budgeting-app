import { SummaryCards } from '@/lib/dashboard/SummaryCards';
import { SpendingTrendBar } from '@/lib/dashboard/SpendingTrendBar';
import { SpendingDonut } from '@/lib/dashboard/SpendingDonut';
import { CashflowPanel } from '@/lib/dashboard/CashflowPanel';
import { TFSABalance } from '@/lib/dashboard/TFSABalance';
import { TFSABalanceHistory } from '@/lib/dashboard/TFSABalanceHistory';

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Dashboard</h1>
        <select
          className="border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-md px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="All Accounts"
        >
          <option value="All Accounts">All Accounts</option>
          <option value="Checkings">Checkings</option>
          <option value="Savings">Savings</option>
          <option value="TFSA">TFSA</option>
        </select>
      </div>
      <div className="mb-6">
        <SummaryCards />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <SpendingTrendBar />
          <CashflowPanel />
        </div>
        <div>
          <SpendingDonut />
        </div>
      </div>
      {/* TFSA Components */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">TFSA Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TFSABalance />
          <TFSABalanceHistory />
        </div>
      </div>
      {/* ...existing code... */}
    </div>
  );
}
