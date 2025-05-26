import prod1 from "./helmet.png";
import prod2 from "./google.jpeg";
import prod4 from "./mask.jpeg";
import prod5 from "./gloves.jpeg";
import prod6 from "./safetyVests.jpeg";
import prod7 from "./shoes.jpeg";
import prod8 from "./protective_dress.jpeg";
import prod13 from "./Electrical_Gloves.jpeg";
import prod14 from "./cloth mask.jpeg";
import prod15 from "./Shoe1.png";

import prod17 from "./Shoe3.png";
import prod18 from "./shoes.png";
import prod19 from "./shoes5.png";
import prod20 from "./shos6.png";
import prod21 from "./Shoe3.png";
import prod22 from "./shose7.png";
import prod23 from "./shose8.png";
import prod24 from "./shose9.png";
import prod25 from "./shose10.png";

import blog1 from "./download (1).png";
import blog2 from "./LSRs.png";
import blog3 from "./images (3).jpeg";

import d1 from './d1.jpeg';
import d2 from './d2.jpeg';
import d3 from './d3.jpeg';
import d4 from './d4.jpeg';
import d5 from './d5.jpeg';
import d6 from './d6.png';
import d7 from './d7.png';
import d8 from './d8.png';

import c1 from './c1.png';
import c2 from './c2.png';

import h1 from './h1.png';
import h2 from './h2.png';
import h4 from './h4.png';
import h5 from './h5.jpg';
import h6 from './h6.png';
import h9 from './h9.jpeg';
import h10 from './h10.jpeg';
import h13 from './h11.jpeg';
import h14 from './h12.jpeg';

import n1 from './n1.png';
import n2 from './n2.png';
import n3 from './n3.png';
import n4 from './n5.png';
import n5 from './n6.jpg';
import n7 from './n7.jpeg';
import n8 from './n8.jpeg';

import r1 from './r1.png';
import r2 from './r2.jpg';
import r3 from './r3.jpg';
import r4 from './r4.jpg';
import r5 from './r5.jpg';

import s1 from './s1.png';
import s2 from './s3.png';
import s3 from './s4.png';
import s4 from './s5.png';
import s5 from './s6.png';

import sc1 from './sc1.png';
import sc2 from './sc2.jpg';
import sc3 from './sc3.png';
import sc4 from './sc4.png';
import sc5 from './ss3.png';

import h11 from './h3.jpeg'
import h12 from './h7.jpeg'
// import h134 from './h.png'


import g1 from './g1.jpeg'
import g2 from './g2.jpeg'
import g3 from './g3.jpeg'

import go1 from './go1.jpeg'
import go2 from './go2.jpeg'
import go3 from './go3.jpeg'

import m1 from './m1.jpeg'
import m2 from './m2.jpeg'
import m3 from './m3.jpeg'

import v1 from './v1.jpeg'
import v2 from './v2.jpeg'
import v3 from './v3.jpeg'


const sampleData = [
  {
    product_id: 1,
    product_name: "Safety Helmet",
    product_Description:
      "Durable hard hat with shock absorption for construction sites.",
    product_price: 1200,
    product_star: 4.5,
    delivery_time: "2-4 Days",
    product_image: prod1,
  },
  {
    product_id: 2,
    product_name: "Safety Goggles",
    product_Description:
      "Anti-fog, scratch-resistant safety goggles for eye protection.",
    product_price: 500,
    product_star: 4.3,
    delivery_time: "1-3 Days",
    product_image: prod2,
  },
  {
    product_id: 3,
    product_name: "Respiratory Mask (N95)",
    product_Description: "N95 mask for dust and chemical fume protection.",
    product_price: 300,
    product_star: 4.7,
    delivery_time: "1-3 Days",
    product_image: prod4,
  },
  {
    product_id: 4,
    product_name: "Cut-Resistant Gloves",
    product_Description:
      "High-quality gloves for hand protection against cuts and abrasions.",
    product_price: 600,
    product_star: 4.4,
    delivery_time: "2-4 Days",
    product_image: prod5,
  },
  {
    product_id: 5,
    product_name: "High-Visibility Vest",
    product_Description: "Reflective safety vest for improved visibility.",
    product_price: 400,
    product_star: 4.2,
    delivery_time: "1-3 Days",
    product_image: prod6,
  },
  {
    product_id: 6,
    product_name: "Steel Toe Safety Boots",
    product_Description: "Slip-resistant, steel toe boots for foot protection.",
    product_price: 2500,
    product_star: 4.8,
    delivery_time: "3-6 Days",
    product_image: prod7,
  },
  {
    product_id: 7,
    product_name: "Protective Coveralls",
    product_Description:
      "Full-body coveralls for chemical and dust protection.",
    product_price: 1800,
    product_star: 4.5,
    delivery_time: "2-5 Days",
    product_image: prod8,
  },
  {
    product_id: 8,
    product_name: "Insulated Electrical Gloves",
    product_Description: "Shock-resistant gloves for electrical safety.",
    product_price: 1500,
    product_star: 4.5,
    delivery_time: "3-6 Days",
    product_image: prod13,
  },
  {
    product_id: 9,
    product_name: "Cloth Nose Mask",
    product_Description:
      "Reusable and breathable cloth mask for daily protection against dust and pollutants.",
    product_price: 150,
    product_star: 4.2,
    delivery_time: "3-5 Days",
    product_image: prod14,
  },
  {
    product_id: 10,
    product_name: "Disposable Apron",
    product_Description:
      "Lightweight, waterproof disposable apron ideal for hygiene and safety in medical and kitchen use.",
    product_price: 250,
    product_star: 4.0,
    delivery_time: "2-4 Days",
    product_image: prod15,
  },
  // {
  //   product_id: 11,
  //   product_name: "Crazy Horse Brown Leather Shoes (2727)",
  //   product_Description:
  //     "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
  //   product_price: 1750,
  //   product_star: 4.5,
  //   delivery_time: "3-5 Days",
  //   product_image: prod20,
  // },
  {
    product_id: 12,
    product_name: "Crazy Horse Green Leather Shoes (2728)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1800,
    product_star: 4.4,
    delivery_time: "3-5 Days",
    product_image: prod17,
  },
  {
    product_id: 13,
    product_name: "Buff Barton Leather Shoes - Electrical (602 E)",
    product_Description:
      "11 KVA electrical resistance, single density, anti-static, slip resistant, ISI Part-3, ISO 9001:2015 & CE certified.",
    product_price: 1650,
    product_star: 4.3,
    delivery_time: "2-4 Days",
    product_image: prod18,
  },
  {
    product_id: 14,
    product_name: "Buff Barton Leather Shoes - Nitrile Sole (602 N)",
    product_Description:
      "Steel toe 200J, single density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1700,
    product_star: 4.4,
    delivery_time: "2-4 Days",
    product_image: prod19,
  },
  {
    product_id: 15,
    product_name: "Buff Barton Leather Shoes (701)",
    product_Description:
      "Steel toe 140J, single density, anti-static, slip resistant, ISI Part-3, ISO 9001:2015 & CE certified.",
    product_price: 1600,
    product_star: 4.1,
    delivery_time: "3-5 Days",
    product_image: prod20,
  },
  {
    product_id: 16,
    product_name: "Buff Barton Leather Shoes (2201)",
    product_Description:
      "Steel toe cap 140 joules, single density, anti-static, slip resistant, ISI Part-3, ISO 9001:2015 & CE certified.",
    product_price: 1580,
    product_star: 4.2,
    delivery_time: "3-5 Days",
    product_image: prod21,
  },
  {
    product_id: 17,
    product_name: "Grain Tango Leather Shoes (2450)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1650,
    product_star: 4.3,
    delivery_time: "2-4 Days",
    product_image: prod22,
  },
  {
    product_id: 18,
    product_name: "Buff Barton Leather Shoes (2453)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1680,
    product_star: 4.4,
    delivery_time: "2-4 Days",
    product_image: prod23,
  },
  {
    product_id: 19,
    product_name: "Grain Tango Brown Leather Shoes (2602)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1700,
    product_star: 4.4,
    delivery_time: "3-5 Days",
    product_image: prod24,
  },
  {
    product_id: 20,
    product_name: "C.G Leather Shoes (2610)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1680,
    product_star: 4.3,
    delivery_time: "3-5 Days",
    product_image: prod25,
  },
  {
    product_id: 21,
    product_name: "C.G Leather Shoes (2610)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1680,
    product_star: 4.3,
    delivery_time: "3-5 Days",
    product_image: prod23,
  },
];

export default sampleData;

export const mockCustomers = [
  {
    id: 1,
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    phone: "9876543210",
    totalOrders: 5,
    joinedDate: "2024-11-10",
  },
  {
    id: 2,
    name: "Priya Singh",
    email: "priya.singh@example.com",
    phone: "9123456789",
    totalOrders: 3,
    joinedDate: "2025-01-05",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    email: "rahul.mehta@example.com",
    phone: "9988776655",
    totalOrders: 7,
    joinedDate: "2024-08-20",
  },
  {
    id: 4,
    name: "Sneha Patil",
    email: "sneha.patil@example.com",
    phone: "9001234567",
    totalOrders: 2,
    joinedDate: "2025-02-14",
  },
  {
    id: 5,
    name: "Karan Joshi",
    email: "karan.joshi@example.com",
    phone: "7894561230",
    totalOrders: 10,
    joinedDate: "2024-09-03",
  },
];

export const blogs = [
  {
    id: 1,
    title: "Why Safety is Important at Any Place",
    image: blog1,
    description:
      "Learn why safety matters in every environment—from homes to workplaces.",
    content:
      "Safety is essential to protect people from injuries, illness, and emergencies. It helps create secure environments where people can live and work with confidence. Whether you're at home, on the road, or at the office, safety practices reduce risks and ensure peace of mind.",
  },
  {
    id: 2,
    title: "Top 10 Home Safety Tips Everyone Should Know",
    image: blog3,
    description:
      "Follow these tips to make your home a safer place for your family.",
    content:
      "Home safety starts with simple habits like locking doors, using smoke detectors, keeping emergency numbers handy, and safely storing chemicals and tools. These small actions can prevent major accidents and keep your loved ones safe.",

  },
  {
    id: 3,
    title: "Workplace Safety: Habits that Save Lives",
    image: blog2,
    description:
      "Explore habits and rules that improve safety at your workplace.",
    content:
      "Workplace safety involves using proper equipment, following guidelines, reporting hazards, and attending safety training. These habits protect workers from accidents and boost overall productivity and morale.",

  },
];

export const denimShirt=[
  {
    product_id:101,
    product_name :"Heavy-Duty Denim Work Shirt",
    product_Description: "Durable and breathable denim shirt, ideal for workers in manufacturing units. Designed for long shifts and heavy-duty environments.",
    product_image: d1 ,
    product_price :300,
  }, 
  {
    product_id:102,
    product_name :"Industrial Safety Denim Shirt",
    product_Description: "Engineered for comfort and safety, this denim shirt offers sturdy protection and flexibility for factory and machine operators.",
    product_image : d2 ,
    product_price : 350,
  }, 
  {
    product_id:103,
    product_name :"Classic Blue Denim Workwear",
    product_Description: "A timeless blue denim shirt perfect for workers handling machinery and tools in industrial settings.",
    product_image : d3 ,
    product_price : 280,
  }, 
  {
    product_id:104,
    product_name :"Reinforced Stitch Worker Shirt",
    product_Description: "Features reinforced seams and thick denim material. Ideal for rugged use in warehouses and workshops.",
    product_image : d4 ,
    product_price:400,
  }, 
  {
    product_id:105,
    product_name :"Heavy-Duty Denim Work Shirt",
    product_Description: "Durable and breathable denim shirt, ideal for workers in manufacturing units. Designed for long shifts and heavy-duty environments.",
    product_image: d5 ,
    product_price :300,
  },  
  {
    product_id:107,
    product_name :"Classic Blue Denim Workwear",
    product_Description: "A timeless blue denim shirt perfect for workers handling machinery and tools in industrial settings.",
    product_image : d7 ,
    product_price : 280,
  }, 
   
];

export const corp =[
  {
    product_id:201,
    product_name :"Corporate woman Shirt",
    product_Description: "A professional and polished outfit designed for business environments. Features a tailored black suit with a white shirt, paired with formal footwear for a sophisticated look. Ideal for offices, meetings, and corporate events. ",
    product_image: c1 ,
    product_price :300,
  }, 
  {
    product_id:202,
    product_name :"corporate man Work Shirt",
    product_Description: "professional and polished outfit designed for business environments. Features a tailored dark blue suit with a white dress shirt, a dark tie, and brown dress shoes for a sophisticated look. Ideal for offices, meetings, and corporate events. ",
    product_image: c2 ,
    product_price :300,
  }, 
];

export const health =[
  {
    product_id:301,
    product_name :"Two-piece medical scrub ",
    product_Description: "comfortable and functional two-piece medical set with a V-neck top and drawstring pants. Made from breathable, lightweight fabrics for ease of movement during long shifts. Includes multiple pockets for carrying essentials.",
    product_image: h9 ,
    product_price :300,
  },
  {
    product_id:302,
    product_name :"Classic green V-neck scrub ",
    product_Description: "TopDesigned for medical professionals, offering comfort and durability for extended wear. Features two front pockets for easy storage. ",
    product_image: h2 ,
    product_price :500,
  },
  {
    product_id:303,
    product_name :"White Lab Coat ",
    product_Description: "Coat A professional, breathable coat designed for healthcare professionals. Tailored fit with a front button closure, structured collar, and side pockets for essential tools. Ideal for hospitals, clinics, and research facilities. ",
    product_image: h10 ,
    product_price :200,
  },
  {
    product_id:304,
    product_name :"medical scrub",
    product_Description: "Set A modern, fitted scrub set designed for healthcare professionals in high-mobility environments.Features utility pockets, zip/snap closure, and jogger-style pants with deep side pockets. Paired with white gloves and athletic shoes for extended wear. ",
    product_image: h4 ,
    product_price :300,
  },
  {
    product_id:305,
    product_name :"white medical coat",
    product_Description: "A professional white medical coat, often associated with doctors and healthcare professionals. The stethoscope around the neck adds to the authoritative and knowledgeable appearance",
    product_image: h13,
    product_price :300,
  },
  {
    product_id:306,
    product_name :"Bright pink medical scrubs",
    product_Description: " Bright pink medical scrubs with a short-sleeved top and matching pants, presenting a clean and professional look. The scrubs are designed for comfort and practicality, allowing easy movement.",
    product_image: h14,
    product_price :300,
  },
]

export const normal =[
  {
    product_id:401,
    product_name :"Industrial yellow jaket",
    product_Description: "High-visibility safety vest worn over a dark-colored polo shirt, paired with a white hard hat for head protection—typical of construction or industrial environments.",
    product_image: n1 ,
    product_price :300,
  },
  {
    product_id:402,
    product_name :"industriacl suit",
    product_Description: "Full-body coverall in grey with adjustable suspenders, worn over a checkered shirt. Paired with a yellow safety helmet, transparent safety goggles, orange protective gloves, and green rubber boots.",
    product_image: n2 ,
    product_price :1200,
  },
  {
    product_id:403,
    product_name :"orange jaket",
    product_Description: "Bright red industrial jacket over a checkered shirt, worn with protective yellow work gloves and a yellow safety helmet. He is also holding a pipe wrench, suggesting a trade profession.",
    product_image: n4 ,
    product_price :300,
  },
  {
    product_id:404,
    product_name :"normal jaket light gray polo shirt",
    product_Description: "Light grey polo shirt under a bright neon green safety vest with reflective silver stripes. Worn with a blue hard hat and clear protective glasses.",
    product_image: n7 ,
    product_price :300,
  },
  {
    product_id:405,
    product_name :"Heavy-Duty Denim Work Shirt",
    product_Description: "Durable and breathable denim shirt, ideal for workers in manufacturing units. Designed for long shifts and heavy-duty environments.",
    product_image: n8 ,
    product_price :300,
  },
]

export const resto =[
  {
    product_id:501,
    product_name :"Bib Apron",
    product_Description: "Bib Apron Designed for chefs and restaurant staff, offering full coverage and practical storage. Made from durable, easy-care fabrics with adjustable straps for a secure fit. ",
    product_image: r1 ,
    product_price :300,
  },
  {
    product_id:502,
    product_name :"WEST APRON",
    product_Description: "West Apron Designed for front-of-house staff, offering ease of movement and practical storage. Made from durable, easy-care fabrics with multiple pockets for essentials. ",
    product_image: r2 ,
    product_price :300,
  },
  {
    product_id:503,
    product_name :"Polo Shirts",
    product_Description: "Polo Shirts Designed for comfort and professionalism in hotel and restaurant settings. Made from breathable, easy-care fabrics for all-day wear.",
    product_image: r3 ,
    product_price :300,
  },
  {
    product_id:504,
    product_name :"Chef Jackets",
    product_Description: "Jackets Designed for professional kitchen environments, providing heat resistance and spill protection. Made from breathable, durable fabrics with a stand-up collar and optional pockets.",
    product_image: r5 ,
    product_price :300,
  },
]

export const security=[
  {
    product_id:601,
    product_name :"Security Uniform ",
    product_Description: "Designed for professional security personnel, offering durability and comfort for long shifts. Features a light blue long-sleeve shirt with buttoned chest pockets, dark blue pants, and a secure belt for a polished look. ",
    product_image: s1 ,
    product_price :300,
  },
  {
    product_id:602,
    product_name :"Bouncer",
    product_Description: "Designed for security personnel, providing a strong and professional appearance. Features a fitted black T-shirt or jacket, durable pants, and sturdy footwear for mobility and comfort. Ideal for nightclub, event, and venue security roles. ",
    product_image: s2 ,
    product_price :300,
  },
  {
    product_id:603,
    product_name :"Security Uniform ",
    product_Description: "Designed for professional security personnel, offering durability and comfort for long shifts. Features a light blue short-sleeved shirt with chest pockets, dark blue trousers, and a secure belt for a polished look.",
    product_image: s3 ,
    product_price :300,
  },
  {
    product_id:604,
    product_name :"Bouncer",
    product_Description: "Uniform Designed for event and venue security, offering durability and authority.",
    product_image: s4 ,
    product_price :300,
  },
  {
    product_id:605,
    product_name :" Work Shirt",
    product_Description: "A formal yet approachable look featuring a white dress shirt and light-colored pants, complemented by a black jacket. ",
    product_image: s5 ,
    product_price :300,
  },
]

export const school =[
  {
    product_id:701,
    product_name :"School Uniform ",
    product_Description: "The combination of a white shirt, grey vest, and striped tie gives a professional and polished look.",
    product_image: sc1 ,
    product_price :300,
  },
  {
    product_id:702,
    product_name :"Light yellow shirt with subtle stripes",
    product_Description: "Gives a crisp and polished appearance while adding texture to the uniform.",
    product_image: sc2 ,
    product_price :300,
  },
  {
    product_id:703,
    product_name :"Light yellow shirt with thin vertical stripes",
    product_Description: "Light yellow shirt with thin vertical stripes",
    product_image: sc3 ,
    product_price :300,
  },
  {
    product_id:704,
    product_name :"Light yellow shirt with thin vertical stripe",
    product_Description: "Adds a touch of texture and elegance while maintaining a professional look.",
    product_image: sc4 ,
    product_price :300,
  },
]

export const helmetProducts = [
  {
    product_id: 1,
    product_name: "Safety Helmet",
    product_Description:
      "Durable hard hat with shock absorption for construction sites.",
    product_price: 1200,
    product_image: h11,
  },
  {
    product_id: 2,
    product_name: "Industrial Safety Helmet",
    product_Description:
      "Lightweight and comfortable helmet with adjustable strap for daily site use.",
    product_price: 950,
    product_image: h12,
  },
  {
    product_id: 3,
    product_name: "Vented Construction Helmet",
    product_Description:
      "High-quality helmet with ventilation and sweatband for extended wear.",
    product_price: 1350,
    product_image: h11,
  },
];

export const glovesProducts = [
  {
    product_id: 4,
    product_name: "Rubber Safety Gloves",
    product_Description:
      "Durable rubber gloves ideal for chemical handling and industrial use.",
    product_price: 300,
    product_image: g1,
  },
  {
    product_id: 5,
    product_name: "Cut-Resistant Gloves",
    product_Description:
      "Level-5 cut-resistant gloves made from high-strength fibers for maximum protection.",
    product_price: 450,
    product_image: g2,
  },
  {
    product_id: 6,
    product_name: "Heat Resistant Gloves",
    product_Description:
      "Gloves designed to withstand high temperatures, perfect for welding and metalwork.",
    product_price: 550,
    product_image: g3,
  },
];

export const goggleProducts = [
  {
    product_id: 7,
    product_name: "Anti-Fog Safety Goggles",
    product_Description:
      "Clear lens goggles with anti-fog coating and side protection for industrial use.",
    product_price: 250,
    product_image: go1,
  },
  {
    product_id: 8,
    product_name: "UV Protection Safety Goggles",
    product_Description:
      "Protective goggles with UV-resistant lenses suitable for both indoor and outdoor work.",
    product_price: 320,
    product_image: go2,
  },
  {
    product_id: 9,
    product_name: "Chemical Splash Goggles",
    product_Description:
      "Sealed goggles providing full eye protection against chemical splashes and dust.",
    product_price: 400,
    product_image: go3,
  },
];

export const maskProducts = [
  {
    product_id: 10,
    product_name: "N95 Respirator Mask",
    product_Description:
      "High-efficiency N95 mask with multi-layer filtration for dust and pollutants.",
    product_price: 120,
    product_image: m1,
  },
  {
    product_id: 11,
    product_name: "Reusable Cotton Face Mask",
    product_Description:
      "Washable and breathable cotton mask ideal for daily use and comfort.",
    product_price: 80,
    product_image: m2,
  },
  {
    product_id: 12,
    product_name: "Activated Carbon Mask",
    product_Description:
      "Protective face mask with activated carbon filter for industrial and urban environments.",
    product_price: 150,
    product_image: m3,
  },
];

export const vestProducts = [
  {
    product_id: 13,
    product_name: "Reflective Safety Vest",
    product_Description:
      "High-visibility vest with reflective strips for maximum safety on construction sites and roads.",
    product_price: 250,
    product_image: v1,
  },
  {
    product_id: 14,
    product_name: "Mesh Safety Vest",
    product_Description:
      "Lightweight mesh vest with front zipper and reflective tape for breathability and visibility.",
    product_price: 200,
    product_image: v2,
  },
  {
    product_id: 15,
    product_name: "Multi-Pocket Safety Vest",
    product_Description:
      "Durable vest with multiple pockets and reflective design, ideal for site supervisors and engineers.",
    product_price: 320,
    product_image: v3,
  },
];
