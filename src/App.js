
import './App.css';
import {AiTwotoneShop,AiFillSetting,AiOutlinePlus,AiOutlineRight,AiFillCar} from 'react-icons/ai';
import {SiFacebooklive,SiSellfy} from 'react-icons/si';
import {IoIosSearch} from 'react-icons/io'
import {IoNotificationsSharp,IoLocationSharp} from 'react-icons/io5'
import {HiInbox,HiShoppingBag} from 'react-icons/hi'
import {MdSell,MdRequestPage} from 'react-icons/md'

const products = [
  {
    id: 1,
    name: 'Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/05/28/07/07/watermelon-7226708_960_720.png',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2021/10/12/22/24/mulled-wine-6704928_960_720.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2015/10/13/15/16/lemons-986304_960_720.jpg',
    imageAlt: '',
  },
  {
    id: 4,
    name: 'Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2019/03/02/16/26/man-4030112_960_720.jpg',
    imageAlt: '',
  },
  {
    id: 5,
    name: ' Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/14/06/35/smoothie-7320560_960_720.jpg',
    imageAlt: '',
  },
  {
    id: 6,
    name: 'Name',
    href: '#',
    price: '฿48',
    details:'รายละเอียด ข้อมูล',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/09/06/21/13/energy-saving-7437499_960_720.jpg',
    imageAlt: '',
  },
  // More products...
]



function App() {
  return (
    <div className=''>
      <MeunShop/>
    </div>
  )
}
function MeunShop(){
  return(
    <div className="flex bg-white h-fit">
      <div className=" shadow-xl w-1/4  "> 

       <div className='flex justify-between mx-3 mt-6'>
        <h1 className=' text-2xl font-bold '>Marketplace</h1>
        <button >
          <AiFillSetting className='rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 hover:opacity-75 '/> </button>
       </div>
        <div className='relative flex mt-3 mx-3 items-center text-gray-400 focus-within:text-gray-600'>
          
        <IoIosSearch className=' w-5 h-5 absolute ml-3 pointer-events-none rounded-full '/>
        <input 
          type='text'
          name='search'
          placeholder='Search Marketplace'
          autocomplete='off'
          aria-label='Search Marketplace'
          className='w-full px-9 py-1 font-medium placeholder-gray-500 text-black rounded-full border-none ring-2 ring-gray-300 focus:ring-gray-300 focus:ring-2 '>
        </input>

       </div>

        <hr className='mt-4 mx-4'/>

        <div className='flex flex-col mt-1 space-y-4 ... relative  pr-5'>
          <button className='w-full px-2 flex flex-row  overflow-hidden font-medium  rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <AiTwotoneShop className='hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />

            Browse all</button>
            <button className='w-full px-2 flex flex-row  overflow-hidden  font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <SiFacebooklive className='hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />

            Live shopping</button>
            <button className='w-full px-2 flex flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <IoNotificationsSharp className='hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />

            Notifications</button>
            <button className='w-full px-2 flex flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <HiInbox className=' hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />

            Inbox</button>

            <div className=' relative flex items-center m-0'>
             <h1 className='  font-medium absolute px-16 ' >Buying</h1>

            <button className='  w-full flex flex-row justify-between  overflow-hidden font-medium rounded-lg mx-2 sm:py-2 hover:bg-gray-200'>
            <HiShoppingBag className=' hover:fill-white rounded-full mx-2 bg-slate-200 w-8 h-8 border-4 border-slate-200  hover:bg-blue-400 hover:border-blue-400 ' />
            <AiOutlineRight className=' w-6 h-6 mt-1 ' />
            </button>
            </div>

            <div className=' relative flex items-center m-0'>
             <h1 className='font-medium absolute px-16 ' >Selling</h1>

            <button className='  w-full flex flex-row justify-between  overflow-hidden font-medium rounded-lg mx-2 sm:py-2 hover:bg-gray-200'>
            <MdSell className=' hover:fill-white rounded-full mx-2 bg-slate-200 w-8 h-8 border-4 border-slate-200  hover:bg-blue-400 hover:border-blue-400 ' />
            <AiOutlineRight className=' w-6 h-6 mt-1 ' />
            </button>
            </div>
            
            
            <button className=' w-full justify-center flex text-blue-500 flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 bg-sky-100 hover:bg-gray-200'>
            <AiOutlinePlus className=' fill-blue-500  mt-1 mr-1 ' />
            Create new listing</button>

          <hr className='mt-4 mx-4'/>
          <h1 className='mx-3 text-xl font-medium '>Fillters</h1>
          <h2  className='mx-3 text-lg  text-blue-500 font-medium'>Pak Kret . Within 2 kilometers</h2>
          <hr className='mt-4 mx-4'></hr>
          <h2 className='mx-3 text-2xl font-medium'>Categories</h2>
          <button className='w-full px-2 flex flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <AiFillCar className=' hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />
            Vehicles</button>
            <button className='w-full px-2 flex flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
            <SiSellfy className=' hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />

            Propery Rentals</button>
         <button className='w-full px-2 flex flex-row  overflow-hidden font-medium rounded-lg  mx-2  sm:py-2 hover:bg-gray-200'>
              <MdRequestPage className=' hover:fill-white rounded-full bg-slate-200 w-8 h-8 border-4 border-slate-200 mr-3 hover:bg-blue-400 hover:border-blue-400 ' />
            Apparel</button>
          
        </div>
        </div>
        <div className="w-3/4 h-fit "> 
         
        
        <div className='flex justify-between'>
          <h2 className="px-4 mt-2 text-2xl font-bold tracking-tight text-gray-900">Today's picks</h2>
          <div className='relative flex mt-3 mx-3 items-center'>
          <h1 className=' font-medium absolute ml-6 mt-1 text-blue-500 ' >ปากเกร็ด . 2 km</h1>

          <button >
          <IoLocationSharp className='mr-32 mt-2 w-5 h-5 fill-blue-500'/></button>

          </div>
    
     
        </div>
      
        <div className=" sm:py-7 sm:px-6  lg:max-w-7xl lg:px-5  ">
        <div className="grid grid-cols-3 gap-y-7 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-1">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">

              <div className="aspect-w-1 aspect-h-1 w-full h-96 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg font-medium text-gray-900">{product.price}</h3>
              <h3 className="mt-1 text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-1 text-ms  text-gray-500">{product.details}</p>
            </a>
          ))}
        </div>
        </div>
       </div>
       </div>

  )
}


export default App;
