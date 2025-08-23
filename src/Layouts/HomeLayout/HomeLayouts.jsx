import React from "react";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import NavBar from "../../Components/NavBar";
import LeftNav from "../../Components/Layout_components/LeftNav";
import RightNav from "../../Components/Layout_components/RightNav";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
            <NavBar/>
        </nav>
        <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="left col-span-3">
                <LeftNav/>
            </aside>
            <section className="col-span-6">Main Content</section>
            <aside className="col-span-3">
              <RightNav/>
            </aside>
        </main>
    </div>
  );
};

export default HomeLayouts;
