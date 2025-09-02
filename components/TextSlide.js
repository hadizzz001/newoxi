'use client';
import Marquee from 'react-fast-marquee';

const NewsTicker = () => {
  const textItems = [
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
    "Designed for You",
  ];

  const loopedText = [...textItems, ...textItems];

  return (
    <div className="flex justify-center items-center w-full overflow-hidden ">
      <div
        className="w-full bg-white shadow-xl rounded-[2rem] myslidertextpandm  "
        style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} // stronger shadow
      >
        <Marquee
          speed={120}          
          gradient={false}
          pauseOnHover={false} 
          direction="left"
        >
          {loopedText.map((text, index) => (
            <div
              key={index}
              className="mytSlider123e3" // bigger text
            >
              {text}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default NewsTicker;
