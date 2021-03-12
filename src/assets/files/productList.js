import React,{Component} from 'react';
import SpecialContentCard from '../../components/SubContainers/specialCardProd.js'
import SpecialContentImg from '../../components/SubContainers/specialCardImage.js'

let prods = [
	
	{
		content:<SpecialContentCard title={"Product 1"}/>,
		image:<SpecialContentImg imgLink={"https://cdn.shopify.com/assets2/home/rebrand/start-en-small-1eaffd6893b4d7d133dd5c3d8c9c16fa591284df19cdc581e5671ec6a0e5bfa5.png"}/>
	},
	{
		content:<SpecialContentCard title={"Product 2"}/>,
		image:<SpecialContentImg imgLink={"https://cdn.shopify.com/assets2/home/rebrand/market-small-084eab2d72b510555838c446501d27dd7380585450efcaaa97453289b2b69c79.jpg"}/>
	},
	{
		content:<SpecialContentCard title={"Product 3"}/>,
		image:<SpecialContentImg imgLink={"https://cdn.shopify.com/assets2/home/rebrand/start-en-small-1eaffd6893b4d7d133dd5c3d8c9c16fa591284df19cdc581e5671ec6a0e5bfa5.png"}/>
	},
	

]

export default prods