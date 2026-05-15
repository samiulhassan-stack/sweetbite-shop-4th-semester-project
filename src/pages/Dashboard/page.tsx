import { useState } from 'react'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory]       = useState('All')
  const [price, setPrice]             = useState('all')

  function filterProducts() {
    alert(`Searching: "${searchInput}" | Category: ${category} | Price: ${price}`)
  }

  const thCls  = "text-left px-4 py-3.5 text-[15px] font-semibold tracking-wide border-b-2 border-[#D4AF37]"
  const tdCls  = "px-4 py-3 text-[15px] border-b border-[#D7B98E] text-[#3E2723] align-middle whitespace-nowrap"
  const btnLg  = "px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300"
  const selCls = "px-3.5 py-2.5 text-[15px] bg-white text-[#3E2723] border border-[#8D6E63] rounded-[6px] cursor-pointer outline-none focus:border-[#D4AF37] transition-all duration-300 w-[220px]"

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Owner Dashboard</h1>
          <p className="text-[#D4AF37] text-[15px]">A quick look at today's bakery performance.</p>
        </section>

        {/* STATS */}
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {[{ label: "Today's Orders", value: '42', note: '+8 vs yesterday' }, { label: 'Revenue', value: '45000', note: '+12% weekly' }, { label: 'Cakes Baked', value: '17', note: '3 wedding tiers' }, { label: 'Reviews', value: '9', note: 'Avg 4.8 ⭐' }].map(s => (
            <div key={s.label} className="flex flex-col w-[220px] text-center items-center min-h-[220px] justify-between bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <h4 className="text-[17px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{s.label}</h4>
              <h2 className="text-[30px] font-bold text-[#D4AF37] mb-2">{s.value}</h2>
              <p className="text-[#8D6E63] text-[15px] dark:text-[#D7B98E]">{s.note}</p>
            </div>
          ))}
        </div>

        {/* STOCK MANAGEMENT */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3 dark:text-[#D4AF37]">Stock Management</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {[{ title: 'View All Stock', desc: 'See all bakery products and inventory.', btn: 'View Stock', del: false }, { title: 'Insert New Stock', desc: 'Add cakes, pastries and desserts.', btn: 'Add Stock', del: false }, { title: 'Update Stock', desc: 'Edit product quantity and prices.', btn: 'Update Stock', del: false }, { title: 'Delete Stock', desc: 'Remove unavailable bakery items.', btn: 'Delete', del: true }].map(s => (
            <div key={s.title} className="flex flex-col w-[220px] text-center items-center min-h-[220px] justify-between bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300">
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-2">{s.title}</h3>
              <p className="text-[#8D6E63] text-[15px] mb-3">{s.desc}</p>
              <button className={s.del ? "px-8 py-3.5 text-[17px] font-semibold bg-[#8B0000] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#8B0000] transition-all duration-300" : btnLg}>{s.btn}</button>
            </div>
          ))}
        </div>

        {/* SEARCH */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Search Products</h2>
        <div className="flex flex-wrap justify-center gap-3.5 my-6">
          <input type="text" placeholder="Search bakery items..." value={searchInput} onChange={e => setSearchInput(e.target.value)}
            className="px-3.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] transition-all duration-300 w-[220px]" />
          <select value={category} onChange={e => setCategory(e.target.value)} className={selCls}>
            <option value="All">All Categories</option><option value="Cakes">Cakes</option><option value="Ice Cream">Ice Cream</option><option value="Pastries">Pastries</option><option value="Cookies">Cookies</option>
          </select>
          <select value={price} onChange={e => setPrice(e.target.value)} className={selCls}>
            <option value="all">All Prices</option><option value="low">500 - 1000</option><option value="mid">1000 - 3000</option><option value="high">3000 - 5000+</option>
          </select>
          <button onClick={filterProducts} className={btnLg}>Search</button>
        </div>

        {/* ANALYTICS */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Stock Analytics</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {[{ label: 'Cakes Sold', w: '80%', from: '#3E2723', to: '#D4AF37', note: '80% Sales' }, { label: 'Ice Cream', w: '60%', from: '#5D4037', to: '#D7B98E', note: '60% Sales' }, { label: 'Pastries', w: '90%', from: '#8D6E63', to: '#D4AF37', note: '90% Sales' }].map(g => (
            <div key={g.label} className="flex flex-col w-[280px] text-center items-center bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)]">
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-2">{g.label}</h3>
              <div className="w-full h-[22px] rounded-[30px] overflow-hidden bg-[#D7B98E] my-3.5">
                <div className="h-full rounded-[30px]" style={{ width: g.w, background: `linear-gradient(90deg, ${g.from}, ${g.to})` }} />
              </div>
              <p className="text-[#5D4037] text-[15px]">{g.note}</p>
            </div>
          ))}
        </div>

        {/* RECENT ORDERS */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Recent Orders</h2>
        <div className="w-full overflow-x-auto mt-5">
          <table className="w-full border-collapse rounded-[10px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(62,39,35,0.08)]">
            <thead className="bg-[#3E2723] text-[#D4AF37]">
              <tr>{['Order ID','Customer','Items','Amount','Status','Time'].map(h => <th key={h} className={thCls}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[['#A-1042','Ali','Tiramisu ×2','7000','Delivered','10:14'],['#A-1043','Usman','Chocolate Cake','7000','Baking','10:32'],['#A-1044','Noora','Ice Cream ×4','15000','Delivered','11:05'],['#A-1045','Sami','Macarons ×3','25500','Delivery','11:42']].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#D7B98E]'} hover:bg-[#D4AF37] hover:cursor-pointer transition-colors duration-300`}>
                  {row.map((cell, j) => <td key={j} className={tdCls}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* INVENTORY */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Inventory</h2>
        <div className="w-full overflow-x-auto mt-5">
          <table className="w-full border-collapse rounded-[10px] overflow-hidden bg-white shadow-[0_4px_12px_rgba(62,39,35,0.08)]">
            <thead className="bg-[#3E2723] text-[#D4AF37]">
              <tr>{['Ingredient','Stock','Reorder','Status'].map(h => <th key={h} className={thCls}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {[{ ing: 'Cocoa', stock: '14 kg', reorder: '5 kg', status: 'OK', cls: 'text-green-600 font-bold' }, { ing: 'Vanilla', stock: '22 pods', reorder: '15 pods', status: 'OK', cls: 'text-green-600 font-bold' }, { ing: 'Cream', stock: '3 L', reorder: '5 L', status: 'LOW', cls: 'text-amber-600 font-bold' }, { ing: 'Mascarpone', stock: '0.8 kg', reorder: '2 kg', status: 'CRITICAL', cls: 'text-red-700 font-bold' }].map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#D7B98E]'} hover:bg-[#D4AF37] hover:cursor-pointer transition-colors duration-300`}>
                  <td className={tdCls}>{row.ing}</td><td className={tdCls}>{row.stock}</td><td className={tdCls}>{row.reorder}</td>
                  <td className={`${tdCls} ${row.cls}`}>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* QUICK LINKS */}
        <h2 className="text-[30px] font-bold text-[#5D4037] mt-8 mb-3">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {['Manage Orders','Customer Reviews','Sales Reports','Settings'].map(link => (
            <div key={link} className="flex flex-col w-[280px] text-center items-center justify-center bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] cursor-pointer hover:bg-[#3E2723] hover:-translate-y-1.5 transition-all duration-300 group">
              <h3 className="text-[22px] font-bold text-[#5D4037] group-hover:text-[#D4AF37] transition-colors duration-300">{link}</h3>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 justify-center flex-wrap my-8">
          <button className={btnLg}>Add Order</button>
          <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300">Export Report</button>
        </div>

      </div>
      <Footer />
    </>
  )
}
