import { useState } from "react";
import { motion } from "framer-motion";
import shopPdf from '../doc/shop.pdf';
import gst from '../doc/gst.pdf';
import pan from '../doc/pan.jpeg';

import imgGst from '../assets/gst.jpeg'
import imgpan from '../assets/pan.jpeg'
import imgshop from '../assets/shopact.jpeg'

const docList = [
  {
    id: 1,
    title: "GST Registration Certificate",
    type: "GST",
    description: "This certificate confirms registration under GST for tax purposes.",
    fileUrl: gst,
    image:imgGst,
  },
  {
    id: 2,
    title: "Shop Act License",
    type: "SHOP ACT",
    description: "Legal permission to run a shop or establishment.",
    fileUrl: shopPdf,
    image : imgshop,
  },
  {
    id: 3,
    title: "Company PAN Card",
    type: "PAN CARD",
    description: "Company's Permanent Account Number for income tax purposes.",
    fileUrl: pan,
    image : imgpan,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DocContainer() {
  const [selectedDoc, setSelectedDoc] = useState(null);

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          DOCUMENTS & CERTIFICATES
        </h2>
        <p className="mt-2 text-gray-600">Legal documents related to our organization</p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {docList.map((doc) => (
          <motion.div
            key={doc.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={doc.image}
                alt={doc.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-orange-300 bg-black/30 rounded-full backdrop-blur-sm">
                  {doc.type}
                </span>
                <h3 className="text-white font-bold text-lg mb-1">{doc.title}</h3>
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">{doc.description}</p>
                <button
                  onClick={() => setSelectedDoc(doc)}
                  className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded-full text-sm font-medium transition"
                >
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 z-10 bg-white rounded-full p-1"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{selectedDoc.title}</h2>
              <p className="text-gray-600 mb-4">{selectedDoc.description}</p>

              <div className="mt-4 border rounded-lg overflow-hidden">
                {selectedDoc.fileUrl.endsWith(".pdf") ? (
                  <>
                    <iframe
                      src={selectedDoc.fileUrl}
                      className="w-full h-[500px]"
                      title={selectedDoc.title}
                      type="application/pdf"
                      loading="lazy"
                    />
                  </>
                ) : (
                  <img
                    src={selectedDoc.fileUrl}
                    alt={selectedDoc.title}
                    className="w-full h-auto max-h-[500px] object-contain mx-auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
