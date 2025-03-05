import logo from '../assets/AeroCET-logo.png'
export const NotFound = () =>{
          return(
              <>
              <div className="flex-1 justify-center items-center flex h-svh flex-col">
                <img src={logo}></img>
                        <h1 className="text-3xl my-10 text-center">
                                  404 Error Page not found!
                        </h1>
              </div>
              </>
          )    
    }