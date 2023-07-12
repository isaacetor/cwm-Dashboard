import FeatureBlock from "./featureBlock";

const RecomendedLinks = () => {
  return (
    <div className="h-[28vh] bg-white">
      <div className="grid h-full gap-3 grid-cols-5">
        <div className="col-span-2 flex justify-center flex-col h-full text-slate-700">
          <h1 className="text-3xl">Evening, Isaac!🌟</h1>
          <p className="text-gray-500 font-light">
            Welcome to your dashboard. See a quick summary of your transactions
            below.
          </p>
        </div>
        <FeatureBlock />
        <FeatureBlock />
        <FeatureBlock />
      </div>
    </div>
  );
};

export default RecomendedLinks;
