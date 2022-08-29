import React, { useState, useEffect } from "react";
// import "./Similar_product.css"
import axios from "axios";
import styles from "./Similar_product.module.scss";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useParams, useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const Similar_product = (props) => {

  let navigate = useNavigate();

  const [Count, setCount] = useState(0);
  const [similarProduct, setSimilarProduct] = useState([]);
  const [storetoken, setstoretoken] = useState(props.token);
  const [keyword, setKeyword] = useState(props.keyword);
  const [keyword2, setKeyword2] = useState(props.keyword2);
  const [producttoken, setProducttoken] = useState(props.token);
  const [show, setshow] = useState(false);
  const [showerr, setshowerr] = useState("");
  const [emptySimilar, setemptySimilar] = useState(false)
  const [loading, setLoading] = useState(true);
  const [similarProduct2, setSimilarProduct2] = useState(false);
  const { token } = useParams();

  // useEffect(() => {
  //   getSimilarProduct();
  // }, [Count]);

  useEffect(() => {
    getSimilarProduct();
  }, [props.keyword]);




  const [loadSimilarProduct, setloadSimilarProduct] = useState(false);

  const getSimilarProduct = async () => {
    setLoading(true);
    setemptySimilar(true)

    // console.log(keyword);

    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("keyword", props.keyword);
    formData.append("keyword2", props.keyword2);
    formData.append("producttoken", props.producttoken);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-recommended-products`,
        data: formData,
      }).then((res) => {

        if (res.data.success == false) {
          setSimilarProduct([]);
          setshowerr(res.data.message);
          // console.log(similarProduct)
          setemptySimilar(true)
          setLoading(false)

        } else {
          setSimilarProduct(res.data);
          // console.log(similarProduct)
          setLoading(false);
          setemptySimilar(false)



        }
      });
    } catch (err) {
      // console.log(err);
      setLoading(true);
      setSimilarProduct2(false);
      setemptySimilar(true)


    }
  };



  // CAROUSEL FOR TRENDINGS
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const gotoProduct = (token) => {
    navigate(`/p/${token}`);
    setCount(990);
    window.location.href = `/p/${token}`;
    // console.log(Count);
  };

  return (
    <div className="similar-whole-whole">
      <h3>Similar Products</h3>

      <MoonLoader color="#1559BD" size={30} loading={loading} />

      {emptySimilar == false ? (
        <>
          <Carousel responsive={responsive} className={styles.carousel_cont}>
            {similarProduct.map((similarProduct) => {
              const { price_th, description, productname, coverimage, token } =
                similarProduct;
              return (
                <div className={styles.each_store_item_efe} style={{cursor: "pointer"}}>
                  <div
                    className={styles.link_to_single_product}
                    onClick={(e) => gotoProduct(token)}
                  >
                    <div className={styles.item_img_efe}>
                      <img src={coverimage} alt="" />
                    </div>
                    <div className={styles.eachstoretextitemefe}>
                      <p>{productname}</p>
                      <h3>{description}</h3>
                      <h4> N {price_th}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </>
      ) : (
        <>
          <div className={styles.no_result}>
         No Result at the moment
          </div>
        </>
      )}
    </div>
  );
};

export default Similar_product;
