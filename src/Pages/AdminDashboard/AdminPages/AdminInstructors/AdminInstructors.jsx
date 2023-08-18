import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const AdminInstructors = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};

export const Content = () => {
  return <div>AdminInstructors</div>;
};

export default AdminInstructors;
