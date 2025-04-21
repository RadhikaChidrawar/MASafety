import prod1 from './helmet.png'
import prod2 from './google.jpeg'
import prod3 from './earmuff.jpeg'
import prod4 from './mask.jpeg'
import prod5 from './gloves.jpeg'
import prod6 from './safetyVests.jpeg'
import prod7 from './shoes.jpeg'
import prod8 from './protective_dress.jpeg'
import prod9 from './safety.jpeg'
import prod10 from './Fire_Extinguisher.jpeg'
import prod11 from './Fire_Blanket.jpeg'
import prod12 from './Fir_ Alarm.jpeg'
import prod13 from './Electrical_Gloves.jpeg'
import prod14 from './Voltage_Detector.jpeg'
import prod15 from './Safet_net.jpeg'
import prod16 from './traffice.jpeg'
import prod17 from './bord.png'
import prod18 from './Temporary_fencing.jpg'
import prod19 from './First_Kit.jpeg'
import prod20 from './Wash_Station.jpeg'

const  sampleData = [
    {
      product_id: 1,
      product_name: "Safety Helmet",
      product_Description: "Durable hard hat with shock absorption for construction sites.",
      product_price: 1200,
      product_star: 4.5,
      delivery_time: "2-4 Days",
      product_image: prod1,
    },
    {
      product_id: 2,
      product_name: "Safety Goggles",
      product_Description: "Anti-fog, scratch-resistant safety goggles for eye protection.",
      product_price: 500,
      product_star: 4.3,
      delivery_time: "1-3 Days",
      product_image: prod2,
    },
    {
      product_id: 3,
      product_name: "Ear Muffs",
      product_Description: "Noise reduction earmuffs for hearing protection.",
      product_price: 800,
      product_star: 4.6,
      delivery_time: "3-5 Days",
      product_image: prod3,
    },
    {
      product_id: 4,
      product_name: "Respiratory Mask (N95)",
      product_Description: "N95 mask for dust and chemical fume protection.",
      product_price: 300,
      product_star: 4.7,
      delivery_time: "1-3 Days",
      product_image: prod4,
    },
    {
      product_id: 5,
      product_name: "Cut-Resistant Gloves",
      product_Description: "High-quality gloves for hand protection against cuts and abrasions.",
      product_price: 600,
      product_star: 4.4,
      delivery_time: "2-4 Days",
      product_image: prod5,
    },
    {
      product_id: 6,
      product_name: "High-Visibility Vest",
      product_Description: "Reflective safety vest for improved visibility.",
      product_price: 400,
      product_star: 4.2,
      delivery_time: "1-3 Days",
      product_image:prod6,
    },
    {
      product_id: 7,
      product_name: "Steel Toe Safety Boots",
      product_Description: "Slip-resistant, steel toe boots for foot protection.",
      product_price: 2500,
      product_star: 4.8,
      delivery_time: "3-6 Days",
      product_image: prod7,
    },
    {
      product_id: 8,
      product_name: "Protective Coveralls",
      product_Description: "Full-body coveralls for chemical and dust protection.",
      product_price: 1800,
      product_star: 4.5,
      delivery_time: "2-5 Days",
      product_image: prod8,
    },
    {
      product_id: 9,
      product_name: "Safety Harness",
      product_Description: "Fall protection harness for working at heights.",
      product_price: 3200,
      product_star: 4.7,
      delivery_time: "4-6 Days",
      product_image: prod9,
    },
    {
      product_id: 13,
      product_name: "Insulated Electrical Gloves",
      product_Description: "Shock-resistant gloves for electrical safety.",
      product_price: 1500,
      product_star: 4.5,
      delivery_time: "3-6 Days",
      product_image: prod13,
    },
    
    {
      product_id: 15,
      product_name: "Safety Net",
      product_Description: "Heavy-duty net for fall protection.",
      product_price: 3500,
      product_star: 4.8,
      delivery_time: "5-7 Days",
      product_image: prod15,
    },
    {
      product_id: 16,
      product_name: "Traffic Cones",
      product_Description: "High-visibility cones for site safety.",
      product_price: 700,
      product_star: 4.3,
      delivery_time: "2-4 Days",
      product_image: prod16,
    },
    {
      product_id: 17,
      product_name: "Warning Sign Boards",
      product_Description: "Safety signs for hazardous areas.",
      product_price: 1100,
      product_star: 4.5,
      delivery_time: "3-5 Days",
      product_image: prod17,
    },
    {
      product_id: 18,
      product_name: "Temporary Fencing",
      product_Description: "Portable fencing for site security.",
      product_price: 5000,
      product_star: 4.6,
      delivery_time: "6-9 Days",
      product_image: prod18,
    },
    {
      product_id: 19,
      product_name: "First Aid Kit",
      product_Description: "Emergency medical kit for injury treatment.",
      product_price: 1300,
      product_star: 4.7,
      delivery_time: "1-3 Days",
      product_image: prod19,
    },
    {
      product_id: 20,
      product_name: "Emergency Eye Wash Station",
      product_Description: "Portable eyewash unit for chemical exposure emergencies.",
      product_price: 4500,
      product_star: 4.9,
      delivery_time: "5-8 Days",
      product_image: prod20,
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
  
 
  