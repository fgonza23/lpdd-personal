import { Lexend } from "next/font/google";
import Button from "./common/button";

const lexend = Lexend({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function IntroSection() {
  return (
    <section
      className={`flex w-full flex-col items-center pt-8 text-center sm:pt-20 ${lexend.className}`}
    >
      <p className="mx-6 text-xs font-medium text-gray-600 sm:text-2xl dark:text-gray-400">
        We strive to provide a comprehensive and updated list of organizations
        that are dedicated to
      </p>
      <h2 className="mx-4 mb-4 mt-2 text-lg font-semibold sm:mx-auto sm:mb-10 sm:mt-4 sm:max-w-3xl sm:text-4xl">
        Fostering The Growth And Development Of Latiné Professionals
      </h2>
      <Button href="/about" title="About"></Button>
    </section>
  );
}
