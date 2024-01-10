function handleNavigatorOnChange(newValue, setIsChanging, setTempPage) {
  setIsChanging(true);
  setTempPage(newValue - 1);
}

export default handleNavigatorOnChange