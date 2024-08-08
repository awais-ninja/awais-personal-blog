import wisp from "@/app/utils/wisp";
import Image from "next/image";
import React from "react";

export const dynamic = "force-dynamic";

const page = async ({ params }) => {
  const { post: postData } = await wisp.getPost(params.slug);

  return (
    <main className="space-y-4">
      <div className="relative h-[40vh]">
        <div className="w-full absolute py-4 px-12 bottom-0 left-1/2 -translate-x-1/2 z-10 bg-white/50 backdrop-blur-lg saturate-150 rounded-t-2xl max-w-5xl">
          <h1 className="tracking-tight text-6xl font-bold">
            {postData.title}
          </h1>
        </div>
        <Image
          src={postData.image}
          alt={postData.title}
          fill
          className="object-cover"
        />
      </div>
      <article
        className="prose mx-auto max-w-full lg:max-w-5xl"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></article>
    </main>
  );
};

export default page;
