import { config } from '@react-spring/web'
import validateNavigatorInput from "../functions/validateNavigatorInput";

function handleNavigatorOnBlur(setIsChanging, tempPage, numberOfPages, setErrorObject, api, setCurrentPage) {
  setIsChanging(false);
  const validationObject = validateNavigatorInput(tempPage, numberOfPages);
  if (!validationObject.isValid) {
    setErrorObject(validationObject);
    api.start({
      config: key => {
        if (key === "x")
          return { frequency: 0.28, damping: 0.05 };
        else
          return config.default;
      },
      to: async (next, cancel) => {
        await next({ scale: 1, x: 0, });
        await next({ opacity: 0, });
        await next({ scale: 0 });
        await next({ opacity: 1, x: -20, });
        setErrorObject({ isValid: true, text: "", });
      },
    });
  }
  else
    setCurrentPage(tempPage);
}

export default handleNavigatorOnBlur