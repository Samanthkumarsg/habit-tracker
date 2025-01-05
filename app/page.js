'use client'
import LayoutWrapper from "@/layouts/LayoutWrapper";
import Categories from "./components/Categories/Categories";
import Habits from "./components/Habits/Habits";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <LayoutWrapper>
        <Categories />
        <Habits />
      </LayoutWrapper>
    </div>
  );
}
