import { createContext } from "react";

const CategoriesContext = createContext({
  categories: [] as any[],
  setCategories: (array: any[]) => {}
});

export default CategoriesContext;