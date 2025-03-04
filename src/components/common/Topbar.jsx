import Image from "next/image";
import { govIconWhite } from "@/assets/";
import Link from "next/link";
import { Wrapper } from "@/components";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageChanger from "./LanguageChanger";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Topbar = () => {
  return (
    <div className="py-2 bg-secondary">
      <Wrapper>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-8">
            <Link href="https://www.gov.lk/">
              <Image
                src={govIconWhite}
                alt="Gov_White"
                className="h-5 w-auto"
              />
            </Link>
            <Popover>
              <PopoverTrigger>
                <div className="flex items-center justify-center text-white gap-1 hover:text-teal transition-colors duration-200">
                  <LocalPhoneIcon className="text-xl" />
                  <p className="text-sm">Ask Librarian</p>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white border-none font-semibold text-center text-primary text-lg">
                <div className="mb-1">
                  Tel: <span className="font-bold">011-2872278</span>
                </div>
                <div>
                  Email: <span className="font-bold">hansamali@cea.lk</span>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center justify-between">
            <LanguageChanger />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Topbar;
