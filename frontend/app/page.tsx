import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-zinc-50 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
      {/* ...existing header/footer if any... */}
      <h1 className="text-4xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 drop-shadow-lg">
        Welcome to Personal Finance Manager
      </h1>
      <p className="mb-6 text-lg text-zinc-800 dark:text-zinc-200 text-center max-w-xl">
        Discover the ultimate tool for budgeting and personal finance management.
        Track your spending, connect your bank, and stay on top of your budget.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link href="/auth">
          <button className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
            Create Account / Login
          </button>
        </Link>
      </div>
    </main>
  );
}
