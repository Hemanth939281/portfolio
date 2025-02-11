import Link from "next/link"

const Header = () => {

    const links = [
        {name: 'Home', url: "/"},
        {name: 'About', url: "/about"},
        {name: 'Projects', url: "/projects"},
        {name: 'Contact me', url: "/contact"}
      ]
    return (
        
      <div className="flex justify-center items-center py-6 mb-10">
      <div className="m-4 lg:m-auto w-full lg:w-auto text-center flex flex-col lg:flex-row gap-6 text-white text-lg px-4 py-2 rounded-lg bg-red-500 blur-xs shadow-white shadow-md">
        {
          links.map((link) => (

            <Link href={link.url} key={link.name} className="block p-2 lg:px-4 py-2 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition duration-300 ease-in-out cursor-pointer">
              {link.name}
            </Link>
          ))
        }
      </div>
    </div>
    )
}

export default Header