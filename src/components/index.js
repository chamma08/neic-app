import TranslationsProvider from "./TranslationsProvider";

// Common components
import Wrapper from "./common/Wrapper";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Topbar from "./common/Topbar";
import Bottombar from "./common/Bottombar";
import Header from "./common/Header";
import PDFViewer from "./common/PDFViewer";
import TourSection from "./common/TourSection";

// Home page components
import Carousel from "./home/Carousel";
import AboutSection from "./home/AboutSection";
import MessageSection from "./home/MessageSection";
import AwardSection from "./home/AwardSection";
import ResourcesSection from "./home/ResourcesSection";
import ArrivalsSection from "./home/ArrivalsSection";
import LinksSection from "./home/LinksSection";
import CollectionSection from "./home/CollectionSection";

// About page components
import AboutUs from "./about/AboutUs";
import VisionMission from "./about/VisionMission";
import Staff from "./about/Staff";
import FloorPlan from "./about/FloorPlan";

// Services page components
import ServicesSection from "./services/ServicesSection";
import PurchasingSection from "./services/PurchasingSection";
import OtherServicesSection from "./services/OtherServicesSection";

// Membership page components
import MembershipForm from "./membership/MembershipForm";

// Collection page components
import EcollectionSection from "./collection/EcollectionSection";
import MainCollectionSection from "./collection/MainCollectionSection";

// Gallary page components
import Programs from "./gallery/Programs";

// News page components
import NewsCard from "./news/NewsCard";
import NewsList from "./news/NewsList";

// Admin page components
import Sidebar from "./admin/Sidebar";
import UpdateNews from "./admin/UpdateNews";
import AddNews from "./admin/AddNews";
import LoginForm from "./admin/LoginForm";
import RegisterForm from "./admin/RegisterForm";
import AddBook from "./admin/AddBook";
import UpdateBook from "./admin/UpdateBook";
import AddCollection from "./admin/AddCollection";
import UpdateCollection from "./admin/UpdateCollection";
import UpdateUser from "./admin/UpdateUser";
import AddFile from "./admin/AddFile";
import UpdateFile from "./admin/UpdateFile";
import AddMagazine from "./admin/AddMagazine";
import UpdateMagazine from "./admin/UpdateMagazine";
import AddItem from "./admin/AddItem";
import UpdateItem from "./admin/UpdateItem";

// Membership page components
import Membership from "./membership/Membership";

export const dynamic = 'force-dynamic';

// Export common components
export {
  TranslationsProvider,
  Wrapper,
  Navbar,
  Footer,
  Topbar,
  Bottombar,
  Header,
  CollectionSection,
  PDFViewer,
};

// Export home page components
export {
  Carousel,
  AboutSection,
  MessageSection,
  AwardSection,
  TourSection,
  ResourcesSection,
  ArrivalsSection,
  LinksSection,
};

// Export about page components
export { AboutUs, VisionMission, Staff, FloorPlan };

// Export services page components
export { ServicesSection, PurchasingSection, OtherServicesSection };

// Export membership page
export { MembershipForm };

// Export collection page components
export { EcollectionSection, MainCollectionSection };

// Export gallary page components
export { Programs };

// Export news page components
export { NewsCard, NewsList };

// Export admin page components
export {
  Sidebar,
  UpdateNews,
  AddNews,
  LoginForm,
  RegisterForm,
  AddBook,
  UpdateBook,
  AddCollection,
  UpdateCollection,
  UpdateUser,
  AddFile,
  UpdateFile,
  AddMagazine,
  UpdateMagazine,
  AddItem,
  UpdateItem,
};

// Export membership page components
export { Membership };
