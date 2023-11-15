import { ContentBlock } from "./components/block/contentBlock";
import { InputBlock } from "./components/block/inputBlock";
import { NavBlock } from "./components/block/nav";

const App = () => {
  return (
    <>
      <NavBlock />
      <InputBlock />
      <ContentBlock />
    </>
  );
};
export default App;
