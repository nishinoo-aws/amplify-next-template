// src/lib/amplify-server.ts
import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import { generateServerClientUsingCookies } from '@aws-amplify/adapter-nextjs/api';
import { cookies } from 'next/headers';
import { type Schema } from '../../amplify/data/resource';
import outputs from '../../amplify_outputs.json';

// サーバーサイドAmplify設定
export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

// Server Component用のクライアント
export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});
