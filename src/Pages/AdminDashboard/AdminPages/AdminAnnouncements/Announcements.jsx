import React from "react";
import AdminLayout from "../../AdminLayout/AdminLayout";

const Announcements = () => {
  return (
    <div>
      <AdminLayout content={Content} />
    </div>
  );
};

export const Content = () => {
  return <div>Announcements</div>;
};

export default Announcements;
