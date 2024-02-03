import { Layout } from "../components/Layout/Layout";
import { HomePage } from "../components/HomePage/HomePage";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { MatchesContext } from "@/context/MatchesContextProvider";

const FilterMenuMobile = dynamic(
  () => import("@/components/FilterMenuMobile/FilterMenuMobile")
);

export default function Home() {
  const { isMobileMenuOpen } = useContext(MatchesContext);
  return (
    <Layout title="Home">
      <HomePage />
      <FilterMenuMobile isOpen={isMobileMenuOpen} />
    </Layout>
  );
}
