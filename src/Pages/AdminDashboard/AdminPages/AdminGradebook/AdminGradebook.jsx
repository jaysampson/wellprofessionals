import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const AdminGradebook = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};

export const Content = () => {
  return <div>AdminGradebook</div>;
};
export default AdminGradebook;
