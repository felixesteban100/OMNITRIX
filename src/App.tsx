import OmnitrixOriginal from "./components/OmnitrixOriginal"
import OmnitrixUltimate from "./components/OmnitrixUltimate"
import OmnitrixOmniverse from "./components/OmnitrixOmniverse"
import OmnitrixOriginalOmniverse from "./components/OmnitrixOriginalOmniverse"
import OmnitrixAlienForce from "./components/OmnitrixAlienForce"
import OmnitrixBrandNew from "./components/OmnitrixBrandNew"
import OmnitrixBrandNew2 from "./components/OmnitrixBrandNew2"
// import OmnitrixChatGPT from "./components/OmnitrixChatGPT"

function App() {
  return (
    <div>
      <OmnitrixOriginal/>
      <OmnitrixAlienForce/>
      <OmnitrixUltimate />
      <OmnitrixOriginalOmniverse/>
      <OmnitrixOmniverse/>
      <OmnitrixBrandNew />
      <OmnitrixBrandNew2 />
      {/* <OmnitrixChatGPT /> */}
    </div>
  )
}


export default App