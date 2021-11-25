import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getapi, successapi } from "./action/index";
const Movie = (props) => {
  const success = useSelector((state) => state.changeNumber.movies);
  const main = success.Search;
  console.log(main)
  const dispatch = useDispatch();
  const fun = () => {
    dispatch(getapi(`https://www.omdbapi.com/?s=${props.tag}&apikey=6939b3d9`));
  };
  useEffect(() => {
    fun();
  }, [,props.tag]);
   

  return (
    <>
      {!main ? (
      <div className="container-fluild d-flex justify-content-center align-item-center">   
       <p style={{color:"#fff",marginTop:"250px",fontSize:"30px"}}>No Movie Found</p>
       </div>
 
      ) : (
        <>
          <div
            className="container-fluid d-flex flex-nowrap overflow-auto over mb-4"
            style={{ marginTop: "80px", marginBottom: "70px", height: "95vh" }}
          >
            {main.map((e, ind) => {
              return (
                <>
                  <div
                    key={ind}
                    className="card col-12 m-1 bg-dark divzoom"
                    style={{ width: "300px", height: "88vh" }}
                  >
                    <img
                      src={e.Poster}
                      className="card-img-top fluid"
                      style={{ width: "296px", height: "350px" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: "white" }}>
                        {e.Title}
                      </h5>
                      <h5 className="card-title" style={{ color: "white" }}>
                        Released Year: {e.Year}
                      </h5>
                      <h5
                        className="card-title"
                        style={{ color: "white", fontWeight: "300" }}
                      >
                        Type: {e.Type}
                      </h5>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <button className="btn btn-sm btn-outline-danger align-item-center">
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href={
                              "https://www.imdb.com/title/" +
                              e.imdbID +
                              "/mediaindex?ref_=tt_ov_mi_sm"
                            }
                            target="_blank"
                          >
                            Picture Gallery
                          </a>
                        </button>
                        <button className="btn btn-sm   btn-outline-danger align-item-center ">
                          <a
                            style={{ textDecoration: "none", color: "white" }}
                            href={
                              "https://www.imdb.com/title/" +
                              e.imdbID +
                              "/videogallery/?ref_=tt_ov_vi_sm"
                            }
                            target="_blank"
                          >
                            Watch Trailer
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Movie;
