import React, { useState, useEffect } from 'react';

function Sidebar() {
  const [sidebar, setSidebar] = useState(1);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollX > 200) { // adjust the value as needed
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSidebarChange = (newSidebar) => {
    setSidebar(newSidebar);
  };

  return (
    <div
      className={`${sticky ? 'sticky top-0 left-0' : 'absolute left-0'} bg-white p-4 w-64 h-screen`}
    >
      <div className="overflow-y-auto h-full">
        {sidebar === 1 && (
          <div>
            {/* <!-- content for sidebar 1 --> */}
            <button onClick={() => handleSidebarChange(2)}>Switch to Sidebar 2</button>
          </div>
        )}
        {sidebar === 2 && (
          <div>
            {/* <!-- content for sidebar 2 --> */}
            <button onClick={() => handleSidebarChange(1)}>Switch to Sidebar 1</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;