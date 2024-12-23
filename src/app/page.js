import Image from "next/image";

import Homes from "./components/ui/Homes.jsx";
export default function Home({ Component, pageProps }) {
  return (
    <div className="flex">
      <Homes />
      {/* <main className="flex-grow">
        <Component {...pageProps} />
      </main> */}
    </div>
  );
}
