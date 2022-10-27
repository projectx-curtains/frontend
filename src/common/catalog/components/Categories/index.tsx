import { useRouter } from "next/router";
import Link from "next/link";
import categoriesData from "./mocks/categoriesData";

const Categories = () => {
  const router = useRouter();

  return (
    <div className="categories">
      <ul className="categories__list">
        {categoriesData.map((titleItem) => {
          const style = {
            color: router.asPath === titleItem.url ? "$white" : "",
            background:
              router.asPath === titleItem.url ? "$brown-600" : "$gray-100",
          };

          const handleClick = (e: any) => {
            e.preventDefault();
            router.push(titleItem.url);
          };

          return (
            <Link href={titleItem.url}>
              <a
                className="categories__item"
                key={titleItem.id}
                onClick={handleClick}
                style={style}
              >
                {titleItem.name}
              </a>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
