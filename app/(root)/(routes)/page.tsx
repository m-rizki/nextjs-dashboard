import SeparatorClient from "@/components/ui/separator-client";

const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Dashboard</h3>
      <p className="text-sm text-muted-foreground">
        Project repository :{" "}
        <a
          href="https://github.com/m-rizki/nextjs-dashboard"
          target="_blank"
          className="text-blue-700 underline"
        >
          https://github.com/m-rizki/nextjs-dashboard
        </a>
      </p>
      <SeparatorClient />
    </div>
  );
};

export default RootPage;
