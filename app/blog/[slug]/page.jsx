import wisp from "@/app/utils/wisp";
import React from "react";

const dynamic = "force-dynamic";

const page = async ({ params }) => {
  const { post: postData } = await wisp.getPost(params.slug);

  return (
    <main className="px-4 space-y-4 py-6">
      <h1 className="text-4xl font-semibold tracking-tight text-primary-900">
        {postData.title}
      </h1>
      <hr />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      ></article>
    </main>
  );
};

export default page;
