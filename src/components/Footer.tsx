export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p>&copy; Copyright {new Date().getFullYear()} - TechiesHabitat.com</p>
        <p className="text-[1.5rem]">Your health and productivity matter. Take care of yourself! 💙</p>
        <p>Built with React.js &amp; TailwindCSS</p>
      </div>
    </footer>
  );
}
