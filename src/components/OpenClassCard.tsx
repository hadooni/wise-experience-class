import FieldTag from "./common/FieldTag";

const OpenClassCard = () => {
  return (
    <section className="flex gap-x-3 my-4">
      <div className="h-40 w-40 bg-[#296CAD] rounded-2xl" />
      <div className="font-bold text-[#5E5E5E]">
        <FieldTag color={"blue"} text="모집중" />
        <div>
          <h3 className="text-base text-black mt-10 mb-1">
            맛있는 마카롱 만들기 체험
          </h3>
          <span>2025.01.11 토요일</span>
          <div className=" flex gap-x-1 mt-2">
            <span className="bg-[#E2E2E2] rounded-md px-1">10:00</span>~
            <span className="bg-[#E2E2E2] rounded-md px-1">12:00</span>
          </div>
        </div>
        <p className="text-navy-custom text-right text-xl	mt-3">13 / 20</p>
      </div>
    </section>
  );
};

export default OpenClassCard;
