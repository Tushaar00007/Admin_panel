import Image from "next/image";
import Sidebar from "./components/ui/Sidebar.jsx";
export default function Home({ Component, pageProps }) {
  return (
    <div className="flex">
      <Sidebar />
      {/* <main className="flex-grow">
        <Component {...pageProps} />
      </main> */}
    </div>
  );
}
