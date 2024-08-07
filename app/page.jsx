import ListCard from "./components/card/ListCard";
import wisp from "./utils/wisp";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { posts } = await wisp.getPosts({ limit: "all" });

  return (
    <main className="px-4 my-14">
      <div className="space-y-2">
        {posts.map((post) => {
          return <ListCard key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
}
