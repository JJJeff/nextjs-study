import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts' // 使用字体

// 这个也是一个布局文件 app的布局文件，我们称之为 根布局
// 你添加到根布局的任何 UI 将在应用程序中的所有页面之间共享。你可以使用根布局来修改 <html> 和 <body> 标签
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
