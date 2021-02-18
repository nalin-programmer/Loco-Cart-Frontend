import React, {useCallback} from "react";
import "./Homescreen.scss";
import { Media } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import "../Category/SubCategory/subcategory.scss";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FaWindowClose } from "react-icons/fa";

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    background: "#000",
    border: '2px solid #fff',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CategoryBar = () => {
  const history = useHistory();
  const handleOnClick1 = useCallback(() => history.push('/category'), [history]);
  const handleOnClick2 = useCallback(() => history.push('/category/Stationery'), [history]);
  const handleOnClick3 = useCallback(() => history.push('/category/Grocery'), [history]);
  const handleOnClick4 = useCallback(() => history.push('/category/Electronics'), [history]);
  const handleOnClick5 = useCallback(() => history.push('/category/Footwear'), [history]);
  const handleOnClick6 = useCallback(() => history.push('/category/Sports'), [history]);
  const handleOnClick7 = useCallback(() => history.push('/category/Books'), [history]);
  return (
    <>
      {" "}
      <div  style={{height: "150px", display: "flex" , background: "#fff", marginBottom: "10px", overflowX: "scroll", color: "#3f51b5"}}>
          <div onClick={handleOnClick1} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob3BwaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>All Categories</b>
          </div>
          <div onClick={handleOnClick2} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://5.imimg.com/data5/LJ/RP/MY-4878239/stationery-500x500.png" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Stationery</b>
          </div>
          <div onClick={handleOnClick3} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIiQmWJAdGBHSPQJL-IdHhWYrMwUbSvIqTOQ&usqp=CAU" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Groceries</b>
          </div>
          <div onClick={handleOnClick4} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgKefNtESG11OmRK1-xQhYHlO9JLtJTC5Mcg&usqp=CAU" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Electronics</b>
          </div>
          <div onClick={handleOnClick5} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK8uPxPdCyNRld3q0v4v0AkZYge0fADARDb3otD3Uxl5jXCSu_PGKNhAoFfwa71C_3Rw9K6_Y&usqp=CAc" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Footwear</b>
          </div>
          <div onClick={handleOnClick6} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnxvR9_DlyUe2NilNqYtkG6w6LECXWajbVg&usqp=CAU" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Sports</b>
          </div>
          <div onClick={handleOnClick7} style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULdhvxYHLSDEpEV18oJadwRShXgT2cRorPA&usqp=CAU" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Books</b>
          </div>
          <div style={{marginLeft : "5%", marginTop: "2%", textAlign: "center", cursor: "pointer"}}>
            <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style={{width:"100px", height:"80px"}}/>
            <br/>
            <b>Download Our App</b>
          </div>
      </div>
    </>
  );
};

const Corousal = () => {
  return (
    <>
      {" "}
      <div>
      <section class="carousel" aria-label="Gallery">
        <ol class="carousel__viewport">
          <li id="carousel__slide1"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper">
              <a href="#carousel__slide4"
                class="carousel__prev">Go to last slide</a>
              <a href="#carousel__slide2" class="carousel__next">Go to next slide</a>
            </div>
          </li>
          <li id="carousel__slide2"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide1"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide3"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide3"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide2"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide4"
              class="carousel__next">Go to next slide</a>
          </li>
          <li id="carousel__slide4"
              tabindex="0"
              class="carousel__slide">
            <div class="carousel__snapper"></div>
            <a href="#carousel__slide3"
              class="carousel__prev">Go to previous slide</a>
            <a href="#carousel__slide1"
              class="carousel__next">Go to first slide</a>
          </li>
        </ol>
        <aside class="carousel__navigation">
          <ol class="carousel__navigation-list">
            <li class="carousel__navigation-item">
              <a href="#carousel__slide1"
                class="carousel__navigation-button">Go to slide 1</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide2"
                class="carousel__navigation-button">Go to slide 2</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide3"
                class="carousel__navigation-button">Go to slide 3</a>
            </li>
            <li class="carousel__navigation-item">
              <a href="#carousel__slide4"
                class="carousel__navigation-button">Go to slide 4</a>
            </li>
          </ol>
        </aside>
      </section>
      </div>
    </>
  );
};

function MediaCard(props) {
  const [id, setid] = React.useState(props._id);
  const [miniPrice, setminiPrice] = React.useState(100000000);
  const [discription, setdiscription] = React.useState("Product");
  const [image, setimage] = React.useState("HII");
  for (var key in props.Sellers) {
    var obj = props.Sellers[key];
    if (parseInt(miniPrice, 10) > parseInt(obj.SellerPrice, 10)) {
      setminiPrice(obj.SellerPrice);
      setdiscription(obj.Description);
      setimage(obj.Image);
    }
  }

  return (
    <>
      {
        <div
          class="box-wrapper"
          style={{ margin: "10px", transform: "translate(0, 0%)" }}
        >
          <a href={"/product/" + id}>
            <img
              src={image}
              alt="rhcp"
              style={{ cursor: "pointer" }}
              width="450px"
              height="200px"
            />
          </a>
          <div class="box-content">
            <a class="buy">
              <span>
                <img
                  style={{
                    marginTop: "10px",
                    cursor: "pointer",
                    height: "50px",
                    width: "50px",
                  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                />
              </span>
            </a>
            <div class="title">{props.Name}</div>
            <div class="desc">
              <b>{props.Category}</b> :{" "}
              {discription.length > 20
                ? discription.substring(0, 17) + "..."
                : discription}
            </div>
            <span class="price">₹ {miniPrice}</span>
            <div class="ssfooter">
              <ul>
                <li class="fa fa-star">
                  <img
                    src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                    style={{ height: "2rem" }}
                  />
                </li>
                <li class="fa fa-star">
                  <img
                    src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                    style={{ height: "2rem" }}
                  />
                </li>
                <li class="fa fa-star">
                  <img
                    src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                    style={{ height: "2rem" }}
                  />
                </li>
                <li class="fa fa-star">
                  <img
                    src="https://img.icons8.com/emoji/48/000000/star-emoji.png"
                    style={{ height: "2rem" }}
                  />
                </li>
                <li class="fa fa-star-o">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/star-half-empty.png"
                    style={{ height: "2rem" }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div class="success"></div>
          <Button
            variant="contained"
            color="primary"
            className="addtocart"
            disableElevation
            style={{ height: "40px", width: "90%", marginBottom: "8px" }}
          >
            <p style={{ fontSize: "1.2rem" }}>🛒 Add to Cart 🛒</p>
          </Button>
        </div>
      }
    </>
  );
}

export default function HomeScreen() {

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ right: 0, top: 0, margin: "20px", position: "fixed" ,color: "#fff"}}>
          <FaWindowClose onClick={handleClose} />
        </div>
        <br />
      <div style={{width: "100%", textAlign: "center", transform: "translate3d(0%,10%,20px)",color:"#fff"}}> 
      <h2 id="simple-modal-title"><b>🔥 𝓛𝓞𝓒𝓞-𝓒𝓐𝓡𝓣 🔥</b></h2>
      <p id="simple-modal-description">
      <b>𝐖𝐄𝐋𝐂𝐎𝐌𝐄𝐒 𝐘𝐎𝐔</b>
      </p>
      <a class="pre-order-btn" href="#" onClick={handleClose}><b>🔥 WE CONNECT LOCALLY 🔥</b></a>
      </div> 
    </div>
  );
  

  const [Products, setProducts] = React.useState([]);
  const address = "http://localhost:3001/api/product/allproducts";
  React.useEffect(() => {
    Axios.post(address).then((result) => {
      console.log(result);
      setProducts(result.data.products);
    });
  }, []);

  return (
    <>
      <CategoryBar />
      <Corousal />

      <div style={{ marginTop : "1%", marginBottom: "1%" , textAlign : "center"}}>
          <button class="learn-more" style={{   textAlign: "center" }}>
        <h3>  ❤️‍🔥 Our Top Picks For You ❤️‍🔥 </h3>
          </button>
      </div>

      <div style={{ margin: "auto", width: "90%" }}>
        {Products.slice(0, 20).map((item) => {
          return (
            <>
              <MediaCard {...item} />
            </>
          );
        })}
      </div>


      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>

    </>
  );
}
