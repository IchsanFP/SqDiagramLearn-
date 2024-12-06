export default function NotasiList({ notasi }) {
  return (
    <div className="rounded-lg sticky w-[232px] h-96 overflow-y-auto no-scrollbar text-white bg-notasi top-[75.984px]">
      <div className="flex w-[234px] justify-center m-auto flex-wrap gap-1">
        {notasi.map((menu, index) => (
          <div key={index} className="flex-col flex w-24">
            <div className="w-24 h-24 overflow-hidden flex items-center justify-center">
              <img src={menu.img} alt="" className="w-full h-full object-contain" />
            </div>
            <p className="text-center font-poppins text-sm font-semibold text-black">{menu.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
