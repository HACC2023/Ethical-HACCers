import React from 'react';
import { Link } from 'react-router-dom';
// Import necessary styles

const AdminLanding = () => (
  <div className="admin-landing">
    <h1>Admin Dashboard</h1>

    <div className="dashboard-buttons">
      <Link to="/admin/orders">
        <button type="button" className="dashboard-button">Orders Overview</button>
      </Link>

      <Link to="/admin/containers">
        <button type="button" className="dashboard-button">Containers Overview</button>
      </Link>

      <Link to="/admin/accounts">
        <button type="button" className="dashboard-button">Accounts Overview</button>
      </Link>
    </div>

    {/* Additional admin tools, links, or information as required */}
  </div>
);

export default AdminLanding;
