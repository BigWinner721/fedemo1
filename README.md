# Digtek - Digital Marketing Agency Next.js项目

这是一个将HTML模板迁移到Next.js框架的项目。

## 项目结构

- `src/app`: Next.js应用程序目录
  - `page.tsx`: 主页组件
  - `layout.tsx`: 布局组件，包含头部和底部
  - `ScriptLoader.jsx`: 客户端脚本加载器
- `public`: 静态资源目录
  - `assets`: 图片等资源文件
  - `static`: CSS, JS和其他静态文件

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 构建

```bash
# 构建生产版本
npm run build

# 运行生产版本
npm start
```

## 迁移说明

1. 本项目将原始HTML模板转换为Next.js应用程序
2. 使用React组件替代了原始HTML结构
3. 使用Next.js的Image组件优化图片加载
4. 使用客户端ScriptLoader组件加载原始JS脚本

## 问题解决

如果发现资源加载404错误，请检查以下几点：
1. 确保资源文件路径正确
2. 确认public目录下的文件结构与原始项目相匹配
3. 检查布局文件中的引用路径

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
