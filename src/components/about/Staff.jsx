"use client";

import React from "react";
import { Wrapper } from "..";
import Image from "next/image";
import {
  member1,
  member2,
  chairman,
  member5,
  member6,
  member7,
} from "@/assets";
import { useTranslation } from "react-i18next";

const TeamMemberCard = ({
  image,
  name,
  position,
  department,
  tel,
  ext,
  email,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl text-center">
      <div className="w-48 h-48 mx-auto mb-7">
        <Image
          src={image}
          alt={`${name}'s image`}
          width={192}
          height={192}
          className="object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-bold text-primary">{name}</h3>
      <p className="text-md text-secondary">{position}</p>
      <p className="text-sm text-accent">{department}</p>
      <div className="flex items-center justify-center gap-2">
        {tel && <p className="text-sm text-accent">{tel},</p>}
        {ext && <p className="text-sm text-accent">{ext}</p>}
      </div>
      {email && <p className="text-sm text-accent">{email}</p>}
    </div>
  );
};

const Staff = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      image: chairman,
      name: t("about.staff.member1.name"),
      position: t("about.staff.member1.position"),
      department: t("about.staff.member1.department"),
    },
    {
      image: member1,
      name: t("about.staff.member2.name"),
      position: t("about.staff.member2.position"),
      department: t("about.staff.member2.department"),
    },
    {
      image: member5,
      name: t("about.staff.member3.name"),
      position: t("about.staff.member3.position"),
      department: t("about.staff.member3.department"),
    },
  ];

  const staffMembers = [
    {
      image: member2,
      name: t("about.staff.member4.name"),
      position: t("about.staff.member4.position"),
      tel: t("about.staff.member4.tel"),
      ext: t("about.staff.member4.ext"),
      email: t("about.staff.member4.email"),
    },
    {
      image: member7,
      name: t("about.staff.member5.name"),
      position: t("about.staff.member5.position"),
      department: t("about.staff.member5.department"),
    },
    {
      image: member6,
      name: t("about.staff.member6.name"),
      position: t("about.staff.member6.position"),
      department: t("about.staff.member6.department"),
    },
  ];

  return (
    <div className="mt-5 py-8 md:py-12">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              department={member.department}
              tel={member.tel}
              ext={member.ext}
              email={member.email}
            />
          ))}
        </div>
        <h2 className="my-10 text-center text-2xl font-bold text-primary md:text-3xl">
          {t("about.staff.title")}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
              department={member.department}
              tel={member.tel}
              ext={member.ext}
              email={member.email}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Staff;
