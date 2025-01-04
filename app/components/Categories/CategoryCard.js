"use client"
import { FiTrash2, FiGrid } from "react-icons/fi";
const CategoryCard = () => {
    return (
        <div className="border w-96 p-8 flex flex-row justify-between rounded-2xl shadow-sm hover:shadow-md cursor-pointer ">
            <div className="flex flex-col justify-between">
                <FiGrid className="text-3xl text-gray-500 font-normal stroke" />
                <h1 className="text-xl text-gray-900 font-semibold mt-4">Fitness</h1>
                <h1 className="text-base font-normal text-gray-600 mt-2">1 habit</h1>

            </div>
            <FiTrash2 className="text-xl text-gray-500" />
        </div>
    )
}

export default CategoryCard