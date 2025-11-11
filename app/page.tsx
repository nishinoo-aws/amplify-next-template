// src/app/page.tsx
import { cookiesClient } from '@/lib/amplify-server';

export default async function HomePage() {
  // GraphQLクエリでTodoリストを取得
  const { data: todos, errors } = await cookiesClient.models.Todo.list();

  // エラーハンドリング
  if (errors) {
    console.error('GraphQLエラー:', errors);
  }

  return (
    <div>
      <h2>Todoリスト</h2>
      
      {/* Todoが存在しない場合 */}
      {!todos || todos.length === 0 ? (
        <p>Todoがありません。最初のTodoを作成してみましょう。</p>
      ) : (
        /* Todoリストを表示 */
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ marginBottom: '10px' }}>
              <div>
                <strong>内容:</strong> {todo.content}
              </div>
              <div>
                <strong>完了:</strong> {todo.done ? '✅ 完了' : '⏳ 未完了'}
              </div>
              <div>
                <strong>優先度:</strong> {todo.priority || '未設定'}
              </div>
              <hr />
            </li>
          ))}
        </ul>
      )}
      
      {/* デバッグ情報 */}
      <details style={{ marginTop: '20px' }}>
        <summary>デバッグ情報</summary>
        <pre>{JSON.stringify({ todos, errors }, null, 2)}</pre>
      </details>
    </div>
  );
}
