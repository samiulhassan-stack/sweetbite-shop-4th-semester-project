import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile')
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+923001234567',
    address: '123 Sweet Street, Karachi',
    birthday: '1990-05-15',
    preferences: 'Chocolate, Vanilla, No Nuts'
  })

  const orderHistory = [
    { id: '#SB-1001', date: '2026-05-10', items: 'Triple Chocolate Cake, Tiramisu', total: 11000, status: 'Delivered' },
    { id: '#SB-1002', date: '2026-05-05', items: 'Ice Cream Variety Pack', total: 8500, status: 'Delivered' },
    { id: '#SB-1003', date: '2026-04-28', items: 'French Macarons x2', total: 11000, status: 'Delivered' },
    { id: '#SB-1004', date: '2026-04-20', items: 'Custom Birthday Cake', total: 15000, status: 'Delivered' }
  ]

  const favoriteItems = [
    { name: 'Triple Chocolate Cake', price: 7000, image: imagePath('triple.jpg'), orders: 5 },
    { name: 'Classic Tiramisu', price: 4000, image: imagePath('tir.jpg'), orders: 3 },
    { name: 'French Macarons', price: 5500, image: imagePath('french.jpg'), orders: 4 },
    { name: 'Salted Caramel Scoop', price: 4500, image: imagePath('salt.jpg'), orders: 2 }
  ]

  function handleInputChange(field: string, value: string) {
    setProfileData(prev => ({ ...prev, [field]: value }))
  }

  function handleSaveProfile() {
    alert('Profile updated successfully!')
  }

  const inputCls = "w-full px-3 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] focus:shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all duration-300 dark:bg-[#2a2a2a] dark:text-[#FAF3E0] dark:border-[#4a4a4a]"
  const btnPrimary = "px-6 py-2.5 text-[15px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]"
  const tabCls = (active: boolean) => `px-6 py-3 text-[15px] font-semibold cursor-pointer border-b-2 transition-all duration-300 ${active ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-[#8D6E63] border-transparent hover:text-[#D4AF37] dark:text-[#D7B98E]'}`

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">My Profile</h1>
          <p className="text-[#D4AF37] text-[15px]">Manage your account, orders, and preferences.</p>
        </section>

        {/* TABS */}
        <div className="flex flex-wrap justify-center border-b border-[#D7B98E] mb-8 dark:border-[#4a4a4a]">
          <button 
            onClick={() => setActiveTab('profile')} 
            className={tabCls(activeTab === 'profile')}
          >
            Profile Info
          </button>
          <button 
            onClick={() => setActiveTab('orders')} 
            className={tabCls(activeTab === 'orders')}
          >
            Order History
          </button>
          <button 
            onClick={() => setActiveTab('favorites')} 
            className={tabCls(activeTab === 'favorites')}
          >
            Favorites
          </button>
          <button 
            onClick={() => setActiveTab('settings')} 
            className={tabCls(activeTab === 'settings')}
          >
            Settings
          </button>
        </div>

        {/* PROFILE INFO TAB */}
        {activeTab === 'profile' && (
          <div className="bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <h2 className="text-[30px] font-bold text-[#5D4037] mb-6 dark:text-[#D4AF37]">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Full Name</label>
                <input 
                  type="text" 
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={inputCls} 
                />
              </div>
              <div>
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Email</label>
                <input 
                  type="email" 
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={inputCls} 
                />
              </div>
              <div>
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Phone</label>
                <input 
                  type="tel" 
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={inputCls} 
                />
              </div>
              <div>
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Birthday</label>
                <input 
                  type="date" 
                  value={profileData.birthday}
                  onChange={(e) => handleInputChange('birthday', e.target.value)}
                  className={inputCls} 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Address</label>
                <input 
                  type="text" 
                  value={profileData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className={inputCls} 
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Dietary Preferences</label>
                <input 
                  type="text" 
                  value={profileData.preferences}
                  onChange={(e) => handleInputChange('preferences', e.target.value)}
                  placeholder="e.g., No nuts, Vegan, Sugar-free"
                  className={inputCls} 
                />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={handleSaveProfile} className={btnPrimary}>Save Changes</button>
              <button className="px-6 py-2.5 text-[15px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* ORDER HISTORY TAB */}
        {activeTab === 'orders' && (
          <div className="bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <h2 className="text-[30px] font-bold text-[#5D4037] mb-6 dark:text-[#D4AF37]">Order History</h2>
            <div className="space-y-4">
              {orderHistory.map(order => (
                <div key={order.id} className="border border-[#D7B98E] rounded-[8px] p-4 hover:border-[#D4AF37] transition-colors duration-300 dark:border-[#4a4a4a]">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div className="flex-1 min-w-[200px]">
                      <h3 className="text-[17px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">{order.id}</h3>
                      <p className="text-[15px] text-[#8D6E63] mb-2 dark:text-[#D7B98E]">{order.date}</p>
                      <p className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">{order.items}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[17px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">Rs. {order.total.toFixed(2)}</p>
                      <span className="inline-block px-3 py-1 text-[13px] font-semibold bg-green-100 text-green-800 rounded-full">
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="px-4 py-2 text-[13px] font-semibold text-[#D4AF37] border border-[#D4AF37] rounded hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300">
                      Reorder
                    </button>
                    <button className="px-4 py-2 text-[13px] font-semibold text-[#8D6E63] border border-[#8D6E63] rounded hover:bg-[#8D6E63] hover:text-white transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAVORITES TAB */}
        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Your Favorite Items</h2>
            <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
              {favoriteItems.map(item => (
                <div key={item.name} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-4 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <img src={item.image} alt={item.name} className="w-full h-[180px] object-cover rounded-[6px]" />
                  <h3 className="text-[22px] font-bold text-[#5D4037] mt-3 mb-2 dark:text-[#D4AF37]">{item.name}</h3>
                  <p className="text-[17px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">Rs. {item.price.toFixed(2)}</p>
                  <p className="text-[15px] text-[#8D6E63] mb-3 dark:text-[#D7B98E]">Ordered {item.orders} times</p>
                  <Link to="/cart">
                    <button className="w-full px-4 py-2.5 text-[15px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <h2 className="text-[30px] font-bold text-[#5D4037] mb-6 dark:text-[#D4AF37]">Account Settings</h2>
            <div className="space-y-6">
              <div className="border-b border-[#D7B98E] pb-6 dark:border-[#4a4a4a]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Notifications</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] rounded focus:ring-[#D4AF37]" />
                    <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">Email notifications for new offers</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] rounded focus:ring-[#D4AF37]" />
                    <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">SMS updates for order status</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] rounded focus:ring-[#D4AF37]" />
                    <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">Birthday special offers</span>
                  </label>
                </div>
              </div>
              <div className="border-b border-[#D7B98E] pb-6 dark:border-[#4a4a4a]">
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Privacy</h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] rounded focus:ring-[#D4AF37]" />
                    <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">Allow personalized recommendations</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input type="checkbox" className="w-4 h-4 text-[#D4AF37] border-[#8D6E63] rounded focus:ring-[#D4AF37]" />
                    <span className="text-[15px] text-[#5D4037] dark:text-[#FAF3E0]">Share data for analytics</span>
                  </label>
                </div>
              </div>
              <div>
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Account Actions</h3>
                <div className="flex gap-3 flex-wrap">
                  <button className={btnPrimary}>Change Password</button>
                  <button className="px-6 py-2.5 text-[15px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                    Export Data
                  </button>
                  <button className="px-6 py-2.5 text-[15px] font-semibold bg-[#8B0000] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#8B0000] transition-all duration-300">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      <Footer />
    </>
  )
}