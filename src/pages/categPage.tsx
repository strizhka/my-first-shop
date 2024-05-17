import { useParams } from "react-router-dom";
import Category from "../components.tsx/products/category";

export const CategoryPage = () => {
  const { title } = useParams<{ title: string }>();
  const lowerCaseTitle = title!.charAt(0).toLowerCase() + title!.slice(1);
  return <Category category={lowerCaseTitle} title={title!}></Category>;
};
