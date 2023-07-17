const PaymentBlock = () => {
  return (
    <div className="bg-orange-50 h-full rounded-3xl p-7 flex flex-col justify-between">
      <div>
        Arrears (NGN)
        <h2 className="text-5xl font-black max-md:text-3xl">20,000</h2>
      </div>
      <div>
        Current Bill (NGN)
        <h2 className="text-5xl font-black max-md:text-3xl">20,000</h2>
      </div>
    </div>
  );
};

export default PaymentBlock;
