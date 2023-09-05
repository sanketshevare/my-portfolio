
export default function Card({ title, Descrption1, Descrption2, Technologies, Link, Img, Host }) {




    return (
        <div className="">
          
            <div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <img src={Img} alt="" className="aspect-video"  />
                <p className="text-white text-xl text-left p-1">Description:</p>
                <ul className=" list-disc break-normal ml-12 text-mg text-justify">
                    <li>{Descrption1}</li>
                    <li>{Descrption2}</li>
                </ul>

                <p className="text-white text-xl text-left">Technologies: </p>
                <p >{Technologies}</p>
            </div>
            <br />

            <div className="">
                <a rel="noreferrer" href={Link} target="_blank">
                    <button className="p-3  bg-orange-500 rounded-md text-white">
                        See Code
                    </button> </a>

                {Host != null &&
                    <a rel="noreferrer" href={Host} target="_blank">
                        <button className="p-3 bg-orange-500 rounded-md text-white">
                            See Demo
                        </button> </a>}
            </div>

        </div>
    );
}


