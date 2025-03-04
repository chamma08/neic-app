import { cogwheel, pdf } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const LinkCard = ({ title, description, link }) => {
  return (
    <>
      <Link href={link}>
        <div className="flex border border-teal items-center justify-start gap-7 bg-white rounded-lg shadow-md overflow-hidden p-4 transition-transform duration-200 h-24 cursor-pointer card hover:translate-y-[-5px]">
          <div className="w-16 flex-shrink-0">
            <Image
              src={cogwheel}
              alt={title}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-lg font-semibold text-text">{title}</p>
            <p className="text-sm font-base text-text">{description}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

const links = [
  { title: "Users", description: "Users", link: "admin/users" },
  { title: "News", description: "News", link: "admin/news" },
  { title: "New Arrivals", description: "New Arrivals", link: "admin/books" },
  {
    title: "Memberships",
    description: "Memberships",
    link: "admin/memberships",
  },
  { title: "Gallery", description: "Gallery", link: "admin/collections" },
  { title: "Files", description: "Files", link: "admin/files" },
  { title: "Magazine", description: "Magazine", link: "admin/magazine" },
];

const Admin = () => {
  return (
    <div>
      <h1 className="text-2xl text-left font-bold text-primary">Dashboard</h1>

      <div className="py-6 mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <LinkCard
            key={link.id}
            title={link.title}
            description={link.description}
            link={link.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Admin;
