// import React from 'react';

// import { tagType, thirdweb } from '../assets';
// import { daysLeft } from '../utils';

// const FundCard = ({ owner, title, description, target, deadline, amountCollected, image, handleClick }) => {
//   const remainingDays = daysLeft(deadline);
  
//   return (
//     <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer" onClick={handleClick}>
//       <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

//       <div className="flex flex-col p-4">
//         <div className="flex flex-row items-center mb-[18px]">
//           <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain"/>
//           <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">Education</p>
//         </div>

//         <div className="block">
//           <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">{title}</h3>
//           <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">{description}</p>
//         </div>

//         <div className="flex justify-between flex-wrap mt-[15px] gap-2">
//           <div className="flex flex-col">
//             <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{amountCollected}</h4>
//             <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Raised of {target}</p>
//           </div>
//           <div className="flex flex-col">
//             <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{remainingDays}</h4>
//             <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">Days Left</p>
//           </div>
//         </div>

//         <div className="flex items-center mt-[20px] gap-[12px]">
//           <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
//             <img src={thirdweb} alt="user" className="w-1/2 h-1/2 object-contain"/>
//           </div>
//           <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">by <span className="text-[#b2b3bd]">{owner}</span></p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FundCard

import React from 'react';
import { tagType, thirdweb } from '../assets';
import money from '../assets/money.svg';
import scholarshipdrive from '../assets/scholarshipdrive.avif';
import images from '../assets/images.jpg';
import { useNavigate } from 'react-router-dom';
// FundCard Component
const FundCard = ({ id, image, category, title, description, raised, goal, daysLeft, owner, avatar }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campaign-details/${id}`, {
      state: {
        campaign: {
          id,
          owner,
          description,
          target: `${goal} ETH`,
          amountCollected: `${raised} ETH`,
          deadline: `${daysLeft} Days Left`,
          image,
          avatar, // Include the avatar here
        },
        donators: [
          { donator: '0xA1B2C3D4E5', donation: '0.5 ETH' },
          { donator: '0xF6G7H8I9J0', donation: '1.2 ETH' },
        ]
      }
    });
  };
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer p-4" onClick={handleClick}>
      <img src={image} alt="fund" className="w-full h-[100px] object-cover rounded-[15px]" />

      <div className="flex flex-row items-center mb-[18px]">
        <img src={tagType} alt="tag" className="w-[17px] h-[17px] object-contain" />
        <p className="ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]">{category}</p>
      </div>

      <div className="block">
        <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">
          {title}
        </h3>
        <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate">
          {description}
        </p>
      </div>

      <div className="flex justify-between flex-wrap mt-[15px] gap-2">
        <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{raised} ETH</h4>
          <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
            Raised of {goal} ETH
          </p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]">{daysLeft}</h4>
          <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate">
            Days Left
          </p>
        </div>
      </div>

      <div className="flex items-center mt-[20px] gap-[12px]">
        <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]">
          <img src={avatar} alt="user" className="w-1/2 h-1/2 object-contain" />
        </div>
        <p className="flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate">
          by <span className="text-[#b2b3bd]">{owner}</span>
        </p>
      </div>
    </div>
  );
};

// Data for Multiple Fund Cards
const fundCardsData = [
  { 
    id:1,
    image: scholarshipdrive,
    category: "Education",
    title: "Scholarship Drive",
    description: "Providing scholarships for students in need.",
    raised: "3.2",
    goal: "7",
    daysLeft: "20",
    owner: "0xDEF...5678",
    avatar: thirdweb
  },
  { 
    id:2,
    image: images,
    category: "Medical",
    title: "Health Fundraiser",
    description: "Helping patients afford life-saving treatments.",
    raised: "1.8",
    goal: "5",
    daysLeft: "10",
    owner: "0xGHI...9101",
    avatar: money
  },
  {
    id:3,
    image: money,
    category: "Technology",
    title: "Innovate for Good",
    description: "Funding new tech solutions for social problems.",
    raised: "4.5",
    goal: "10",
    daysLeft: "30",
    owner: "0xJKL...1122",
    avatar: thirdweb
  },
  {
    id:4,
    image: thirdweb,
    category: "Technology",
    title: "Innovate for Good",
    description: "Funding new tech solutions for social problems.",
    raised: "4.5",
    goal: "10",
    daysLeft: "30",
    owner: "0xJKL...1122",
    avatar: thirdweb
  }
];

// Render Multiple Fund Cards
const FundCardList = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {fundCardsData.map((fund, index) => (
        <FundCard key={index} {...fund} />
      ))}
    </div>
  );
};

export default FundCardList;
