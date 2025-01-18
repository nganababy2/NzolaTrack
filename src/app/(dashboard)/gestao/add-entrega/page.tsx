"use client";

import { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Corrigir ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const AddDeliveryForm = ({ onAddDelivery }) => {
  const [formData, setFormData] = useState({
    id: "",
    type: "",
    origin: { lat: null, lng: null },
    destination: { lat: null, lng: null },
    client: { name: "", company: "" },
  });
  const [isSelectingOrigin, setIsSelectingOrigin] = useState(false);
  const [isSelectingDestination, setIsSelectingDestination] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [keys[0]]: {
          ...prev[keys[0]],
          [keys[1]]: value,
        },
      }));
    }
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    if (isSelectingOrigin) {
      setFormData((prev) => ({
        ...prev,
        origin: { lat, lng },
      }));
      setIsSelectingOrigin(false);
    } else if (isSelectingDestination) {
      setFormData((prev) => ({
        ...prev,
        destination: { lat, lng },
      }));
      setIsSelectingDestination(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddDelivery) onAddDelivery(formData);
    setFormData({
      id: "",
      type: "",
      origin: { lat: null, lng: null },
      destination: { lat: null, lng: null },
      client: { name: "", company: "" },
    });
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 border rounded-lg bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Adicionar Entrega</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">ID da Entrega</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Ex: EV-123456"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tipo</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border p-2 rounded-lg"
            placeholder="Ex: Materiais Alimentícios"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Origem</label>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 mb-2"
            onClick={() => setIsSelectingOrigin(true)}
          >
            Selecionar no Mapa
          </button>
          {formData.origin.lat && formData.origin.lng && (
            <p className="text-sm text-gray-600">
              Latitude: {formData.origin.lat}, Longitude: {formData.origin.lng}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Destino</label>
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 mb-2"
            onClick={() => setIsSelectingDestination(true)}
          >
            Selecionar no Mapa
          </button>
          {formData.destination.lat && formData.destination.lng && (
            <p className="text-sm text-gray-600">
              Latitude: {formData.destination.lat}, Longitude:{" "}
              {formData.destination.lng}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Cliente</label>
          <div className="space-y-2">
            <input
              type="text"
              name="client.name"
              value={formData.client.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Nome do Cliente"
              required
            />
            <input
              type="text"
              name="client.company"
              value={formData.client.company}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
              placeholder="Empresa"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-500"
        >
          Adicionar Entrega
        </button>
      </form>
      <div className="mt-6">
        <MapContainer
          center={[-23.55052, -46.633308]} // Exemplo: São Paulo
          zoom={13}
          className="h-64 w-full rounded-lg"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapClickHandler />
          {formData.origin.lat && formData.origin.lng && (
            <Marker position={[formData.origin.lat, formData.origin.lng]} />
          )}
          {formData.destination.lat && formData.destination.lng && (
            <Marker
              position={[formData.destination.lat, formData.destination.lng]}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default AddDeliveryForm;
