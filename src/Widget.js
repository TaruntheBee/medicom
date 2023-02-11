import React from 'react'
import '/.Widgets.css'
import { FiberManualRecord, InfoIcon } from '@mui/icons-material'

function Widget() {

    const newsArticle={heading,subtitle} =>(
        <div className="widgets_articleLeft">
         <FiberManualRecord/>
        <div className="widgets_articleRight">
            <h4>(heading)</h4>
            <p>(subtitle)</p>
        </div>
        </div>
    );
  return (
    <div className="widgets">
    <div className="widgets_hunter">
        <h2>Medicom News</h2>
        <InfoIcon/>
    </div>

    {newsArticle("Medical Colllege admits 100 MBBS Student despite stay","Top news-990k readers")}
    {newsArticle("Demand for NEET PG postponement","Top news-675k readers")}
    {newsArticle("Fluoride exposure via drinking water causes hypothyroidism","Top news-786k readers")}
    {newsArticle("Regular coffee consumption lower downs blood consumption","Top news-560k readers")}
    {newsArticle("Govt. to open more hospitals in UttarPradesh","Top news-256k readers")}
    </div>


  );
}

export default Widget
