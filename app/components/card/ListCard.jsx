import wisp from "@/app/utils/wisp";
import Image from "next/image";
import Link from "../primitives/Link";

const ListCard = async ({ post }) => {
  const { post: postData } = await wisp.getPost(post.slug);
  const wpm = Math.ceil(postData.content.length / 220);

  return (
    <Link
      className="flex flex-row flex-wrap items-center rounded-lg gap-x-4 bg-primary-100 border border-primary-950 p-2"
      href={`/blog/${postData.slug}`}
    >
      {postData.image && (
        <div className="relative rounded-lg overflow-hidden p-2  h-32 w-32 block">
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            className="absolute w-auto h-full object-cover object-center"
          />
        </div>
      )}
      <div>
        <h1 className="text-2xl tracking-tight font-bold">{postData.title}</h1>
        <p>{postData.description}</p>
        <p>{wpm} min. read</p>
        <div className="flex items-center text-sm content-between w-full">
          <p className="inline-block">
            {new Intl.DateTimeFormat("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(postData.publishedAt))}
          </p>
          <button
            href={`/blog/${postData.slug}`}
            className="ms-auto inline-block"
          >
            Read Article
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
