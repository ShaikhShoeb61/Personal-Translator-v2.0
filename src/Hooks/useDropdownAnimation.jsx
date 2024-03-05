import { useSpring } from "@react-spring/web";
import { useSelector } from "react-redux";

const useDropdownAnimation = () => {
  const inputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.inputDropdownActive
  );
  const outputDropdownActive = useSelector(
    (state) => state.PersistedReducer.dropdown.outputDropdownActive
  );

  const [inputDropdownAnimation, inputApi] = useSpring(() => ({
    rotateZ: 0,
  }));

  const [outputDropdownAnimation, outputApi] = useSpring(() => ({
    rotateZ: 0,
  }));

  inputApi.start({
    to: { rotateZ: inputDropdownActive ? 180 : 0 },
  });

  outputApi.start({
    to: { rotateZ: outputDropdownActive ? 180 : 0 },
  });

  return { inputDropdownAnimation, outputDropdownAnimation };
};

export default useDropdownAnimation;
