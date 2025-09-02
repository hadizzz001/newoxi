"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation'
import { motion } from "framer-motion";


const Body = () => {
  const searchParams = useSearchParams()
  const [allTemp, setTemp] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Search query parameters from URL
  const search = searchParams.get('q');
  const search2 = searchParams.get('cat');








  const fetchProducts = async (pageNum = 1) => {
    try {
      const params = new URLSearchParams();
      params.append('page', pageNum);
      params.append('limit', 10); // or any number you want

      if (search) params.append('q', search);
      if (search2) params.append('cat', search2);

      const res = await fetch(`/api/productsz1?${params.toString()}`);
      const data = await res.json();

      setTemp(data.products || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };


  useEffect(() => {
    fetchProducts(page);
  }, [search, search2, page]);


  const handleNextPage = () => {
    if (page < totalPages) setPage(prev => prev + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(prev => prev - 1);
  };






  return (


    <>

      <div className="br_min-h-screen br_relative mt-20">

        <header className="br_text-white  br_p-3 br_pt-11 md:br_py-20 br_flex md:br_justify-center">
          <div className="br_text-left md:br_max-w-[600px] lg:br_max-w-[800px] md:br_text-center br_flex br_flex-col br_gap-2  md:br_gap-4 md:br_items-center">
            <h1 className="myGray mytitle2">
              Are you looking for one of these?
            </h1>
          </div>
        </header>
        <div className="br_flex">






          <div className="br_flex-1">





            <div className="br_@container">
              <div
                className="br_group/tile-grid br_grid br_grid-flow-dense br_gap-1 br_py-1 br_grid-cols-2 sm:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] sm:br_px-1 lg:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))] supports-[container-type]:sm:br_grid-cols-2 supports-[container-type]:sm:@[640px]:br_grid-cols-[repeat(auto-fill,minmax(250px,1fr))] supports-[container-type]:lg:@[1024px]:br_grid-cols-[repeat(auto-fill,minmax(285px,1fr))]"

              >








{allTemp && allTemp.length > 0 ? (
  allTemp.map((item, index) => {
    const shortDesc =
      item.description && item.description.length > 10
        ? item.description.replace(/<[^>]+>/g, "").substring(0, 40) + "..."
        : item.description?.replace(/<[^>]+>/g, "") || "";

    return (
      <a className="mb-5" key={item._id} href={`/product?id=${item._id}`}>
        <motion.div className=" ">
          {/* 1st Row - Square Image */}
          <div className="w-full aspect-square overflow-hidden relative ">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {(
              (item.type === "single" && parseInt(item.stock) === 0) ||
              (item.type === "collection" &&
                item.color?.every(color =>
                  color.sizes?.every(size => parseInt(size.qty) === 0)
                ))
            ) && (
              <div className="absolute inset-0 bg-gray-600 bg-opacity-70 text-white flex items-center justify-center text-lg font-bold z-10 rounded">
                Out of Stock
              </div>
            )}
          </div>

          {/* 2nd Row - Title */}
          <div className="myProduct1 px-2">{item.title}</div>
 

          {/* 4th Row - Discount & Price */}
          <div className="px-2 flex justify-between items-center">
            <span className=" text-gray-500 myP2">
              ${parseFloat(item.price).toFixed(2)}
            </span>
          
          </div>
        </motion.div>
      </a>
    );
  })
) : (
  <div className="home___error-container">
    <h2 className="text-black text-xl dont-bold">...</h2>
  </div>
)}















              </div>

              <div className="mt-4 mb-4 flex justify-center items-center space-x-4">
                <button
                  onClick={() => setPage(p => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 rounded disabled:opacity-50 myGray text-3xl"
                  style={{ color: '#999' }}
                >
                  &#8592;
                </button>

                <span
                  className="flex items-center justify-center text-white text-[11px]"
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#1f1a17',
                    borderRadius: '50%',
                  }}
                >
                  {page}
                </span>

                <button
                  onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 rounded disabled:opacity-50 myGray text-3xl"
                  style={{ color: '#999' }}
                >
                  &#8594;
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div>

      </div>








    </>








  )
}

export default Body