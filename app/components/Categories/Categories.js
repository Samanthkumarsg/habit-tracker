
import { FiPlus } from "react-icons/fi";
import Table from "../Table/Table";
import CategoryCard from "./CategoryCard";

const Categories = () => {

    return (
        <div className="w-full max-w-screen-2xl mx-auto  flex flex-col justify-center items-start my-10 border-b ">
            <div className=" w-full flex flex-row items-center justify-between ">
                <h1 className="text-3xl font-semibold text-gray-700">Categories</h1>
                <button className="flex flex-row items-center justify-center text-sm font-medium text-white bg-primary py-1.5 px-3 rounded-lg">
                    <FiPlus className="text-white stroke-white mx-1 stroke-2 text-lg" />
                    Add Category
                </button>
            </div>

            <div className="w-full mt-6 flex flex-wrap gap-6 mb-12">
                <CategoryCard name="Fitness" />
                <CategoryCard name="Learning" />
            </div>

        </div>
    )
}

export default Categories