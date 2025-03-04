"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Wrapper } from "..";
import { member1, member3, chairman } from "@/assets";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// const TestimonialCard = ({ image, name, position, para1, para2, para3 }) => {
//   const charLimit = 100;
//   const [isExpanded, setIsExpanded] = useState(false);

//   const textContent = `${para1}<br /><br />${para2}<br /><br />${para3}`;
//   const shouldTruncate = textContent.length > charLimit;
//   const truncatedText = shouldTruncate
//     ? textContent.substring(0, charLimit) + "...Load more"
//     : textContent;

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className="flex flex-col bg-white shadow-lg rounded-2xl p-6 gap-5">
//       <Accordion type="single" collapsible>
//         <AccordionItem value="item-1">
//           <AccordionTrigger onClick={handleToggle}>
//             <div className="flex flex-col gap-5">
//               <div className="w-[100px] h-auto">
//                 <Image
//                   src={image}
//                   alt={`${name}'s image`}
//                   className="rounded-full object-cover"
//                 />
//               </div>
//               <div className="w-full">
//                 <h3 className="text-xl font-bold text-primary">{name}</h3>
//                 <h4 className="mt-2 text-md font-bold text-teal">{position}</h4>
//                 {/* Conditionally render the truncated text or nothing */}
//                 {!isExpanded && (
//                   <p className="mt-2 text-sm text-text text-justify">
//                     <span dangerouslySetInnerHTML={{ __html: truncatedText }} />
//                   </p>
//                 )}
//               </div>
//             </div>
//           </AccordionTrigger>
//           <AccordionContent>
//             {/* Render the full content only when expanded */}
//             {isExpanded && (
//               <p className="mt-2 text-sm text-text text-justify">
//                 <span dangerouslySetInnerHTML={{ __html: textContent }} />
//               </p>
//             )}
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   );
// };

const TestimonialCard = ({ image, name, position, para1, para2, para3 }) => {
  const charLimit = 100;

  const textContent = `${para1}<br /><br />${para2}<br /><br />${para3}`;
  const shouldTruncate = textContent.length > charLimit;
  const truncatedText = shouldTruncate
    ? `${textContent.substring(
        0,
        charLimit
      )}<span class="text-teal">...Load more</span>`
    : textContent;

  return (
    <div className="flex flex-col bg-white shadow-md hover:shadow-lg rounded-2xl p-6 gap-5 transition-shadow duration-200">
      <Dialog>
        <DialogTrigger className="text-left">
          <div className="flex flex-col gap-5">
            <div className="w-[100px] h-auto">
              <Image
                src={image}
                alt={`${name}'s image`}
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-primary">{name}</h3>
              <h4 className="mt-2 text-md font-bold text-teal">{position}</h4>
              <p className="mt-2 text-sm text-text text-justify">
                <span dangerouslySetInnerHTML={{ __html: truncatedText }} />
              </p>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-xl max-w-xl bg-white border-none">
          <div className="flex flex-col gap-5">
            <div className="w-[100px] h-auto">
              <Image
                src={image}
                alt={`${name}'s image`}
                className="rounded-full object-cover"
              />
            </div>
            <div className="w-full">
              <h3 className="text-xl font-bold text-primary">{name}</h3>
              <h4 className="mt-2 text-md font-bold text-teal">{position}</h4>
              <p className="mt-2 text-sm text-text text-justify">
                <span dangerouslySetInnerHTML={{ __html: textContent }} />
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const MessageSection = () => {
  const testimonials = [
    {
      image: chairman,
      name: "Mr. U.D.C. Jayalal",
      position: "Chairman",
      para1:
        "The National Environmental Information Centre (NEIC), the heart of the Central Environmental Authority (CEA).",
      para2:
        "The NEIC represents our commitment to evolving from traditional library concepts to a digitized library, aimed at disseminating environmental information to a global audience. Our transition to a virtual platform allows researchers, students, government officers, and local and international information seekers to access valuable resources without the need to physically visit the library.",
      para3:
        "With our 24/7 services, the NEIC ensures that crucial environmental information is always accessible, supporting our collective mission to protect and preserve our natural world. Through this digital transformation, we are better equipped to provide timely and accurate information, fostering a deeper understanding and proactive approach to environmental conservation.",
    },
    {
      image: member1,
      name: "Mr. Hemantha Jayasinghe",
      position: "Director General",
      para1:
        "The Central Environmental Authority Library (National Environmental Information Centre) established in 1984, our National Environmental Information Centre serves as the focal point of environmental information in Sri Lanka. Our mission is to provide comprehensive information services to both local and overseas users, as well as the general public, ensuring that everyone's informational needs are met.",
      para2:
        "Our library plays a crucial role in supporting the Central Environmental Authority's initiatives. We are dedicated to offering national-level services aimed at protecting our natural environment for future generations. By providing access to vital environmental information, we empower individuals and organizations to make informed decisions that contribute to the preservation and sustainability of our planet.",
      para3:
        "We invite you to explore our extensive resources and utilize the information available to help foster a healthier, more sustainable environment. Together, we can make a significant impact on protecting and preserving our natural world.",
    },
  ];

  return (
    <div className="pt-12 md:pt-24">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="self-start">
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                position={testimonial.position}
                para1={testimonial.para1}
                para2={testimonial.para2}
                para3={testimonial.para3}
              />
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default MessageSection;
