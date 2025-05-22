export const Button = () => {
  return (
    <button className="relative py-4 px-6 rounded-lg font-medium text-medium bg-gradient-to-b from-[#2E0D0DFF] to-[#8A2020FF] shadow-[0px_0px_12px_#665680FF]">
      <div className="absolute inset-0">
        <div className="border rounded-lg border-white/20 absolute inset-0"></div>
      </div>
      <span>Download the App</span>
    </button>
  );
};
