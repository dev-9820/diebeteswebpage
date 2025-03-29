import { useState } from 'react';
import { motion } from 'framer-motion';
import doctorImage from "./assets/image.png";

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-tight mb-8">
              Take Control of <br />
              <span className="text-white">Your Diabetes</span>
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start space-x-6 mb-12">
              <div className="w-16 h-16 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
                <img 
                  src={doctorImage} 
                  alt="Dr. Sai Vigneshvar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-left">
                <p className="text-xl text-blue-200 font-medium">By Dr. Sai Vigneshvar</p>
                <p className="text-lg text-purple-200">
                  Consultant - Internal medicine<br />
                  and advanced diabetology
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-8 md:p-10 rounded-2xl shadow-2xl border border-gray-700"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
              Get Started with a Personal Consultation
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-200 mb-3 font-medium">Enter name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-blue-200 mb-3 font-medium">Enter Contact Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white placeholder-gray-400"
                  placeholder="+91 1234567890"
                />
              </div>
              
              <div>
                <label htmlFor="duration" className="block text-blue-200 mb-3 font-medium">Duration of Diabetes</label>
                <select
                  id="duration"
                  className="w-full px-5 py-4 bg-gray-700 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition text-white"
                >
                  <option value="" className="text-gray-400">Select duration</option>
                  <option value="new" className="text-white">Newly diagnosed</option>
                  <option value="1-5" className="text-white">1-5 years</option>
                  <option value="5-10" className="text-white">5-10 years</option>
                  <option value="10+" className="text-white">10+ years</option>
                </select>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 px-6 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Book an Appointment
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl animate-float-delay"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
                5+ Years | 10,000+ Diabetic Patients
              </h2>
              <div className="text-2xl text-blue-100 space-y-6">
                <p>To Reduce HbA1c from <span className="font-bold text-white">10% → 6.5%</span></p>
                <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 text-3xl">
                  Effortlessly
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-700"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Now, I've Created The Simple Diabetes Care Plan
              </h3>
              <p className="text-xl text-blue-100 mb-8">
                An easy and effective approach designed for your everyday life that helps you
              </p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Take Back Control of Your Health
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-20"
          >
            Fit Diabetes Care into Your Daily Routine
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Feel Confident About Your Food & Health Choices",
                desc: "Know what to eat by your diet and treat with others (and say we are aware of how to make sense) alongside that work",
                icon: "🍏"
              },
              {
                title: "Improve Your Energy for Family & Work",
                desc: "We are feeling simple and fresh with mental pain as well as the pain habits—from cooking oil choices to walking exams.",
                icon: "⚡"
              },
              {
                title: "Simple Daily Management",
                desc: "Easy-to-follow routines that fit seamlessly into your lifestyle",
                icon: "📅"
              },
              {
                title: "Personalized Support",
                desc: "Tailored advice based on your unique health profile",
                icon: "🎯"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-purple-500 transition-all"
              >
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">But First...</h2>
            <h3 className="text-3xl md:text-4xl text-white mb-16">I Want to Ask You a Few Questions</h3>
            
            <div className="text-left space-y-8 mb-16">
              {[
                "Do you feel like you'll need to take medicines for the rest of your life just to manage your diabetes?",
                "Do you constantly fear that your diabetes might lead to other complications, like kidney damage or vision problems?",
                "Are you afraid of the long-term effects of diabetes and wondering if you'll ever be able to live without constant worry?",
                "Do you feel like you're at risk of developing serious conditions, and it's becoming hard to stay positive about your future health?",
                "Are you scared that diabetes could eventually take a toll on your life regretdrug or cause an untimely death?",
                "Do you feel like diabetes is taking control of your life, leaving little time for other things?",
                "Are you struggling to maintain your health while juggling your job, home, and other responsibilities?"
              ].map((question, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start bg-gray-700 p-6 rounded-xl border border-gray-600"
                >
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-xl text-white">{question}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Book an Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">What We Offer</h2>
            <p className="text-xl text-center text-blue-200 max-w-3xl mx-auto mb-16">
              Comprehensive diabetes care solutions tailored to your unique needs and lifestyle
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  title: "Personalized Diabetes Management",
                  desc: "We focus on tailored care plans that fit your unique health needs, ensuring better control over blood sugar levels and overall wellness.",
                  icon: "📊"
                },
                {
                  title: "Blood Sugar Optimization",
                  desc: "Through innovative methods, we help reduce blood sugar levels naturally, making lasting improvements to your health.",
                  icon: "🩸"
                },
                {
                  title: "Lifestyle & Diet Guidance",
                  desc: "We provide expert advice on nutrition, exercise, and mental health to support a holistic approach to managing diabetes.",
                  icon: "🥗"
                },
                {
                  title: "Online Consultations & Follow-ups",
                  desc: "Book appointments and get consultations from the comfort of your home, with regular follow-ups to monitor your progress.",
                  icon: "💻"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <div className="text-4xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-blue-100">{service.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Book a Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-20">
              What Will Change After You Start with Us?
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-purple-900">
                    <th className="py-6 px-8 text-left text-white text-xl font-bold rounded-tl-2xl">Old Self</th>
                    <th className="py-6 px-8 text-left text-white text-xl font-bold rounded-tr-2xl">New Self</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      old: "Struggling with high blood sugar",
                      new: "Enjoying steady, balanced blood sugar"
                    },
                    {
                      old: "Feeling tired and sluggish all the time",
                      new: "Feeling more energetic and refreshed"
                    },
                    {
                      old: "Worried about future health problems",
                      new: "Confident and clear on managing your diabetes"
                    },
                    {
                      old: "Constantly thinking about medication",
                      new: "Living without the constant worry, with fewer meals"
                    },
                    {
                      old: "Feeling overwhelmed by diabetes",
                      new: "Feeling in control and empowered to take care of your health"
                    }
                  ].map((row, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-600"}
                    >
                      <td className="py-5 px-8 text-white border-b border-gray-600 text-lg">{row.old}</td>
                      <td className="py-5 px-8 text-blue-300 border-b border-gray-600 font-medium text-lg">{row.new}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-16">Who Is This For?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-gray-800 p-10 rounded-2xl shadow-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-8">Ideal Candidates</h3>
                <ul className="space-y-6">
                  {[
                    "Have Type 1 or Type 2 diabetes and struggle to keep their blood sugar under control.",
                    "Are dealing with high HbA/c levels and are concerned about the long-term effects of diabetes",
                    "Pregnant female diagnosed with diabetes mellitus",
                    "Feel overwhelmed managing diabetes along with family, work, and daily responsibilities.",
                    "Are tired of feeling tired, sluggish, or worried about the complications of diabetes.",
                    "Want to take control of their health but are unsure where to start or what advice to trust.",
                    "Have tried various treatments without seeing the results they hoped for and are looking for a personalised, proven approach."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-2xl shadow-xl border border-gray-700">
                <h3 className="text-3xl font-bold text-white mb-8">
                  The Cost of Ignoring Your Health
                </h3>
                <ul className="space-y-6">
                  {[
                    "Letting high blood sugar and diabetes complications control your life.",
                    "Ignoring uncontrolled HbA/c and the long-term risks to your organs and overall health.",
                    "Sacrificing your health and well-being while focusing only on work or family responsibilities.",
                    "Living with constant worry and exhaustion from the stress of managing your diabetes without a clear plan."
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span className="text-red-200 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Meet Your Doctor</h2>
              <p className="text-xl text-blue-100 mb-8">
                I'm Dr. Sai Vigneshvar, your dedicated diabetes specialist here to guide you toward better health and well-being. With years of experience in diabetes care, I help patients achieve optimal blood sugar control through personalized treatment plans.
              </p>
              <p className="text-xl text-blue-100 mb-8">
                With our Simple Diabetes Care Plan, I'll help you reach your full health potential through sustainable lifestyle changes that fit easily into your daily routine.
              </p>
              <p className="text-xl text-blue-100 mb-10">
                Take the first step on this simple online journey and let's create a path to healthier living, free from the fear and constant stress of diabetes.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
              >
                Book a Consultation
              </motion.button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-purple-900 p-1 rounded-2xl shadow-2xl">
                <div className="bg-gray-900 p-8 rounded-xl">
                  <div className="flex items-center space-x-6 mb-10">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                      <img 
                        src={doctorImage} 
                        alt="Dr. Sai Vigneshvar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Dr. Sai Vigneshvar</h3>
                      <p className="text-blue-300">Diabetes Specialist</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-white">Credentials</h3>
                    <ul className="space-y-6">
                      {[
                        "5+ Years of Experience in treating diabetes",
                        "10,000+ patients treated with a focus on holistic care",
                        "Proven track record in reducing HbA1c and managing blood sugar levels",
                        "Personalized treatment tailored to your specific health needs"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-blue-100 text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-purple-600 opacity-20 blur-xl z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full bg-blue-600 opacity-20 blur-xl z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-16">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "What are the prerequisites for enrolling in the diabetes care program?",
                  answer: "There are no specific prerequisites. Our program is designed to help anyone with diabetes, regardless of their current knowledge level or health status."
                },
                {
                  question: "How long does the program take, and what is the time commitment?",
                  answer: "The program duration varies based on individual needs, but most patients see significant improvements within 3-6 months. We recommend weekly check-ins initially."
                },
                {
                  question: "Is the program available online, or do I need to attend in person?",
                  answer: "All consultations are available online for your convenience. We provide complete virtual care with the option for in-person visits if preferred."
                },
                {
                  question: "Will I receive ongoing support after the initial program?",
                  answer: "Yes, we offer continued support and follow-up consultations to ensure you maintain your health goals long-term."
                },
                {
                  question: "What topics are covered in the diabetes care program?",
                  answer: "We cover blood sugar management, nutrition planning, exercise guidance, stress management, medication optimization, and lifestyle adjustments tailored to your needs."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700 hover:border-blue-500 transition-all"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{faq.question}</h3>
                  <p className="text-blue-100">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Take Control of Your Diabetes?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Start your journey to better health today with our personalized diabetes care plan.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Book Your Consultation Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-blue-300 mb-4">© {new Date().getFullYear()} Diabetes Care Plan. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Disclaimer: This website is for informational purposes only and does not replace professional medical advice.</p>
        </div>
      </footer>

      {/* Floating doctor image (optional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-10 right-10 w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl z-0 pointer-events-none"
      >
        <img 
          src={doctorImage} 
          alt="Dr. Sai Vigneshvar"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default App;