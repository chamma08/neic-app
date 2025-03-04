import React from "react";
import { MembershipForm, Wrapper } from "..";

const Membership = () => {
  return (
    <div className="py-10 md:py-16">
      <Wrapper>
        <h1 className="text-3xl text-center font-bold text-primary md:text-4xl">
          Membership
        </h1>
        <p className="mt-5 text-md text-center text-text md:text-lg">
          The NEIC functions as a special library and offers free membership for
          the Permanent staff members of CEA. To obtain the NEIC membership,
          users should provide their details by filling the membership form. The
          Staff member who has a library membership is allowed to borrow two
          books for a month.
        </p>
        <div>
          <div>
            <h1 className="pt-16 md:pt-16 text-3xl text-center font-bold text-primary md:text-4xl">
              Membership Policy
            </h1>
            <div className="mt-10">
              <ol className="list-decimal list-inside">
                <li className="mb-3">
                  All the CEA permanent staff are eligible for obtaining the
                  NEIC membership
                </li>
                <li className="mb-3">
                  To borrow the library materials, you will need to bring your
                  NEIC membership card
                </li>
                <li className="mb-3">
                  Employees who have NEIC membership are allowed to borrow two
                  books for a period of one month. If a member requires the same
                  books to be renewed for a further period of time, he/she is
                  allowed to reissue them for another period.
                </li>
                <li className="mb-3">
                  Members are required to return books on time. If a book is
                  overdue, a fine of Rs. 20 per day per book will be charged in
                  the first week. After the first week, Rs. 50 per day per book
                  will be charged as a fine.
                </li>
                <li className="mb-3">
                  If an item is damaged or cannot be re-used, the member will be
                  required to pay 10% of the book value to the NEIC. If an item
                  is lost, the member is responsible for paying the book value
                  and 25% of the current market price and any other additional
                  charges as a penalty, as determined by the NEIC.
                </li>
                <li className="mb-3">
                  If the membership card is lost, Rs. 100/= will be charged for
                  a new membership card.
                </li>
              </ol>
            </div>
          </div>
          <MembershipForm />
        </div>
      </Wrapper>
    </div>
  );
};

export default Membership;
