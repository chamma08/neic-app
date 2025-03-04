import { cover_9 } from "@/assets";
import {
  EcollectionSection,
  Header,
  MainCollectionSection,
} from "@/components";

const Collection = () => {
  const pageName = "Our Collection";
  return (
    <div>
      <Header pageName={pageName} image={cover_9} />
      <EcollectionSection />
      <MainCollectionSection />
    </div>
  );
};

export default Collection;
