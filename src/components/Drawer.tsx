import React from "react";

interface DrawerProps {
  open: boolean;
  close: (value: boolean) => void;
}

const Drawer = (props: DrawerProps) => {
  return (
    <div
      className={`absolute left-0 top-0 z-50 h-svh w-svw transform bg-black transition-transform duration-100 ${props.open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div>
        <button className="text-white" onClick={() => props.close(false)}>
          {" "}
          close
        </button>
      </div>
    </div>
  );
};

export default Drawer;
