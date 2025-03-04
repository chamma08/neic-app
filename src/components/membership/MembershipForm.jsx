"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Wrapper } from "..";
import axios from "axios";

const FormSchema = z.object({
  fullName: z.string({
    required_error: "Please enter your full name",
  }),
  designation: z.string({
    required_error: "Please enter your designation",
  }),
  division: z.string({
    required_error: "Please enter your division",
  }),
  mobile: z.string({
    required_error: "Please enter your mobile numer",
  }),
  home: z.string({
    required_error: "Please enter your home number",
  }),
  email: z.string({
    required_error: "Please enter your email address",
  }),
});

const MembershipForm = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("/api/member", data);
      console.log(response);

      // Clear form after successful submission
      form.reset();
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-[800px]">
      <h2 className="mb-5 pt-16 md:pt-16 text-3xl text-center font-bold text-primary md:text-4xl">
        Become a Member
      </h2>
      <div className="p-10 bg-white rounded-lg shadow-md w-full">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Full Name</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Full Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Designation</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Designation" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="division"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Division</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Division" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Mobile Number</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="home"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Home Number</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Home Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-text">Email</FormLabel>
                    <FormControl className="border-border">
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 text-lg font-semibold text-white rounded-md bg-primary hover:bg-secondary transition-all duration-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MembershipForm;
