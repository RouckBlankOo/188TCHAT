export const Button = () => {
  return (
    <a
      href="#download"
      className="relative py-4 px-6 rounded-lg font-medium text-medium bg-gradient-to-b from-[#2E0D0DFF] to-[#B62706] shadow-[0px_0px_12px_#665680FF] inline-block whitespace-nowrap"
    >
      <div className="absolute inset-0">
        <div className="border rounded-lg border-red/20 absolute inset-0"></div>
      </div>
      <span>Download the App</span>
    </a>
  );
};
