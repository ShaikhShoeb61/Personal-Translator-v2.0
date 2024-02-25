import { useSpring } from "@react-spring/web";

const useDropdownAnimation = (InputDropdownActive, OutputDropdownActive) => {
  const [DropdownAnimation, api] = useSpring(() => ({
    rotateZ: 0,
  }));

  api.start({
    to: [{ rotateZ: InputDropdownActive || OutputDropdownActive ? 180 : 0 }],
  });

  return { DropdownAnimation };
};

export default useDropdownAnimation;
