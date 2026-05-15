import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'

export default function Login() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Login Successful!')
  }

  const inputCls = "w-full px-2.5 py-2.5 text-[15px] bg-[#FAF3E0] text-[#3E2723] border border-[#8D6E63] rounded-[6px] outline-none focus:border-[#D4AF37] focus:shadow-[0_0_5px_rgba(212,175,55,0.3)] transition-all duration-300 dark:bg-[#2a2a2a] dark:text-[#FAF3E0] dark:border-[#4a4a4a]"

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen px-5 bg-[#FAF3E0] dark:bg-[#1a1a1a]">
        <div className="w-full max-w-[420px] bg-white p-8 rounded-[10px] shadow-[0_6px_18px_rgba(0,0,0,0.15)] text-center dark:bg-[#2a2a2a] dark:shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
          <h1 className="text-[42px] font-bold text-[#3E2723] mb-2 dark:text-[#D4AF37]">Login</h1>
          <p className="text-[#5D4037] text-[15px] mb-5 dark:text-[#FAF3E0]">Welcome back to SweetBite 🍰</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <div><label className="block mb-1.5 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Email</label>
              <input type="email" placeholder="Enter email" required className={inputCls} /></div>
            <div><label className="block mb-1.5 text-[14px] font-bold text-[#5D4037] dark:text-[#D4AF37]">Password</label>
              <input type="password" placeholder="Enter password" required className={inputCls} /></div>
            <button type="submit" className="w-full py-3 mt-2 text-[15px] font-bold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">Login</button>
            <p className="text-center text-[#5D4037] text-[15px] mt-2 dark:text-[#FAF3E0]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#D4AF37] font-bold no-underline hover:underline">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
