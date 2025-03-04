import React from "react";
import { Wrapper } from "..";

const PurchasingSection = () => {
  return (
    <div className="py-8 md:py-16 bg-soft-gray">
      <Wrapper>
        <h2 className="mb-10 text-2xl font-bold text-primary md:text-3xl">
          Purchasing Method for EIA/IEE Reports
        </h2>
        <h3 className="mb-5 text-md font-bold text-text md:text-lg">
          Anyone can get this service by paying Rs.5000/- for one copy to the
          following bank account.
        </h3>
        <h3 className="mb-5 text-lg font-bold text-text md:text-2xl">
          Method:
        </h3>
        <div className="">
          <p className="font-semibold text-md pb-3">Step 1: Select the Title</p>
          <ol className="list-decimal list-inside">
            <li className="mb-3 ml-5">
              Visit the e-Repository: [CEA e-Repository] (
              <a href="http://cea.nsf.ac.lk/" className="text-teal">
                http://cea.nsf.ac.lk/
              </a>
              )
            </li>
            <li className="mb-3 ml-5">
              Choose the title of the EIA/IEE report you wish to purchase.
            </li>
          </ol>

          <p className="font-semibold text-md pb-3">
            Step 2: Confirm Availability
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-3 ml-5">
              Email the selected report title to neic@cea.lk to confirm its
              availability.
            </li>
          </ol>

          <p className="font-semibold text-md pb-3">Step 3: Make the Payment</p>
          <ol className="list-decimal list-inside">
            <li className="mb-3 ml-5">
              Upon receiving confirmation from NEIC, make a payment of Rs.5000/-
              per copy to the following account:
              <p className="ml-10 mt-2">
                <span className="font-semibold">- Account Name:</span> Central
                Environmental Authority
              </p>
              <p className="ml-10 mt-2">
                <span className="font-semibold">- Bank:</span> Bank of Ceylon
                (BOC), Pelawatta Branch
              </p>
              <p className="ml-10 mt-2">
                <span className="font-semibold">- Branch Code:</span> 0890
              </p>
              <p className="ml-10 mt-2">
                <span className="font-semibold">- Account Number:</span>{" "}
                0002937303
              </p>
            </li>
          </ol>

          <p className="font-semibold text-md pb-3">
            Step 4: Send Proof of Payment
          </p>
          <ol className="list-decimal list-inside">
            <li className="mb-3 ml-5">Email the bank slip to neic@cea.lk.</li>
          </ol>

          <p className="font-semibold text-md pb-3">
            By following these steps, you can successfully purchase the EIA/IEE
            report of your choice.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default PurchasingSection;
