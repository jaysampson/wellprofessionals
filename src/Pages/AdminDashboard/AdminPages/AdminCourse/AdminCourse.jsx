import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const AdminCourse = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};

export const Content = () => {
  return <div>Content</div>;
};

export default AdminCourse;
