import Image from 'next/image'
import dynamic from 'next/dynamic';

const ListingDynamicComponent = dynamic(() => import("../components/listing"),
  { loading: () => <p>Loading</p>, ssr: false }
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListingDynamicComponent />
      <Image 
      width={640}
      height={360}
      placeholder='blur'
      blurDataURL='https://dummyimage.com/64x36/000/aaa'
      src='https://dummyimage.com/6400x3600/fff/aaa' alt="Placeholder image"/>
    </main>
  )
}
