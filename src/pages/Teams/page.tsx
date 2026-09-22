import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

export default function Teams() {
  const teamMembers = [
    {
      name: 'Chef Maria Rodriguez',
      role: 'Head Pastry Chef',
      experience: '15 years',
      specialty: 'French Pastries & Wedding Cakes',
      image: imagePath('chee.jpg'),
      bio: 'Maria brings European elegance to every creation with her training from Le Cordon Bleu Paris.'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Ice Cream Specialist',
      experience: '8 years',
      specialty: 'Artisan Ice Creams & Gelatos',
      image: imagePath('mint.webp'),
      bio: 'Ahmed crafts our signature ice creams using traditional techniques and premium ingredients.'
    },
    {
      name: 'Sarah Johnson',
      role: 'Cake Designer',
      experience: '12 years',
      specialty: 'Custom Cake Design & Decoration',
      image: imagePath('van.jpg'),
      bio: 'Sarah transforms celebrations into edible art with her innovative cake designs.'
    },
    {
      name: 'Omar Ali',
      role: 'Chocolatier',
      experience: '10 years',
      specialty: 'Handcrafted Chocolates & Truffles',
      image: imagePath('fudge.webp'),
      bio: 'Omar creates exquisite chocolates that melt hearts and satisfy the most discerning palates.'
    },
    {
      name: 'Lisa Chen',
      role: 'Bakery Manager',
      experience: '7 years',
      specialty: 'Operations & Quality Control',
      image: imagePath('picto.jpg'),
      bio: 'Lisa ensures every product meets our high standards and operations run smoothly.'
    },
    {
      name: 'David Thompson',
      role: 'Sous Chef',
      experience: '6 years',
      specialty: 'Bread & Savory Pastries',
      image: imagePath('redd.jpg'),
      bio: 'David brings warmth to our bakery with fresh breads and savory delights baked daily.'
    }
  ]

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">Meet Our Team</h1>
          <p className="text-[#D4AF37] text-[15px] max-w-[620px]">
            Behind every sweet creation is a passionate team of artisans dedicated to bringing joy through exceptional desserts.
          </p>
        </section>

        {/* TEAM INTRO */}
        <section className="text-center mb-8">
          <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Passionate Artisans</h2>
          <p className="text-[#5D4037] text-[15px] max-w-[800px] mx-auto dark:text-[#FAF3E0]">
            Each member of our team brings unique skills and creativity to SweetBite. From our head pastry chef's European training 
            to our chocolatier's handcrafted truffles, every person contributes to making your sweet moments unforgettable.
          </p>
        </section>

        {/* TEAM MEMBERS */}
        <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
          {teamMembers.map(member => (
            <div key={member.name} className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
              <img src={member.image} alt={member.name} className="w-full h-[200px] object-cover rounded-[6px] mb-4" />
              <h3 className="text-[22px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">{member.name}</h3>
              <h4 className="text-[17px] font-semibold text-[#D4AF37] mb-2">{member.role}</h4>
              <div className="flex justify-between items-center mb-3">
                <span className="text-[15px] text-[#8D6E63] dark:text-[#D7B98E]">Experience: {member.experience}</span>
              </div>
              <p className="text-[15px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">Specialty:</p>
              <p className="text-[15px] text-[#5D4037] mb-3 dark:text-[#FAF3E0]">{member.specialty}</p>
              <p className="text-[15px] text-[#8D6E63] italic dark:text-[#D7B98E]">{member.bio}</p>
            </div>
          ))}
        </div>

        {/* TEAM VALUES */}
        <section className="mt-8">
          <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Values</h2>
          <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
            {[
              { 
                title: 'Passion for Excellence', 
                desc: 'Every team member is passionate about creating the perfect dessert experience.',
                icon: '🎯'
              },
              { 
                title: 'Continuous Learning', 
                desc: 'We constantly explore new techniques and flavors to innovate our offerings.',
                icon: '📚'
              },
              { 
                title: 'Customer First', 
                desc: 'Your satisfaction and joy are at the heart of everything we create.',
                icon: '❤️'
              },
              { 
                title: 'Quality Ingredients', 
                desc: 'We source only the finest ingredients to ensure exceptional taste.',
                icon: '🌟'
              }
            ].map(value => (
              <div key={value.title} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                <div className="text-[40px] mb-3">{value.icon}</div>
                <h3 className="text-[22px] font-bold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{value.title}</h3>
                <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* JOIN TEAM */}
        <section className="text-center mt-8 bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Join Our Team</h2>
          <p className="text-[#5D4037] text-[15px] mb-5 max-w-[600px] mx-auto dark:text-[#FAF3E0]">
            Are you passionate about creating sweet memories? We're always looking for talented individuals 
            who share our commitment to excellence and customer satisfaction.
          </p>
          <button className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">
            View Career Opportunities
          </button>
        </section>

      </div>
      <Footer />
    </>
  )
}