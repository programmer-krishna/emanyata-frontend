import React from "react";

import { Navigate } from "react-router-dom";

import Chat from "../pages/Chat";
import DashboardAnalytics from "../pages/DashboardAnalytics";
import DashboardBlog from "../pages/DashboardBlog";
import DashboardCrm from "../pages/DashboardCrm";
import DashboardCrypto from "../pages/DashboardCrypto";
import DashboardEcommerce from "../pages/DashboardEcommerce";
import DashboardNFT from "../pages/DashboardNFT";
import DashboardProject from "../pages/DashboardProject";
import MailInbox from "../pages/EmailInbox";
import FileManager from "../pages/FileManager";
import ToDoList from "../pages/ToDo";
import APIKey from "../pages/APIKey/index";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import UserProfile from "../pages/Authentication/user-profile";
import UiAccordions from "../pages/BaseUi/UiAccordion&Collapse/UiAccordion&Collapse";
import Calendar from "../pages/Calendar/Maincalender";
import MonthGrid from "../pages/Calendar/MonthGrid";
import CrmCompanies from "../pages/Crm/CrmCompanies";
import CrmContacts from "../pages/Crm/CrmContacts";
import BuySell from '../pages/Crypto/BuySell';
import CryproOrder from '../pages/Crypto/CryptoOrder';
import ICOList from '../pages/Crypto/ICOList';
import KYCVerification from '../pages/Crypto/KYCVerification';
import MyWallet from '../pages/Crypto/MyWallet';
import Transactions from '../pages/Crypto/Transactions';
import DashboardJob from "../pages/DashboardJob/";
import EcommerceCart from "../pages/Ecommerce/EcommerceCart";
import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails";
import InvoiceList from "../pages/Invoices/InvoiceList";
import JobLanding from "../pages/Job_Landing/Job";
import Application from "../pages/Jobs/Application";
import CompaniesList from "../pages/Jobs/CompaniesList";
import JobCategories from "../pages/Jobs/JobCategories";
import NewJobs from "../pages/Jobs/NewJob";
import Statistics from "../pages/Jobs/Statistics";
import NFTLanding from "../pages/Landing/NFTLanding";
import OnePage from "../pages/Landing/OnePage";
import Collections from "../pages/NFTMarketplace/Collections";
import CreateNFT from "../pages/NFTMarketplace/CreateNFT";
import Creators from "../pages/NFTMarketplace/Creators";
import ExploreNow from "../pages/NFTMarketplace/ExploreNow";
import ItemDetails from "../pages/NFTMarketplace/Itemdetails";
import LiveAuction from "../pages/NFTMarketplace/LiveAuction";
import Marketplace from "../pages/NFTMarketplace/Marketplace";
import Ranking from "../pages/NFTMarketplace/Ranking";
import WalletConnect from "../pages/NFTMarketplace/WalletConnect";
import PrivecyPolicy from '../pages/Pages/PrivacyPolicy';
import TermsCondition from '../pages/Pages/TermsCondition';
import CreateProject from "../pages/Projects/CreateProject";
import ProjectList from "../pages/Projects/ProjectList";
import ProjectOverview from "../pages/Projects/ProjectOverview";
import ListView from '../pages/SupportTickets/ListView';
import TicketsDetails from '../pages/SupportTickets/TicketsDetails';
import ReactTable from "../pages/Tables/ReactTables";
import Kanbanboard from "../pages/Tasks/KanbanBoard";
import TaskDetails from "../pages/Tasks/TaskDetails";
import TaskList from "../pages/Tasks/TaskList";
import Widgets from '../pages/Widgets/Index';
import UiAnimation from "../pages/AdvanceUi/UiAnimation/UiAnimation";
import UiHighlight from "../pages/AdvanceUi/UiHighlight/UiHighlight";
import UiNestableList from "../pages/AdvanceUi/UiNestableList/UiNestableList";
import UiRatings from "../pages/AdvanceUi/UiRatings/UiRatings";
import UiScrollbar from "../pages/AdvanceUi/UiScrollbar/UiScrollbar";
import UiSwiperSlider from "../pages/AdvanceUi/UiSwiperSlider/UiSwiperSlider";
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';
import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import UiAlerts from "../pages/BaseUi/UiAlerts/UiAlerts";
import UiBadges from "../pages/BaseUi/UiBadges/UiBadges";
import UiButtons from "../pages/BaseUi/UiButtons/UiButtons";
import UiCards from "../pages/BaseUi/UiCards/UiCards";
import UiCarousel from "../pages/BaseUi/UiCarousel/UiCarousel";
import UiColors from "../pages/BaseUi/UiColors/UiColors";
import UiDropdowns from "../pages/BaseUi/UiDropdowns/UiDropdowns";
import UiEmbedVideo from "../pages/BaseUi/UiEmbedVideo/UiEmbedVideo";
import UiGeneral from "../pages/BaseUi/UiGeneral/UiGeneral";
import UiGrid from "../pages/BaseUi/UiGrid/UiGrid";
import UiImages from "../pages/BaseUi/UiImages/UiImages";
import UILink from "../pages/BaseUi/UiLink/Index";
import UiList from "../pages/BaseUi/UiLists/UiLists";
import UiMediaobject from "../pages/BaseUi/UiMediaobject/UiMediaobject";
import UiModals from "../pages/BaseUi/UiModals/UiModals";
import UiNotifications from "../pages/BaseUi/UiNotifications/UiNotifications";
import UiOffcanvas from "../pages/BaseUi/UiOffcanvas/UiOffcanvas";
import UiPlaceholders from "../pages/BaseUi/UiPlaceholders/UiPlaceholders";
import UiProgress from "../pages/BaseUi/UiProgress/UiProgress";
import UiRibbons from "../pages/BaseUi/UiRibbons/UiRibbons";
import UiTabs from "../pages/BaseUi/UiTabs/UiTabs";
import UiTypography from "../pages/BaseUi/UiTypography/UiTypography";
import UiUtilities from "../pages/BaseUi/UiUtilities/UiUtilities";
import AreaCharts from "../pages/Charts/ApexCharts/AreaCharts";
import BarCharts from "../pages/Charts/ApexCharts/BarCharts";
import BoxplotCharts from "../pages/Charts/ApexCharts/BoxplotCharts";
import BubbleChart from "../pages/Charts/ApexCharts/BubbleChart";
import CandlestickChart from "../pages/Charts/ApexCharts/CandlestickChart";
import ColumnCharts from "../pages/Charts/ApexCharts/ColumnCharts";
import FunnelCharts from "../pages/Charts/ApexCharts/FunnelCharts";
import HeatmapCharts from "../pages/Charts/ApexCharts/HeatmapCharts";
import LineCharts from "../pages/Charts/ApexCharts/LineCharts";
import MixedCharts from "../pages/Charts/ApexCharts/MixedCharts";
import PieCharts from "../pages/Charts/ApexCharts/PieCharts";
import PolarCharts from "../pages/Charts/ApexCharts/PolarCharts";
import RadarCharts from "../pages/Charts/ApexCharts/RadarCharts";
import RadialbarCharts from "../pages/Charts/ApexCharts/RadialbarCharts";
import RangeArea from '../pages/Charts/ApexCharts/RangeAreaCharts';
import ScatterCharts from "../pages/Charts/ApexCharts/ScatterCharts";
import SlopeCharts from "../pages/Charts/ApexCharts/SlopeCharts";
import TimelineCharts from "../pages/Charts/ApexCharts/TimelineCharts";
import TreemapCharts from "../pages/Charts/ApexCharts/TreemapCharts";
import ChartsJs from "../pages/Charts/ChartsJs/index";
import Echarts from "../pages/Charts/ECharts/index";
import CrmDeals from "../pages/Crm/CrmDeals/index";
import CrmLeads from "../pages/Crm/CrmLeads/index";
import EcommerceCustomers from "../pages/Ecommerce/EcommerceCustomers/index";
import EcommerceOrderDetail from "../pages/Ecommerce/EcommerceOrders/EcommerceOrderDetail";
import EcommerceOrders from "../pages/Ecommerce/EcommerceOrders/index";
import EcommerceAddProduct from "../pages/Ecommerce/EcommerceProducts/EcommerceAddProduct";
import EcommerceProductDetail from "../pages/Ecommerce/EcommerceProducts/EcommerceProductDetail";
import EcommerceProducts from "../pages/Ecommerce/EcommerceProducts/index";
import EcommerceSellerDetail from "../pages/Ecommerce/EcommerceSellers/EcommerceSellerDetail";
import EcommerceSellers from "../pages/Ecommerce/EcommerceSellers/index";
import BasicAction from "../pages/Email/EmailTemplates/BasicAction";
import EcommerceAction from "../pages/Email/EmailTemplates/EcommerceAction";

import ArjReport from "../pages/Forms/BasicElements/ArjReport";
import ArjView from "../pages/Forms/BasicElements/ArjView";
import BasicElements from "../pages/Forms/BasicElements/BasicElements";

import Form_Gaav from "../pages/Forms/BasicElements/Form_Gaav";
import Form_Taluka from "../pages/Forms/BasicElements/Form_Taluka";

import PaymentReport from "../pages/Forms/BasicElements/PaymentReport";

import ReportGaav from "../pages/Forms/BasicElements/ReportGaav";
import ReportTaluka from "../pages/Forms/BasicElements/ReportTaluka";
import SamanyaSetting from "../pages/Forms/BasicElements/SamanyaSetting";
import Tapasani_Form from "../pages/Forms/BasicElements/Tapasani_Form";
import Tapasani_Report from "../pages/Forms/BasicElements/Tapasani_Report";
import User from "../pages/Forms/BasicElements/User";
import User_Report from "../pages/Forms/BasicElements/User_Report";
import User_Update from "../pages/Forms/BasicElements/User_Update";
import User_View from "../pages/Forms/BasicElements/User_View";

import CheckBoxAndRadio from "../pages/Forms/CheckboxAndRadio/CheckBoxAndRadio";
import FileUpload from "../pages/Forms/FileUpload/FileUpload";
import FormAdvanced from "../pages/Forms/FormAdvanced/FormAdvanced";
import FormEditor from "../pages/Forms/FormEditor/FormEditor";
import Formlayouts from "../pages/Forms/FormLayouts/Formlayouts";
import FormPickers from "../pages/Forms/FormPickers/FormPickers";
import FormRangeSlider from "../pages/Forms/FormRangeSlider/FormRangeSlider";
import FormSelect from "../pages/Forms/FormSelect/FormSelect";
import FormValidation from "../pages/Forms/FormValidation/FormValidation";
import FormWizard from "../pages/Forms/FormWizard/FormWizard";
import Masks from "../pages/Forms/Masks/Masks";
import Select2 from "../pages/Forms/Select2/Select2";
import BoxIcons from "../pages/Icons/BoxIcons/BoxIcons";
import CryptoIcons from "../pages/Icons/CryptoIcons/CryptoIcons";
import FeatherIcons from "../pages/Icons/FeatherIcons/FeatherIcons";
import LineAwesomeIcons from "../pages/Icons/LineAwesomeIcons/LineAwesomeIcons";
import MaterialDesign from "../pages/Icons/MaterialDesign/MaterialDesign";
import RemixIcons from "../pages/Icons/RemixIcons/RemixIcons";
import CandidateGrid from "../pages/Jobs/CandidateList/GridView";
import CandidateList from "../pages/Jobs/CandidateList/ListView";
import JobGrid from "../pages/Jobs/JobList/Grid";
import JobList from "../pages/Jobs/JobList/List";
import JobOverview from "../pages/Jobs/JobList/Overview";
import GoogleMaps from "../pages/Maps/GoogleMaps/GoogleMaps";
import BlogGridView from "../pages/Pages/Blogs/GridView";
import BlogListView from "../pages/Pages/Blogs/ListView";
import PageBlogOverview from "../pages/Pages/Blogs/Overview";
import ComingSoon from '../pages/Pages/ComingSoon/ComingSoon';
import Faqs from '../pages/Pages/Faqs/Faqs';
import Gallery from '../pages/Pages/Gallery/Gallery';
import Maintenance from '../pages/Pages/Maintenance/Maintenance';
import Pricing from '../pages/Pages/Pricing/Pricing';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import Starter from '../pages/Pages/Starter/Starter';
import Team from '../pages/Pages/Team/Team';
import Timeline from '../pages/Pages/Timeline/Timeline';
import BasicTables from '../pages/Tables/BasicTables/BasicTables';
import ListTables from '../pages/Tables/ListTables/ListTables';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';

//Makarand Patil
import AdminDashboard from '../pages/Forms/BasicElements/AdminDashboard';

// Vijay Shivpure
import FinalizeApplications from "../pages/Forms/BasicElements/FinalizeApplications";
import FinalizedApplicationLog from "../pages/Forms/BasicElements/FinalizedApplicationLog";
import FinalizedApplicationView from "../pages/Forms/BasicElements/FinalizedApplicationView";

//vaibhav pawar
import RejectedApplication from "../pages/Forms/BasicElements/RejectedApplication";
import RejectedLogApplication from "../pages/Forms/BasicElements/RejectedLogApplication";
import RejectedViewPage from "../pages/Forms/BasicElements/RejectedViewPage";
import ArjView1 from "../pages/Forms/BasicElements/ArjView1";
import Arj1 from "../pages/Forms/BasicElements/Arj1";


const authProtectedRoutes = [
  { path: "/dashboard-analytics", component: <DashboardAnalytics /> },
  { path: "/dashboard-crm", component: <DashboardCrm /> },
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },
  { path: "/dashboard-crypto", component: <DashboardCrypto /> },
  { path: "/dashboard-projects", component: <DashboardProject /> },
  { path: "/dashboard-nft", component: <DashboardNFT /> },
  { path: "/dashboard-job", component: <DashboardJob /> },
  { path: "/dashboard-blog", component: <DashboardBlog /> },

  { path: "/apps-calendar", component: <Calendar /> },
  { path: "/apps-calendar-month-grid", component: <MonthGrid /> },
  { path: "/apps-ecommerce-products", component: <EcommerceProducts /> },
  { path: "/apps-ecommerce-product-details/:_id", component: <EcommerceProductDetail /> },
  { path: "/apps-ecommerce-product-details", component: <EcommerceProductDetail /> },
  { path: "/apps-ecommerce-add-product", component: <EcommerceAddProduct /> },
  { path: "/apps-ecommerce-orders", component: <EcommerceOrders /> },
  { path: "/apps-ecommerce-order-details", component: <EcommerceOrderDetail /> },
  { path: "/apps-ecommerce-customers", component: <EcommerceCustomers /> },
  { path: "/apps-ecommerce-cart", component: <EcommerceCart /> },
  { path: "/apps-ecommerce-checkout", component: <EcommerceCheckout /> },
  { path: "/apps-ecommerce-sellers", component: <EcommerceSellers /> },
  { path: "/apps-ecommerce-seller-details", component: <EcommerceSellerDetail /> },

  //project starts from here 
  { path: "/apps-file-manager", component: <FileManager /> },
  { path: "/apps-todo", component: <ToDoList /> },
  // { path: "/arjview", component: <ArjView /> },

// { path: "/rejected-application", component: <RejectedApplication /> },

  //Chat
  { path: "/apps-chat", component: <Chat /> },

  //EMail
  { path: "/apps-mailbox", component: <MailInbox /> },
  { path: "/apps-email-basic", component: <BasicAction /> },
  { path: "/apps-email-ecommerce", component: <EcommerceAction /> },

  //Projects
  { path: "/apps-projects-list", component: <ProjectList /> },
  { path: "/apps-projects-overview", component: <ProjectOverview /> },
  { path: "/apps-projects-create", component: <CreateProject /> },

  //Task
  { path: "/apps-tasks-list-view", component: <TaskList /> },
  { path: "/apps-tasks-details", component: <TaskDetails /> },
  { path: "/apps-tasks-kanban", component: <Kanbanboard /> },

  //Api Key
  { path: "/apps-api-key", component: <APIKey /> },

  //Crm
  { path: "/apps-crm-contacts", component: <CrmContacts /> },
  { path: "/apps-crm-companies", component: <CrmCompanies /> },
  { path: "/apps-crm-deals", component: <CrmDeals /> },
  { path: "/apps-crm-leads", component: <CrmLeads /> },

  //Invoices
  { path: "/apps-invoices-list", component: <InvoiceList /> },
  { path: "/apps-invoices-details", component: <InvoiceDetails /> },
  { path: "/apps-invoices-create", component: <InvoiceCreate /> },

  //Supports Tickets
  { path: "/apps-tickets-list", component: <ListView /> },
  { path: "/apps-tickets-details", component: <TicketsDetails /> },

  //transactions
  { path: "/apps-crypto-transactions", component: <Transactions /> },
  { path: "/apps-crypto-buy-sell", component: <BuySell /> },
  { path: "/apps-crypto-orders", component: <CryproOrder /> },
  { path: "/apps-crypto-wallet", component: <MyWallet /> },
  { path: "/apps-crypto-ico", component: <ICOList /> },
  { path: "/apps-crypto-kyc", component: <KYCVerification /> },

  // NFT Marketplace
  { path: "/apps-nft-marketplace", component: <Marketplace /> },
  { path: "/apps-nft-collections", component: <Collections /> },
  { path: "/apps-nft-create", component: <CreateNFT /> },
  { path: "/apps-nft-creators", component: <Creators /> },
  { path: "/apps-nft-explore", component: <ExploreNow /> },
  { path: "/apps-nft-item-details", component: <ItemDetails /> },
  { path: "/apps-nft-auction", component: <LiveAuction /> },
  { path: "/apps-nft-ranking", component: <Ranking /> },
  { path: "/apps-nft-wallet", component: <WalletConnect /> },

  //charts
  { path: "/charts-apex-line", component: <LineCharts /> },
  { path: "/charts-apex-area", component: <AreaCharts /> },
  { path: "/charts-apex-column", component: <ColumnCharts /> },
  { path: "/charts-apex-bar", component: <BarCharts /> },
  { path: "/charts-apex-mixed", component: <MixedCharts /> },
  { path: "/charts-apex-timeline", component: <TimelineCharts /> },
  { path: "/charts-apex-range-area", component: <RangeArea /> },
  { path: "/charts-apex-funnel", component: <FunnelCharts /> },
  { path: "/charts-apex-candlestick", component: <CandlestickChart /> },
  { path: "/charts-apex-boxplot", component: <BoxplotCharts /> },
  { path: "/charts-apex-bubble", component: <BubbleChart /> },
  { path: "/charts-apex-scatter", component: <ScatterCharts /> },
  { path: "/charts-apex-heatmap", component: <HeatmapCharts /> },
  { path: "/charts-apex-treemap", component: <TreemapCharts /> },
  { path: "/charts-apex-pie", component: <PieCharts /> },
  { path: "/charts-apex-radialbar", component: <RadialbarCharts /> },
  { path: "/charts-apex-radar", component: <RadarCharts /> },
  { path: "/charts-apex-polar", component: <PolarCharts /> },
  { path: "/charts-apex-slope", component: <SlopeCharts /> },

  { path: "/charts-chartjs", component: <ChartsJs /> },
  { path: "/charts-echarts", component: <Echarts /> },


  // Base Ui
  { path: "/ui-alerts", component: <UiAlerts /> },
  { path: "/ui-badges", component: <UiBadges /> },
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-colors", component: <UiColors /> },
  { path: "/ui-cards", component: <UiCards /> },
  { path: "/ui-carousel", component: <UiCarousel /> },
  { path: "/ui-dropdowns", component: <UiDropdowns /> },
  { path: "/ui-grid", component: <UiGrid /> },
  { path: "/ui-images", component: <UiImages /> },
  { path: "/ui-tabs", component: <UiTabs /> },
  { path: "/ui-accordions", component: <UiAccordions /> },
  { path: "/ui-modals", component: <UiModals /> },
  { path: "/ui-offcanvas", component: <UiOffcanvas /> },
  { path: "/ui-placeholders", component: <UiPlaceholders /> },
  { path: "/ui-progress", component: <UiProgress /> },
  { path: "/ui-notifications", component: <UiNotifications /> },
  { path: "/ui-media", component: <UiMediaobject /> },
  { path: "/ui-embed-video", component: <UiEmbedVideo /> },
  { path: "/ui-typography", component: <UiTypography /> },
  { path: "/ui-lists", component: <UiList /> },
  { path: "/ui-links", component: <UILink /> },
  { path: "/ui-general", component: <UiGeneral /> },
  { path: "/ui-ribbons", component: <UiRibbons /> },
  { path: "/ui-utilities", component: <UiUtilities /> },

  // Advance Ui
  { path: "/advance-ui-nestable", component: <UiNestableList /> },
  { path: "/advance-ui-scrollbar", component: <UiScrollbar /> },
  { path: "/advance-ui-animation", component: <UiAnimation /> },
  { path: "/advance-ui-swiper", component: <UiSwiperSlider /> },
  { path: "/advance-ui-ratings", component: <UiRatings /> },
  { path: "/advance-ui-highlight", component: <UiHighlight /> },

  // Widgets
  { path: "/widgets", component: <Widgets /> },

  // Forms
  { path: "/forms-elements", component: <BasicElements /> },

  { path: "/अर्ज", component: <ArjReport /> },
  { path: "/अर्ज1", component: <Arj1 /> },
  { path: "/अर्ज-पाहा", component: <ArjView /> }, 
  { path: "/अर्ज-पाहा1", component: <ArjView1 /> }, 


  
  // { path: "/यूजर", component: <BasicElements1 /> },
  { path: "/यूजर", component: <User /> },
  { path: "/यूजर-रिपोर्ट", component: <User_Report /> },
  { path: "/यूजर-पहा", component: <User_View /> },
  { path: "/यूजर-अद्ययावत", component: <User_Update /> },

  { path: "/तपासणी", component: <Tapasani_Form /> },
  { path: "/तपासणी-अहवाल", component: <Tapasani_Report /> },

  { path: "/देयक-अहवाल", component: <PaymentReport /> },
  
  // Vijay shivapure
  { path: "/अंतिम-मंजूर-अर्ज", component: <FinalizeApplications /> },
  { path: "/अंतिम-मंजूर-अर्जाचे-विवरण", component: <FinalizedApplicationView /> },
  { path: "/अंतिम-मंजूर-अर्जाची-नोंद", component: <FinalizedApplicationLog /> },

  { path: "/सेटिंग", component: <SamanyaSetting /> },
//Makarand
  { path: "/ऍडमिन-डॅशबोर्ड", component: <AdminDashboard /> },

  //vaibhav pawar 
  { path: "/नकारदिलेली-अर्ज", component: <RejectedApplication /> },
  { path: "/नोंदवही", component: <  RejectedLogApplication/> },
  { path: "/पहा", component: <   RejectedViewPage/> },
  
  { path: "/finalize-applications", component: <FinalizeApplications/> },
  


  { path: "/गाव", component: <Form_Gaav /> },
  { path: "/तालुका", component: <Form_Taluka /> },
  { path: "/गाव-अहवाल", component: <ReportGaav /> },
  { path: "/तालुका-अहवाल", component: <ReportTaluka /> },

  

  { path: "/forms-select", component: <FormSelect /> },
  { path: "/forms-editors", component: <FormEditor /> },
  { path: "/forms-checkboxes-radios", component: <CheckBoxAndRadio /> },
  { path: "/forms-masks", component: <Masks /> },
  { path: "/forms-file-uploads", component: <FileUpload /> },
  { path: "/forms-pickers", component: <FormPickers /> },
  { path: "/forms-range-sliders", component: <FormRangeSlider /> },
  { path: "/forms-layouts", component: <Formlayouts /> },
  { path: "/forms-validation", component: <FormValidation /> },
  { path: "/forms-wizard", component: <FormWizard /> },
  { path: "/forms-advanced", component: <FormAdvanced /> },
  { path: "/forms-select2", component: <Select2 /> },

  //Tables
  { path: "/tables-basic", component: <BasicTables /> },
  { path: "/tables-listjs", component: <ListTables /> },
  { path: "/tables-react", component: <ReactTable /> },

  //Icons
  { path: "/icons-remix", component: <RemixIcons /> },
  { path: "/icons-boxicons", component: <BoxIcons /> },
  { path: "/icons-materialdesign", component: <MaterialDesign /> },
  { path: "/icons-feather", component: <FeatherIcons /> },
  { path: "/icons-lineawesome", component: <LineAwesomeIcons /> },
  { path: "/icons-crypto", component: <CryptoIcons /> },

  //Maps
  { path: "/maps-google", component: <GoogleMaps /> },

  //Pages
  { path: "/pages-starter", component: <Starter /> },
  { path: "/pages-profile", component: <SimplePage /> },
  { path: "/pages-profile-settings", component: <Settings /> },
  { path: "/pages-team", component: <Team /> },
  { path: "/pages-timeline", component: <Timeline /> },
  { path: "/pages-faqs", component: <Faqs /> },
  { path: "/pages-gallery", component: <Gallery /> },
  { path: "/pages-pricing", component: <Pricing /> },
  { path: "/pages-sitemap", component: <SiteMap /> },
  { path: "/pages-search-results", component: <SearchResults /> },
  { path: "/pages-privacy-policy", component: <PrivecyPolicy /> },
  { path: "/pages-terms-condition", component: <TermsCondition /> },
  { path: "/pages-blog-list", component: <BlogListView /> },
  { path: "/pages-blog-grid", component: <BlogGridView /> },
  { path: "/pages-blog-overview", component: <PageBlogOverview /> },

  //Job pages
  { path: "/apps-job-statistics", component: <Statistics /> },
  { path: "/apps-job-lists", component: <JobList /> },
  { path: "/apps-job-grid-lists", component: <JobGrid /> },
  { path: "/apps-job-details", component: <JobOverview /> },
  { path: "/apps-job-candidate-lists", component: <CandidateList /> },
  { path: "/apps-job-candidate-grid", component: <CandidateGrid /> },
  { path: "/apps-job-application", component: <Application /> },
  { path: "/apps-job-new", component: <NewJobs /> },
  { path: "/apps-job-companies-lists", component: <CompaniesList /> },
  { path: "/apps-job-categories", component: <JobCategories /> },



  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-coming-soon", component: <ComingSoon /> },

  { path: "/landing", component: <OnePage /> },
  { path: "/nft-landing", component: <NFTLanding /> },
  { path: "/job-landing", component: <JobLanding /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };