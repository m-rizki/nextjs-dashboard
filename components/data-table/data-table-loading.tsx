import React from 'react'

import Loader from "@/components/ui/loader";

const DataTableLoading = () => {
  return (
    <div className="flex flex-col h-[50vh] w-full items-center justify-center">
      <Loader />
      <p>Loading data...</p>
    </div>
  )
}

export default DataTableLoading