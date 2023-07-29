import Heading from "../../components/blocks/dashboardblock/heading";
import PaymentTab from "../../components/blocks/Dashpaymentblock/PaymentTab";

const Payment = () => {
  return (
    <div className=" max-h-full  w-[95%] m-auto ">
      <div className="max-md:hidden sticky top-0 ">
        <Heading title="Payment" />
      </div>
      {/* payment tab */}
      <div className="mb-3">
        <PaymentTab />
      </div>

      {/* account overview */}
      {/* <div className="mt-16">
        <p className="text-xl">Account Overview</p>
        <div className="w-full p-7  border border-gray-200 mt-5 rounded-md grid gap-8 grid-cols-3 max-lg:grid-cols-1">
          <div className="max-lg:order-2 col-span-2">
            <HistoryBlock />
          </div>
          <div className="max-lg:order-1 h-full">
            <PaymentBlock />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Payment;
