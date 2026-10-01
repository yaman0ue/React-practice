// src/components/Hello.tsx
type HelloProps = {
  name: string;
  age: number;
}

// 「Hello」という名前の部品（関数）を作って、外部から使えるように export します
export function Hello( { name, age }: HelloProps ) {
  return (
    <div style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}>
      <h2>こんにちは、{name}さん！</h2>
      <p>年齢は {age} 歳です。</p>
      <p>これは私が初めて作ったReactコンポーネントです。</p>
    </div>
  );
}
