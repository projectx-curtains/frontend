const StyleLink = (currentUrl: string, url: string) => ({
  color: currentUrl === url ? "$white" : "",
  background: currentUrl === url ? "$brown-600" : "$gray-100",
});

export default StyleLink;
