import ProductCategories from "./ProductCategories";
import lamborgini from "../assets/Lamborgini.png";
import bentley from "../assets/Bently.png";
import ferrari from "../assets/Ferrari.png";
import mclaren from "../assets/McLaren.png";
import rollsRoyce from "../assets/Rolls_Royse.png";
import mercedes from "../assets/mercedes.png";

const Categories = () => {
  return (
    <div id="categories" className="container max-w-7xl mx-auto px-4">
      <h1 className="mb-10 text-center text-3xl font-bold dark:text-white">
        Categories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ProductCategories image={lamborgini} name="Lamborgini" rating="5.0" />
        <ProductCategories image={bentley} name="Bentley" rating="5.0" />
        <ProductCategories image={ferrari} name="Ferrari" rating="5.0" />
        <ProductCategories image={mclaren} name="Mclaren" rating="5.0" />
        <ProductCategories image={rollsRoyce} name="Rolls Royce" rating="5.0" />
        <ProductCategories image={mercedes} name="Mercedes" rating="5.0" />
      </div>
    </div>
  );
};

export default Categories;
