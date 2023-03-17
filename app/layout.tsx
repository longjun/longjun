import './globals.css'
import Navbar from '@/components/navbar'

export const metadata = {
  title: {
    default: 'Longjun Wang',
    template: '%s | Longjun Wang',
  },
  description: 'An engineer interested in design',
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 font-sans text-base xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}
        </main>
      </body>
    </html>
  )
}
