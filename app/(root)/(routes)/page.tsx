import SeparatorClient from "@/components/ui/separator-client";

const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Dashboard</h3>
      <p className="text-sm text-muted-foreground">
        Welcome to Next Js Dashboard.
      </p>
      <SeparatorClient />
    </div>
  );
};

export default RootPage;
