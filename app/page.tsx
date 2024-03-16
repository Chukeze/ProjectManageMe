'use client'

import Notification from './component/Notification/Notification'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <header>
        <nav>
          <ul className="flex justify-between">
            <li>
              <Notification notifications={[]} onDismiss={undefined} />
            </li>
          </ul>
        </nav>
      </header>
      <section></section>
    </main>
  )
}
