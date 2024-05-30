import { Button } from "@material-tailwind/react";
export default function Resume() {
  return (
    <div className="bg-gray-400 w-full h-full ">
      <h1 className="text-3xl font-bold uppercase mb-5">Resume</h1>
      <iframe
        title="resume"
        src={require("../data/sanket_shevare.pdf")}
        width="100%"
        height="700"
      />
      <Button className="rounded-none">
        <a
          className="p-1 uppercase"
          href={require("../data/sanket_shevare.pdf")}
          download={true}
        >
          download
        </a>
      </Button>
    </div>
  );
}
