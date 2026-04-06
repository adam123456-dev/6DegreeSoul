import { useEffect } from "react";
import { useLocation } from "react-router";

/** Restores scroll position when navigating between routes */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
