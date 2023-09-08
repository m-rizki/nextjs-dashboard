"use-client";

import Loader from "@/components/ui/loader";

const Loading = () => {
  return (
    <div className="flex h-[75vh] w-full items-center justify-center">
      <Loader />
      <p>Loading Details...</p>
    </div>
  );
};

export default Loading;
