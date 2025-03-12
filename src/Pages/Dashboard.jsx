import React, { useState } from 'react';
import Sidebar from '../componet/Sidebar';
import ContentBasic from '../componet/ContentBasic';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Finance');

  return (
    <div className="flex flex-col lg:flex-row pt-10">
      <Sidebar setActiveSection={setActiveSection} />
      <ContentBasic activeSection={activeSection} />
    </div>
  );
};

export default Dashboard;
