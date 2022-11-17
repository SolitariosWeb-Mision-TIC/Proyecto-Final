import React, { useState } from "react";
import Carousel from "../components/layout/home/corousel";

  const Home = () => {
    const [home, setHome] = useState(false);

    useState(() => {
      setHome(true)
    })

    return (
          <>
              <Carousel />
      </>
    );
  
}
export default Home;
