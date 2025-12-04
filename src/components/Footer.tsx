export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex gap-x-10 justify-between items-center">
        <p className="">Your health and productivity matter. Take care of yourself! 💙</p>
        <p className="text-right">&copy; Copyright {new Date().getFullYear()} - TechiesHabitat.com</p>
      </div>
    </footer>
  );
}
