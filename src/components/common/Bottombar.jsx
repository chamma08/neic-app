import Link from "next/link";
import { Wrapper } from "@/components";

const Bottombar = () => {
  return (
    <div className="py-7 bg-secondary md:py-10">
      <Wrapper>
        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between">
          <div className="flex items-center justify-center text-sm text-white gap-1">
            <p className="text-center">
              ©️ 2024 Copyright:{" "}
              <a href="https://www.cea.lk/web/index.php/en">
                <span className="text-teal transition-colors duration-300 ease-in-out hover:text-yellow">
                  Central Environmental Authority - Sri Lanka.
                </span>
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
          <div className="flex items-center justify-center text-sm text-white gap-1">
            Developed by:
            <Link href="https://airstudios.lk/">
              <p className="text-teal transition-colors duration-300 ease-in-out hover:text-yellow">
                airstudios.lk
              </p>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Bottombar;
