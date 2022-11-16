const StyleLink = (currentUrl: string, url: string) => ({
  color: currentUrl === url ? "#ffffff" : "",
  background: currentUrl === url ? "#726158" : "#ebe8e6",
});

export default StyleLink;
