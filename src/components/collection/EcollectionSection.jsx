import { Wrapper } from "..";

const EcollectionSection = () => {
  return (
    <div className="mt-8 py-8 md:py-10">
      <Wrapper>
        <h1 className="text-3xl font-bold text-center text-primary md:text-4xl">
          NEIC e-collection
        </h1>
        <p className="mt-10 text-md text-center text-text md:text-lg">
          The National Environmental Information Center (NEIC) maintains an
          up-to-date library collection featuring a variety of resources,
          including a lending collection, CD/DVDs, journals and magazines, maps,
          leaflets and newsletters, EIA/IEE reports, Sri Lankan daily
          newspapers, a soil specimen box, and a leisure corner. Additionally,
          all CEA publications related to environmental subjects are available
          in the NEIC e-repository (http://cea.nsf.ac.lk), providing
          comprehensive access to environmental information. The main
          communities within this e-repository include journals, proceedings and
          magazines, legislative publications, monographs/books, newsletters,
          newspaper articles, promotional materials, and reports, ensuring a
          broad spectrum of information for users.
        </p>
      </Wrapper>
    </div>
  );
};

export default EcollectionSection;
