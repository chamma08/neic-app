import { Header } from "@/components";
import React from "react";
import { cover_10 } from "@/assets";

const layout = ({ children }) => {
  const pageName = "Gallery";
  const description = "Programmes Conducted by NEIC";
  return (
    <div>
      <div className="min-h-screen">
        <Header
          pageName={pageName}
          description={description}
          image={cover_10}
        />
        {children}
      </div>
    </div>
  );
};

export default layout;
