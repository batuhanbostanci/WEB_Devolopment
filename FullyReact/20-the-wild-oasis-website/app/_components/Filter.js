"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handeFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handeFilter={handeFilter}
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        filter="small"
        handeFilter={handeFilter}
        activeFilter={activeFilter}
      >
        1&mdash; 3 guests
      </Button>
      <Button
        filter="medium"
        handeFilter={handeFilter}
        activeFilter={activeFilter}
      >
        4&mdash; 7 guests
      </Button>
      <Button
        filter="large"
        handeFilter={handeFilter}
        activeFilter={activeFilter}
      >
        8&mdash; 12 guests
      </Button>
    </div>
  );
}

function Button({ filter, handeFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handeFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
