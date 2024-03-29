'use client';

import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Employee List</h1>
      <EmployeeTable />
    </div>
  );

  function EmployeeTable() {
    return (
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 py-2 px-4">No.</th>
            <th className="border border-gray-300 py-2 px-4">Nama</th>
            <th className="border border-gray-300 py-2 px-4">Gaji</th>
            <th className="border border-gray-300 py-2 px-4">Umur</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }
}