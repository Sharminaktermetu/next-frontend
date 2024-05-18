import Navber from "../components/ui/Navber";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <div className="w-full">
   <Navber/>
      </div>
      <div>{children}</div>
    </div>
  );
}