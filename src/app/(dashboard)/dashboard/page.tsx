"use client";

import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Registrar os componentes do Chart.js
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

const TrucksPage = () => {
  // Dados fictícios para os gráficos
  const barData = {
    labels: ["Motoristas", "Veículos", "Entregas"],
    datasets: [
      {
        label: "Atividades",
        data: [35, 50, 120],
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981"],
        borderColor: ["#2563EB", "#D97706", "#059669"],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Motoristas", "Veículos", "Entregas"],
    datasets: [
      {
        data: [35, 50, 120],
        backgroundColor: ["#3B82F6", "#F59E0B", "#10B981"],
        borderColor: ["#2563EB", "#D97706", "#059669"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Gráficos de Atividades</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Gráfico de barras */}
        <div className="border-2 rounded p-4">
          <h3 className="text-lg font-medium mb-2">Resumo de Atividades</h3>
          <Bar data={barData} />
        </div>

        {/* Gráfico de pizza */}
        <div className="border-2 rounded p-4">
          <h3 className="text-lg font-medium mb-2">
            Distribuição de Atividades
          </h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
};

export default TrucksPage;
