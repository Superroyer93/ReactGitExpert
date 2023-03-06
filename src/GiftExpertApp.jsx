import { useState } from "react";
import {AddCategory,GiftGrid} from './components'

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    // categories.push(newCategory)
    setCategories([newCategory, ...categories]);
    // setcategories (cat=>[...cat,'Valorant'])
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GiftGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;
