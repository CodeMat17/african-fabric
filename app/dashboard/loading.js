'use client'

import {Spinner} from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="flex justify-center pt-20">
      <Spinner label='Please wait...' color='success' labelColor='success' />
    </div>
  );
}

export default Loading