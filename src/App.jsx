import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import AppContent from "./AppContent.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SeoPage from "./pages/SeoPage.jsx";
import ShopifyDevelopmentPage from "./pages/ShopifyDevelopmentPage.jsx";
import CaseStudyPage from "./pages/CaseStudyPage.jsx";

function InternalNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest("a");
      if (!link || link.target === "_blank" || event.defaultPrevented) return;
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;

      event.preventDefault();
      let nextHref = href;
      if (href === "/case-study") {
        const caseCard = link.closest(".work-card");
        const caseName =
          caseCard?.dataset.caseSlug ||
          caseCard
            ?.querySelector("h2")
            ?.textContent.toLowerCase()
            .replace(/\s+/g, "-");
        if (caseName) nextHref = `${href}?case=${caseName}`;
      }
      navigate(nextHref);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [navigate, location.pathname]);

  return null;
}

function RoutedApp() {
  return (
    <>
      <InternalNavigation />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/seo" element={<SeoPage />} />
        <Route
          path="/shopify-development"
          element={<ShopifyDevelopmentPage />}
        />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="*" element={<AppContent />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RoutedApp />
    </BrowserRouter>
  );
}
