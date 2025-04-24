import LoginForm from "/components/LoginForm";
import RegisterForm from "/components/RegisterForm";
import MessageFeed from "/components/MessageFeed";
import CreateMessage from "/components/CreateMessage";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-8 gap-12">

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Willkommen bei der SNIPE Solutions Community!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Hier kannst du dich mit anderen SNIPE Solutions Mitgliedern
          austauschen, Ideen teilen und gemeinsam Projekte voranbringen.{" "}
        </p>
      </div>
        <div className="w-full">
            <CreateMessage />
        </div>
        <div className="w-full">
            <MessageFeed />
      </div>
      <div className="w-full">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Login oder Registriere dich
        </h1>
      </div>
      <div className="w-full">
        <LoginForm />
      </div>
      <div className="w-full">
        <RegisterForm />
      </div>
    </main>
  ); }


