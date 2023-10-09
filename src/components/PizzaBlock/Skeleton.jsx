import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle x="15" y="15" cx="125" cy="125" r="125" /> 
    <circle cx="138" cy="169" r="17" /> 
    <rect x="0" y="296" rx="9" ry="9" width="280" height="23" /> 
    <rect x="0" y="345" rx="10" ry="10" width="280" height="88" /> 
    <rect x="1" y="454" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="447" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
)

export default Skeleton;