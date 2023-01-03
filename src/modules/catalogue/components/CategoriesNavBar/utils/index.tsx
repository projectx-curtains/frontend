import { useRouter } from "next/router";

const StyleLink = (url: string) => {
  const router = useRouter();
  const isUrlMatch = router.asPath === url;
  return {
    color: isUrlMatch ? "#ffffff" : "",
    background: isUrlMatch ? "#726158" : "#ebe8e6",
  };
};

export default StyleLink;
