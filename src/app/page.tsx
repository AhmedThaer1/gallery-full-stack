import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-full w-48 flex-col">
          <Link href={`/img/${image.id}`} className="h-full w-full">
            <Image
              src={image.url}
              style={{ objectFit: "contain", height: "192px", width: "100%" }}
              width={192}
              height={192}
              alt={image.name}
              className="h-full w-full cursor-pointer border-2 border-gray-700 hover:border-gray-400"
            />
          </Link>
          <div className="pb-4">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
