import { useState, useEffect } from 'react'
import profileImage from './assets/profile.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'profile', 'experience', 'skills', 'education', 'languages', 'certifications']
      const scrollPosition = window.scrollY + 100
      const section = sections.find((id) => {
        const el = document.getElementById(id)
        if (el) {
          return scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight
        }
        return false
      })
      if (section) setActiveSection(section)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-blue-700 bg-clip-text text-transparent">Hazratqul</h1>
            <ul className="flex space-x-6">
              {['home', 'profile', 'experience', 'skills', 'education', 'languages', 'certifications'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`text-sm font-medium transition-all ${activeSection === section ? 'text-primary-600 border-b-2 border-primary-600' : 'text-gray-600 hover:text-primary-600'}`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Abduraufov Hazratqul"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full mx-auto object-cover shadow-2xl border-4 border-white/80 transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-blue-700 bg-clip-text text-transparent mb-6 animate-fade-in">
            ABDURAUFOV HAZRATQUL
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
            Data Analyst / Data Scientist
          </p>
          <div className="space-y-4 mb-12">
            <p className="text-xl">Toshkent, Uzbekistan</p>
            <p>Email: <span className="font-mono text-primary-600">xazratabduraufov@gmail.com</span> | Phone: <span className="font-mono text-primary-600">+998909572055</span></p>
            <p>LinkedIn / GitHub: <span className="font-mono text-primary-600"><a href="https://github.com/Hazratqul21" target="_blank" rel="noopener noreferrer" className="hover:underline">https://github.com/Hazratqul21</a></span></p>
          </div>
          <button
            onClick={() => scrollToSection('profile')}
            className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
          >
            View Profile
          </button>
        </div>
      </section>

      {/* Profile */}
      <section id="profile" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">PROFILE</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto"></div>
        </div>
        <div className="prose prose-lg max-w-none text-justify leading-relaxed">
          <p>Ma’lumotlarni tahlil qilish, vizualizatsiya va biznes uchun avtomatlashtirilgan analitik yechimlar yaratishga ixtisoslashgan. CRM tizimlari bilan ishlash va sotuv jarayonlarini raqamli boshqarishda tajribaga ega.</p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">EXPERIENCE</h2>
            <div className="h-1 w-24 bg-primary-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Analyst Intern — Launchlab 21</h3>
              <p className="text-primary-600 font-semibold mb-6">2025 — Present</p>
              <ul className="space-y-3 text-lg">
                <li>• Data cleaning & ETL jarayonlari</li>
                <li>• KPI va biznes ko‘rsatkichlar bo‘yicha avtomatlashtirilgan hisobotlar</li>
                <li>• CRM ma’lumotlari asosida tahlil va forecasting</li>
                <li>• Startuplar uchun ma’lumotlardan foydalanib qaror qabul qilishni qo‘llab-quvvatlash</li>
              </ul>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Sales Manager — HUMANS</h3>
              <p className="text-primary-600 font-semibold mb-6">2023 — 2024</p>
              <ul className="space-y-3 text-lg">
                <li>• Mijozlar bilan kommunikatsiya va sotuvni boshqarish</li>
                <li>• SAP va Creatio orqali mijozlar ma’lumotlari bilan ishlash</li>
                <li>• Sotuv funnelini optimallashtirish orqali natijalarni oshirish</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">SKILLS</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-600">Python & Data Tools</h3>
            <ul className="space-y-2 text-lg">
              <li>• Pandas, NumPy</li>
              <li>• Scikit-learn, XGBoost</li>
              <li>• Matplotlib, Seaborn, Plotly</li>
              <li>• Jupyter Notebook</li>
              <li>• SQL (asosiy daraja)</li>
              <li>• API data integration (Requests, JSON)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-600">Business Tools</h3>
            <ul className="space-y-2 text-lg">
              <li>• Excel (advanced), Google Sheets</li>
              <li>• SAP, Creatio CRM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary-600">Soft Skills</h3>
            <ul className="space-y-2 text-lg">
              <li>• Tahliliy fikrlash</li>
              <li>• Muammo yechish</li>
              <li>• Jamoa bilan ishlash</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">EDUCATION</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto mb-12"></div>
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold mb-4">Turin Polytechnic University in Tashkent</h3>
            <p className="text-xl text-primary-600 font-semibold mb-2">Bachelor — Computer Science (ongoing)</p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section id="languages" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">LANGUAGES</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Uzbek</h3>
            <p className="text-primary-600 text-xl font-semibold">Native</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Russian</h3>
            <p className="text-primary-600 text-xl font-semibold">Fluent</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">English</h3>
            <p className="text-primary-600 text-xl font-semibold">B2</p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CERTIFICATIONS / PROGRAMS</h2>
          <div className="h-1 w-24 bg-primary-600 mx-auto mb-12"></div>
          <div className="bg-white/70 backdrop-blur-sm p-12 rounded-2xl shadow-xl max-w-2xl mx-auto border border-gray-100">
            <p className="text-2xl font-bold text-primary-600">Launchlab 21 Pre-Seed Acceleration Program TeamLead</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-primary-600 to-blue-700 text-white text-center">
        <p>&copy; 2025 ABDURAUFOV HAZRATQUL. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-90">Email: xazratabduraufov@gmail.com | LinkedIn / GitHub: https://github.com/Hazratqul21</p>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default App
