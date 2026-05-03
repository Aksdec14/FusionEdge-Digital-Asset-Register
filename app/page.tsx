import React from 'react'
import AssetRegisterHeroSection from './sections/AssetRegisterHeroSection'
import HiddenAssetCostSection from './sections/HiddenAssetCostSection'
import AssetManagerFeaturesSection from './sections/AssetManagerFeaturesSection'
import DigitalFacilityStoriesSection from './sections/DigitalFacilityStoriesSection'
import DigitalFacilityLogoCarousel from './components/DigitalFacilityLogoCarousel'
import MoreAssetManagementBanner from './components/MoreAssetManagementBanner'
import AssetRegisterFAQSection from './components/AssetRegisterFAQSection'
import AssetControlMegaBanner from './components/AssetControlMegaBanner'
import ContactSection from './components/ContactSection'

const page = () => {
  return (
    <div>
      <AssetRegisterHeroSection />
      <HiddenAssetCostSection />
      <AssetManagerFeaturesSection />
      <DigitalFacilityLogoCarousel />
      <DigitalFacilityStoriesSection />
      <MoreAssetManagementBanner />
      <AssetRegisterFAQSection />
      <AssetControlMegaBanner />
      <ContactSection />
    </div>
  )
}

export default page