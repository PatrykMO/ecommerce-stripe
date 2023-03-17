import './globals.css'

export const metadata = {
  title: 'Ecommerce',
  description: 'Ecommerce with Sanity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
