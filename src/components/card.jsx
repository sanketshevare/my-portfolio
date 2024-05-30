import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
export default function ProjectCard({
  title,
  Descrption1,
  Descrption2,
  Technologies,
  Link,
  Img,
  Host,
}) {
  return (
    <div className="w-full">
      <Card className="lg:w-96 rounded-none bg-blue-100">
          <img src={Img} alt="" className="aspect-video" />
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
        

        {/* <img src={Img} alt="" className="aspect-video"  /> */}
        <Typography>
          <p className="text-black text-xl text-left">Description:</p>
          <ul className=" list-disc text-md text-justify">
            <li>{Descrption1}</li>
            <li>{Descrption2}</li>
          </ul>
          <p className="text-black text-xl text-left">Technologies: </p>
          <p>{Technologies}</p>
        </Typography>
        </CardBody>
        <CardFooter>
          <div className="">
            <a rel="noreferrer" href={Link} target="_blank">
              <button className="p-3  bg-orange-500 rounded-md text-white">
                See Code
              </button>{" "}
            </a>

            {Host != null && (
              <a rel="noreferrer" href={Host} target="_blank">
                <button className="p-3 bg-orange-500 rounded-md text-white">
                  See Demo
                </button>{" "}
              </a>
            )}
          </div>
        </CardFooter>
      </Card>
      
    </div>
  );
}
