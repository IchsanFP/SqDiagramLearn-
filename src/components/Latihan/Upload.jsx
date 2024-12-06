import IconUpload from "../../assets/iconUpload.svg";

export default function FileUpload() {
  return (
    <div className="w-full flex p-10 border-2 border-dashed border-primary rounded-[10px]">
      <div className="flex flex-col m-auto justify-center items-center">
        <img src={IconUpload} alt="Icon Upload" className="w-8" />
        <p className="font-poppins text-sm font-normal">Upload File</p>
      </div>
    </div>
  );
}
