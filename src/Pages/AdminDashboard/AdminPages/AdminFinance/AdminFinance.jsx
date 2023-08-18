import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const AdminFinance = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};
export const Content = () => {
  return <div>AdminFinance</div>;
};
export default AdminFinance;
