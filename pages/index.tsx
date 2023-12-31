import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function HomePage() {
  return (
    <>
      <MainLayout>
        <h1>Home Page</h1>
        <div className="description">
          <p>
            Get started by editing&nbsp;
            <code className="code">pages/index.tsx</code>
          </p>
        </div>

        <div className="grid">
          <Link
            href="/about"
            className="card"
            rel="noopener noreferrer"
          >
            <h2>
              Acerca <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
        </div>
      </MainLayout>
    </>
  )
}
