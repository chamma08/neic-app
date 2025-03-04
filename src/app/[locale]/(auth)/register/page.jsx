import { RegisterForm } from "@/components";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Register = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/admin");
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default Register;
