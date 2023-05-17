import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const MenuCard = ({ menuData }) => {
  //   console.log(menuData);

  return (
    <>
    
    <section>
            <div className='today_best'>
            <div className='today'>
                <p>Inspiration for your first order</p>

                <div className="today-order">


                    <div className="saurabh">
                    <img src="/images/2.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    <div className="saurabh">
                    <img src="/images/3.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    
                    <div className="saurabh">
                    <img src="/images/2.jpg" className="best"/>
                     <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    
                    <div className="saurabh">
                    <img src="/images/7.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    
                    <div className="saurabh">
                    <img src="/images/2q.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    <div className="saurabh">
                    <img src="/images/7.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    <div className="saurabh">
                    <img src="/images/2.jpg" className="best"/>
                    <NavLink to="/OrderNow"  exact>
                    pizza
                  </NavLink>
                    </div>

                    
               
                </div>
                
            </div>
            </div>
        </section>
        <hr></hr>

      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image,price, description } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    {/* <span className="card-number card-circle subtle">{id}</span> */}
                    <span className="card-author subtle"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    {/* <span className="card-description subtle">
                      {description}
                    </span> */}


                    {/* <div className="card-read">Read</div> */}
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <NavLink to="/OrderNow"  className="card-tag  subtle" exact>
                    OrderNow
                  </NavLink>
                  <div className="price">Price={price}</div>

                  
                </div>
              </div>
            </>
            
          );
        })}
       
      </section>
    </>
  );
};

export default MenuCard;
