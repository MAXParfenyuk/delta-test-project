import React, { useState } from 'react';
import arrowIcon from '../assets/arrow.svg';

const ExampleComponent = () => {
    const [tableData, setTableData] = useState([
        {
            ID: 1,
            name: 'Steven Jobs',
            id: '92b99129-bda9-4c9e-ae8b-7b9ba0a33d2f',
            created: '2022-01-01',
            lastPulled: '2023-01-01',
        },
        // Add more initial data rows as needed
    ]);

    const [showInputRow, setShowInputRow] = useState(false);
    const [newRowData, setNewRowData] = useState({
        name: '',
        id: '',
        created: '',
        lastPulled: '',
    });

    const handleAddRow = () => {
        setShowInputRow(true);
    };

    const handleConfirmAddRow = () => {
        const newRow = {
            id: Math.floor(Math.random() * 1000), // Generate a unique ID
            ...newRowData,
        };

        setTableData([...tableData, newRow]);
        setShowInputRow(false);
        setNewRowData({ name: '', id: '', created: '', lastPulled: '' });
    };

    const handleCancelAddRow = () => {
        setShowInputRow(false);
        setNewRowData({ name: '', id: '', created: '', lastPulled: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewRowData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleDeleteRow = (id) => {
        const updatedData = tableData.filter((row) => row.id !== id);
        setTableData(updatedData);
    };

    return (
        <div className="overflow-hidden">
            <table className="w-full border border-gray-300 bg-white text-left text-sm text-gray-500">
                <thead className="bg-blue-50">
                <tr>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Connections
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Created
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                        Last Pulled
                    </th>
                    <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 border-gray-100">
                {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-gray-50">
                        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="relative h-10 w-10">
                                <img
                                    className="h-full w-full rounded-full object-cover object-center"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                />
                                <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                            </div>
                            <div className="text-sm">
                                <div className="text-gray-500">{row.name}</div>
                                <div className="text-gray-500">{row.id}</div>
                            </div>
                        </td>
                        <td className="px-6 py-4">{row.created}</td>
                        <td className="px-6 py-4">{row.lastPulled}</td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                                <button
                                    className="text-red-500 font-bold"
                                    onClick={() => handleDeleteRow(row.id)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                {showInputRow && (
                    <tr className="bg-gray-50">
                        <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <input
                                type="text"
                                name="name"
                                value={newRowData.name}
                                onChange={handleChange}
                                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Name"
                            />
                            <input
                                type="text"
                                name="id"
                                value={newRowData.id}
                                onChange={handleChange}
                                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="ID"
                            />
                        </td>
                        <td className="px-6 py-4">
                            <input
                                type="text"
                                name="created"
                                value={newRowData.created}
                                onChange={handleChange}
                                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Created"
                            />
                        </td>
                        <td className="px-6 py-4">
                            <input
                                type="text"
                                name="lastPulled"
                                value={newRowData.lastPulled}
                                onChange={handleChange}
                                className="border border-gray-300 px-2 py-1 rounded focus:outline-none focus:ring focus:ring-blue-500"
                                placeholder="Last Pulled"
                            />
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex justify-end gap-4">
                                <button
                                    className="text-green-500 font-bold"
                                    onClick={handleConfirmAddRow}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </button>
                                <button
                                    className="text-red-500 font-bold"
                                    onClick={handleCancelAddRow}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <div className="flex justify-between mt-4">
                {!showInputRow && (
                    <li>
                        <a
                            href="#"
                            className="flex items-center py-3 pr-4 pl-3 lg:bg-transparent lg:text-gray-700 lg:p-0 dark:text-white lg:hover:border-b-4 lg:hover:border-blue-700 lg:hover:text-blue-700"
                            aria-current="page"
                        >
                            <img
                                src={arrowIcon}
                                alt="Arrow Icon"
                                className="w-3 h-5 mr-2"
                            />
                            Back
                        </a>
                    </li>
                )}

                {!showInputRow && (
                    <button
                        className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md border border-gray-200"
                        onClick={handleAddRow}
                    >
                        Add Integration
                    </button>
                )}
            </div>
        </div>
    );
};

export default ExampleComponent;
