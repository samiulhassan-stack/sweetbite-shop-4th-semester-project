import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/page'
import Footer from './components/Footer/page'
import Menu from './pages/Menu/page'
import Gallery from './pages/Gallery/page'
import Reviews from './pages/Reviews/page'
import Order from './pages/Order/page'
import Contact from './pages/Contact/page'
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import Dashboard from './pages/Dashboard/page'
import Cart from './pages/Cart/page'
import Teams from './pages/Teams/page'
import About from './pages/About/page'
import Profile from './pages/Profile/page'
import { imagePath } from './assets/imagePath'

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        {/* HERO */}
        <section className="flex flex-col items-center text-center px-5 py-20 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[52px] font-bold text-[#D4AF37] mb-3 tracking-wide">Welcome to SweetBite</h1>
          <h3 className="text-[22px] font-bold text-[#D4AF37] mb-2">Handcrafted Cakes · Artisan Ice Creams · Heavenly Desserts</h3>
          <p className="text-[#D4AF37] text-[15px] max-w-[620px] mb-5">
            Every bite is a little moment of joy. Made fresh daily with the finest cocoa,
            farm cream and pure vanilla — baked with love since 2011.
          </p>
          <div className="flex gap-3 mt-4 flex-wrap justify-center">
            <Link to="/menu">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">
                Explore Menu
              </button>
            </Link>
            <Link to="/order">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                Order Now
              </button>
            </Link>
          </div>
        </section>

        {/* FEATURED */}
        <section>
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3 dark:text-[#D4AF37]">Today's Favourites</h2>
          <p className="text-center text-[#5D4037] text-[15px] mb-2 dark:text-[#FAF3E0]">A taste of what our pastry chefs are excited about today.</p>
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            {[
              { img: imagePath('triple.jpg'), name: 'Triple Chocolate Cake',  desc: 'Three layers of dark, milk and white chocolate ganache.', price: '7000.00' },
              { img: imagePath('salt.jpg'),   name: 'Salted Caramel Scoop',   desc: 'Slow churned caramel ice cream with sea salt flakes.',   price: '4500.50' },
              { img: imagePath('tir.jpg'),    name: 'Classic Tiramisu',       desc: 'Espresso-soaked ladyfingers with mascarpone cream.',     price: '4000.00' },
              { img: imagePath('french.jpg'), name: 'French Macarons',        desc: 'A box of twelve with rotating flavours.',               price: '5500.00' },
            ].map(item => (
              <div key={item.name} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <img src={item.img} alt={item.name} className="w-full h-[180px] object-cover rounded-[6px]" />
                <h3 className="text-[22px] font-bold text-[#5D4037] mt-3 mb-2 dark:text-[#D4AF37]">{item.name}</h3>
                <p className="text-[#5D4037] text-[15px] mb-2 dark:text-[#FAF3E0]">{item.desc}</p>
                <h4 className="text-[17px] font-semibold text-[#5D4037] dark:text-[#D4AF37]">{item.price}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="mt-8">
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3 dark:text-[#D4AF37]">Why SweetBite?</h2>
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            {[
              { title: 'Baked Fresh Daily',   desc: "Nothing is older than today's baking." },
              { title: 'Premium Ingredients', desc: 'Only the finest cocoa, vanilla, and dairy.' },
              { title: 'Custom Orders',       desc: 'We design cakes for your special moments.' },
            ].map(item => (
              <div key={item.title} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-4 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{item.title}</h3>
                <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/"          element={<Home />} />
        <Route path="/menu"      element={<Menu />} />
        <Route path="/gallery"   element={<Gallery />} />
        <Route path="/reviews"   element={<Reviews />} />
        <Route path="/order"     element={<Order />} />
        <Route path="/contact"   element={<Contact />} />
        <Route path="/login"     element={<Login />} />
        <Route path="/signup"    element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart"      element={<Cart />} />
        <Route path="/teams"     element={<Teams />} />
        <Route path="/about"     element={<About />} />
        <Route path="/profile"   element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
