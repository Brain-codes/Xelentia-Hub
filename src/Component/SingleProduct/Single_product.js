import { React, useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import TopNavbar from "../TopNavbar/TopNavbar";
import "./Single_product.css";
import axios from "axios";
// import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "react-multi-carousel/lib/styles.css";
import Similar_product from "./Similar_product";
import styles from "./Similar_product.module.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useResolvedPath,
} from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import Spinner from "react-bootstrap/Spinner";
import Mobilesignup from "../../mobilesignup/Mobilesignup";
import { PulseLoader } from "react-spinners";
import { SyncLoader } from "react-spinners";
import { PuffLoader } from "react-spinners";
import { css } from "@emotion/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./similarproduct.scss";
import { message } from "antd";
import Reviews from "./Reviews";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";

// import {imageavailable} from "../../Images/notavailable.png"
// import Mobilesignup from "../mobilesignup/Mobilesignup";

toast.configure();

const Single_product = (props) => {
  let navigate = useNavigate();

  // BOOTSTRAP PRODUCT IMAGE CAROUSEL
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const notify = () => {
    toast.info("Please login...");
    setTimeout(() => {
      // eslint-disable-next-line no-restricted-globals
      location.assign("/Account");
    }, 2000);
  };

  const [Count, setCount] = useState(0);
  const [productDetails, setProductDetails] = useState([]);
  //   const [storeName, setStoreName] = useState("");
  // const [producttoken, setProducttoken] = useState(props.token);
  const [productImage, setProductImage] = useState([]);
  const [productAdons, setProductAdons] = useState([]);
  const [similarProduct, setSimilarProduct] = useState([]);
  // const [storetoken, setstoretoken] = useState(props.token);
  const [showerr, setshowerr] = useState("");
  const [ptitle, setptitle] = useState("Products");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [FavouriteData, setFavouriteData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [contload, setContload] = useState(false);
  const [resetP, setResetP] = useState("");
  const [adondis, setadondis] = useState(" ");
  const [revPtoken, setRevPtoken] = useState("");
  const [increase, setIncrease] = useState(1);

  // const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  // FORMULARS FOR ADDONS

  const [k, setK] = useState(0); //Constant
  const [p, setP] = useState(0); //Price
  const [k_th, setK_th] = useState(""); // constant with coma in the right places
  const [d, setD] = useState(0); //Delivery
  const [s, setS] = useState(0); //Size
  const [c, setC] = useState(0); //Color
  const [q, setQ] = useState(1); //Quantity 1 by deafult

  const [konn, setkonn] = useState(0);
  const [prr, setprr] = useState(0);
  const [Count1, setCount1] = useState("");
  const [efe, setefe] = useState("");

  // const passValues = () => {

  // }

  const formular = () => {
    setK(Number(q) * (Number(p) + Number(d) + Number(s) + Number(c)));
    setK_th(
      (
        Number(q) *
        (Number(p) + Number(d) + Number(s) + Number(c))
      ).toLocaleString("en-NG", { currency: "NGN" })
    );
  };

  // ADON VALUES
  const [ValS, setValS] = useState("hi");
  const [valC, setValC] = useState("");
  const [valQ, setValQ] = useState("");
  const [valD, setValD] = useState("");

  const updatek = (kon, pr, val) => {
    setprr(pr);
    setkonn(kon);
    // console.log(val);
    // console.log(pr);

    if (kon == "size") {
      setValS(val);
      setS(pr);
      formular();
      formular();
      localStorage.setItem("sizeValue", val);
      // console.log(localStorage.getItem("sizeValue"));
    } else if (kon == "color") {
      setValC(val);
      setC(pr);
      formular();
      formular();
      localStorage.setItem("colorValue", val);
      // console.log(localStorage.getItem("colorValue"));
    } else if (kon == "delivery") {
      getDeliveryValue(pr);
              formular();
              formular();
      // localStorage.setItem("sizeValue", val);
      // console.log(localStorage.getItem("sizeValue"));
    } else if (kon == "quantity") {
      if (pr > 0) {
        setValQ(val);
        setQ(pr);
        formular();
        formular();
      }
    }

    setCount1(Math.random());
  };

  const updatekk = (kon, pr, val) => {
    setprr(pr);
    setkonn(kon);

    if (kon == "size") {
      setValS(val);
      setS(pr);
      formular();
      formular();
      // console.log(ValS);
    } else if (kon == "color") {
      setValC(val);
      setC(pr);
      formular();
      formular();
    } else if (kon == "delivery") {
      getDeliveryValue(pr);
                    formular();
                    formular();

    } else if (kon == "quantity") {
      if (pr > 0) {
        // setValQ();
        setQ(pr);
        formular();
        formular();
      }
    }
  };

    const resset = (kon, pr, val) => {
      console.log(productDetails.quantity);

      const prr = Number(pr);
      const quantity = Number(productDetails.quantity);
      if (prr <= quantity) {
        if (pr > 0) {
          setQ(1);
          const nq = prr;
          localStorage.setItem("nq", prr);
          updatek(kon, nq, val);

          console.log(kon, nq, val);
        } else {
          console.log("too small");
          setQ(1);
          const nq = 1;
          localStorage.setItem("nq", 1);
          updatek(kon, nq, val);

          console.log(kon, nq, val);
        }
      } else {
        console.log("too big");
        setQ(1);
        const nq = quantity;
        localStorage.setItem("nq", quantity);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      }
    };

  // INPUT UPDATE QUANTITY
  const updateQuantityA = (kon, pr, val) => {
    console.log(productDetails.quantity);

    const prr = Number(pr);
    const quantity = Number(productDetails.quantity);
    if (prr <= quantity) {
      if (pr > 0) {
        setQ(quantity);
        const nq = prr;
        localStorage.setItem("nq", prr);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      } else {
        console.log("too small");
        setQ(1);
        const nq = 1;
        localStorage.setItem("nq", 1);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      }
    } else {
      console.log("too big");
      setQ(quantity);
      const nq = quantity;
      localStorage.setItem("nq", quantity);
      updatek(kon, nq, val);

      console.log(kon, nq, val);
    }
  };

  const updateQuantityB = (kon, pr, val) => {
    console.log(productDetails.quantity);

    const prr = Number(pr) + 1;
    const quantity = Number(productDetails.quantity);
    if (prr <= quantity) {
      if (pr > 0) {
        setQ(quantity);
        const nq = prr;
        localStorage.setItem("nq", prr);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      } else {
        console.log("too small");
        setQ(1);
        const nq = 1;
        localStorage.setItem("nq", 1);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      }
    } else {
      console.log("too big");
      setQ(quantity);
      const nq = quantity;
      localStorage.setItem("nq", quantity);
      updatek(kon, nq, val);

      console.log(kon, nq, val);
    }
  };

  const updateQuantityC = (kon, pr, val) => {
    console.log(productDetails.quantity);

    const prr = Number(pr) - 1;
    const quantity = Number(productDetails.quantity);
    if (prr <= quantity) {
      if (prr > 0) {
        setQ(quantity);
        const nq = prr;
        localStorage.setItem("nq", prr);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      } else {
        console.log("too small");
        setQ(1);
        const nq = 1;
        localStorage.setItem("nq", 1);
        updatek(kon, nq, val);

        console.log(kon, nq, val);
      }
    } else {
      console.log("too big");
      setQ(quantity);
      const nq = quantity;
      localStorage.setItem("nq", quantity);
      updatek(kon, nq, val);

      console.log(kon, nq, val);
    }
  };

  useEffect(() => {
    updatekk(konn, prr);
  }, [Count1]);

  const { token } = useParams();

  useEffect(() => {
    // setProducttoken(props.token);
    setLoading(true);
    getProductDetails();
    getProductImage();
    getProductAdons();
  }, [Count]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loadSimilarProduct, setloadSimilarProduct] = useState(false);

  const loaderCSS = css`
    height: 100vh;
    background-color: white;
    z-index: 800;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
  `;

  const loaderCSS2 = css`
    width: 10px;
    height: 10px;
  `;

  // padding: 45% ;
  // position: fixed;
  // height : 80vh;
  // z-index: 200;
  // background-color: white;
  // width: 80%;

  const getProductDetails = async () => {
    const formData = new FormData();
    setLoading(true);
    setContload(true);

    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);

    // setSpin(true);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-product-details`,
        data: formData,
      }).then((res) => {
        // console.log(res.data);
        if (res.data.success == true) {
          localStorage.setItem("nq", 1);
          setProductDetails(res.data);
          setptitle(res.data.productname);
          setP(res.data.price);
          setK_th(res.data.price_th);
          setK(res.data.price);
          setResetP(res.data.price_th);
          setLoading(false);
          setContload(false);
          setRevPtoken(res.data.token);
          setloadSimilarProduct(true);
          getSimilarProduct(
            res.data.productname,
            res.data.description,
            res.data.token
          );
        } else {
          setLoading(false);
          setContload(false);
          setProductDetails([]);
          navigate("/p/not-found");
        }
      });
    } catch (err) {
      // console.log(err);
      setLoading(true);
      setContload(true);
    }
  };

  // ADDING TO FAVOURITES

  const [adding, setAdding] = useState(false);

  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });

  const getSaveFavourite = async () => {
    setLoading2(true);
    setAdding(true);

    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);
    formData.append("usertoken", user.usertoken);

    // setSpin(true);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/save-favorites`,
        data: formData,
      })
        // setProducts(res.data);
        // return res.data;

        .then((res) => {
          // console.log(res);
          if (res.data.success == false) {
            setLoading2(false);
            setAdding(false);

            setFavouriteData([]);
            toast.info("Something went wrong please try again");

            //    console.log(storeDetails)
          } else {
            setLoading2(false);
            setAdding(false);

            setFavouriteData(res.data);
            message.success(res.data.message);

            // console.log(res.data);
          }
        });
    } catch (err) {
      // console.log(err);
      // console.log(token);
      setLoading2(false);
      setAdding(false);

      message.success(err.message);

      // console.log("hi")
      //   getStoreDetails();
    }
  };

  // GETTING PRODUCT IMAGES

  const [loadingimg, setLoadingimg] = useState(false);

  const getProductImage = async () => {
    setLoadingimg(true);

    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);

    // setSpin(true);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-product-images`,
        data: formData,
      }).then((res) => {
        if (res.data.success == false) {
          setProductImage([]);
          setLoadingimg(false);
          // console.log(productImage);
        } else {
          setProductImage(res.data);
          setLoadingimg(true);
          // console.log(productImage);
          toast.err(res.data.message);
        }
      });
    } catch (err) {
      setLoadingimg(true);
    }
  };

  useEffect(() => {
    getAdonStste();
  }, []);

  // GETTING ADON STATE

  const [adonState, setAdonState] = useState(false);

  const getAdonStste = async () => {
    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/getAdonStats`,
        data: formData,
      }).then((res) => {
        if (res.data.success === true) {
          setAdonState(res.data);
        } else {
          setAdonState(res.data);
        }
      });
    } catch (err) {}
  };

  //  GET PRODUCT ADONS

  const [falseAdon, setFalseAdon] = useState(true);

  const getProductAdons = async () => {
    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("producttoken", token);

    // setSpin(true);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-product-addon`,
        data: formData,
      }).then((res) => {
        if (res.data.success == false) {
          setProductAdons([]);
          setFalseAdon(false);
        } else {
          setProductAdons(res.data);
          // toast.err(res.data.message);
          setFalseAdon(true);
          // console.log(productAdons);
          // console.log(res.data);

          // console.log(res.data);
        }
      });
    } catch (err) {
      // setFalseAdon(false);
      // console.log(err);
      // console.log(token);
      // toast.info(err.message);
      // console.log("hi")
      //   getStoreDetails();
    }
  };

  //  DELIVERY COLLECT
  const [id, setId] = useState(" ");

  const getDeliveryValue = (e) => {
    setId(e);
    // const adonDel =
    const deliveryIndex = productAdons.findIndex((m) => m.id === e);
    // console.log(deliveryIndex);
    const delVal = productAdons[deliveryIndex].adon_value;
    const delPrice = productAdons[deliveryIndex].adon_price;

    setValD(delVal);
    setD(delPrice);
    formular();
    formular();
    localStorage.setItem("deliveryValue", delVal);
    // console.log(localStorage.getItem("deliveryValue"));
    // console.log(delVal)
  };

  // this is for similar products

  const getSimilarProduct = async (name, desc, token) => {
    const formData = new FormData();
    formData.append("apptoken", process.env.REACT_APP_RENI_TOKEN);
    formData.append("keyword", name);
    formData.append("keyword2", desc);
    formData.append("producttoken", token);

    try {
      const res = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_BASE}/v1/nicco_renidev/get-recommended-products`,
        data: formData,
      }).then((res) => {
        if (similarProduct === []) {
          setSimilarProduct(res.data);
          setshowerr(res.data.message);
        } else {
          setSimilarProduct(res.data);
        }
      });
    } catch (err) {}
  };

  // end of similar prosudtc ...

  // PLUS QUANTITY
  const [aQ, setAQ] = useState(1);

  const plusQuantity = (kon, q, val) => {
    if (aQ < productDetails.quantity) {
      setAQ(Number(q) + 1);
      updatek(kon, q, val);
    } else if (aQ > productDetails.quantity) {
      setAQ(Number(q) + 1);
      updatek(kon, q, val);
    } else {
      setAQ(productDetails.quantity);
      updatek(kon, q, val);
    }
    console.log(aQ);
  };

  const plusQuantity2 = (kon, q, val) => {
    if (q < productDetails.quantity) {
      setQ(Number(q) + 1);
      updatek(kon, q, val);
    } else if (q > productDetails.quantity) {
      setQ(productDetails.quantity);
      updatek(kon, q, val);
    } else {
      setQ(productDetails.quantity);
      updatek(kon, q, val);
    }

    const nq = Number(localStorage.getitem("nq")) + 1;
    localStorage.setItem("nq", nq);
    console.log(kon, q, val, productDetails.quantity);
    console.log(nq);
  };

  const gotoProduct = (token) => {
    navigate(`/p/${token}`);
    setCount(2);
    // window.location.href = `/p/${token}`;
  };


  const reset = () => {
    setK_th(resetP);
    setS(0);
    setC(0);
    setD(0);
    // setQ(1);
    //     setQ(1);

    // console.log(q);
    // resset(kon, nq, val);
    // setRee(1)
  };

  // ADDING TO FAVOURITES IF USER EXIXTS OR NOT

  const [loadcheckout, setLoadcheckout] = useState(false);

  const gotoCheckout = () => {
    setLoadcheckout(true);
    // console.log(localStorage.getItem("sizeValue"));
    // console.log(productImage)

    if (productImage.length < 1) {
      const productInfo = {
        productName: productDetails.productname,
        price: k,
        d: d,
        c: c,
        s: s,
        escrow: productDetails.escrow,
        sizeValue: localStorage.getItem("sizeValue"),
        colorValue: localStorage.getItem("colorValue"),
        deliveryValue: localStorage.getItem("deliveryValue"),
        q: q,
        description: productDetails.description,
        token: productDetails.token,
        expiry: productDetails.expected_delivery_days,
        p: p,
        tp: k_th,
        image:
          "https://dev.api.renitrust.com/logo/png/white_blue_background.png",
      };
    } else {
      const productInfo = {
        productName: productDetails.productname,
        price: k,
        d: d,
        c: c,
        s: s,
        escrow: productDetails.escrow,
        sizeValue: localStorage.getItem("sizeValue"),
        colorValue: localStorage.getItem("colorValue"),
        deliveryValue: localStorage.getItem("deliveryValue"),
        q: q,
        description: productDetails.description,
        token: productDetails.token,
        expiry: productDetails.expected_delivery_days,
        p: p,
        tp: k_th,
        image: productImage[0].imageurl,
      };
    }

    const productInfo = {
      productName: productDetails.productname,
      price: k,
      d: d,
      c: c,
      s: s,
      escrow: productDetails.escrow,
      sizeValue: localStorage.getItem("sizeValue"),
      colorValue: localStorage.getItem("colorValue"),
      deliveryValue: localStorage.getItem("deliveryValue"),
      q: q,
      description: productDetails.description,
      token: productDetails.token,
      expiry: productDetails.expected_delivery_days,
      p: p,
      tp: k_th,
      image: "https://dev.api.renitrust.com/logo/png/white_blue_background.png",
    };
    // console.log(productInfo);
    setLoadcheckout(true);

    localStorage.setItem("checkoutData", JSON.stringify(productInfo));
    setTimeout(4000);
    navigate(`/checkout/${token}`);
    setLoadcheckout(false);
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={productDetails.description} />
        <title>{` ${ptitle} on Reni.Store`}</title>
      </Helmet>

      <PulseLoader css={loaderCSS} color="#1559BD" loading={loading} />
      <TopNavbar />

      <div className="single-product-cont">
        <div className="top-image-content">
          <ToastContainer
            position="top-right"
            theme="dark"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          {loadingimg === true ? (
            <>
              <Carousel activeIndex={index} onSelect={handleSelect}>
                {productImage.map((productImage) => {
                  const { imageurl } = productImage;
                  return (
                    <Carousel.Item className="image-single-pro-cont">
                      <img src={imageurl} alt="" />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </>
          ) : (
            <>
              <div className="image-single-pro-cont2">
                <img src="../../Images/notavailable.png" alt="" />
              </div>
            </>
          )}

          <div className="left-pro-details">
            <h1>{productDetails.productname}</h1>
            <p className="store-name-p-efe">
              <div>
                {" "}
                <Link className="store-n-s" to={`/${productDetails.nickname}`}>
                  {productDetails.storename}
                </Link>
              </div>
            </p>
            <div className="escro-enabled-cont">
              {productDetails.escrow === "1" ? (
                <>
                  <div className="escrow-enabled">
                    <button>ESCROW ENABLED</button>
                  </div>
                </>
              ) : (
                <>
                  <div className="escrow-disabled">
                    <button>ESCROW DISABLED</button>
                  </div>
                </>
              )}
            </div>
            <h4 className="sing_pro_price">&#8358;{k_th} </h4>

            {/* {console.log(falseAdon)} */}

            <form
              className={falseAdon ? "reset-form-cont" : "no-display-form-efe"}
            >
              <div className="adon-whole-cont">
                <p className="customize-efe">Customize for me</p>
                <div className="part-1-size">
                  {adonState.size > 0 ? (
                    <>
                      <b>size - &#8358;{s}</b>

                      <div className="size-adon-cont">
                        {productAdons.map((productAdons) => {
                          const {
                            adon_type,
                            adon_value,
                            adon_price,
                            adon_price_th,
                          } = productAdons;
                          return (
                            <div className="size-adon">
                              {adon_type === "Size" ? (
                                <div className="each-size-adon">
                                  <label className="re-edit-efe">
                                    <input
                                      type="radio"
                                      id="Size"
                                      name="Size"
                                      value={`${adon_value} - ${adon_price}`}
                                      onClick={(e) =>
                                        updatek("size", adon_price, adon_value)
                                      }
                                    />
                                    <span>{adon_value}</span>
                                  </label>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="part-2-delivery">
                  {adonState.delivery > 0 ? (
                    <>
                      <b className="delivery_des_adon">Delivery</b>
                      <div>
                        <select
                          name="colors"
                          id="colors"
                          className="drop-adons"
                          onChange={(e) =>
                            updatek("delivery", e.target.value, "del")
                          }
                          // onChange={(e) => getDeliveryValue(e.target.value)}
                        >
                          <option value="0">
                            Choose your delivery option here{" "}
                          </option>
                          {productAdons.map((productAdons) => {
                            const { adon_type, adon_value, adon_price, id } =
                              productAdons;
                            return (
                              <>
                                {adon_type === "Delivery" ? (
                                  <>
                                    <option
                                      value={id}
                                      // value={id}
                                      // onClick={e=>updatek('delivery', adon_price)}
                                    >
                                      {adon_value} - &#8358; {adon_price}
                                    </option>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="part-3-color">
                  {adonState.color > 0 ? (
                    <>
                      <b className="delivery_des_adon">Color - &#8358;{c}</b>
                      <div className="size-adon-cont">
                        {productAdons.map((productAdons) => {
                          const { adon_type, adon_value, adon_price } =
                            productAdons;
                          return (
                            <div className="size-adon">
                              {adon_type === "Color" ? (
                                <div className="each-color-adon">
                                  <label
                                    className="re-edit-efe2"
                                    style={{
                                      backgroundColor: `${adon_value}`,
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      id="Color"
                                      name="Color"
                                      value={`${adon_value} - ${adon_price}`}
                                      onClick={(e) =>
                                        updatek("color", adon_price, adon_value)
                                      }
                                    />
                                    <span></span>
                                  </label>
                                </div>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>

                {/* QUANTITY */}



              </div>
              <input
                className="reset-btn-form"
                type="reset"
                value="Reset Price"
                onClick={(e) => reset()}
              />
            </form>
            <div className="mt-2 mb-3" style={{ marginLeft: "0.5rem" }}>
              <b className="mb-2">Quantity</b>
              <div className="quantity-whole-s-cont">
                <div className="increament-q">
                  <HiMinus
                    onClick={() => {
                      updateQuantityC(
                        "quantity",
                        localStorage.getItem("nq"),
                        "quantity"
                      );
                    }}
                  />
                </div>

                {/* <div
                      className="quantity-output"
                      color="secondary"
                      badgeContent={q}
                    >
                      {q}
                    </div> */}
                <input
                  className="quantity-style"
                  type="number"
                  value={localStorage.getItem("nq")}
                  onChange={(e) =>
                    updateQuantityA("quantity", e.target.value, "quantity")
                  }
                />

                <div className="decreament-q">
                  <HiPlus
                    onClick={() =>
                      updateQuantityB(
                        "quantity",
                        localStorage.getItem("nq"),
                        "quantity"
                      )
                    }
                  />
                </div>
              </div>
              <br />
            </div>
            <p className="des-pro-single">
              <b>Description: </b> <br />
              {/* {productDetails.description} */}
              <div
                dangerouslySetInnerHTML={{ __html: productDetails.description }}
              />
            </p>
            <div className="buy-fav-cont">
              {loggedIn ? (
                <>
                  {productDetails.usertoken === user.usertoken ? (
                    <>
                      {" "}
                      <button className="cant-buy-btn">
                        You Can't Buy your product{" "}
                      </button>
                    </>
                  ) : (
                    <>
                      {productDetails.quantity === "0" ? (
                        <>
                          <div className="sold-out-btn">SOLD OUT</div>
                        </>
                      ) : (
                        <>
                          {loggedIn ? (
                            <>
                              {loadcheckout ? (
                                <>
                                  <div
                                    className="buy"
                                    styles={{ cursor: "disabled" }}
                                  >
                                    {" "}
                                    Please Wait...
                                    <PuffLoader size={20} color="#fff" />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={(e) => gotoCheckout()}
                                    className="buy"
                                  >
                                    Buy product{" "}
                                  </button>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <Link to="" onClick={notify} className="buy">
                                Buy Product
                              </Link>
                            </>
                          )}

                          {loggedIn ? (
                            <>
                              {adding ? (
                                <>
                                  <div className="disabled">
                                    {" "}
                                    Adding...
                                    <PuffLoader size={20} color="#1559BD" />
                                  </div>
                                </>
                              ) : (
                                <>
                                  <button
                                    className="fav-product"
                                    onClick={(e) => getSaveFavourite()}
                                  >
                                    Add to favourites
                                  </button>
                                </>
                              )}
                            </>
                          ) : (
                            <>
                              <Link to="/Account" className="fav-product">
                                Add to favourite
                              </Link>
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  {productDetails.quantity === "0" ? (
                    <>
                      <div className="sold-out-btn">SOLD OUT</div>
                    </>
                  ) : (
                    <>
                      {loggedIn ? (
                        <>
                          {loadcheckout ? (
                            <>
                              <div
                                className="buy"
                                styles={{ cursor: "disabled" }}
                              >
                                {" "}
                                Please Wait...
                                <PuffLoader size={20} color="#fff" />
                              </div>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={(e) => gotoCheckout()}
                                className="buy"
                              >
                                Buy product{" "}
                              </button>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <Link to="" onClick={notify} className="buy">
                            Buy Product
                          </Link>
                        </>
                      )}

                      {loggedIn ? (
                        <>
                          {adding ? (
                            <>
                              <div className="disabled">
                                {" "}
                                Adding...
                                <PuffLoader size={20} color="#1559BD" />
                              </div>
                            </>
                          ) : (
                            <>
                              <button
                                className="fav-product"
                                onClick={(e) => getSaveFavourite()}
                              >
                                Add to favourites
                              </button>
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <Link to="/Account" className="fav-product">
                            Add to favourite
                          </Link>
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Reviews
        producttoken={revPtoken}
        totalRating={productDetails.totalRating}
      />

      <div className="similar-cont-pro-efe">
        <Similar_product
          keyword={productDetails.productname}
          keyword2={productDetails.description}
          producttoken={productDetails.token}
          // similarProduct={similarProduct}
        />
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default Single_product;
