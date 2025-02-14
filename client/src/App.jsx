import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar, Loader,FormField ,FundCard, CountBox,CustomButton,DisplayCampaigns   } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';


const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/campaign-details" element={<CampaignDetails />} />
          <Route path="/FormField" element={<FormField />} />
          <Route path="/FundCard" element={<FundCard />} />
          <Route path="/CountBox" element={<CountBox />} />
          <Route path="/CustomButton" element={<CustomButton />} />
          <Route path="/DisplayCampaigns" element={<DisplayCampaigns />} />
          <Route path="/Loader" element={<Loader />} />

          




        </Routes>
      </div>
    </div>
  )
}

export default App