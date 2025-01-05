
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import Table from "../Table/Table";

const Habits = () => {

    const [data, setData] = useState(
        [
            { id: 1, Habit: 'Morning Workout', Category: 'Health', Goal: '42 times', Frequency: 'Daily' },
            { id: 2, Habit: 'Reading Books', Category: 'Productivity', Goal: '7 times', Frequency: 'Weekly' },
            { id: 3, Habit: 'Swimming', Category: 'Fitness', Goal: '90 times', Frequency: 'Monthly' },
            { id: 4, Habit: 'Diet', Category: 'Health', Goal: '33 times', Frequency: 'Daily' },
            { id: 5, Habit: 'Draw sketch', Category: 'Productivity', Goal: '66 times', Frequency: 'Weekly' },
        ]
    );

    const columns = [
        { key: 'Habit', label: 'Habit' },
        { key: 'Category', label: 'Category' },
        { key: 'Goal', label: 'Goal' },
        { key: 'Frequency', label: 'Frequency' },

    ];

    const handleEdit = (row) => {
        const newName = prompt(`Edit name for ${row.Habit}`, row.Habit);
        if (newName) {
            setData((prevData) =>
                prevData.map((item) =>
                    item.id === row.id ? { ...item, Habit: newName } : item
                )
            );
        }
    };

    const handleDelete = (row) => {
        if (confirm(`Are you sure you want to delete ${row.Habit}?`)) {
            setData((prevData) => prevData.filter((item) => item.id !== row.id));
        }
    };


    return (
        <div className="w-10/12 mx-auto flex flex-col justify-center items-start my-10">
            <div className="w-full flex flex-row items-center justify-between">
                <h1 className="text-3xl font-semibold text-gray-700">Habits</h1>
            </div>

            <div className="mt-10 w-full">
                <Table
                    columns={columns}
                    data={data}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    )
}

export default Habits