import Logo from "components/svg/logo";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-fade-in block">
        <Logo width={246} height={96} />
      </div>
    </div>
  );
}
