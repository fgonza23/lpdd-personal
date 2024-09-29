"use client";
import { useState } from "react";
import DirectoryOrg from "./directory-org";
import mockDirectoryData from "../mock/mock-directory";
import { Industry } from "../types";

import Filter from "./filter";
// import SearchBar from "./search-bar";

export default function Directory() {
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>([]);

  const industries: Industry[] = Object.values(Industry).sort((a, b) =>
    a.localeCompare(b)
  );

  return (
    <section className="mb-4 flex flex-col items-center pt-8">
      <h1 className="pb-8 text-center text-2xl">Directory</h1>
      <div className="bg-background border-border min-h-[760px] w-10/12 min-w-[325px] rounded-lg border p-4 shadow-lg md:min-h-[620px] md:w-3/4 md:min-w-[684px] dark:shadow-gray-800">
        <div className="mb-6 md:flex md:gap-x-2">
          <Filter
            industries={industries}
            selectedIndustries={selectedIndustries}
            setSelectedIndustries={setSelectedIndustries}
            isIndustryDropdownOpen={isIndustryDropdownOpen}
            setIsIndustryDropdownOpen={setIsIndustryDropdownOpen}
          />

          {/* <SearchBar></SearchBar> */}
        </div>

        <div className="grid gap-4">
          {mockDirectoryData
            .filter((org) => {
              if (selectedIndustries.length === 0) {
                return true;
              }

              return org.industry_tags.some((tag) =>
                selectedIndustries.includes(tag)
              );
            })
            .map((org) => (
              <DirectoryOrg key={org.id} {...org} />
            ))}
        </div>
      </div>
    </section>
  );
}
