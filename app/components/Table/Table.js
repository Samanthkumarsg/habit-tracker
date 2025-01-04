"use client"
import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiPlus } from "react-icons/fi";

const Table = ({ columns, data, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter data based on the search term
    const filteredData = data.filter((row) =>
        columns.some((column) =>
            row[column.key].toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    return (
        <div className=" ">

            <div className='flex flex-row items-center justify-between mb-6'>
                <input
                    type="text"
                    placeholder="Search Habits"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=" p-1.5 px-3 text-sm border  rounded-lg w-72"
                />
                <button className="flex flex-row items-center justify-center text-sm font-medium text-white bg-primary py-1.5 px-3 rounded-lg">
                    <FiPlus className="text-white stroke-white mx-1 stroke-2 text-lg" />
                    Add Habit
                </button>

            </div>


            {/* Table */}
            <div className="overflow-x-auto w-full">
                <table className="min-w-full bg-white  border-gray-200">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th
                                    key={column.key}
                                    className="px-4 py-3.5 text-left text-sm font-semibold text-gray-500  border-y"
                                >
                                    {column.label}
                                </th>
                            ))}
                            <th className="px-4 py-3.5 text-left text-sm font-semibold text-gray-500  border-y">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-gray-50">
                                {columns.map((column) => (
                                    <td
                                        key={column.key}
                                        className="px-4 py-4.5 text-base font-normal text-gray-500 border-b "
                                    >
                                        {row[column.key]}
                                    </td>
                                ))}
                                <td className="px-4 py-4 text-sm text-gray-600 border-b flex flex-row">
                                    <FiEdit2
                                        onClick={() => onEdit(row)}
                                        className="text-gray-500 hover:underline mr-3 text-lg"
                                    >
                                        Edit
                                    </FiEdit2>
                                    <FiTrash2
                                        onClick={() => onDelete(row)}
                                        className="text-gray-500 hover:underline  text-lg"
                                    >
                                        Delete
                                    </FiTrash2>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* No Results Message */}
            {filteredData.length === 0 && (
                <p className="mt-4 text-sm text-gray-500">No results found.</p>
            )}
        </div>
    );
};

export default Table;
