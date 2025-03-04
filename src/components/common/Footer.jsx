import {
  HomeWork,
  LocalPhone,
  Email,
  Facebook,
  YouTube,
  Language,
} from "@mui/icons-material";
import { socialLinks } from "@/enums/constants";
import Link from "next/link";
import { Wrapper } from "@/components";

const Footer = () => {
  return (
    <footer className="py-14 bg-primary text-white">
      <Wrapper>
        <div className="flex flex-col gap-10 md:flex-row md:justify-around items-start">
          <div className="flex-1">
            <h2 className="mb-7 text-xl font-semibold">About NEIC</h2>
            <p className="text-base text-justify">
              The National Environmental Information Centre/Library of the
              Central Environmental Authority serves as the national focal point
              for environmental information in Sri Lanka. It acknowledges the
              critical need to enhance the countrys capabilities in acquiring,
              processing, and disseminating environmental information. This
              effort is seen as a vital component of the national development
              process. By strengthening these capabilities, the Centre aims to
              support informed decision-making, promote sustainable practices,
              and contribute to the overall development and protection of Sri
              Lankas environment.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="mb-7 text-xl font-semibold">Contact Information</h2>
            <div className="flex items-start gap-3 my-3">
              <HomeWork className="text-white" />
              <p>
                National Environmental Information Center Central Environmental
                Authority, <br />
                104, Denzil Kobbekaduwa Mawatha, Battaramulla, <br />
                Sri Lanka.
              </p>
            </div>
            <div className="flex items-start gap-3 my-3">
              <Email className="text-white" />
              <p>neic@cea.lk</p>
            </div>
            <div className="flex items-start gap-3 my-3">
              <LocalPhone className="text-white" />
              <p>
                +94-112124603, 011-2872278, <br />
                011-2873447, 011-2872419, <br />
                EXT. 2292/2295
              </p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <Link href={socialLinks.facebook}>
                <Facebook className="p-1.5 bg-yellow text-primary text-4xl rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" />
              </Link>
              <Link href={socialLinks.linkedin}>
                <Language className="p-1.5 bg-yellow text-primary text-4xl rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" />
              </Link>
              <Link href={socialLinks.youtube}>
                <YouTube className="p-1.5 bg-yellow text-primary text-4xl rounded-full cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="mb-7 text-xl font-semibold">Our Location</h2>
            <iframe
              className="border-none w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.675749711318!2d79.926457!3d6.900298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250acccccb4b3%3A0xf458cfdac80bb57f!2zQ2VudHJhbCBFbnZpcm9ubWVudGFsIEF1dGhvcml0eSwg4La44Law4LeK4oCN4La64La4IOC2tOC2u-C3kuC3g-C2uyDgtoXgtrDgt5Lgtprgt4_gtrvgt5LgtrosIOCuruCupOCvjeCupOCuv-CuryDgrprgr4HgrrHgr43grrHgrr7grp_grrLgr40g4K6F4K6k4K6_4K6V4K6-4K6w4K6a4K6q4K-I!5e0!3m2!1sen!2slk!4v1722441788979!5m2!1sen!2slk"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
