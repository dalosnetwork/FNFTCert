// SidebarLayout.jsx
import React, { useState } from 'react';

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(c => !c);

  return (
    <div className={`layout ${collapsed ? 'collapsed' : ''}`}>
      <aside className="sidebar">
        <button className="toggle-btn" onClick={toggle}>
          {collapsed ? '»' : '«'}
        </button>
        <nav className="menu">
          <ul>
            <li>🏠 Dashboard</li>
            <li>📁 Projects</li>
            <li>⚙️ Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main">
        qweqwe
      </main>
    </div>
  );
};

export default SidebarLayout;
