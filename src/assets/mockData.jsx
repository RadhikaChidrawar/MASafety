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
import prod16 from "./shoe2.png";
import prod17 from "./Shoe3.png";
import prod18 from "./shoes.png";
import prod19 from "./shoes5.png";
import prod20 from "./shos6.png";
import prod21 from "./shose4.png";
import prod22 from "./shose7.png";
import prod23 from "./shose8.png";
import prod24 from "./shose9.png";
import prod25 from "./shose10.png";

import blog1 from "./download (1).png";
import blog2 from "./LSRs.png";
import blog3 from "./images (3).jpeg";

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
  {
    product_id: 11,
    product_name: "Crazy Horse Brown Leather Shoes (2727)",
    product_Description:
      "Steel toe cap 200 joules, double density, anti-static, slip resistant, ISI Part-2, ISO 9001:2015 & CE certified.",
    product_price: 1750,
    product_star: 4.5,
    delivery_time: "3-5 Days",
    product_image: prod16,
  },
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
