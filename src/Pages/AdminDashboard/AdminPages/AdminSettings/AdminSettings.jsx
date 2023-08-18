import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const AdminSettings = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};

export const Content = () => {
  return <div>Content</div>;
};

export default AdminSettings;
