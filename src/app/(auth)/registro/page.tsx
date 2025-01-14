"use client";

import React, { useState } from "react";

const CompanyRegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    tradingName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // {/* <div className="relative w-full max-w-md"> */}
    // {/* Purple decorative shapes */}
    // {/* <div className="absolute top-0 left-0 w-64 h-64 bg-violet-600 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl opacity-80" /> */}
    // {/* <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600 rounded-tr-full blur-2xl opacity-80" /> */}

    // {/* Form card */}
    <div className="bg-white rounded-lg shadow-xl p-8 relative z-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="p-2">
          <div className="w-8 h-8 bg-violet-600 rounded-lg" />
        </div>
      </div>

      <h1 className="text-2xl font-semibold text-center mb-8">NzolaTrack</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600">Nome da Empresa</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Nome Comercial</label>
          <input
            type="text"
            name="tradingName"
            value={formData.tradingName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Telefone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Utilizador</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Senha</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600">Confirmar Senha</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 px-4 rounded-md hover:bg-violet-700 transition-colors mt-6"
        >
          REGISTRAR
        </button>
      </form>
    </div>
    // {/* </div> */}
  );
};

export default CompanyRegistrationForm;
