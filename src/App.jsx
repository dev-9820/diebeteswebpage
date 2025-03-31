import { useState } from 'react';
import { motion } from 'framer-motion';
import doctorImage from "./assets/image.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaUserMd, FaChartLine, FaAppleAlt, FaLaptopMedical } from "react-icons/fa";
import { FaPlus, FaTimes } from "react-icons/fa";


const faqs = [
  {
    question: "What are the prerequisites for enrolling in the law course?",
    answer: "There are no specific prerequisites for this law course, but a background in humanities or social sciences is beneficial. Applicants must have completed high school or hold an equivalent diploma.",
  },
  {
    question: "How long is the course, and what is the time commitment?",
    answer: "The course duration varies depending on the specific program, but most students complete it within a few months to a year with part-time study.",
  },
  {
    question: "Is the course available online, or do I need to attend in person?",
    answer: "This course is available online, allowing students to study at their own pace from anywhere in the world.",
  },
  {
    question: "Will I receive a certificate or qualification upon completion?",
    answer: "Yes, upon successful completion, you will receive a certificate that can enhance your career opportunities.",
  },
  {
    question: "What topics are covered in the law course?",
    answer: "The course covers various legal principles, case studies, contract law, criminal law, and constitutional law.",
  },
];


function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans bg-gray-900 text-gray-100 min-h-screen">
     {/* Hero Section */}
<section className="px-6 py-32 md:py-64 flex items-center min-h-screen">
  <motion.div 
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-10 rounded-xl text-center shadow-lg w-full max-w-5xl mx-auto"
  >
    <h1 className="text-4xl md:text-8xl font-bold">
      Take Control of <span className="text-yellow-500">Your Diabetes</span>
    </h1>
    <p className="text-gray-300 text-lg md:text-xl font-semibold mt-4">
      Get Started with a Personal Consultation
    </p>
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      <input type="text" placeholder="Enter Name" className="p-3 rounded-md bg-gray-700 text-white w-full" />
      <input type="text" placeholder="Enter Contact Number" className="p-3 rounded-md bg-gray-700 text-white w-full" />
      <input type="text" placeholder="Enter Place" className="p-3 rounded-md bg-gray-700 text-white w-full" />
      <input type="text" placeholder="Duration of Diabetes" className="p-3 rounded-md bg-gray-700 text-white w-full" />
    </div>
    <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-600">
      Book an Appointment
    </button>
  </motion.div>
</section>
      
      {/* About Doctor Section */}
<section className="flex flex-col items-center bg-gray-800 pt-10 text-center px-6 md:px-0">
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-gray-900 border-b-4 border-yellow-500 rounded-xl w-full max-w-3xl p-6"
  >
    <div className="flex flex-col md:flex-row items-center md:justify-between">
      <div className="text-center md:text-left md:w-2/3">
        <h2 className="text-2xl md:text-3xl font-bold">By Dr. Sai Vigneshvar</h2>
        <p className="text-gray-400 text-lg md:text-xl font-semibold mt-2">
          Consultant - Internal medicine and advanced diabetology
        </p>
      </div>
      <img src={doctorImage} alt="Doctor" className="w-48 h-48 md:w-64 md:h-64 object-cover object-top mt-4 md:mt-0" />
    </div>
  </motion.div>

  {/* Stats Section */}
  <div className="bg-yellow-500 w-full mb-10  grid grid-cols-1 md:grid-cols-3 gap-4 text-black text-center mt-6 rounded-lg md:rounded-none">
    <div className="p-6 rounded-md">
    <p>For over</p>
      <h3 className="font-bold text-5xl md:text-7xl">5+</h3>
      <p className='text-lg md:text-xl'>Years</p>
    </div>
    <div className="p-6 rounded-md">
    <p>I've Treated</p>
      <h3 className="font-bold text-5xl md:text-7xl">10,000+</h3>
      <p className='text-lg md:text-xl'>Diabetic patients treated</p>
    </div>
    <div className="p-6 rounded-md">
      <p>To Reduce HbA1c from 10%</p>
      <h3 className="font-bold text-5xl md:text-7xl">To ≤6.5%</h3>
      <p className='text-lg md:text-xl'>Effortlessly</p>
    </div>
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
            className="md:text-5xl text-2xl font-semibold text-center text-transparent bg-clip-text bg-white mb-20"
          >
            Now, I’ve Created
            <p className='text-5xl'>The Simple <span className='text-yellow-500 font-bold'>Diabetes Care Plan</span></p>
            <p className='text-xl mt-6 font-normal w-96 justify-self-center'>An easy and effective approach designed for your everyday life that helps you</p>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {[
    {
      title: "Take Back Control of Your Health",
      desc: "Learn how to manage your sugar levels naturally without feeling overwhelmed or confused.",
      icon: MdOutlineHealthAndSafety
    },
    {
      title: "Fit Diabetes Care into Your Daily Routine",
      desc: "Know what to eat (yes, even dosa or rice!), when to check your sugar, and how to make simple changes that work.",
      icon: TbRulerMeasure
    },
    {
      title: "Improve Your Energy for Family & Work",
      desc: "Wake up feeling active and fresh with practical tips that suit South Indian habits—from cooking oil choices to walking routines.",
      icon: GiHealthNormal
    },
    {
      title: "Feel Confident About Your Food & Health Choices",
      desc: "Wake up feeling active and fresh with practical tips that suit South Indian habits—from cooking oil choices to walking routines.",
      icon: RiMentalHealthFill
    }
  ].map((item, index) => {
    const IconComponent = item.icon; // Store the icon component in a variable
    
    return (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-blue-800 border border-white/50 p-8 rounded-2xl flex gap-6 shadow-xl border border-gray-700"
      >
        <div className="text-4xl my-auto text-yellow-400">
          <IconComponent className="h-10 w-10" /> {/* Render the icon component */}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-blue-100">{item.desc}</p>
        </div>
      </motion.div>
    );
  })}
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
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-yellow-500 mb-6">But First...</h2>
            <h3 className="text-3xl md:text-6xl text-white mb-16">I Want to Ask You a Few Questions</h3>
            
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
                  <div className="bg-gradient-to-br from-yellow-400 to-yellow-900 rounded-md w-12 h-12 text-2xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-bold">?</span>
                  </div>
                  <p className="text-xl text-white">{question}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400/50 to-yellow-900 text-white px-10 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
            >
              Book an Appointment
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-16 md:py-24 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-900 mb-8">
        What We Offer
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10">
        {[
          {
            title: "Personalized Diabetes Management",
            desc: "We focus on tailored care plans that fit your unique health needs, ensuring better control over blood sugar levels and overall wellness.",
            icon: FaUserMd
          },
          {
            title: "Blood Sugar Optimization",
            desc: "Through innovative methods, we help reduce blood sugar levels naturally, making lasting improvements to your health.",
            icon: FaChartLine
          },
          {
            title: "Lifestyle & Diet Guidance",
            desc: "We provide expert advice on nutrition, exercise, and mental health to support a holistic approach to managing diabetes.",
            icon: FaAppleAlt
          },
          {
            title: "Online Consultations & Follow-ups",
            desc: "Book appointments and get consultations from the comfort of your home, with regular follow-ups to monitor your progress.",
            icon: FaLaptopMedical
          }
        ].map((service, index) => {
          const IconComponent = service.icon;

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-yellow-500 to-white flex gap-6 md:gap-10 p-6 md:p-8 rounded-2xl shadow-xl border border-gray-700 hover:border-yellow-500 transition-all w-full"
            >
              <div className="text-3xl md:text-4xl text-black">
                <IconComponent className="h-8 w-8 md:h-10 md:w-10" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-black text-sm md:text-base">{service.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Book Consultation Button */}
      <div className="text-center mt-12 md:mt-16">
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(107, 128, 32, 0.29)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400/50 to-yellow-900 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all"
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
            <h2 className="text-4xl md:text-5xl md:max-w-3/4 justify-self-center font-semibold text-center text-white mb-20">
              What <span className='text-yellow-500'>Will Change</span> After You Start with Us?
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full ">
                <thead>
                  <tr>
                    <th className="py-6 bg-gray-800 px-8 text-left border border-white text-white text-xl font-bold">Old Self</th>
                    <th className="py-6 px-8 bg-gradient-to-r from-blue-900 to-purple-900 text-left text-white text-xl border border-white font-bold">New Self</th>
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
                      className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-700"}
                    >
                      <td className="py-5 border border-white px-8 text-white border-b border-gray-600 text-lg">{row.old}</td>
                      <td className="py-5 px-8 border border-white bg-gradient-to-r from-blue-900 to-purple-900 text-white border-b border-gray-600 font-medium text-lg">{row.new}</td>
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
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">Who Is <span className='text-yellow-500'> This For? </span> </h2>
            
            <div className="mt-10">
              <div>
               
                <ul className="space-y-6 md:ml-32">
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
                      <div className="bg-green-500 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-white"  viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-blue-100 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <h3 className="md:text-3xl text-3xl text-center mt-12 max-w-4xl justify-self-center  font-bold text-white mb-8">
              I Want You to Know the Cost of Ignoring Your Health
                </h3>
              <div>
                
                <ul className="space-y-6 md:ml-32">
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
<section className="py-24 bg-[#121A56] text-white relative">
  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
    {/* Left Text Section */}
    <div className="md:w-1/2 ">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet your <span className="text-yellow-400">Doctor</span></h2>
      <p className="text-lg mb-4 text-justify">
        I'm Dr. Sai Vigneshvar, your dedicated diabetes specialist, here to guide you toward better health and well-being. Whether you're newly diagnosed with diabetes, managing it for years, or just looking for ways to improve your blood sugar control, I specialize in helping people like you regain control over their health and live a life free from diabetes-related worries.
      </p>
      <p className="text-lg mb-4 text-justify">
        With a Simple Diabetes Care Plan, I empower you to unlock your full health potential. Imagine transforming your daily routine into a series of small, manageable steps that lead to better blood sugar levels, increased energy, and a healthier lifestyle. All while making sustainable changes that fit easily into your busy life.
      </p>
      <p className="text-lg mb-4 text-justify">
        Together, we'll rewrite your health story. Join me on this transformative journey and let's create a path to healthier living, free from the fear and complications of diabetes.
      </p>
      <button className="bg-yellow-400  text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
        Book a Consultation
      </button>
    </div>
    
    {/* Right Image Section */}
    <div className="md:w-1/2 flex justify-center relative">
      <img 
        src={doctorImage} 
        alt="Dr. Sai Vigneshvar" 
        className="w-96 h-96 mb-32 rounded-xl object-cover object-top"
      />
    </div>
  </div>

  {/* Credentials Section */}
  <div className="max-w-3xl mx-5 md:absolute -mb-64 right-44 -translate-y-44 bg-white text-black rounded-lg p-6 mt-8 shadow-lg flex flex-col space-y-4">
    <ul className="space-y-3 text-lg">
      <li className="flex items-center gap-3">
        <span className="text-yellow-500 font-bold">•</span> <span><strong>5+ Years of Experience</strong> in treating diabetes</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-yellow-500 font-bold">•</span> <span><strong>10,000+ patients</strong> treated with a focus on holistic care</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-yellow-500 font-bold">•</span> <span><strong>Proven track record</strong> in reducing HbA1c and managing blood sugar levels</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-yellow-500 font-bold">•</span> <span><strong>Personalized treatment</strong> tailored to your specific health needs</span>
      </li>
    </ul>
  </div>
</section>

<section className="py-24 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left text-xl font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaTimes className="text-red-500 text-xl" />
                ) : (
                  <FaPlus className="text-gray-400 text-xl" />
                )}
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-6 border-t border-gray-700 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

     
    </div>
  );
}

export default App;