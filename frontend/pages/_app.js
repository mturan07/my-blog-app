// import "@/styles/globals.css";
// import Link from 'next/link';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <nav className="bg-blue-500 p-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="text-white font-bold text-lg">
//             My Blog App
//           </div>
//           <div>
//             <Link href="/" legacyBehavior>
//               <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Home</a>
//             </Link>
//             <Link href="/add-blog" legacyBehavior>
//               <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">Add Blog</a>
//             </Link>
//           </div>
//         </div>
//       </nav>
//       <Component {...pageProps} />
//     </>
//   );
// }

import "@/styles/globals.css";
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav className="bg-blue-500 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">
            My Blog App
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Home
            </Link>
            <Link href="/add-blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Add Blog
            </Link>
          </div>
        </div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
