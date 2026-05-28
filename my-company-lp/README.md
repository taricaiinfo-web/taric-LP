# タリック AI Solutions ランディングページ

中小企業向けDX支援サービス「タリック AI Solutions」のランディングページです。  
Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase + Nodemailer で構築しています。

## 技術スタック

| カテゴリ | 技術 |
|---|---|
| フロントエンド | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| アニメーション | Framer Motion |
| フォーム | React Hook Form + Zod |
| バックエンド | Supabase（DB）, Nodemailer（メール送信） |
| デプロイ | Vercel |

---

## セットアップ手順

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを編集して、実際の値を入力してください。

```bash
# .env.local

# Supabaseの設定
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Gmailの設定
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

#### Supabaseの設定方法
1. [Supabase](https://app.supabase.com) でアカウントを作成し、新しいプロジェクトを作成
2. **Project Settings → API** から `Project URL` と `anon public key` をコピー
3. `.env.local` に貼り付ける

#### GmailアプリパスワードTの取得方法
1. Googleアカウントの設定を開く
2. **セキュリティ → 2段階認証プロセス** を有効化（必須）
3. **セキュリティ → アプリパスワード** からアプリパスワードを生成
4. 生成された16文字のパスワードを `GMAIL_APP_PASSWORD` に設定

### 3. Supabaseのテーブル作成

Supabaseのダッシュボードで **SQL Editor** を開き、以下のSQLを実行してください：

```sql
-- お問い合わせデータ保存テーブル
create table contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  company text,
  email text not null,
  phone text,
  message text not null,
  inquiry_type text,
  created_at timestamp with time zone default now()
);

-- Row Level Security の設定
alter table contacts enable row level security;

-- 挿入のみ許可（anon キーからの書き込み許可）
create policy "Allow insert from anon" on contacts
  for insert to anon with check (true);

-- 管理者のみ読み取り許可（service_role を使用）
create policy "Allow select from service_role" on contacts
  for select to service_role using (true);
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと確認できます。

---

## Vercelへのデプロイ

### 1. GitHubリポジトリにプッシュ

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 2. Vercelと連携

1. [Vercel](https://vercel.com) にログイン
2. **Add New Project** → GitHubリポジトリを選択
3. **Environment Variables** に以下を追加：
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
4. **Deploy** をクリック

---

## ディレクトリ構成

```
my-company-lp/
├── app/
│   ├── layout.tsx          # 共通レイアウト（メタタグ・フォント設定）
│   ├── page.tsx            # メインページ（各セクションの組み合わせ）
│   ├── globals.css         # グローバルスタイル
│   └── api/
│       └── contact/
│           └── route.ts    # 問い合わせAPI（Supabase保存 + メール送信）
├── components/
│   ├── Navbar.tsx          # 固定ナビゲーションバー
│   ├── sections/
│   │   ├── Hero.tsx        # ファーストビュー（パーティクル背景・CTA）
│   │   ├── About.tsx       # 会社概要・強み・実績数字
│   │   ├── Services.tsx    # サービス一覧（3種類）
│   │   ├── Works.tsx       # 制作実績（フィルター付き）
│   │   ├── Flow.tsx        # ご依頼の流れ（5ステップ）
│   │   ├── Contact.tsx     # お問い合わせフォーム
│   │   └── Footer.tsx      # フッター
│   └── ui/
│       ├── AnimatedText.tsx    # 文字アニメーションコンポーネント
│       └── ScrollReveal.tsx    # スクロール連動アニメーション
├── lib/
│   └── supabase.ts         # Supabaseクライアント設定
├── .env.local              # 環境変数（Gitに含めないこと）
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## カスタマイズ方法

### カラーの変更
`tailwind.config.ts` のカラー設定を変更してください：

```typescript
colors: {
  'electric-blue': '#00d4ff',  // アクセントカラー
  'vivid-purple': '#7b2fff',   // グラデーション終端
  'dark-navy': '#0a0e1a',      // 背景色
}
```

### コンテンツの変更
各セクションコンポーネント内のデータ配列を編集してください：
- **サービス内容**: `components/sections/Services.tsx` の `services` 配列
- **制作実績**: `components/sections/Works.tsx` の `works` 配列
- **フロー**: `components/sections/Flow.tsx` の `steps` 配列

---

## ライセンス

© 2024 タリック AI Solutions. All rights reserved.
