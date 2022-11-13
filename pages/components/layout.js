import { Jost } from "@next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <main className={jost.className}>{children}</main>
    </>
  );
}
