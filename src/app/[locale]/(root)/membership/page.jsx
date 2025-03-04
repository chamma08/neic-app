import { Header, Membership } from "@/components";
import React from "react";
import { cover_7 } from "@/assets";

const MembershipPage = () => {
  const pageName = "Membership";
  const description = "Become a NEIC Member.";
  return (
    <div>
      <div className="min-h-screen">
        <Header pageName={pageName} description={description} image={cover_7} />
        <Membership />
      </div>
    </div>
  );
};

export default MembershipPage;
