import { header, table, tr } from 'framer-motion/client';
import React from 'react'
import Navbar from '../Layout/Navbar';
import WhatsappButton from '../components/WhatsappButton';

export default function OdooVsSap() {
 
    
    
      return (
        <>
        <Navbar />
        <WhatsappButton />
        <div className=" flex flex-col items-center justify-center min-h-screen  p-6 pt-20 ">
          <div className="max-w-3xl mx-auto rounded-xl ">  
            <h1 className="text-3xl font-bold text-center text-gray-600 mb-4">
            Feature Comparison
            </h1>
            {features.map((section, idx) => (
  <div key={idx} className="mb-10 w-[600px]">
  <div className='flex justify-between items-center max-w-[420px] mx-auto'>
    <h2 className="text-lg font-bold text-center mb-4">{section.header}</h2>

 <div className='flex flex-row mb-4 gap-1 font-bold  '>
    <h2 className="p-2 w-[75px] bg-[#975f93e5] flex justify-center items-center">Odoo</h2>
    <h2 className="p-2 max-w-[75px] bg-[#6EBEC4E5]">SAP Business One</h2>
    </div>
  </div>
    {section.data.map((categoryData, catIdx) => (
      
      <div key={catIdx} className="mb-6 flex flex-col items-center">
        <table className="w-full max-w-[450px] text-sm  ">
          <thead>
            <tr className="">
            <th className="p-2 text-start font-bold text-" colSpan="3">{categoryData.category}</th>
            </tr>
          </thead>
          <tbody>
            {categoryData.items.map((item, itemIdx) => (
              <tr key={itemIdx} className="hover:bg-gray-50 text-center">
                <td className="p-2 font-semibold text-left max-w-[109px]">{item.name}</td>
                <td className="p-2  border-x-1 border-gray-300 font-bold">
                  {item.odoo === true ? "✅" : item.odoo === false ? "❌" : item.odoo}
                </td>
                <td className="p-2 font-bold">
                  {item.sap === true ? "✅" : item.sap === false ? "❌" : item.sap}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
))}
</div>
</div>
  </>    
);
}
  
    const features = [
        {
          header: " Inventory Management",
          data: [
            {
              category: " General Scope",
              items: [
                { name: "Multi-Warehouse", odoo: true, sap: true },
                { name: "Storage Location", odoo: true, sap: true },
                { name: "Bin Replenishment", odoo: true, sap: true },
                { name: "Mobile Device Support", odoo: true, sap: true },
                { name: "Multi-Company", odoo: true, sap: true },
                { name: "Multi-Currency", odoo: true, sap: true },
                { name: "Multi-Language", odoo: true, sap: true },
                { name: "Automatic ASN (Advanced Shipping Notice)", odoo: false, sap: true },
                { name: "Package Management / Packaging", odoo: true, sap: true },
                { name: "Freight Carrier Integration", odoo: true, sap: true },
                { name: "Manage Consignee Stocks", odoo: true, sap: true },
                { name: "EDI (Electronic Data Interchange)", odoo: true, sap: true },
              ],
            },
            {
              category: "Product",
              items: [
                { name: "Non-Stocked Inventory", odoo: true, sap: true },
                { name: "Multiple Variants", odoo: true, sap: true },
                { name: "Multiple Units of Measure", odoo: true, sap: true },
                { name: "Inter-Class UoM Conversion", odoo: true, sap: true },
                { name: "Variant Matrix", odoo: true, sap: true }
              ]
            },
            {
              category: "Traceability",
              items: [
                { name: "Lots / Serial Numbers", odoo: true, sap: true },
                { name: "Forward / Backward Traceability", odoo: true, sap: true },
                { name: "360° Traceability", odoo: true, sap: true },
                { name: "Expiration Dates", odoo: true, sap: true },
                { name: "Cycle Counting", odoo: true, sap: true },
                { name: "Valuation by Lots/serial Numbers", odoo: true, sap: true }
              ]
            },
            {
              category: "Reporting",
              items: [
                { name: "Inventory Forecasts", odoo: true, sap: true },
                { name: "Inventory Valuations", odoo: true, sap: true },
                { name: "Analisis ABC", odoo: true, sap: true }
              ]
            },
            {
              category: "Barcode Support",
              items: [
                { name: "Support QR Code", odoo: true, sap: true },
                { name: "GS1 Support", odoo: true, sap: "?" }, // tanda ? diartikan tidak support
                { name: "Supports RFID", odoo: true, sap: true },
                { name: "Lots / Serial Numbers Support", odoo: true, sap: true },
                { name: "Reception", odoo: true, sap: true },
                { name: "Item Selection", odoo: true, sap: true },
                { name: "Internal Moves", odoo: true, sap: true },
                { name: "Delivery Orders", odoo: true, sap: true },
                { name: "Inventory Adjustments", odoo: true, sap: true }
              ]
            },
            {
              category: "Routing",
              items: [
                { name: "FIFO / LIFO", odoo: true, sap: true },
                { name: "Customizable Routes", odoo: true, sap: false },
                { name: "Storage Strategy", odoo: true, sap: true },
                { name: "Wave Picking", odoo: true, sap: true },
                { name: "Batch Picking", odoo: true, sap: true },
                { name: "Zone Picking", odoo: true, sap: true },
                { name: "Cluster Picking", odoo: true, sap: true },
                { name: "Cross-Docking", odoo: true, sap: true },
                { name: "Fleet Management", odoo: true, sap: false },
                { name: "Storage Location", odoo: true, sap: true } // ini muncul dua kali di PDF
              ]
            }
          ]
        },{
          header: "Supply Chain Management",
          data: [
            {
              category: "Features",
              items: [
                { name: "Vendor Data Management", odoo: true, sap: true },
                { name: "Vendor Price List Management", odoo: true, sap: true },
                { name: "Inbound Quality Control", odoo: true, sap: true },
                { name: "Dropshipping", odoo: true, sap: true }
              ]
            },
            {
              category: "Buy ",
              items: [
                { name: "Purchase Requests", odoo: true, sap: true },
                { name: "Purchase Orders", odoo: true, sap: true },
                { name: "Purchase Approval Workflow", odoo: true, sap: true },
                { name: "RFQ (Request for Quotation)", odoo: true, sap: true },
                { name: "Easy portal view for vendors", odoo: true, sap: false },
                { name: "Contracts / Purchase Agreements", odoo: true, sap: true }
              ]
            },
            {
              category: "Automated Procurements",
              items: [
                { name: "Minimum Stock Rules", odoo: true, sap: true },
                { name: "Make-to-Order", odoo: true, sap: true },
                { name: "Master Production Schedule", odoo: true, sap: true }
              ]
            }
          ]
        },{
          header: "Manufacturing",
          data: [
            {
              category: "Master Data",
              items: [
                { name: "Multi-Level BoM", odoo: true, sap: true },
                { name: "By-Products / Co-Products", odoo: true, sap: true },
                { name: "Routing-Routing", odoo: true, sap: true },
                { name: "Subassemblies", odoo: true, sap: true },
                { name: "One BoM for Multiple Product Variants", odoo: true, sap: false },
                { name: "BoM Versioning", odoo: true, sap: true },
                { name: "Multiple BoM / Routing", odoo: true, sap: true }
              ]
            },
            {
              category: "Planning",
              items: [
                { name: "Demand Forecasting", odoo: true, sap: true },
                { name: "MRP Scheduler", odoo: true, sap: true },
                { name: "Gantt Chart Scheduling", odoo: true, sap: true },
                { name: "Kanban Planning", odoo: true, sap: true },
                { name: "Production Calendar", odoo: true, sap: false },
                { name: "Infinite Capacity Scheduling", odoo: true, sap: true },
                { name: "Finite Capacity Scheduling", odoo: true, sap: true },
                { name: "Multiple Scheduling Plans", odoo: true, sap: true },
                { name: "Delivery Date Calculation", odoo: true, sap: true },
                { name: "Production Order Separation/Merging", odoo: true, sap: true }
              ]
            },
            {
              category: "Operations",
              items: [
                { name: "Manufacturing / Production Orders", odoo: true, sap: true },
                { name: "Job Tracking", odoo: true, sap: true },
                { name: "SPK / Operation", odoo: true, sap: true },
                { name: "Automated Time Tracking", odoo: true, sap: true },
                { name: "Disassembly Orders", odoo: true, sap: true },
                { name: "Subcontract", odoo: true, sap: true },
                { name: "Rework / Repair", odoo: true, sap: true },
                { name: "Scrap", odoo: true, sap: true },
                { name: "Disposal Strategies", odoo: true, sap: true },
                { name: "Kits", odoo: true, sap: true },
                { name: "Edit Individual Production BoMs", odoo: true, sap: true }
              ]
            },
            {
              category: "Costing",
              items: [
                { name: "Continuous Inventory Valuation", odoo: true, sap: true },
                { name: "Periodic Inventory Valuation", odoo: true, sap: true },
                { name: "Standard Price", odoo: true, sap: true },
                { name: "FIFO / LIFO", odoo: true, sap: true },
                { name: "Landed Costs", odoo: true, sap: false },
                { name: "Actual Production Labor", odoo: true, sap: false },
                { name: "Production Order Costing", odoo: true, sap: true },
              ]
            },
            // mulai dari sini dari chatgpt
            {
              category: "Shop Floor Control",
              items: [
                { name: "Terminal Shop Floor", odoo: true, sap: true },
                { name: "Production Activities", odoo: true, sap: true },
                { name: "Time Tracking", odoo: true, sap: true },
                { name: "Messages on Work Orders", odoo: true, sap: true },
                { name: "Barcode Support", odoo: true, sap: true },
                { name: "Equipment / Machine Management", odoo: true, sap: false },
                { name: "Work Instructions on SPK", odoo: true, sap: false },
                { name: "Maintenance Requests from Shop Floor Terminal", odoo: true, sap: false }
              ]
            },
            {
              category: "Human Resources",
              items: [
                { name: "Schedule Management", odoo: true, sap: true },
                { name: "Touch Screen Attendance", odoo: true, sap: false },
                { name: "Timesheets", odoo: true, sap: true },
                { name: "Breaks", odoo: true, sap: true },
                { name: "Overtime", odoo: true, sap: false },
                { name: "Vacation / Wound", odoo: true, sap: true }
              ]
            },
            {
              category: "Reporting and Forecasting",
              items: [
                { name: "Overall Equipment Efficiency", odoo: true, sap: false },
                { name: "Working Hours", odoo: true, sap: true },
                { name: "Demand Forecast", odoo: true, sap: true },
                { name: "Maintenance KPIs", odoo: true, sap: false },
                { name: "Production Cost Analysis", odoo: true, sap: true },
                { name: "Analytic Accounting", odoo: true, sap: true },
                { name: "CSV Export", odoo: true, sap: false },
                { name: "Dynamic Pivot Tables", odoo: true, sap: false },
                { name: "Dashboard", odoo: true, sap: true },
                { name: "Save Custom Reports", odoo: true, sap: true }
              ]
            },
           
          ]
        },
        {
          header: "Maintenance",
          data: [
            {
              category: "Scheduling and Request Handling",
              items: [
                { name: "Schedule Preventive Maintenance", odoo: true, sap: false },
                { name: "Maintenance Kanban", odoo: true, sap: false },
                { name: "Maintenance Calendar", odoo: true, sap: false },
                { name: "Shop Floor Integration", odoo: true, sap: false },
                { name: "Multiple Teams / Sites", odoo: true, sap: false },
                { name: "Asset Management", odoo: true, sap: false },
                { name: "Repair Subcontract", odoo: true, sap: false },
                { name: "Job Tracking", odoo: true, sap: true },
              ]
            },
            {
              category: "Parts Management",
              items: [
                { name: "Inventory Management", odoo: true, sap: true },
                { name: "Purchasing Integration", odoo: true, sap: true },
                { name: "Equipment Serial Numbers", odoo: true, sap: false },
                { name: "Equipment Maintenance History", odoo: true, sap: false },
                { name: "Subcontractor Portal", odoo: true, sap: false },
              ]
            }
          ]
        },
        {
          header: "QMS",
          data: [
            {
              category: "Quality Control",
              items: [
                { name: "At Reception", odoo: true, sap: true },
                { name: "In-Process", odoo: true, sap: true },
                { name: "Before Delivery", odoo: true, sap: true },
                { name: "Inventory Quarantine", odoo: true, sap: true },
              ]
            },
            {
              category: "Quality Inspection",
              items: [
                { name: "Quality Control Plan", odoo: true, sap: true },
                { name: "Pass/Fail Inspection", odoo: true, sap: true },
                { name: "Measurement Checks", odoo: true, sap: true },
                { name: "Nonconformance Document / Quality Warning", odoo: true, sap: true },
                { name: "Print Nonconformance Documents", odoo: true, sap: true },
                { name: "Corrective Actions", odoo: true, sap: true },
              ]
            },
            {
              category: "ISO9001 Tools",
              items: [
                { name: "Documentation Management", odoo: true, sap: true },
                { name: "Customer Satisfaction Surveys", odoo: true, sap: false },
                { name: "Customer Complaints Management", odoo: true, sap: true },
                { name: "Operation Traceability", odoo: true, sap: true },
                { name: "Resource Management", odoo: true, sap: true },
              ]
            },
            {
              category: "Reporting",
              items: [
                { name: "Nonconformance Costs", odoo: false, sap: true },
              ]
            }
          ]
        },
        {
          header: "PLM",
          data: [
            {
              category: "Features",
              items: [
                { name: "Engineering Change Orders (ECOs)", odoo: true, sap: true },
                { name: "BoM Versioning", odoo: true, sap: true },
                { name: "Routing Version Management", odoo: true, sap: true },
                { name: "MRP Integration", odoo: true, sap: true },
                { name: "Centralized BoM Management", odoo: true, sap: true },
              ]
            },
            {
              category: "ECO Management",
              items: [
                { name: "Approval Workflows", odoo: true, sap: true },
                { name: "BoM Version Difference Viewer", odoo: true, sap: false },
                { name: "Bulk BoM Updates", odoo: true, sap: false },
                { name: "Notification Mechanism", odoo: true, sap: true },
                { name: "Project Email Gateway", odoo: true, sap: true },
                { name: "ECO Costing", odoo: false, sap: false },
              ]
            },
            {
              category: "Third-Party CAD Integration",
              items: [
                { name: "AutoCAD / SolidWorks / Autodesk Integration", odoo: false, sap: false },
              ]
            }
          ]
        },
        {
          header: "Kegunaan, Harga & Kondisi",
          data: [
            {
              category: "Usability",
              items: [
                { name: "Full Web Interface", odoo: true, sap: true },
                { name: "Mobile App", odoo: true, sap: true },
                { name: "App Store / Add-ons", odoo: true, sap: true },
              ]
            },
            {
              category: "Reying Subjective",
              items: [
                { name: "Navigation and Search ", odoo: "5/5", sap: "5/5" },
              
              ]
            }
          ]
        }      
        
      ];
      