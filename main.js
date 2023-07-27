document.write("To find even number:"+"<br>");
 var a=[1,2,3,4,6,7,8,10,12,13,14,16];
 document.write("a="+a+"<br>");
 var output=a.filter(function(e){
	 return e%2==0;
 })
 console.log(output);
 document.write("Even number:"+output+"<br><br>");
 
 document.write("To Uppercase:"+"<br>");
 var b=["mango","banana","apple","orange"];
 document.write(b+"<br>");
 var upper=b.map(function(e){
	 return e.toUpperCase();
 })
 console.log(upper);
 document.write("Uppercase:"+upper+"<br><br>");
 
 document.write("To Lowercase:"+"<br>");
 var c=["MANGO","BANANA","APPLE","ORANGE"];
 document.write(c+"<br>");
 var lower=c.map(function(e){
	 return e.toLowerCase();
 })
 console.log(lower);
 document.write("Lowercase:"+lower+"<br><br>");
 

 var d=[{id:1,name:"apple",price:"100"},
		 {id:2,name:"mango",price:"80"},
		{id:3,name:"orange",price:"70"},
		{id:3,name:"pineapple",price:"50"},
		{id:3,name:"grapes",price:"60"}]
		
 		
		var f=d.filter(function(e){
			return e.name=="apple";
		})
		console.log(f);
		
		
		
		var change=d.map(function(e){
			return e.price=80;
			
			
		})
		console.log(change);
		document.write("the price amount change "+change);
 
 
 
 
	
	
