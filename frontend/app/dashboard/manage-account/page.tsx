'use client';

export default function ManageAccountPage() {
  const handleUpdateInfo = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Update Info submitted');
  };

  const handleVerifyEmail = () => {
    alert('Verification email sent');
  };

  const handleRequestData = () => {
    alert('Request for app data submitted');
  };

  const handleDeleteAccount = () => {
    alert('Account deletion process initiated');
  };

  return (
    <div className="p-8 md:p-12 flex items-center justify-center min-h-screen ">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg py-8 px-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100 text-center">Manage Account</h1>

        <form onSubmit={handleUpdateInfo} className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Update Your Info</h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-zinc-700 dark:text-zinc-300 mb-2">Name</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Update Info</button>
        </form>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Verify Your Email Address</h2>
          <button onClick={handleVerifyEmail} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Send Verification Email</button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Sign Up for Newsletter</h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-zinc-700 dark:text-zinc-300">I want to receive the newsletter</span>
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Accept Terms</h2>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-zinc-700 dark:text-zinc-300">I accept the terms and conditions</span>
          </label>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Request App Data</h2>
          <button onClick={handleRequestData} className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">Request Data</button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Delete Account</h2>
          <button onClick={handleDeleteAccount} className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
