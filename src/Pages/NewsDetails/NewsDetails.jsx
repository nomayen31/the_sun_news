import React from "react";
import Header from "../../Components/Header/Header";
import RightNav from "../../Components/Layout_components/RightNav";
import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data.data[0]);

  return (
    <div>
      <header>
        <Header />
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5">
        <section className="col-span-9">
  <div className="max-w-4xl mx-auto my-10 p-8 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg border border-gray-200">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-start gap-6">
        <img
          src="https://via.placeholder.com/200"
          alt="News Image"
          className="w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover shadow-md"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Biden Pledges Nearly $3 Billion To Ukraine
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Wednesday, August 24, 2022 | By{" "}
            <a href="#" className="font-medium text-indigo-600 hover:underline">
              Jane Doe
            </a>
          </p>
        </div>
      </div>
    </div>

    {/* Divider */}
    <hr className="my-6 border-t border-gray-300" />

    {/* Main Content */}
    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
      <p>
        U.S. President Joe Biden has announced nearly $3 billion in new U.S.
        military aid for Kyiv as Ukraine marked its independence day six months
        after Russia invaded the country. This aid package is the largest single
        tranche of U.S. military assistance yet, designed to provide long-term
        support for Ukraine's defense capabilities.
      </p>
      <p>
        The United States of America is committed to supporting the people of
        Ukraine as they continue the fight to defend their sovereignty against
        unprovoked aggression. The funds will be used for weapons and
        equipment, training, and sustainment, ensuring that Ukraine's armed
        forces have the resources they need to continue their resistance.
      </p>
    </div>

    {/* Tags */}
    <div className="mt-10">
      <h3 className="text-lg font-bold text-gray-800 mb-3">Related Tags:</h3>
      <div className="flex flex-wrap gap-3">
        {["Biden", "EU", "Ukraine", "Military", "Russia", "Worthy News"].map(
          (tag) => (
            <span
              key={tag}
              className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm hover:bg-indigo-200 transition"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </div>
  </div>
</section>

        <aside className="col-span-3">
          <RightNav />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
