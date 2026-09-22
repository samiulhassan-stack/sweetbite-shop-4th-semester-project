import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'
import Footer from '../../components/Footer/page'
import { imagePath } from '../../assets/imagePath'

export default function About() {
  const [activeTab, setActiveTab] = useState('story')
  const [selectedYear, setSelectedYear] = useState<string | null>(null)

  const tabCls = (active: boolean) => `px-6 py-3 text-[15px] font-semibold cursor-pointer border-b-2 transition-all duration-300 ${active ? 'text-[#D4AF37] border-[#D4AF37]' : 'text-[#8D6E63] border-transparent hover:text-[#D4AF37] dark:text-[#D7B98E]'}`

  const timelineEvents = [
    { year: '2011', title: 'SweetBite Founded', desc: 'Started with 3 signature recipes in a small 200 sq ft kitchen', details: 'Maria Rodriguez, inspired by her grandmother\'s recipes, opened the first SweetBite location with just $5,000 and a dream to bring authentic European pastries to the local community.' },
    { year: '2013', title: 'First Expansion', desc: 'Moved to larger location, added ice cream', details: 'Due to overwhelming demand, we relocated to a 1,000 sq ft space and introduced our artisan ice cream line, featuring 12 unique flavors made with organic ingredients.' },
    { year: '2015', title: 'Best Bakery Award', desc: 'City\'s Choice Award for Excellence', details: 'Recognized by the City Food Council as the "Best Bakery" after a blind taste test involving 50+ local establishments. This award put SweetBite on the culinary map.' },
    { year: '2017', title: 'Custom Cake Division', desc: 'Launched wedding and event cake services', details: 'Established our custom cake division, completing over 200 wedding cakes in the first year and becoming the preferred vendor for major event venues.' },
    { year: '2018', title: '50,000+ Happy Customers', desc: 'Milestone celebration with community event', details: 'Celebrated serving our 50,000th customer with a week-long community festival, featuring free samples, live music, and pastry-making workshops.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Launched online ordering and delivery', details: 'Adapted to changing times by launching our e-commerce platform and contactless delivery service, maintaining customer connections during challenging times.' },
    { year: '2022', title: 'Second Location', desc: 'Opened downtown flagship store', details: 'Opened our 2,500 sq ft flagship location in the heart of downtown, featuring a café area, pastry viewing kitchen, and interactive dessert bar.' },
    { year: '2023', title: 'Sustainability Initiative', desc: 'Eco-friendly packaging and carbon neutral', details: 'Became the first bakery in the region to achieve carbon neutrality, implementing solar panels, compostable packaging, and local ingredient sourcing.' },
    { year: '2025', title: 'Culinary School Partnership', desc: 'Training program for aspiring pastry chefs', details: 'Partnered with the local culinary institute to offer internships and mentorship programs, helping train the next generation of pastry artists.' },
    { year: '2026', title: '100+ Unique Recipes', desc: 'Constantly innovating flavors and techniques', details: 'Reached our milestone of 100 unique recipes, including seasonal specialties, dietary-friendly options, and fusion desserts that blend international flavors.' }
  ]

  const stats = [
    { number: '15+', label: 'Years of Excellence', icon: '🏆' },
    { number: '100K+', label: 'Happy Customers', icon: '😊' },
    { number: '100+', label: 'Unique Recipes', icon: '📝' },
    { number: '2', label: 'Store Locations', icon: '🏪' },
    { number: '25+', label: 'Team Members', icon: '👥' },
    { number: '1000+', label: 'Custom Cakes', icon: '🎂' },
    { number: '50+', label: 'Awards Won', icon: '🥇' },
    { number: '365', label: 'Days Fresh Baking', icon: '🍞' }
  ]

  const certifications = [
    { name: 'Food Safety Certified', icon: '🛡️', desc: 'HACCP and FDA compliant' },
    { name: 'Organic Certified', icon: '🌿', desc: 'USDA Organic ingredients' },
    { name: 'Fair Trade Partner', icon: '🤝', desc: 'Ethically sourced cocoa' },
    { name: 'Carbon Neutral', icon: '🌍', desc: 'Zero carbon footprint' },
    { name: 'Allergen Safe', icon: '⚕️', desc: 'Dedicated allergen-free prep' },
    { name: 'Local Business Award', icon: '🏅', desc: 'Community choice winner' }
  ]

  const founders = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & Head Pastry Chef',
      image: imagePath('chee.jpg'),
      bio: 'Maria\'s journey began in her grandmother\'s kitchen in Barcelona. After training at Le Cordon Bleu Paris and working in Michelin-starred restaurants across Europe, she brought her passion for authentic pastries to create SweetBite.',
      achievements: ['Le Cordon Bleu Graduate', 'James Beard Nominee', '15+ Years Experience'],
      quote: 'Every dessert tells a story, and I want each bite to transport you to a moment of pure joy.'
    },
    {
      name: 'David Chen',
      role: 'Co-Founder & Business Director',
      image: imagePath('redd.jpg'),
      bio: 'David brings 20 years of business expertise and a passion for sustainable practices. His vision of combining traditional craftsmanship with modern business practices has been key to SweetBite\'s growth.',
      achievements: ['MBA Harvard Business School', 'Sustainability Advocate', 'Community Leader'],
      quote: 'Great business is about creating value for everyone - customers, employees, and the community.'
    }
  ]

  const communityImpact = [
    { title: 'Local Sourcing', desc: 'Supporting 15+ local farms and suppliers', impact: '85% of ingredients sourced locally' },
    { title: 'Job Creation', desc: 'Providing employment opportunities', impact: '25+ full-time positions created' },
    { title: 'Community Events', desc: 'Hosting workshops and celebrations', impact: '50+ events hosted annually' },
    { title: 'Charity Support', desc: 'Supporting local food banks and shelters', impact: '$25,000+ donated yearly' },
    { title: 'Education Programs', desc: 'Teaching baking skills to youth', impact: '200+ students trained' },
    { title: 'Environmental Impact', desc: 'Reducing waste and carbon footprint', impact: '90% waste reduction achieved' }
  ]

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-[calc(100vh-70px)] px-8 py-7 max-w-[1280px] mx-auto w-full dark:bg-[#1a1a1a]">

        <section className="flex flex-col items-center text-center px-5 py-16 bg-gradient-to-br from-[#3E2723] to-[#5D4037] rounded-[10px] mb-8 dark:from-[#2a1810] dark:to-[#3d2b1f]">
          <h1 className="text-[42px] font-bold text-[#D4AF37] mb-3">About SweetBite</h1>
          <p className="text-[#D4AF37] text-[15px] max-w-[620px] mb-4">
            Crafting sweet memories since 2011 with passion, quality, and a commitment to excellence.
          </p>
          <div className="flex gap-6 text-[#D4AF37] text-[14px]">
            <span>🏆 15+ Years Excellence</span>
            <span>🌟 100K+ Happy Customers</span>
            <span>🌍 Carbon Neutral</span>
          </div>
        </section>

        {/* NAVIGATION TABS */}
        <div className="flex flex-wrap justify-center border-b border-[#D7B98E] mb-8 dark:border-[#4a4a4a]">
          <button onClick={() => setActiveTab('story')} className={tabCls(activeTab === 'story')}>Our Story</button>
          <button onClick={() => setActiveTab('timeline')} className={tabCls(activeTab === 'timeline')}>Timeline</button>
          <button onClick={() => setActiveTab('founders')} className={tabCls(activeTab === 'founders')}>Founders</button>
          <button onClick={() => setActiveTab('impact')} className={tabCls(activeTab === 'impact')}>Community Impact</button>
          <button onClick={() => setActiveTab('certifications')} className={tabCls(activeTab === 'certifications')}>Certifications</button>
        </div>

        {/* OUR STORY TAB */}
        {activeTab === 'story' && (
          <>
            {/* STORY SECTION */}
            <section className="mb-8">
              <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Story</h2>
              <div className="flex flex-wrap justify-center gap-8 items-center mb-8">
                <div className="flex-1 min-w-[300px] max-w-[500px]">
                  <p className="text-[#5D4037] text-[15px] mb-4 dark:text-[#FAF3E0]">
                    SweetBite began as a small family dream in 2011. What started as a humble bakery with just three recipes 
                    has grown into a beloved destination for dessert enthusiasts across the city.
                  </p>
                  <p className="text-[#5D4037] text-[15px] mb-4 dark:text-[#FAF3E0]">
                    Our founder, Maria Rodriguez, inspired by her grandmother's secret recipes and European pastry techniques, 
                    set out to create a place where every bite tells a story of tradition, innovation, and pure joy.
                  </p>
                  <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                    Today, we continue that legacy with the same commitment to quality ingredients, handcrafted techniques, 
                    and the belief that life's sweetest moments deserve the perfect dessert.
                  </p>
                </div>
                <div className="flex-1 min-w-[300px] max-w-[400px]">
                  <img src={imagePath('staaa.jpg')} alt="SweetBite Story" className="w-full h-[300px] object-cover rounded-[10px] shadow-[0_4px_12px_rgba(62,39,35,0.15)]" />
                </div>
              </div>
            </section>

            {/* STATISTICS */}
            <section className="mb-8">
              <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">By the Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map(stat => (
                  <div key={stat.label} className="flex flex-col items-center p-4 bg-white border border-[#D7B98E] rounded-[10px] shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1 transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                    <div className="text-[30px] mb-2">{stat.icon}</div>
                    <div className="text-[24px] font-bold text-[#D4AF37] mb-1">{stat.number}</div>
                    <div className="text-[13px] text-[#5D4037] text-center dark:text-[#FAF3E0]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* MISSION & VISION */}
            <section className="mb-8">
              <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
                <div className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <div className="text-[40px] mb-3">🎯</div>
                  <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Mission</h3>
                  <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                    To create exceptional desserts that bring joy, celebrate life's special moments, and build lasting memories 
                    through the perfect blend of traditional craftsmanship and innovative flavors.
                  </p>
                </div>
                <div className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <div className="text-[40px] mb-3">🌟</div>
                  <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Vision</h3>
                  <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                    To be the most beloved dessert destination, known for our commitment to quality, creativity, and the ability 
                    to turn every ordinary day into a sweet celebration.
                  </p>
                </div>
                <div className="flex flex-col w-[380px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                  <div className="text-[40px] mb-3">💝</div>
                  <h3 className="text-[22px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Our Values</h3>
                  <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">
                    Quality, authenticity, sustainability, and community. These core values guide every decision we make 
                    and every dessert we create, ensuring we stay true to our founding principles.
                  </p>
                </div>
              </div>
            </section>

            {/* QUALITY COMMITMENT */}
            <section className="mb-8">
              <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Quality Commitment</h2>
              <div className="flex flex-wrap justify-center gap-5 my-9 mx-3">
                {[
                  { icon: '🥛', title: 'Premium Ingredients', desc: 'We source the finest cocoa, vanilla, dairy, and seasonal fruits from trusted suppliers worldwide.' },
                  { icon: '👨‍🍳', title: 'Expert Craftsmanship', desc: 'Our skilled pastry chefs bring years of experience and passion to every creation, ensuring perfection.' },
                  { icon: '🕐', title: 'Fresh Daily', desc: 'Everything is baked fresh daily using traditional techniques to ensure optimal taste and quality.' },
                  { icon: '🌱', title: 'Sustainable Practices', desc: 'We\'re committed to environmentally responsible sourcing, packaging, and carbon-neutral operations.' }
                ].map(commitment => (
                  <div key={commitment.title} className="flex flex-col w-[280px] bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1.5 hover:shadow-[0_10px_24px_rgba(62,39,35,0.18)] hover:border-[#D4AF37] transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                    <div className="text-[40px] mb-3">{commitment.icon}</div>
                    <h3 className="text-[22px] font-bold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{commitment.title}</h3>
                    <p className="text-[#5D4037] text-[15px] dark:text-[#FAF3E0]">{commitment.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* TIMELINE TAB */}
        {activeTab === 'timeline' && (
          <section className="mb-8">
            <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Journey Through Time</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#D4AF37] h-full"></div>
              
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div 
                        className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] cursor-pointer hover:-translate-y-1 transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a]"
                        onClick={() => setSelectedYear(selectedYear === event.year ? null : event.year)}
                      >
                        <h3 className="text-[24px] font-bold text-[#D4AF37] mb-2">{event.year}</h3>
                        <h4 className="text-[18px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{event.title}</h4>
                        <p className="text-[15px] text-[#5D4037] mb-2 dark:text-[#FAF3E0]">{event.desc}</p>
                        {selectedYear === event.year && (
                          <div className="mt-4 p-4 bg-[#FAF3E0] rounded-[6px] dark:bg-[#1a1a1a]">
                            <p className="text-[14px] text-[#5D4037] dark:text-[#FAF3E0]">{event.details}</p>
                          </div>
                        )}
                        <button className="text-[13px] text-[#D4AF37] hover:underline mt-2">
                          {selectedYear === event.year ? 'Show Less' : 'Learn More'}
                        </button>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-[#D4AF37] rounded-full border-4 border-white shadow-lg z-10"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FOUNDERS TAB */}
        {activeTab === 'founders' && (
          <section className="mb-8">
            <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Meet Our Founders</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {founders.map(founder => (
                <div key={founder.name} className="w-full max-w-[500px] bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                  <div className="flex flex-col md:flex-row gap-6">
                    <img src={founder.image} alt={founder.name} className="w-[150px] h-[150px] object-cover rounded-[10px] mx-auto md:mx-0" />
                    <div className="flex-1">
                      <h3 className="text-[24px] font-bold text-[#5D4037] mb-1 dark:text-[#D4AF37]">{founder.name}</h3>
                      <h4 className="text-[16px] font-semibold text-[#D4AF37] mb-3">{founder.role}</h4>
                      <p className="text-[14px] text-[#5D4037] mb-4 dark:text-[#FAF3E0]">{founder.bio}</p>
                      <div className="mb-4">
                        <h5 className="text-[14px] font-semibold text-[#5D4037] mb-2 dark:text-[#D4AF37]">Achievements:</h5>
                        <ul className="list-disc list-inside text-[13px] text-[#8D6E63] dark:text-[#D7B98E]">
                          {founder.achievements.map(achievement => (
                            <li key={achievement}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      <blockquote className="italic text-[14px] text-[#8D6E63] border-l-4 border-[#D4AF37] pl-4 dark:text-[#D7B98E]">
                        "{founder.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* COMMUNITY IMPACT TAB */}
        {activeTab === 'impact' && (
          <section className="mb-8">
            <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Community Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityImpact.map(impact => (
                <div key={impact.title} className="bg-white border border-[#D7B98E] rounded-[10px] p-6 shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1 transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                  <h3 className="text-[20px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">{impact.title}</h3>
                  <p className="text-[15px] text-[#5D4037] mb-3 dark:text-[#FAF3E0]">{impact.desc}</p>
                  <div className="bg-[#D4AF37] text-[#3E2723] px-3 py-1 rounded-full text-[13px] font-semibold inline-block">
                    {impact.impact}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CERTIFICATIONS TAB */}
        {activeTab === 'certifications' && (
          <section className="mb-8">
            <h2 className="text-[30px] font-bold text-center text-[#5D4037] mb-6 dark:text-[#D4AF37]">Our Certifications & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map(cert => (
                <div key={cert.name} className="bg-white border border-[#D7B98E] rounded-[10px] p-6 text-center shadow-[0_4px_12px_rgba(62,39,35,0.08)] hover:-translate-y-1 transition-all duration-300 dark:bg-[#2a2a2a] dark:border-[#4a4a4a]">
                  <div className="text-[40px] mb-3">{cert.icon}</div>
                  <h3 className="text-[18px] font-bold text-[#5D4037] mb-2 dark:text-[#D4AF37]">{cert.name}</h3>
                  <p className="text-[14px] text-[#8D6E63] dark:text-[#D7B98E]">{cert.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CALL TO ACTION */}
        <section className="text-center bg-white border border-[#D7B98E] rounded-[10px] p-8 shadow-[0_4px_12px_rgba(62,39,35,0.08)] dark:bg-[#2a2a2a] dark:border-[#4a4a4a] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          <h2 className="text-[30px] font-bold text-[#5D4037] mb-3 dark:text-[#D4AF37]">Experience SweetBite Today</h2>
          <p className="text-[#5D4037] text-[15px] mb-5 max-w-[600px] mx-auto dark:text-[#FAF3E0]">
            Join thousands of satisfied customers who have made SweetBite part of their sweetest memories. 
            Visit us today and taste the difference that passion and quality make.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/menu">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-[#3E2723] text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:bg-[#2a1810] dark:hover:bg-[#D4AF37]">
                View Our Menu
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                Visit Our Store
              </button>
            </Link>
            <Link to="/teams">
              <button className="px-8 py-3.5 text-[17px] font-semibold bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] rounded-[6px] cursor-pointer hover:bg-[#D4AF37] hover:text-[#3E2723] hover:-translate-y-0.5 transition-all duration-300 dark:hover:bg-[#D4AF37] dark:hover:text-[#2a1810]">
                Meet Our Team
              </button>
            </Link>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}