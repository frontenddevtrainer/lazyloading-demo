import Image from 'next/image'
import dynamic from 'next/dynamic';

const ListingDynamicComponent = dynamic(() => import("../components/listing"),
  { loading: () => <p>Loading</p>, ssr: false }
)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ListingDynamicComponent />
    </main>
  )
}
