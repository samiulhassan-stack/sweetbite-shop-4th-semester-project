import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

const cakes     = [{ img: imagePath('triple.jpg'), label: 'Triple Chocolate' }, { img: imagePath('redd.jpg'), label: 'Red Velvet' }, { img: imagePath('van.jpg'), label: 'Vanilla Bean' }, { img: imagePath('wed.jpg'), label: 'Wedding Tier' }]
const iceCreams = [{ img: imagePath('salt.jpg'), label: 'Salted Caramel' }, { img: imagePath('picto.jpg'), label: 'Pistachio Royale' }, { img: imagePath('staaa.jpg'), label: 'Strawberry Cheesecake' }, { img: imagePath('mint.webp'), label: 'Mint Choc Chip' }]
const desserts  = [{ img: imagePath('tir.jpg'), label: 'Tiramisu' }, { img: imagePath('french.jpg'), label: 'French Macarons' }, { img: imagePath('chee.jpg'), label: 'NY Cheesecake' }, { img: imagePath('fudge.webp'), label: 'Fudge Brownie' }]

function GalleryCard({ img, label }: { img: string; label: string }) {
  return (
    <div className="flex flex-col w-[240px] text-center bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300">
      <img src={img} alt={label} className="w-full h-[180px] object-cover rounded-[6px]" />
      <h4 className="text-[17px] font-semibold text-[#5D4037] mt-3">{label}</h4>
    </div>
  )
}

export default function Gallery() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Our Gallery</h1>
          <p className="text-[#D4AF37] text-[15px]">A delicious peek inside the SweetBite kitchen.</p>
        </section>

        <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3">Cakes</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{cakes.map(c => <GalleryCard key={c.label} {...c} />)}</div>

        <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3">Ice Creams</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{iceCreams.map(c => <GalleryCard key={c.label} {...c} />)}</div>

        <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3">Desserts</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">{desserts.map(c => <GalleryCard key={c.label} {...c} />)}</div>

      </div>
      <Footer />
    </>
  )
}
