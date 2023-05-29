type PassengerType = {
  id: string;
  name: string;
  age: number;
};

const passengerList: PassengerType[] = [
  {
    id: 'KJSD93',
    name: 'Maria Anders',
    age: 20,
  },
  {
    id: 'KJSD94',
    name: 'Francisco Chang',
    age: 35,
  },
  {
    id: 'KJSD95',
    name: 'Anna Angelo',
    age: 28,
  },
];

const FirstQuestion = () => {
  return (
    <div className="flex justify-center">
      <table className="border-collapse border-2 border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border-2 border-gray-300 px-4 py-2">ID</th>
            <th className="border-2 border-gray-300 px-4 py-2">Name</th>
            <th className="border-2 border-gray-300 px-4 py-2">Age</th>
          </tr>
        </thead>

        <tbody>
          {passengerList.map((item) => (
            <tr key={item.id} className="hover:bg-gray-200/50">
              <td className="border-2 border-gray-300 px-4 py-2">{item.id}</td>
              <td className="border-2 border-gray-300 px-4 py-2">
                {item.name}
              </td>
              <td className="border-2 border-gray-300 px-4 py-2 text-center">
                {item.age}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FirstQuestion;
