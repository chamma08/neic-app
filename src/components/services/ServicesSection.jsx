import Image from "next/image";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../../assets";
import { Wrapper } from "..";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

// const ServiceCard = ({ image, title, description }) => {
//   return (
//     <div className="p-6 bg-white cursor-pointer shadow-md rounded-2xl text-center">
//       <div className="w-full mx-auto mb-5">
//         <Image
//           src={image}
//           alt={`${title}'s image`}
//           className="object-cover rounded-md"
//         />
//       </div>
//       <h3 className="text-xl font-bold text-primary mb-5">{title}</h3>
//       <p className="text-sm text-justify text-secondary">{description}</p>
//     </div>
//   );
// };

const ServiceCard = ({ image, title, description }) => {
  const charLimit = 100;

  const shouldTruncate = description.length > charLimit;
  const truncatedDescription = shouldTruncate ? (
    <>
      {description.substring(0, charLimit)}
      <span className="text-teal">...Load more</span>{" "}
    </>
  ) : (
    description
  );

  return (
    <div className="p-6 bg-white cursor-pointer shadow-md rounded-2xl text-center">
      <Dialog>
        <DialogTrigger className="text-left">
          <div className="w-full h-48 mx-auto mb-5">
            <Image
              src={image}
              alt={`${title}'s image`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <h3 className="text-xl font-bold text-primary mb-5">{title}</h3>
          <p className="text-sm text-justify text-secondary">
            {truncatedDescription}
          </p>
        </DialogTrigger>
        <DialogContent className="w-2xl max-w-2xl bg-white border-none">
          <div className="flex flex-col gap-5 text-left">
            <div className="w-full h-72 mx-auto">
              <Image
                src={image}
                alt={`${title}'s image`}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <p className="text-sm text-justify text-secondary">{description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      image: service1,
      title: "Reference Services",
      description:
        "The NEIC is the largest environmental special library in Sri Lanka. It offers a wide range of reference services to fulfill the diverse information needs of its users. The NEIC provides access to a reference room with a vast collection of reference tools including dictionaries, thesauri, encyclopedias, indexes, and glossaries. These resources are designed to support research and learning in environmental studies, making the NEIC an invaluable resource for students, researchers, and professionals. With its comprehensive services and extensive collection, the NEIC plays a crucial role in promoting environmental knowledge and education in Sri Lanka.",
    },
    {
      image: service2,
      title: "Reader Services & facilities",
      description:
        "With the 24/7 services of the NEIC, our Online Public Access Catalogue (OPAC) is always available, allowing you to search and access our extensive collection of resources anytime, anywhere. Whether you're looking for books, journals, or digital media, our OPAC ensures you find what you need with ease. Additionally, our reading room facilities provide a quiet and comfortable environment, perfect for focused study or research. Equipped with all the necessary amenities, our reading rooms offer a pleasant and productive reading experience. Enjoy seamless access to our resources and a conducive atmosphere for all your academic needs.",
    },
    {
      image: service3,
      title: "Environmental Activities and Services",
      description:
        "The NEIC is organizing various initiatives to disseminate environmental information and knowledge to local and overseas users. These include user awareness programs, exhibitions, reading month and literacy month programs, and storytelling sessions for children. Additionally, the NEIC provides numerous current awareness services. It has developed into a fully automated library, ensuring the dissemination and preservation of environmental information for future generations. By participating in these programs, users can enhance their understanding of environmental issues and contribute to global sustainability efforts. The NEIC’s commitment to education and automation makes it a vital resource for environmental knowledge.",
    },
    {
      image: service4,
      title: "Development of environmental libraries",
      description:
        "The NEIC is actively involved in the development of school libraries. It has established 36 environmental libraries across all districts island-wide. Additionally, a program is underway to create environmental libraries for all provincial and district offices of the CEA, with libraries already established in Kandy, Galle, Kilinochchi, Gampaha, and Ampara. These efforts aim to enhance access to environmental information and resources for students and professionals alike. By fostering educational opportunities and promoting environmental awareness, NEIC's initiatives play a crucial role in building a more informed and environmentally conscious society. These libraries are essential resources for nurturing a sustainable future.",
    },
    {
      image: service5,
      title: "Providing EIA/IEE Report purchase services",
      description:
        "The NEIC collects and maintains Environmental Impact Assessment (EIA) and Initial Environmental Examination (IEE) reports for its users, including those in construction, research, and consulting fields. These reports are essential for meeting various informational needs. The NEIC also offers a digitized EIA and IEE collection through the CEA E-Repository(http://cea.nsf.ac.lk/), accessible to everyone via online searches. Additionally, users can obtain this EIA and IEE reports as soft copies through online payment, and the NEIC provides facilities for purchasing these reports. By offering comprehensive access and purchasing options, the NEIC ensures that vital environmental information is readily available to support informed decision-making and research.",
    },
    {
      image: service6,
      title: "Photocopy service",
      description:
        "The NEIC offers photocopying and scanning facilities to its users, aiding them in making notes and collecting information for their studies. These services are invaluable for students and researchers who need to access and reproduce important documents. Additionally, CEA customers can utilize the library’s photocopying services after paying the applicable charges. For distance learners, NEIC provides scanning services via email and WhatsApp, ensuring that even remote users have access to necessary materials. By offering these comprehensive and convenient services, the NEIC supports users in effectively gathering and managing information crucial for their academic and professional pursuits.",
    },
  ];
  return (
    <div className="py-8 md:py-20">
      <Wrapper>
        <h1 className="mb-5 text-center text-2xl font-bold text-primary md:text-4xl">
          Services
        </h1>
        <p className="mb-16 text-center text-md text-text md:text-lg">
          The National Environmental Information Centre (NEIC) offers a diverse
          range of library services to both local and international users,
          leveraging various information-sharing methods. By harnessing
          cutting-edge technology, the NEIC is evolving into a fully automated
          information hub. This development aims to enhance the dissemination of
          environmental knowledge on both national and global scales, ensuring
          users have access to the most current and comprehensive environmental
          information available.
        </p>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ServicesSection;
