import React from 'react';
import  usePinia  from 'pinia';



const DashboardPage: React.FC = () => {
  const pinia = usePinia(); 

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
};

export default DashboardPage;
