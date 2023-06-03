export function Inbox() {
  return (
    <section className="grid grid-cols-2 border border-gray-200 mt-8 h-screen max-h-[500px]">
      <div className="py-4 border-r-2">
        <h3 className="font-bold text-xl border-b p-2">Inbox</h3>
        <div className="p-2 border-b">
          <h4 className="font-bold">Hello</h4>
          <span className="text-blue-500 font-bold">Welcome</span>
          <p className="text-gray-300">Your temp e-mail address is ready...</p>
        </div>
      </div>
      <div className="border-r">
        <div className="bg-gray-200 border-b p-4"></div>
        <h3 className="font-bold bg-gray-200 text-xl border border-gray-100 p-2">
          Bem-vindo!
        </h3>
        <div className="p-2">
          <p>
            Hi dfr,
            <br />
            <span className="bg-gray-300 p-1">
              Your temp e-mail address is ready
            </span>
            <br /> if need help read the information below and do not hesitate
            to contact us.
          </p>
          <p className="mt-2">
            All the best, <br />
            DropMail
          </p>
        </div>
      </div>
    </section>
  );
}
