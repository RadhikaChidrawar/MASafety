import React from 'react';
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
import team4 from "../assets/team4.jpg";
import team5 from "../assets/team5.jpg";
import team6 from "../assets/team6.jpg";

const teamMembers = [
  { name: 'Amit Sharma', role: 'CEO', image: team1 },
  { name: 'Priya Mehta', role: 'VP, Growth & Development', image: team2 },
  { name: 'Rajesh Iyer', role: 'VP, Finance & Operations', image: team3 },
  { name: 'Neha Kapoor', role: 'VP, Strategy', image: team4 },
  { name: 'Vikram Choudhary', role: 'VP, Sales & Marketing', image: team5 },
  { name: 'Anjali Rao', role: 'Creative Director', image: team6 },
];

const Team = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1D2A4D] mb-10">
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-4 border-orange-500"
            />
            <h3 className="text-lg font-semibold text-[#1D2A4D]">{member.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
