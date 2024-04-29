import React from 'react';

function App() {
  return (
    <div className="flex">
      {/* First Sidebar */}
      <div className="w-1/6 h-screen bg-gray-200 sticky left-0">
        First Sidebar
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen bg-gray-100">
        Main Content
      </div>

      {/* Second Sidebar */}
      <div className="w-1/6 h-screen bg-gray-200 lg:w-1/5 sticky">
        Second Sidebar
      </div>

      {/* Third Sidebar */}
      <div className="w-1/6 h-screen bg-gray-200 xl:w-1/4 sticky">
        Third Sidebar
      </div>
    </div>
  );
}

export default App;
