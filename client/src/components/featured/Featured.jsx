import useFetch from "../../hooks/useFetch";
import pattayabg from '../../photo/pattayaimg'
import bsbg from '../../photo/cmbg'
import cmbg from '../../photo/bsbg'

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Pattaya,Bangsean,Changmai"
  );

  return (
    <div className="container mx-auto my-10 ">
      
      {loading ? (
        "Loading please wait"
      ) : (
        <div className="sm:flex sm:justify-between">
          <div className="relative mx-auto sm:mx-5 my-2 shadow-lg h-fit w-fit">
            <img
              src={pattayabg}
              alt=""
              className="rounded-lg w-[300px] h-[300px] md:w-[500px]  lg:h-[400px] object-cover blur-[1px] "
            />
            <div className="absolute bottom-10 left-10 text-lg ">
            <h1 className="mb-1 font-mono text-base  text-gray-100 lg:text-xl">
                Location: <br className="block md:hidden" />
                <span
                  className="inline-flex h-20 pt-2 overflow-x-hidden  animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
                >
                  Pattaya
                </span>
                <span
                  className="box-border inline-block w-1 h-7 ml-2 -mb-2 bg-white md:-mb-2 md:h-7 animate-cursor will-change-transform"
                ></span>
              </h1>
              <h2 className="text-white text-sm lg:text-lg">{data[0]} properties</h2>
            </div>
          </div>

          <div className="relative mx-auto sm:mx-5 my-2 shadow-lg h-fit w-fit">
            <img
              src={bsbg}
              alt=""
              className="rounded-lg w-[300px] h-[300px] md:w-[500px] lg:h-[400px] object-cover blur-[1px]"
            />
            <div className="absolute bottom-10 left-10 text-lg">

              <h1 className="mb-1 font-mono text-base  text-gray-100 lg:text-xl">
                Location: <br className="block md:hidden" />
                <span
                  className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
                >
                  Bangsean
                </span>
                <span
                  className="box-border inline-block w-1 h-7 ml-2 -mb-2 bg-white md:-mb-2 md:h-7 animate-cursor will-change-transform"
                ></span>
              </h1>

              <h2 className="text-white text-sm lg:text-lg">{data[1]} properties</h2>
            </div>
          </div>
          <div className="relative mx-auto sm:mx-5 my-2 shadow-lg h-fit w-fit">
            <img
              src={cmbg}
              alt=""
              className="rounded-lg w-[300px] h-[300px] md:w-[500px] lg:h-[400px]  object-cover blur-[1px]"
            />
            <div className="absolute bottom-10 left-10 text-lg">
            <h1 className="mb-1 font-mono text-base  text-gray-100 lg:text-xl">
                Location: <br className="block md:hidden" />
                <span
                  className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform"
                >
                  ChiangMai
                </span>
                <span
                  className="box-border inline-block w-1 h-7 ml-2 -mb-2 bg-white md:-mb-2 md:h-7 animate-cursor will-change-transform"
                ></span>
              </h1>
              <h2 className="text-white text-sm lg:text-lg">{data[2]} properties</h2>
            </div>
          </div>
        </div>
      )}
     
    </div>
  );
};

export default Featured;
