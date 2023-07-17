const HistoryBlock = () => {
  //   return (
  //     <div className="bg-gradient-to-b from-orange-50  p-7 rounded-lg">
  //           HistoryBlock

  //           {/* Table */}

  //     </div>
  //   );

  const tableItems = [
    {
      name: "Liam James",
      email: "20, Haruna Estate, Orege",
      position: "10/06/2022",
      salary: "$100K",
    },
    {
      name: "Olivia Emma",
      email: "20, Haruna Estate, Orege",
      position: "10/06/2022",
      salary: "$90K",
    },
    {
      name: "William Benjamin",
      email: "20, Haruna Estate, Orege",
      position: "10/06/2022",
      salary: "$80K",
    },
    {
      name: "Henry Theodore",
      email: "20, Haruna Estate, Orege",
      position: "10/06/2022",
      salary: "$120K",
    },
    {
      name: "Amelia Elijah",
      email: "20, Haruna Estate, Orege",
      position: "10/06/2022",
      salary: "$75K",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-50">
      <div className="overflow-x-auto">
        {tableItems.length <= 1 ? (
          <>No Transactions yet</>
        ) : (
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-orange-100 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Address</th>
                <th className="py-3 px-6">Date</th>
                <th className="py-3 px-6">Amount</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableItems.map((item, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HistoryBlock;
