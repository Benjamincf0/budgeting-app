'use client';

import { FaUniversity } from 'react-icons/fa'; // Standard bank icon placeholder

export default function ConnectBankPage() {
  const connectedBanks = [
    { name: 'Deutsche Bank', logo: <img src="/bank-logos/Deutsche_Bank-Logo.png" alt="Deutsche Bank" className="h-6" /> },
    { name: 'National Bank of Canada', logo: <img src="/bank-logos/National_Bank_of_Canada-Logo.png" alt="National Bank of Canada" className="h-6" /> },
    { name: 'Wells Fargo', logo: <img src="/bank-logos/Wells_Fargo-Logo.png" alt="Wells Fargo" className="h-6" /> },
  ];

  const handleSelectBank = (bank: string) => {
    alert(`Selected bank: ${bank}`);
  };

  const handleAddBank = () => {
    alert('Add another bank flow will be implemented here.');
  };

  return (
    <div className="p-0 md:p-12 flex items-center justify-center min-h-screen ">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg py-8 px-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 text-center">
          Connect Your Bank
        </h1>
        <p className="mb-4 text-zinc-700 dark:text-zinc-300 text-center">
          Previously connected banks:
        </p>
        <div className="space-y-6">
          {connectedBanks.map((bank) => (
            <div
              key={bank.name}
              className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-700 pb-4 pt-4 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200  px-3 mb-1"
            >
              <div className="flex items-center">
                <div className="mr-4">{bank.logo}</div>
                <span className="text-zinc-900 dark:text-zinc-100 font-medium">{bank.name}</span>
              </div>
              <button
                onClick={() => handleSelectBank(bank.name)}
                className="text-blue-500 hover:text-blue-600 hover:underline focus:outline-none transition-colors duration-200"
              >
                Select
              </button>
            </div>
          ))}
          <button
            onClick={handleAddBank}
            className=" mt-3 w-full flex items-center justify-center bg-gray-100 dark:bg-zinc-700 hover:bg-gray-200 dark:hover:bg-zinc-600 text-zinc-900 dark:text-zinc-100 font-medium py-4 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 active:scale-95 transition-transform duration-150"
          >
            <div className="mr-4">
              <FaUniversity className="text-gray-500 dark:text-zinc-300" />
            </div>
            <span>Connect Another Bank</span>
          </button>
        </div>
      </div>
    </div>
  );
}
