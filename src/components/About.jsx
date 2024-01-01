const About = () => {
  return (
    <div className="bg-[#343A40] grid grid-cols-2 gap-4 pl-[100px] py-5">
      <div className="flex flex-col gap-2">
        <h3 className="text-white text-2xl font-semibold">About</h3>
        <p className="text-gray-500">
          Read more about the creative minds behind YoRipe in this section.
        </p>
        <ul className="ml-5">
          <li className="list-disc text-gray-500 ">
            <a className="text-blue-600" href="">
              About us
            </a>
          </li>
          <li className="list-disc text-gray-500  ">
            <a className="text-blue-600" href="">
              FAQ
            </a>
          </li>
          <li className="list-disc text-gray-500">
            <a className="text-blue-600" href="">
              Press Release
            </a>
          </li>
        </ul>
        <p className="text-gray-500">
          P.S. Watch out for the launch of our new section, Eat like the Person
          you Want to be, inspired by Humans of New York soon!
        </p>
      </div>
      <div className="flex flex-col gap-2 ml-[150px]">
        <h3 className="text-2xl text-white font-semibold">Contact Us</h3>
        <p className="text-white cursor-pointer">Twitter</p>
        <p className="text-white cursor-pointer">Facebook</p>
        <p className="text-white cursor-pointer">Instagram</p>
      </div>
    </div>
  );
};

export default About;
