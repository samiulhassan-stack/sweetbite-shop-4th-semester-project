import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

const cakes = [
  { img: imagePath('triplee.jpg'), name: 'Triple Chocolate', desc: 'Dark, milk & white chocolate layered with ganache.',  price: '7000.00' },
  { img: imagePath('redd.jpg'),    name: 'Red Velvet',       desc: 'Velvety crumb with cream cheese frosting.',           price: '7500.00' },
  { img: imagePath('van.jpg'),     name: 'Vanilla Bean',     desc: 'Light sponge with Madagascar vanilla cream.',         price: '6000.00' },
]
const iceCreams = [
  { img: imagePath('salt.jpg'),  name: 'Salted Caramel',        desc: 'Slow churned caramel with sea salt.',  price: '1500.50' },
  { img: imagePath('picto.jpg'), name: 'Pistachio Royale',      desc: 'Roasted pistachio gelato.',            price: '1800.00' },
  { img: imagePath('staaa.jpg'), name: 'Strawberry Cheesecake', desc: 'Strawberry swirl with cream cheese.',  price: '1200.50' },
]
const desserts = [
  { img: imagePath('tira.jpg'),   name: 'Tiramisu',        desc: 'Espresso soaked layers with mascarpone.', price: '1200.00' },
  { img: imagePath('french.jpg'), name: 'French Macarons', desc: 'Box of 12 assorted flavours.',            price: '3500.00' },
  { img: imagePath('chee.jpg'),   name: 'NY Cheesecake',   desc: 'Baked cheesecake with berry topping.',    price: '2000.00' },
]

function MenuCard({ img, name, desc, price }: { img: string; name: string; desc: string; price: string }) {
  return (
    <div className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300">
      <img src={img} alt={name} className="w-full h-[180px] object-cover rounded-[6px]" />
      <h3 className="text-[22px] font-bold text-[#5D4037] mt-3 mb-2">{name}</h3>
      <p className="text-[#5D4037] text-[15px] mb-2">{desc}</p>
      <h4 className="text-[17px] font-semibold text-[#D4AF37]">{price}</h4>
    </div>
  )
}

export default function Menu() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Our Menu</h1>
          <p className="text-[#D4AF37] text-[15px]">Cakes, ice creams &amp; desserts — freshly made every morning.</p>
        </section>

        <h2 className="text-[30px] font-bold text-[#5D4037] mb-3">Signature Cakes</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{cakes.map(c => <MenuCard key={c.name} {...c} />)}</div>

        <h2 className="text-[30px] font-bold text-[#5D4037] mb-3">Artisan Ice Creams</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{iceCreams.map(c => <MenuCard key={c.name} {...c} />)}</div>

        <h2 className="text-[30px] font-bold text-[#5D4037] mb-3">Heavenly Desserts</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{desserts.map(c => <MenuCard key={c.name} {...c} />)}</div>

        <div className="text-center my-8">
          <Link to="/order">
            <button className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300">
              Place Your Order
            </button>
          </Link>
        </div>

      </div>
      <Footer />
    </>
  )
}
