import SideNav from '@/app/ui/dashboard/sidenav';
// 在 Next.js 中，你可以使用一个特殊的 layout.tsx 文件来创建在多个页面之间共享的 UI
// 首先，你将 <SideNav /> 组件导入到你的布局中。你导入到这个文件中的任何组件都将成为布局的一部分
// <Layout /> 组件接收一个 children 属性。这个子组件可以是一个页面或另一个布局。在这种的情况下，位于 /dashboard 中的页面将自动嵌套在 <Layout /> 中
// ! 也就是说dashboard中的页面都会嵌套在Layout中 就是那个children（我们写的页面）

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}