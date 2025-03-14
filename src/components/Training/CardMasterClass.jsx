import React from "react";

const sections = [
  {
    title: "Costing & Financial Integration",
    content: [
      "Accounting Methods",
      "Product Costing Approaches",
      "Allocation of Manufacturing Costs & Overhead",
      "Work-in-Progress (WIP) Accounting",
      "Financial Reports for Manufacturing",
    ],
  },
  {
    title: "Advance Manufacturing Features",
    content: [
      "Subcontracting",
      "Master Production Scheduling (MPS)",
      "Work Orders & Operational Tasks",
      "Management of By-products & Scrap",
      "Integration with Inventory & Supply Chain",
    ],
  },
  {
    title: "Reordering & Inventory Management",
    content: [
      "Reordering Guidelines",
      "Lead Time Management",
      "Inventory Levels & Stock Valuation",
      "Product Lifecycle Management (PLM)",
      "Quality Control",
    ],
  },
  {
    title: "Case Studies & Best Practices",
    content: [
      "Manufacturing Implementation for SMEs",
      "Industry-Specific Adaptations (Automotive Manufacturing)",
      "Basic Manufacturing Concepts",
    ],
  },
  {
    title: "Core Manufacturing Processes",
    content: [
      "Bill of Materials (BoM)",
      "Work Centers",
      "Routing",
      "Manufacturing Orders (MOs)",
      "Project Management",
    ],
  },
  {
    title: "Technical Insights",
    content: [
      "Analytic Performance Optimization",
      "Data Models in Manufacturing (mrp.production, mrp.bom, stock.move)",
    ],
  },
];

const MasterClass = () => {
    return  (
        <div className="max-w-4xl mx-auto p-6">
          {/* Title */}
          <h2 className="text-lg font-bold mb-4 text-gray-900">Learning</h2>
    
          {/* Container Responsif */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4 rounded-xl shadow-lg 
                          max-h-[500px] md:max-h-none overflow-auto md:overflow-visible">
            {sections.map((section, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div className="w-3 h-3 bg-black rounded-full mt-1.5"></div>
                <div>
                  <h2 className="text-sm font-semibold mb-1 text-gray-900">{section.title}</h2>
                  <div className="border border-gray-300 p-2 rounded-lg bg-gray-50 text-xs">
                    {section.content.map((item, i) => (
                      <p key={i} className="text-xs text-gray-700">{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
  }

export default MasterClass;
