import Avatar from "../atoms/Avatar";
export default function DisplyaHeader() {
  return (
    <div className="p-2 flex justify-between">
      <div>
        <Avatar></Avatar>
      </div>
      <nav className="flex flex-col gap-2 items-center justify-center p-1 bg-slate-400/20 rounded-md">
        <span className="border border-slate-50 w-5"></span>
        <span className="border border-slate-50 w-7"></span>
        <span className="border border-slate-50 w-6"></span>
      </nav>
    </div>
  );
}
