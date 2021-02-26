import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import Banner from '../Banner/Banner';
import Menu from '../Menu/Menu';
import './Home.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import More from '../More/More';
import Footer from '../Footer/Footer';

const Home = (props) => {
    const {foods,addToCart}=props

    const [value, setValue] = useState(1);
    const handleChange = (event,newValue) => {
      setValue(newValue);
    };
    
    const [clickedCategory,setClickedCategory]=useState("lunch")
    

    
    return (
        <div>
            <Banner></Banner>
        <section className="homeArea" >
          <Paper className="tabs">
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        // textColor="primary"
                        onChange={handleChange}
                    >
                        <Tab label="BREAKFAST" className="tabText" onClick={()=>setClickedCategory("breakfast")}/>
                        <Tab label="LUNCH" className="tabText" onClick={()=>setClickedCategory("lunch")} />
                        <Tab label="DINNER" className="tabText" onClick={()=>setClickedCategory("dinner")}/>
                    </Tabs>
              </Paper>
           <div className="cardArea">      
               {
                   foods.map(fd=>fd.category===clickedCategory&&<Menu
                    key={fd.id}
                    food={fd}
                    addToCart={addToCart}></Menu>)
               }
            </div>
        </section>
               <More></More>
               <Footer></Footer>
        </div>
    );
};

const mapStateToProps=state=>{
    return{
        foods:state.foods
    }
}

export default connect(mapStateToProps)(Home);
