export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
          Hello World!
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your new Next.js application with Tailwind CSS and shadcn/ui components.
        </p>
        <div className="pt-4">
          <div className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200">
            Ready to build something amazing!
          </div>
        </div>
      </div>
    </div>
  )
}