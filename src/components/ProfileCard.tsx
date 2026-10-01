// src/components/ProfileCard.tsx
import style from "./PrfileCard.module.css";

export function ProfileCard() {
  return (
    <div className={style.card}>
      <h2 className={style.name}>React 太郎</h2>
      <p className={style.description}>フロントエンドエンジニア修行中！</p>
    </div>
  );
}
