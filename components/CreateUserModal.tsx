"use client";

import { useState } from "react";

interface CreateUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (user: any) => void;
}

export const CreateUserModal = ({ isOpen, onClose, onCreate }: CreateUserModalProps) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    department: "Engineering",
  });

  const handleSubmit = () => {
    onCreate({
      ...form,
      id: Date.now(),
      performanceRating: 3,
      bio: "Newly added employee",
      history: [],
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Create New Employee</h2>

        <div className="flex flex-col gap-2">
          <input
            className="p-2 border rounded"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
          <input
            className="p-2 border rounded"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />
          <input
            className="p-2 border rounded"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="number"
            className="p-2 border rounded"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: Number(e.target.value) })}
          />
          <select
            className="p-2 border rounded"
            value={form.department}
            onChange={(e) => setForm({ ...form, department: e.target.value })}
          >
            <option>Engineering</option>
            <option>HR</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </div>

        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-1 bg-gray-400 text-white rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-1 bg-blue-600 text-white rounded"
            onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
