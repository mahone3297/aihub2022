// components/Navbar.js
export default function Navbar() {
    return (
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">从零开始学AI / Learn AI from scratch</h1>
          <ul className="flex space-x-4">
            <li><a href="#products" className="hover:underline">产品</a></li>
            <li><a href="#faq" className="hover:underline">常见问题</a></li>
          </ul>
        </nav>
      </header>
    );
  }