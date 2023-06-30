import React, { useState } from 'react';
import { ReactComponent as EditIcon } from '../assets/edit.svg';

const DescriptionTextarea = () => {
    const [editing, setEditing] = useState(false);
    const [description, setDescription] = useState(
        'This is a description text about this demo company. It’s full-width, as the table and can be edited by clicking on the pencil icon next to the heading. If there’s a lot of text, the table moves further down the page.'
    );
    const [description2, setDescription2] = useState(
        ''
    );
    const handleEdit = () => {
        setEditing(true);
        setDescription2(description);
    };

    const handleSave = () => {
        setEditing(false);
    };

    const handleDiscard = () => {
        setDescription(description2)
        setEditing(false);
    };

    return (
        <div className="mb-4">
            <div className="flex items-center mb-1">
                <h3 className="font-bold text-4xl mr-2 mb-5">Demo Company</h3>
            </div>
            <div className="flex items-center mb-1">
                <h3 className="font-bold text-xl mr-2">Description:</h3>
                {!editing && (
                    <button onClick={handleEdit}>
                        <EditIcon className="w-5 h-5 text-blue-500" />
                    </button>
                )}
            </div>
            {editing ? (
                <div className="relative">
          <textarea
              id="description"
              className=" rounded px-3 py-2 w-full"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
          ></textarea>
                    <div className="absolute right-0 top-0 mt-1 mr-1">
                        <button
                            className="bg-green-500 text-white px-2 py-1 rounded"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                            onClick={handleDiscard}
                        >
                            Discard
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-left rounded  py-2 w-full">
                    {description}
                </div>
            )}
        </div>
    );
};

export default DescriptionTextarea;
