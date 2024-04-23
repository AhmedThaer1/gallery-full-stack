import Image from "next/image";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/30e9b847-891b-4126-a4f6-42f2ea7ba08b-vfnbfm.jpg",
  "https://utfs.io/f/67df3cb4-5018-4b9d-9d22-ae014c24efc5-1nq2cb.png",
  "https://utfs.io/f/c70a55f7-0c4b-4c25-bef1-54734c65892f-vfnydm.jpg",
  "https://utfs.io/f/67efba18-5a72-43df-babf-4136059f7d84-vfnybs.jpg",
  "https://utfs.io/f/f1f05f7d-6d9f-450a-825b-29994c036ad4-vfnyay.jpg",
  "https://utfs.io/f/ad0d8485-c96f-4367-b928-5fdb044c8a7d-vfnbft.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} className="h-32 w-full" alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
