import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home (){
  return(
    <main>
    <Navbar />
      <div className="flex flex-col parent max-w-6xl mx-auto">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        </Head>
          <div className="flex  justify-center items-center h-1/4 p-10">
            <div className="space-y-5 basis-4/7 p-20px">
              <h2>“Meow meow meowww meow meow meow meoww meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meow meoowow meow meow meow meow meow meow mewow meow meow meow meow meow .”
                Artinya :
              </h2>
              <h1>Temukan tutorial coding dasar dan jawaban dari tugasmu disini!</h1>
              <h2>Meoooooowwwwwwwwwwww (Terima kasih).</h2>
            </div>
            <img className="relative object-contain max-h-full max-w-full" src="/maskot.svg" />
          </div>
          <div className="p-10 h-1/4">
            <div >
              <h1 className="text-right p-10">
                Mau belajar bahasa apa?
              </h1>
              <div className="flex justify-around p-10">
                <div className="flex flex-col items-center p-10">
                  <Image 
                    className="relative"
                    src="/python.svg"
                    alt="python logo"
                    width={180}
                    height={37}
                  />
                  <h1>
                    Python
                  </h1>
                  <h2>
                    Simple, lebih lambat
                  </h2>
                </div>
                <div className="flex flex-col items-center p-10">
                  <Image 
                    className="relative"
                    src="/c.svg"
                    alt="c++ logo"
                    width={180}
                    height={37}
                  />
                  <h1>
                    C++
                  </h1>
                  <h2>
                    efisien, cepat, strict
                  </h2>
                </div>
              </div>
            </div>
            <div className="p-10">
              <h1 className="text-left py-10">
                Ada tugas? Coba cari siapa tau ada :3
              </h1>
              <div>
                <form class="flex items-center opacity-50 bg-white rounded-full shadow-md">
                  <input 
                    type="text"
                    placeholder="Search"
                    className="px-5 py-3 bg-transparent rounded-full focus:outline-none text-black"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-12 h-12 text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none ml-auto"
                  >
                    <svg 
                      class="w-6 h-6" 
                      fill="none" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 22L15.5 15.5M17 10.5C17 14.0899 14.0899 17 10.5 17C6.91015 17 4 14.0899 4 10.5C4 6.91015 6.91015 4 10.5 4C14.0899 4 17 6.91015 17 10.5Z"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div classname="h-1/4 p-10">
            <h1 className="text-right p-10">
            Bergabunglah dengan komunitas kami! 
            </h1>
            <div className="flex flex-col items-center rounded-lg bg-white opacity-50 mx-20 my-20 p-20px">
              <Image 
                className="relative"
                src="/WA.svg"
                alt="WA logo"
                width={120}
                height={37}
              />
              <h1 className="text-black">
                Link WA
              </h1>
            </div>
          </div>
          <div className="h-1/4 p-10">
            <h1 className="text-left">
            Tentang kami
            </h1>
            <h2 className="text-center m-20">
              Website ini merupakan website ‘serius’ pertama yang dibuat oleh seorang berinisial ‘R’. Dari dibuatnya website ini, kami berharap dapat mengmbangkan skill kami, menambah relasi, dan menjadi tambahan uang jajan. Oleh karena itu, kritik saran yang membangun sangat diharapkan. 
              Terima kasih selamat belajar!
            </h2>
          </div>
      </div>
  </main>
  )
}
