// src/app/layout.tsx
'use client';

import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from '../../amplify_outputs.json';

// Amplify設定
Amplify.configure(outputs, { ssr: true });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Authenticator>
          {({ signOut, user }) => (
            <main style={{ padding: '20px' }}>
              <header style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                <h1>Todo アプリ</h1>
                <div>
                  <span>ログイン中: {user?.username}</span>
                  <button onClick={signOut} style={{ marginLeft: '10px' }}>
                    ログアウト
                  </button>
                </div>
              </header>
              {children}
            </main>
          )}
        </Authenticator>
      </body>
    </html>
  );
}
