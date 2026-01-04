import LoadingLayout from "@/components/animations/loading-layout";
import Image from "next/image";

export default function Home() {
  return (
    <LoadingLayout>
      <div className="max-w-3xl  mx-auto my-14 p-4">
        <p className="text-xl font-juniCode font-extralight text-black/70">
          CHRIS RICHMAN
        </p>

        {/* About */}
        <p className="font-sans text-base mt-6  text-black/80">
          An experienced visual storyteller based in{" "}
          <span className="font-juniCode italic text-lg"> Accra </span> Ghana.
          He discovered his passion for{" "}
          <span className="font-juniCode italic text-lg"> photography </span>{" "}
          and{" "}
          <span className="font-juniCode italic text-lg"> videography </span> in
          church, where his creativity was first nurtured. Guided by inspiration
          from his elder brother, he developed his craft through self-teaching
          and hands-on practice. Today, he combines technical expertise with
          <span className="font-juniCode italic text-lg"> creativity </span> to
          produce compelling{" "}
          <span className="font-juniCode italic text-lg"> visuals </span> that
          connect with audiences and elevate stories.
        </p>
      </div>
    </LoadingLayout>
  );
}
