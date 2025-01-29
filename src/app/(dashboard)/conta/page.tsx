//

// -----------------------------------------------------

"use client";

import { useState } from "react";
import {
  User,
  MapPinned,
  Mail,
  Phone,
  LogIn,
  Lock,
  Languages,
  Bell,
  CalendarClock,
  ReceiptText,
  History,
  CreditCard,
  Info,
  MessageCircle,
  CircleHelp,
} from "lucide-react";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return <CompanyInformationTab />;
      case "settings":
        return <SettingsTab />;
      case "subscriptions":
        return <SubscriptionsTab />;
      case "security":
        return <SecurityTab />;
      case "support":
        return <SupportTab />;
      default:
        return <CompanyInformationTab />;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 border-r">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full"></div>
          <h2 className="mt-4 text-lg font-bold">Nome da Empresa</h2>
          <p className="text-sm">geral@empresax.ao</p>
        </div>
        <nav className="space-y-4">
          <button
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "info" ? " text-[#5932EA]" : " hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("info")}
          >
            Informações
          </button>
          <button
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "settings"
                ? "  text-[#5932EA]"
                : " hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Definições
          </button>
          <button
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "subscriptions"
                ? "  text-[#5932EA]"
                : " hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("subscriptions")}
          >
            Planos de Subscrição
          </button>
          <button
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "security"
                ? "  text-[#5932EA]"
                : " hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Segurança
          </button>
          <button
            className={`w-full text-left p-2 rounded-lg ${
              activeTab === "support"
                ? "  text-[#5932EA]"
                : " hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("support")}
          >
            Suporte
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{""}</h1>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

// Tab Components

const SupportTab = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Suporte</h2>
      <p className="text-gray-600 mb-4">
        Obtenha ajuda e suporte para a sua conta.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title="FAQ"
          value=""
          icon={<CircleHelp className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Contacto"
          value="+244 923 123 456"
          icon={<MessageCircle className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Reportar Problema"
          value=" "
          icon={<Info className=" text-[#5932EA]" />}
        />
      </div>
    </div>
  );
};

const SecurityTab = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Segurança</h2>
      <p className="text-gray-600 mb-4">
        Configure as definições de segurança da sua conta.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title="Autenticação de Dois Fatores"
          value="Ativado"
          icon={<User className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Último Acesso"
          value="Há 2 dias"
          icon={<LogIn className=" text-[#5932EA]" />}
        />
      </div>
    </div>
  );
};

const SubscriptionsTab = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Planos de Subscrição</h2>
      <p className="text-gray-600 mb-4">
        Veja e gerencie os planos de subscrição da sua conta.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title="Plano Atual"
          value="Plano Premium"
          icon={<History className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Data de Renovação"
          value="12 de Dezembro de 2022"
          icon={<CalendarClock className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Histórico de Pagamentos"
          value="Ver Histórico"
          icon={<ReceiptText className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Metódos de Pagamento"
          value="Cartão de Crédito"
          icon={<CreditCard className=" text-[#5932EA]" />}
        />
      </div>
    </div>
  );
};

const SettingsTab = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Definições</h2>
      <p className="text-gray-600 mb-4">
        Configure as definições da sua conta.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title={"Senha"}
          value={"********"}
          icon={<Lock className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Notificações"
          value="Ativado"
          icon={<Bell className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Idioma"
          value="Português"
          icon={<Languages className=" text-[#5932EA]" />}
        />
      </div>
    </div>
  );
};

const CompanyInformationTab = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Informações da Empresa</h2>
      <p className="text-gray-600 mb-4">
        Faça a gestão das informações da sua empresa.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoCard
          title="Nome"
          value="Super Fornitures, LDA"
          icon={<User className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Sede"
          value="Luanda, Angola"
          icon={<MapPinned className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Telefone"
          value="+244 923 123 456"
          icon={<Phone className=" text-[#5932EA]" />}
        />
        <InfoCard
          title="Email"
          value="geral@empresa.ao"
          icon={<Mail className=" text-[#5932EA]" />}
        />
      </div>
    </div>
  );
};

const InfoCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="p-4 rounded-lg shadow flex items-center space-x-4">
      <div className="w-10 h-10 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </div>
  );
};

export default AccountPage;
