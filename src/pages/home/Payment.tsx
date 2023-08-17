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
    </div>
  );
};

export default Payment;
