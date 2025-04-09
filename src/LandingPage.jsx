import { useState } from 'react';
import { motion } from 'framer-motion';
import doctorImage from "./assets/image.png";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { TbRulerMeasure } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { FaUserMd, FaChartLine, FaAppleAlt, FaLaptopMedical } from "react-icons/fa";
import { FaPlus, FaTimes } from "react-icons/fa";
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import icon5 from "./assets/icon5.png"
import icon6 from "./assets/icon6.png"
import icon7 from "./assets/icon7.png"
import icon8 from "./assets/icon8.png"
import React from 'react';
import axios from "axios"
import {useNavigate} from "react-router-dom"
import option1 from "./assets/ogphoto-removebg.png"
import option2 from "./assets/ogphoto2-removebg.png"
import option3 from "./assets/ogphoto3-removebg.png"
import option4 from "./assets/ogphoto4-removebg.png"
import option5 from "./assets/ogphoto5-removebg.png"
import option6 from "./assets/ogphoto6-removebg.png"
import option7 from "./assets/ogphoto7-removebg.png"
import option8 from "./assets/ogphoto8-removebg.png"

import { Helmet } from 'react-helmet-async';
import { option } from 'framer-motion/client';
const faqs = [
  {
    question: "How is this different from other diabetes treatments I’ve tried?",
    answer: "Unlike one-size-fits-all approaches, our Simple Diabetes Care Plan is personalized, rooted in your lifestyle, and designed to help you manage diabetes without drastic changes or confusion.",
  },
  {
    question: "Can I really reduce my HbA1c without taking more medicines?",
    answer: "Yes! Many of our patients have successfully reduced their HbA1c with a balanced mix of diet, lifestyle changes, and proper guidance—sometimes even reducing their medication load under medical supervision.",
  },
  {
    question: "Will I have to give up my favorite foods like rice or dosa?",
    answer: "Not at all. We help you enjoy South Indian staples like dosa, rice, and idli—smartly and in moderation—without guilt or spikes in blood sugar.",
  },
  {
    question: "What happens during the first consultation?",
    answer: " We’ll understand your medical history, current sugar levels, lifestyle, and goals. Based on that, we’ll create a plan that’s clear, achievable, and designed for YOU.",
  },
  {
    question: "Is this consultation available online?",
    answer: "Yes! We offer online consultations and follow-ups, so you can access care from the comfort of your home—no travel or waiting rooms needed.",
  },
  {
    question: "Can pregnant women with diabetes join this program?",
    answer: "Absolutely. We provide safe, guided care for pregnant women diagnosed with gestational or pre-existing diabetes."
  }
];


function LandingPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [openIndex, setOpenIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    place: "",
    duration: "",
  });
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const handleClose = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setMessage(""); // Reset message

    try {
      const res = await axios.post("https://diabetesbackend.onrender.com/api/consultations", formData);
      setMessage("Appointment booked successfully!");
      setShowPopup(true)
      setFormData({ name: "", contact: "", place: "", duration: "" }); // Clear form
    } catch (error) {
      console.error("Error submitting form", error);
      setMessage("Failed to book appointment. ❌");
      
    }
  };


  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="font-sans bg-[#08081b] text-gray-100 min-h-screen">

      {showPopup && (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xs w-full text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Appointment booked successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            You will receive a call from our team shortly.
          </p>
          <button
            onClick={handleClose}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-6 rounded-full transition duration-200"
          >
            Ok
          </button>
        </div>
      </div>
      )}
      
     {/* Hero Section */}
<section className="px-6 py-32 md:py-12 flex items-center min-h-screen">
  <motion.div 
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-gradient-to-r from-gray-900 via-[#08081b] to-gray-900 border-t border-gray-500 p-10 rounded-xl text-center shadow-lg w-full max-w-5xl mx-auto"
  >
    <h1 className="text-4xl md:text-8xl font-semibold">
      Take Control of <p className="text-yellow-500">Your Diabetes</p>
    </h1>
    <p className="text-gray-300 text-lg md:text-3xl my-8 ">
      Get Started with a Personal Consultation
    </p>
    <div className="mt-6 md:mx-24 grid grid-cols-1 md:grid-cols-2 gap-4 gap-x-12">
      <input 
      type="text"
      name="name"
      placeholder="Enter Name"
      value={formData.name}
      onChange={handleChange}
      required 
      className="p-3 rounded-md bg-gray-700/40 text-white border border-sky-500/90 w-full" />

      
      <input type="text"
            name="contact"
            placeholder="Enter Contact Number"
            value={formData.contact}
            onChange={handleChange} className="p-3 rounded-md bg-gray-700/40 text-white w-full border border-sky-500/90" />


      <input 
            type="text"
            name="place"
            placeholder="Enter Place"
            value={formData.place}
            onChange={handleChange}
            className="p-3 rounded-md bg-gray-700/40 text-white border border-sky-500/90 w-full" />


<select
  name="duration"
  value={formData.duration}
  onChange={handleChange}
  className="p-3 rounded-md bg-gray-700/40 border border-sky-500/90 text-white w-full"
>
  <option value="">Select Duration</option>
  <option value="0 - 6 months" className='text-black'>0 - 6 months</option>
  <option value="6 months - 1 year" className='text-black'>6 months - 1 year</option>
  <option value="1-3 years" className='text-black'>1-3 years</option>
  <option value="3-5 years" className='text-black'>3-5 years</option>
  <option value="Above 5 years" className='text-black'>Above 5 years</option>
</select>


    </div>
    <button onClick={()=> handleSubmit()} className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md font-bold hover:bg-yellow-600">
      Book an Appointment
    </button>
    {/* {message && <p className="mt-4 text-lg font-semibold text-gray-300">{message}</p>} */}
  </motion.div>
</section>
      
      {/* About Doctor Section */}
<section className="flex flex-col -mt-20 items-center bg-[#08081b] pt-10 text-center px-6 md:px-0">
  <motion.div 
    initial={{ opacity: 0, y: 50 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.8 }}
    className="bg-[#15243b] border-b-12 border-yellow-500 w-full max-w-6xl p-6"
  >
    <div className="flex flex-col md:flex-row items-center md:justify-between">
      <div className="text-center md:text-left md:w-2/3">
        <h2 className="text-2xl md:text-5xl md:ml-24 font-bold">By Dr. Sai Vigneshvar</h2>
        <p className="text-gray-400 md:ml-24 text-lg md:text-2xl font-semibold mt-2">
          Consultant - Internal medicine <p> and advanced diabetology</p>
        </p>
      </div>
      <div className='bg-blue-800 md:block text-blue-800 p-10 px-12 right-34 translate-y-45 md:translate-y-2  md:p-24 md:px-28 absolute md:right-[455px] z-10 rounded-full'>-</div>
      <img src={option8} alt="Doctor" style={{ filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3))' }} className="w-48 z-20 h-48 md:w-96 md:-mt-44 -mb-6 md:h-96 object-cover object-top " />
    </div>
  </motion.div>

  {/* Stats Section */}
<div className="bg-yellow-500 w-full mb-10  md:px-12 lg:pl-96 grid grid-cols-1 md:grid-cols-3 text-black mt-6 rounded-lg md:rounded-none text-center md:text-left">
  <div className="p-6">
    <p>For over</p>
    <h3 className="font-bold text-5xl md:text-7xl">5+</h3>
    <p className="text-lg md:text-xl">Years</p>
  </div>
  <div className="p-6">
    <p>I've Treated</p>
    <h3 className="font-bold text-5xl md:text-7xl">10,000+</h3>
    <p className="text-lg md:text-xl">Diabetic patients treated</p>
  </div>
  <div className="p-6">
    <p>To Reduce HbA1c from 10%</p>
    <h3 className="font-bold text-5xl md:text-6xl">To ≤6.5%</h3>
    <p className="text-lg md:text-xl">Effortlessly</p>
  </div>
</div>
</section>


    
      {/* Benefits Section */}
      <section className="py-24 bg-[#08081b]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="md:text-3xl my-5 text-2xl font-semibold text-center text-transparent bg-clip-text bg-white mb-20"
          >
              <p className='my-5'>Now, I’ve Created</p>
            <p className='text-5xl'>The Simple <span className='text-yellow-500 font-bold'>Diabetes Care Plan</span></p>
            <p className='text-xl mt-6 font-normal w-96 justify-self-center'>An easy and effective approach designed for your everyday life that helps you</p>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
  {[
    {
      title: "Take Back Control of Your Health",
      desc: "Learn how to manage your sugar levels naturally without feeling overwhelmed or confused.",
      icon: icon1
    },
    {
      title: "Fit Diabetes Care into Your Daily Routine",
      desc: "Know what to eat (yes, even dosa or rice!), when to check your sugar, and how to make simple changes that work.",
      icon: icon2
    },
    {
      title: "Improve Your Energy for Family & Work",
      desc: "Wake up feeling active and fresh with practical tips that suit South Indian habits—from cooking oil choices to walking routines.",
      icon: icon3
    },
    {
      title: "Feel Confident About Your Food & Health Choices",
      desc: "Wake up feeling active and fresh with practical tips that suit South Indian habits—from cooking oil choices to walking routines.",
      icon: icon4
    }
  ].map((item, index) => {
    
    
    return (
      <motion.div
        key={index}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="bg-[#1a1ac1] border border-white/50 p-8 rounded-2xl flex gap-6 shadow-xl border border-gray-700"
      >
        <div className=" my-auto text-yellow-400">
          <img src={item.icon} className='w-32'/>
        </div>
        <div className='max-w-sm md:ml-12'>
          <h3 className="text-3xl text-white mb-4">{item.title}</h3>
          <p className="text-blue-100">{item.desc}</p>
        </div>
        
      </motion.div>
    );
    
  })}
  
</div>
        </div>
      </section>

      <div className='flex justify-center'>
      <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black -mt-12 px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
      </div>

      {/* Questionnaire Section */}
      <section className="py-24 bg-[#08081b]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-4xl mb-3">But First...</h2>
            <h3 className="text-3xl md:text-6xl font-semibold text-white mb-16">I Want to Ask You a <p className=' text-transparent bg-clip-text bg-yellow-500'> Few Questions </p></h3>
            
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
                  className="flex items-start bg-[#15243b] p-6 "
                >
                  <div className="bg-[#EEB600] rounded-md w-12 h-12 text-5xl flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white font-semibold">?</span>
                  </div>
                  <p className="text-xl text-white">{question}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-16 md:py-24 -mt-24 bg-[#08081b]">
  <div className="max-w-6xl mx-auto px-6">
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-semibold text-center  mb-8">
        What We Offer
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:mx-32 sm:grid-cols-2 lg:grid-cols-1 gap-6 mt-10">
        {[
          {
            title: "Personalized Diabetes Management",
            desc: "We focus on tailored care plans that fit your unique health needs, ensuring better control over blood sugar levels and overall wellness.",
            icon: icon5
          },
          {
            title: "Blood Sugar Optimization",
            desc: "Through innovative methods, we help reduce blood sugar levels naturally, making lasting improvements to your health.",
            icon: icon6
          },
          {
            title: "Lifestyle & Diet Guidance",
            desc: "We provide expert advice on nutrition, exercise, and mental health to support a holistic approach to managing diabetes.",
            icon: icon7
          },
          {
            title: "Online Consultations & Follow-ups",
            desc: "Book appointments and get consultations from the comfort of your home, with regular follow-ups to monitor your progress.",
            icon: icon8
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
              <img src={service.icon} className='w-16'/>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2">{service.title}</h3>
                <p className="text-black max-w-xl text-sm md:text-base">{service.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Book Consultation Button */}
      <div className="text-center mt-12 md:mt-16">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#1a1ac1] text-white px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all"
        >
          Book an Appointment
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>

      {/* Comparison Section */}
      <section className="py-24 bg-[#08081b]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl md:max-w-3/4 justify-self-center font-semibold text-center text-white mb-20">
               <p className='text-white mb-2'> What <span className='text-yellow-500'> Will Change </span> After</p>  You Start with Us?
            </h2>
            
            <div className="rounded-xl border overflow-x-auto">
  <table className="w-full border-collapse">
    <thead>
      <tr>
        <th className="w-1/2 py-6 bg-[#15243B] text-center border border-white text-white text-xl font-bold">
          Old Self
        </th>
        <th className="w-1/2 py-6 bg-[#1a1ac1] text-center text-white text-xl border border-white font-bold">
          New Self
        </th>
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
        <tr key={index} className="bg-gray-700">
          <td className="w-1/2 md:pl-24 py-5 px-8 border bg-[#15243B] border-white text-white text-left text-lg">
            {row.old}
          </td>
          <td className="w-1/2 py-5 md:pl-24 px-8 border bg-[#1a1ac1] border-white text-white text-left text-lg font-medium">
            {row.new}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

          </motion.div>
        </div>
      </section>
      <div className='flex justify-center'>
      <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black mb-6 -mt-12 px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
      </div>

      {/* Target Audience Section */}
      <section className="py-24 bg-[#15243B]">
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
    [
      "Have ",
      <span className="text-yellow-500 font-semibold" key="1">Type 1 or Type 2 diabetes</span>,
      " and struggle to keep their blood sugar under control."
    ],
    [
      "Are dealing with high ",
      <span className="text-yellow-500 font-semibold" key="2">HbA1c</span>,
      " levels and are concerned about the long-term effects of diabetes"
    ],
    ["Pregnant female diagnosed with diabetes mellitus"],
    ["Feel overwhelmed managing diabetes along with family, work, and daily responsibilities."],
    [
      "Are tired of feeling ",
      <span className="text-yellow-500 font-semibold" key="3">tired</span>,
      ", sluggish, or worried about the complications of diabetes."
    ],
    [
      "Want to take ",
      <span className="text-yellow-500 font-semibold" key="4">control of their health</span>,
      " but are unsure where to start or what advice to trust."
    ],
    ["Have tried various treatments without seeing the results they hoped for and are looking for a personalised, proven approach."]
  ].map((item, index) => (
    <li key={index} className="flex items-start">
      <div className="bg-green-700 rounded-full w-6 h-6 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
      <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 20 20">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
      </div>
      <span className="text-blue-100 text-lg">
        {item.map((part, i) => <React.Fragment key={i}>{part}</React.Fragment>)}
      </span>
    </li>
  ))}
</ul>

              </div>
              
              </div>
         
          </motion.div>
        </div>
      </section>

      <section className='bg-[#1C3050]'>
      <div className="max-w-7xl bg-[#1C3050] mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >

      <div className='bg-[#1C3050] pb-20'>
              
              <h3 className="md:text-5xl text-3xl text-center py-12 max-w-4xl justify-self-center  font-bold text-white mb-8">
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
                      <span className="text-white text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
              </motion.div>
        </div>
      </section>

      {/* Doctor Profile Section */}
<section className="py-24 bg-[#1a1ac1] text-white relative">
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
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-yellow-400  text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-yellow-500 transition">
        Book an Appointment
      </button>
    </div>
    
    {/* Right Image Section */}
    <div className="md:w-1/2 flex justify-center relative">
    <img 
  src={option3} 
  alt="Dr. Sai Vigneshvar" 
  className="w-120 h-120 mb-12 rounded-xl object-cover object-top"
  style={{ filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.6))' }}
/>
    </div>
  </div>

  {/* Credentials Section */}
  <div className="max-w-3xl mx-5 md:absolute -mb-64 right-44 -translate-y-44 bg-white text-black rounded-lg p-6 mt-8 shadow-lg flex flex-col space-y-4">
    <ul className="space-y-3 text-lg">
      <li className="flex items-center gap-3">
        <span className="text-black font-bold">•</span> <span><strong>5+ Years of Experience</strong> in treating diabetes</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-black font-bold">•</span> <span><strong>10,000+ patients</strong> treated with a focus on holistic care</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-black font-bold">•</span> <span><strong>Proven track record</strong> in reducing HbA1c and managing blood sugar levels</span>
      </li>
      <li className="flex items-center gap-3">
        <span className="text-black font-bold">•</span> <span><strong>Personalized treatment</strong> tailored to your specific health needs</span>
      </li>
    </ul>
  </div>
</section>

<section className="py-24 bg-[#08081b] text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="shadow-lg overflow-hidden border-t-2 border-white"
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
                  className="p-6 text-gray-300"
                >
                  {faq.answer}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className='flex justify-center'>
      <motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(156, 241, 99, 0.08)" }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="bg-[#eeb600] text-black mb-6 -mt-12 px-6 md:px-24 py-3 md:py-4 rounded-sm font-bold text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
>
  Book an Appointment
</motion.button>
      </div>
     
    </div>
  );
}

export default LandingPage;