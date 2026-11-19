import CHeader from "@/Components/HeaderProp";
import Frontend from "@/Components/Frontend";
import Backend from "@/Components/Backend";
import Devtool from "@/Components/Devtool";

const Expertise = () => {
  return (
    <div className="p-4">
      <CHeader Head="Skill" SubHead="Expertise and Technology" />
      <h1 className="font-sans">
        My skill span across various domains and technologies, some of the
        technologies that i use in building applications include
      </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto gap-4 mt-7 ">
          <Frontend />
          <Backend />
          <Devtool />
        </div>
    </div>
  );
};

export default Expertise;
