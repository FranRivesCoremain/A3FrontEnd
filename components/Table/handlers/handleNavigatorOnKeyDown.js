function handleNavigatorOnKeyDown(e) {
  if (e.key === "Enter")
    e.target.blur();
}

export default handleNavigatorOnKeyDown